import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export default function Inscription() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  const { login } = useUser()
  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleClick() {
    console.log("Données d'inscription :", formData)
    login({ name: formData.fullName, email: formData.email })
    navigate('/dashboard')
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
          👤
        </div>

        <h1 style={{
          color: '#1a1a2e',
          fontSize: '1.7rem',
          fontWeight: '700',
          marginBottom: '0.3rem',
        }}>
          Créer un compte
        </h1>
        <p style={{
          color: '#888',
          fontSize: '0.9rem',
          marginBottom: '2rem',
        }}>
          Rejoignez-nous en quelques secondes !
        </p>

        {/* Nom complet */}
        <div style={{ marginBottom: '1.2rem' }}>
          <label style={{
            display: 'block',
            color: '#555',
            fontSize: '0.85rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
          }}>
            Nom complet
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Votre nom complet"
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
            value={formData.email}
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

        {/* Mot de passe */}
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
            value={formData.password}
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
          Créer mon compte
        </button>

        <p style={{
          marginTop: '1.5rem',
          textAlign: 'center',
          color: '#888',
          fontSize: '0.88rem',
        }}>
          Déjà un compte ?{' '}
          <Link to="/login" style={{
            color: '#5bb8d4',
            fontWeight: '700',
            textDecoration: 'none',
          }}>
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  )
}