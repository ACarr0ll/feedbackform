import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores animi, officia, doloremque soluta aliquam, adipisci enim quasi dolorem veniam atque? Facere temporibus autem nisi?</p>
            <p>Version: 1.0.0</p>

            <p>
                <Link to="/">Back to home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage