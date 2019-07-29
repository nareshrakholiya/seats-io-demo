import React from 'react';
import { SeatsioSeatingChart } from '@seatsio/seatsio-react'

export function HomePage() {
  return (
    <SeatsioSeatingChart
        publicKey="e0c60b02-ce1d-4972-9621-74897fdb05c4"
        event="3120"
    />
  );
}

export default HomePage;
