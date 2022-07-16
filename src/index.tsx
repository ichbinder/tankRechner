import React from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, Container } from '@mui/material';
import Home from './components/Home/Home';

const constainer = document.getElementById('root');
const root = createRoot(constainer!);
root.render(
	<>
		<CssBaseline />
		<Container maxWidth="md">
			<Home />
		</Container>
	</>
);
