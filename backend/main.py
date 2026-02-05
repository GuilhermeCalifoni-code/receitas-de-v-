from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.rotas import router
import uvicorn
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
import os

app = FastAPI()

# 1. Configura a pasta de assets (CSS, JS do React)
# Certifique-se que o caminho ../frontend/dist/assets existe
app.mount("/assets", StaticFiles(directory="../frontend/dist/assets"), name="assets")

# Configuração de CORS
origins = ["*"] # Liberado para funcionar no ngrok e localhost

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/", response_class=HTMLResponse)
async def read_root():
    caminho_index = os.path.join("..", "frontend", "dist", "index.html")
    with open(caminho_index, "r", encoding="utf-8") as f:
        return f.read()

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)