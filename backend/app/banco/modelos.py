from sqlalchemy import Column, Integer, String, Text
from app.banco.config import Base

class Receita(Base):
    __tablename__ = "receitas"

    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String, index=True) 
    ingredientes = Column(Text)         
    texto_completo = Column(Text)      