import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export default function Dashboard() {
  const { user, logout } = useUser()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f0f8ff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '20px',
        padding: '2.5rem',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 8px 32px rgba(135, 206, 235, 0.4)',
        border: '1px solid #e0f4ff',
        textAlign: 'center',
      }}>

        <div style={{
          width: '64px',
          height: '64px',
          background: '#87ceeb',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.8rem',
          margin: '0 auto 1.5rem',
        }}>
          👋
        </div>

        <h1 style={{
          fontSize: '1.7rem',
          fontWeight: '700',
          color: '#1a1a2e',
          marginBottom: '0.5rem',
        }}>
          Bienvenue, {user?.name} !
        </h1>

        <p style={{
          color: '#888',
          fontSize: '0.95rem',
          marginBottom: '2rem',
        }}>
          Vous êtes connecté avec succès.
        </p>

        <div style={{
          background: '#f7fbff',
          border: '1px solid #c9e8f8',
          borderRadius: '12px',
          padding: '1.2rem',
          marginBottom: '2rem',
          textAlign: 'left',
        }}>
          <div style={{ marginBottom: '0.8rem' }}>
            <span style={{ color: '#888', fontSize: '0.82rem' }}>Nom</span>
            <p style={{ color: '#1a1a2e', fontWeight: '600' }}>{user?.name}</p>
          </div>
          <div>
            <span style={{ color: '#888', fontSize: '0.82rem' }}>Email</span>
            <p style={{ color: '#1a1a2e', fontWeight: '600' }}>{user?.email}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          style={{
            width: '100%',
            padding: '0.85rem',
            background: '#87ceeb',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            fontSize: '1rem',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(135,206,235,0.5)',
          }}
        >
          Se déconnecter
        </button>
      </div>
    </div>
  )
}