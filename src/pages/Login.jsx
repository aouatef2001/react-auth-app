import { useReducer } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const initialState = { email: '', password: '' }

function formReducer(state, action) {
  if (action.type === 'UPDATE_FIELD') {
    return { ...state, [action.field]: action.value }
  }
  return state
}

export default function Login() {
  const [state, dispatch] = useReducer(formReducer, initialState)
  const { login } = useUser()
  const navigate = useNavigate()

  function handleChange(e) {
    dispatch({ type: 'UPDATE_FIELD', field: e.target.name, value: e.target.value })
  }

  function handleClick() {
    if (state.email === 'aouateftaouali@gmail.com' && state.password === 'taouali') {
      login({ name: 'Aouatef', email: state.email })
      navigate('/dashboard')
    } else {
      alert('Email ou mot de passe incorrect')
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f0f8ff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '20px',
        padding: '2.5rem',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 8px 32px rgba(135, 206, 235, 0.4)',
        border: '1px solid #e0f4ff',
      }}>

        {/* Icon */}
        <div style={{
          width: '56px',
          height: '56px',
          background: '#e0f4ff',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.6rem',
          marginBottom: '1.2rem',
        }}>
          🔐
        </div>

        <h1 style={{
          color: '#1a1a2e',
          fontSize: '1.7rem',
          fontWeight: '700',
          marginBottom: '0.3rem',
        }}>
          Connexion
        </h1>
        <p style={{
          color: '#888',
          fontSize: '0.9rem',
          marginBottom: '2rem',
        }}>
          Bienvenue ! Entrez vos identifiants.
        </p>

        {/* Email */}
        <div style={{ marginBottom: '1.2rem' }}>
          <label style={{
            display: 'block',
            color: '#555',
            fontSize: '0.85rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
          }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="votre@example.com"
            style={{
              width: '100%',
              background: '#f7fbff',
              border: '1px solid #c9e8f8',
              borderRadius: '10px',
              padding: '0.8rem 1rem',
              color: '#1a1a2e',
              fontSize: '0.95rem',
              outline: 'none',
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: '1.2rem' }}>
          <label style={{
            display: 'block',
            color: '#555',
            fontSize: '0.85rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
          }}>
            Mot de passe
          </label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder="••••••••"
            style={{
              width: '100%',
              background: '#f7fbff',
              border: '1px solid #c9e8f8',
              borderRadius: '10px',
              padding: '0.8rem 1rem',
              color: '#1a1a2e',
              fontSize: '0.95rem',
              outline: 'none',
            }}
          />
        </div>

        {/* Button */}
        <button
          onClick={handleClick}
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
            marginTop: '0.5rem',
            boxShadow: '0 4px 15px rgba(135,206,235,0.5)',
          }}
        >
          Se connecter
        </button>

        <p style={{
          marginTop: '1.5rem',
          textAlign: 'center',
          color: '#888',
          fontSize: '0.88rem',
        }}>
          Pas encore de compte ?{' '}
          <Link to="/inscription" style={{
            color: '#5bb8d4',
            fontWeight: '700',
            textDecoration: 'none',
          }}>
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  )
}