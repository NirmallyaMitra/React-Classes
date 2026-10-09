import './App.css'
import Card from './components/Card'

function App() {

  const doctors = [
    {
      name: "Dr. Putri Anggraheni",
      specialization: "Primary care doctor",
      rating: 4.85,
      reviews: 255,
      distance: "16.8 km",
      location: "Sunnyvale, CA 94086, United States",
      online: true,
      videoVisit: true,
      appointments: [
        {
          date: "05 Dec",
          count: 12
        },
        {
          date: "06 Dec",
          count: 0
        },
        {
          date: "07 Dec",
          count: 15
        },
        {
          date: "08 Dec",
          count: 8
        }
      ]
    },

    {
      name: "Dr. Michael Anderson",
      specialization: "Family medicine doctor",
      rating: 4.72,
      reviews: 189,
      distance: "12.4 km",
      location: "Mountain View, CA 94040, United States",
      online: true,
      videoVisit: true,
      appointments: [
        {
          date: "05 Dec",
          count: 8
        },
        {
          date: "06 Dec",
          count: 5
        },
        {
          date: "07 Dec",
          count: 10
        },
        {
          date: "08 Dec",
          count: 3
        }
      ]
    },

    {
      name: "Dr. Sarah Johnson",
      specialization: "General physician",
      rating: 4.91,
      reviews: 312,
      distance: "18.2 km",
      location: "Santa Clara, CA 95050, United States",
      online: false,
      videoVisit: false,
      appointments: [
        {
          date: "05 Dec",
          count: 6
        },
        {
          date: "06 Dec",
          count: 0
        },
        {
          date: "07 Dec",
          count: 12
        },
        {
          date: "08 Dec",
          count: 7
        }
      ]
    }
  ];

  return (
    <>
    <div className='card-container'>
      {doctors.map((doctor, indx) => (
        <Card key={indx} doctor={doctor}/>
      ))};
    </div>
    </>
  )
}

export default App
