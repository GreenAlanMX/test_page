import React, { useState } from 'react'
import assents from '../assets/assents'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

// import { Description, products, prices_const } from '../constants/textConstants'

// Constantes temporales (reemplaza con tus imports)
const Description = {
  text: "Lorem ipsum text copy paste lets you instantly create dummy text, including full text, a paragraph, and the classic dolor sit amet line, online available for quick use."
}

const products = {
  text: "Lorem ipsum text copy paste lets you instantly create dummy text, including full text, a paragraph, and the classic dolor sit amet line, online available for quick use."
}

const prices_const = {
  text: "Lorem ipsum text copy paste lets you instantly create dummy text, including full text, a paragraph, and the classic dolor sit amet line, online available for quick use."
}

const Header = () => {
  // Estado para manejar qué sección está expandida
  const [expandedSection, setExpandedSection] = useState(null)

  // Función para alternar secciones
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative'
      style={{ backgroundImage: `url(${assents.white_bg})` }} 
      id='Header'
    >
      <Navbar />
      
      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 bg-white bg-opacity-40"></div>
      
      {/* Contenido principal en grid */}
      <div className="relative z-20 container mx-auto px-6 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Columna izquierda - Contenido */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            
            {/* Título con texto justificado y espaciado como en la imagen */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight text-justify"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              La plataforma CRM diseñada para pequeñas empresas
            </motion.h1>

            {/* Botones principales con espaciado */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <a 
                href="#crm-gratuito" 
                className="bg-white border-2 border-orange-400 text-gray-900 px-6 py-3 rounded font-semibold hover:bg-orange-200 transition-colors inline-block text-center"
              >
                Obtén el CRM para pymes gratuito
              </a>
              <a 
                href="#demo" 
                className="bg-orange-600 text-white px-6 py-3 rounded font-semibold hover:bg-orange-700 transition-colors inline-block text-center"
              >
                Solicitar demo
              </a>
            </motion.div>

            {/* Secciones expandibles con funcionalidad */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              
              {/* Descripción */}
              <motion.div 
                className="border border-gray-400 pb-3 rounded-lg bg-white/20 backdrop-blur"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <button 
                  onClick={() => toggleSection('descripcion')}
                  className="flex items-center justify-between w-full text-left py-2 px-3 hover:px-4 transition-all rounded"
                >
                  <span className="text-lg font-medium text-black">Descripción</span>
                  <motion.span 
                    className="text-3xl text-orange-600 transition-transform duration-200"
                    animate={{ rotate: expandedSection === 'descripcion' ? 45 : 0 }}
                  >
                    +
                  </motion.span>
                </button>
                
                {/* Contenido expandible */}
                {expandedSection === 'descripcion' && (
                  <motion.div 
                    className="px-3 pb-3 pt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-800 leading-relaxed">
                      {Description.text}
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Productos */}
              <motion.div 
                className="border border-gray-400 pb-3 rounded-lg bg-white/20 backdrop-blur"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <button 
                  onClick={() => toggleSection('productos')}
                  className="flex items-center justify-between w-full text-left py-2 px-3 hover:px-4 transition-all rounded"
                >
                  <span className="text-lg font-medium text-black">Productos</span>
                  <motion.span 
                    className="text-3xl text-orange-600 transition-transform duration-200"
                    animate={{ rotate: expandedSection === 'productos' ? 45 : 0 }}
                  >
                    +
                  </motion.span>
                </button>
                
                {/* Contenido expandible */}
                {expandedSection === 'productos' && (
                  <motion.div 
                    className="px-3 pb-3 pt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-800 leading-relaxed">
                      {products.text}
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Precios y paquetes */}
              <motion.div 
                className="border border-gray-400 pb-3 rounded-lg bg-white/20 backdrop-blur"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.7 }}
              >
                <button 
                  onClick={() => toggleSection('precios')}
                  className="flex items-center justify-between w-full text-left py-2 px-3 hover:px-4 transition-all rounded"
                >
                  <span className="text-lg font-medium text-black">Precios y paquetes</span>
                  <motion.span 
                    className="text-3xl text-orange-600 transition-transform duration-200"
                    animate={{ rotate: expandedSection === 'precios' ? 45 : 0 }}
                  >
                    +
                  </motion.span>
                </button>
                
                {/* Contenido expandible */}
                {expandedSection === 'precios' && (
                  <motion.div 
                    className="px-3 pb-3 pt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-800 leading-relaxed">
                      {prices_const.text}
                    </p>
                  </motion.div>
                )}
              </motion.div>

            </motion.div>
          </motion.div>

          {/* Columna derecha - Imagen SVG */}
          <motion.div 
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            <img 
              src={assents.background} 
              alt="CRM Dashboard Illustration"
              className="w-full max-w-lg h-auto"
            />
          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}

export default Header