from app.banco.cliente import supabase

def salvar_receita(dados_receita: dict):
    """
    Recebe um dicionário com a receita e salva no Supabase.
    """
    resposta = supabase.table("receitas").insert(dados_receita).execute()
    
    return resposta