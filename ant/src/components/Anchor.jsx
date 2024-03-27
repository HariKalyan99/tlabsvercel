import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
const Anchor = ({children, btn}) => {
    const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button  onClick={showDrawer} style={{backgroundColor: "black", color: "white"}}>
        {btn}
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open} width={300}>
        {children}
      </Drawer>
    </>
  )
}

export default Anchor