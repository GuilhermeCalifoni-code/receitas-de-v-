import google.generativeai as genai
import os
import json
import random
from dotenv import load_dotenv

load_dotenv()

CHAVE_API = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=CHAVE_API)
model = genai.GenerativeModel('gemini-flash-latest')

def inventar_com_ingredientes(lista_ingredientes, nome_usuario="Netinho"):
    ingredientes_texto = ", ".join(lista_ingredientes)
    
    personalidades = [
        "Vó Mineira (uai, comida caseira)",
        "Nonna Italiana (massas, dramática)",
        "Vó Moderna (prática, rápida)",
        "Vó da Roça (fogão a lenha, rústica)"
    ]
    vo_da_vez = random.choice(personalidades)

    prompt = f"""
    Aja como uma {vo_da_vez}.
    
    O nome do meu neto(a) é {nome_usuario}.
    Eu tenho estes ingredientes: {ingredientes_texto}.
    
    Crie uma receita criativa.
    
    IMPORTANTE SOBRE A FORMATAÇÃO:
    1. O título da receita DEVE incluir o nome "{nome_usuario}" (ex: "Macarrão Especial do {nome_usuario}").
    2. Responda APENAS um JSON válido.
    3. PROIBIDO USAR TAGS HTML (como <ul>, <li>, <b>, <br>).
    4. Nas listas (ingredientes/passos), use apenas quebra de linha ou hífens (-).
    
    O JSON deve ter EXATAMENTE estas chaves:
    {{
        "titulo": "Nome da receita (com o nome {nome_usuario})",
        "ingredientes": "Lista formatada com hífens (SEM HTML)",
        "modo_preparo": "Passo a passo (SEM HTML)",
        "tempo_preparo": "Ex: 40 min",
        "custo_estimado": "Baixo/Médio/Alto",
        "porcoes": "Ex: 2 pessoas",
        "utensilios": "Lista de itens",
        "ocasiao": "Dica de quando comer"
    }}
    """
    
    try:
        response = model.generate_content(prompt)
        texto_limpo = response.text.replace("```json", "").replace("```", "").strip()
        return json.loads(texto_limpo)
        
    except Exception as e:
        print(f"Erro: {e}")
        return {
            "titulo": "Receita de Emergência da Vó",
            "ingredientes": "Algo deu errado na cozinha...",
            "modo_preparo": "Tente pedir novamente.",
            "tempo_preparo": "-",
            "custo_estimado": "-",
            "porcoes": "-",
            "utensilios": "-",
            "ocasiao": "Erro"
        }