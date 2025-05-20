import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [totalEmployees, setTotalEmployees] = useState(100);
  const [annualAgencySpend, setAnnualAgencySpend] = useState(500000);
  const [prezentInvestment, setPrezentInvestment] = useState(150000);

  const hourlyRate = 65;
  const presentationsPerMonth = 2;
  const avgHoursPerPresentation = 5;

  const employeesCreatingPresentations = totalEmployees * 0.54;
  const totalPresentations = employeesCreatingPresentations * presentationsPerMonth * 12;
  const timeSaved = totalPresentations * avgHoursPerPresentation * 0.75;
  const costSaved = timeSaved * hourlyRate;
  const reducedAgencyCost = annualAgencySpend * 0.6;
  const revenueImpact = totalPresentations * 0.3 * 50;
  const totalValue = costSaved + reducedAgencyCost + revenueImpact;
  const roi = ((totalValue - prezentInvestment) / prezentInvestment) * 100;

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    maxWidth: '700px',
    margin: 'auto'
  };

  const cardStyle = {
    background: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    marginBottom: '2rem'
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginTop: '1rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.25rem',
    borderRadius: '4px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    backgroundColor: '#0057ff',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '2rem'
  };

  const assumptionsStyle = {
    fontSize: '0.85rem',
    color: '#666',
    marginTop: '2rem',
    borderTop: '1px solid #eee',
    paddingTop: '1rem'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Prezent.ai ROI Calculator</h1>

      {step === 1 && (
        <div style={cardStyle}>
          <label style={labelStyle}>Number of Total Employees in Org</label>
          <input type="number" value={totalEmployees} onChange={e => setTotalEmployees(+e.target.value)} style={inputStyle} />
          <label style={labelStyle}>Annual Agency Spend ($)</label>
          <input type="number" value={annualAgencySpend} onChange={e => setAnnualAgencySpend(+e.target.value)} style={inputStyle} />
          <label style={labelStyle}>Annual Prezent Contract ($)</label>
          <input type="number" value={prezentInvestment} onChange={e => setPrezentInvestment(+e.target.value)} style={inputStyle} />
          <button style={buttonStyle} onClick={() => setStep(2)}>Calculate ROI</button>
        </div>
      )}

      {step === 2 && (
        <div style={cardStyle}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Results</h2>
          <p><strong>Total Time Saved:</strong> {Math.round(timeSaved).toLocaleString()} hours/year</p>
          <p><strong>Internal Cost Savings:</strong> ${Math.round(costSaved).toLocaleString()}</p>
          <p><strong>External Agency Savings:</strong> ${Math.round(reducedAgencyCost).toLocaleString()}</p>
          <p><strong>Revenue Uplift:</strong> ${Math.round(revenueImpact).toLocaleString()}</p>
          <p><strong>Total Value Created:</strong> ${Math.round(totalValue).toLocaleString()}</p>
          <p><strong>Estimated ROI:</strong> {Math.round(roi)}%</p>
          <div style={assumptionsStyle}>
            <h3 style={{ marginBottom: '0.5rem' }}>Assumptions</h3>
            <p>Presentations per Month per Employee: {presentationsPerMonth}</p>
            <p>Average Hours per Presentation: {avgHoursPerPresentation}</p>
            <p>Employee Hourly Rate: ${hourlyRate}</p>
          </div>
          <button style={{ ...buttonStyle, backgroundColor: '#666' }} onClick={() => setStep(1)}>Edit Inputs</button>
        </div>
      )}
    </div>
  );
}

export default App;
