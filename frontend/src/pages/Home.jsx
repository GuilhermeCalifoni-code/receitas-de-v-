import { useState } from 'react';
import api from '../services/api';

function Home() {
  const [ingredientes, setIngredientes] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [receita, setReceita] = useState(null);
  const [carregando, setCarregando] = useState(false);

  async function pedirReceita() {
    if (!ingredientes) return alert("Ei! A panela está vazia! Digite os ingredientes. 🥕");
    
    setCarregando(true);
    setReceita(null);
    
    try {
      const lista = ingredientes.split(',').map(item => item.trim());
      
      const payload = { 
        ingredientes: lista,
        nome_usuario: nomeUsuario || "Netinho"
      };
      
      const resposta = await api.post('/cozinhar/surpresa', payload);
      setReceita(resposta.data);
      
    } catch (erro) {
      console.error(erro);
      alert("A Vó foi tirar uma sesta... Tente daqui a pouco! 😴");
    } finally {
      setCarregando(false);
    }
  }

  const theme = {
    primary: '#FF6B6B',
    secondary: '#FFD93D',
    accent: '#4D96FF',
    background: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)',
    text: '#2D3436',
    white: '#FFFFFF',
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: theme.background,
      fontFamily: '"Nunito", sans-serif',
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    contentWrapper: {
      width: '100%',
      maxWidth: '800px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    heroSection: {
      textAlign: 'center',
      marginBottom: '40px',
      width: '100%',
    },
    emoji: { fontSize: '4rem', marginBottom: '10px', display: 'block' },
    title: { 
      fontSize: '3rem', 
      fontWeight: '900', 
      color: theme.white, 
      textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
      margin: 0,
      lineHeight: '1.2'
    },
    subtitle: { 
      color: '#FFF', 
      fontSize: '1.2rem', 
      fontWeight: '600', 
      marginTop: '10px',
      opacity: 0.9 
    },

    formContainer: {
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '20px',
      borderRadius: '30px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '600px',
      marginBottom: '50px',
    },
    input: {
      border: '2px solid #EEE',
      background: 'white',
      padding: '15px 20px',
      fontSize: '1rem',
      borderRadius: '15px',
      fontFamily: 'inherit',
      outline: 'none',
      color: theme.text,
      transition: 'border 0.3s',
    },
    button: {
      backgroundColor: theme.primary,
      color: 'white',
      border: 'none',
      borderRadius: '15px',
      padding: '15px 30px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
      marginTop: '5px'
    },

    card: {
      background: 'white',
      borderRadius: '24px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
      width: '100%',
      overflow: 'hidden',
      animation: 'fadeIn 0.5s ease-out',
      position: 'relative',
    },
    cardHeader: {
      background: theme.secondary,
      padding: '40px 30px',
      textAlign: 'center',
      borderBottom: '4px solid #FBC02D',
    },
    recipeTitle: { 
      margin: 0, 
      color: '#4E342E', 
      fontSize: '2rem', 
      fontWeight: '800',
      lineHeight: '1.3'
    },
    
    statsBar: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginTop: '25px',
      flexWrap: 'wrap',
      padding: '0 20px',
    },
    statPill: {
      background: '#F5F5F5',
      padding: '10px 20px',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '700',
      color: '#555',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      border: '1px solid #E0E0E0'
    },

    content: { padding: '30px 30px 50px' },
    sectionHeader: {
      fontSize: '1.3rem',
      color: theme.primary,
      fontWeight: '800',
      marginBottom: '15px',
      marginTop: '30px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    text: {
      lineHeight: '1.8',
      color: '#444',
      fontSize: '1.1rem',
      whiteSpace: 'pre-wrap',
    },
    ingredientBox: {
        background: '#FFF8E1',
        padding: '25px',
        borderRadius: '12px',
        borderLeft: `4px solid ${theme.secondary}`
    },
    tipContainer: {
      marginTop: '40px',
      background: '#E3F2FD',
      padding: '25px',
      borderRadius: '16px',
      borderLeft: `5px solid ${theme.accent}`,
    },
    footer: {
      marginTop: '50px',
      color: 'white',
      fontSize: '0.9rem',
      fontWeight: '600',
      opacity: 0.8,
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`}</style>

        <div style={styles.heroSection}>
          <span style={styles.emoji}>👵✨</span>
          <h1 style={styles.title}>Receitas de Vó</h1>
          <p style={styles.subtitle}>Sua cozinha, mas com carinho de Vó.</p>
        </div>
        
        <div style={styles.formContainer}>
          <input 
            type="text" 
            placeholder="Qual é o seu nome?" 
            value={nomeUsuario}
            onChange={(e) => setNomeUsuario(e.target.value)}
            style={styles.input}
          />
          
          <input 
            type="text" 
            placeholder="O que tem na geladeira? (ex: frango, batata)" 
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            style={styles.input}
            onKeyPress={(e) => e.key === 'Enter' && pedirReceita()}
          />
          
          <button 
            onClick={pedirReceita} 
            disabled={carregando} 
            style={{...styles.button, opacity: carregando ? 0.7 : 1}}
          >
            {carregando ? "Pensando..." : "Inventar Receita 🍳"}
          </button>
        </div>

        {receita && (
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.recipeTitle}>{receita.titulo}</h2>
            </div>

            <div style={styles.statsBar}>
              <div style={styles.statPill}>⏱️ {receita.tempo_preparo}</div>
              <div style={styles.statPill}>💰 {receita.custo_estimado}</div>
              <div style={styles.statPill}>🍽️ {receita.porcoes}</div>
            </div>

            <div style={styles.content}>
              <h3 style={styles.sectionHeader}>🛒 Ingredientes</h3>
              <div style={{...styles.text, ...styles.ingredientBox}}>
                {receita.ingredientes}
              </div>

              <h3 style={styles.sectionHeader}>🥄 Utensílios</h3>
              <div style={styles.text}>{receita.utensilios}</div>

              <h3 style={styles.sectionHeader}>🔥 Modo de Preparo</h3>
              <div style={styles.text}>{receita.modo_preparo}</div>

              {(receita.ocasiao || receita.dica_extra) && (
              <div style={styles.tipContainer}>
                <strong style={{color: '#1565C0', display:'block', marginBottom:'5px'}}>
                  💡 Dica da Vó:
                </strong> 
                {receita.dica_extra || receita.ocasiao}
              </div>
              )}
            </div>
          </div>
        )}

        <footer style={styles.footer}>
          Feito com ❤️ por Netinho - Inspirado nas melhores receitas de Vó!
        </footer>
      </div>
    </div>
  );
}

export default Home;