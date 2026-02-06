from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.rotas import router
import uvicorn
import os

app = FastAPI()

# Configuração de CORS
# Isso permite que o seu site na Vercel converse com esse Backend
origins = ["*"] 

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inclui as rotas da IA
app.include_router(router)

# Rota simples só para testar se está no ar
@app.get("/")
def read_root():
    return {"status": "A Vó está online e pronta para cozinhar! 👵✨"}

if __name__ == "__main__":
    # Pega a porta que o Render mandar ou usa a 8000
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)