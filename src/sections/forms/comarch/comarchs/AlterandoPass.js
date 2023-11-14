import { Grid, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import { useMediaQuery } from '../../../../../node_modules/@mui/material/index';
import Image from 'next/legacy/image';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
const comarch = '/assets/images/maintenance/Comarch/passo_4.png';
export default function AlterandoPass() {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);

  const handleMouseEnterLeft = () => {
    setHoveredLeft(true);
  };

  const handleMouseLeaveLeft = () => {
    setHoveredLeft(false);
  };

  const handleMouseEnterRight = () => {
    setHoveredRight(true);
  };

  const handleMouseLeaveRight = () => {
    setHoveredRight(false);
  };

  return (
    <Grid container spacing={3} style={{ height: '100%' }}>
      {/* Left side */}
      <Grid
        item
        xs={6}
        style={{
          objectFit: 'cover',
          borderRadius: hoveredLeft ? '15px' : '25px',
          transform: hoveredLeft ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s ease-in-out, border-radius 0.3s ease-in-out'
        }}
        onMouseEnter={handleMouseEnterLeft}
        onMouseLeave={handleMouseLeaveLeft}
      >
        <div sx={{ height: '40%' }}>
          <Image
            src={comarch}
            alt="mantis"
            layout="fixed"
            width={matchDownSM ? 460 : 475}
            height={matchDownSM ? 445 : 480}
            quality={85}
            style={{
              objectFit: 'cover',
              borderRadius: '25px'
            }}
          />
        </div>
      </Grid>

      {/* Right side */}
      <Grid
        item
        xs={6}
        style={{
          textAlign: 'center',
          borderRadius: hoveredRight ? '15px' : '25px',
          transform: hoveredRight ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s ease-in-out, border-radius 0.3s ease-in-out'
        }}
        onMouseEnter={handleMouseEnterRight}
        onMouseLeave={handleMouseLeaveRight}
      >
        <MainCard sx={{ height: '100%', textAlign: 'center', borderRadius: '25px' }}>
          <Typography variant="h6" style={{ fontSize: '17px' }}>
            <strong>Procedimentos</strong>
          </Typography>
          <hr></hr>
          <Typography variant="body1" style={{ fontSize: '17px' }}>
            Selecione a opção Alterar a senha.
          </Typography>
        </MainCard>
      </Grid>
    </Grid>
  );
}
