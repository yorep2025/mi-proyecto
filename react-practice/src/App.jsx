import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const [submitted, setSubmitted] = useState(false);
  const [items, setItems] = useState(["Elemento 1", "Elemento 2", "Elemento 3"]);
  const [newItem, setNewItem] = useState("");
  const [registrations, setRegistrations] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email.includes("@") || isNaN(formData.age)) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }
    setRegistrations([...registrations, formData]);
    setSubmitted(true);
    setFormData({ name: "", email: "", age: "" });
  };

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded shadow">
      <img 
        src="/logo.png" 
        alt="TecNM" 
        className="w-full h-auto mb-4 rounded"
      />
      <h1 className="text-xl font-bold">Práctica de React</h1>
      <p className="text-gray-700">Ejemplo con listas, formularios y eventos.</p>

      <h2 className="mt-4 font-semibold">Lista de elementos</h2>
      <ul className="list-disc pl-5">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Añadir elemento"
        className="border p-1 mt-2"
      />
      <button onClick={handleAddItem} className="ml-2 bg-blue-500 text-white p-1 rounded">
        Agregar
      </button>

      <h2 className="mt-4 font-semibold">Formulario de Registro</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          className="border p-1"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
          className="border p-1"
        />
        <input
          type="text"
          name="age"
          placeholder="Edad"
          value={formData.age}
          onChange={handleChange}
          className="border p-1"
        />
        <button type="submit" className="bg-green-500 text-white p-1 rounded">Enviar</button>
      </form>

      {submitted && registrations.length > 0 && (
        <div className="mt-4">
          <h2 className="mt-2 font-semibold">Datos Registrados</h2>
          <table className="border-collapse border border-gray-400 w-full mt-2">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-1">Nombre</th>
                <th className="border border-gray-400 p-1">Correo</th>
                <th className="border border-gray-400 p-1">Edad</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((entry, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 p-1">{entry.name}</td>
                  <td className="border border-gray-400 p-1">{entry.email}</td>
                  <td className="border border-gray-400 p-1">{entry.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
