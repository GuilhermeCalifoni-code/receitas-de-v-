from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Optional
from app.core.ia_chef import inventar_com_ingredientes
from app.banco.repositorio import salvar_receita

router = APIRouter()

class PedidoReceita(BaseModel):
    ingredientes: List[str]
    nome_usuario: Optional[str] = "Netinho" 

@router.post("/cozinhar/surpresa")
def cozinhar_com_o_que_tem(pedido: PedidoReceita):
    receita_json = inventar_com_ingredientes(pedido.ingredientes, pedido.nome_usuario)
    
    try:
        salvar_receita(receita_json)
    except Exception as e:
        print(f"Erro ao salvar: {e}")
        
    return receita_json