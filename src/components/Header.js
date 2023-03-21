import React, { useState } from "react";
import Button, { FilterButton } from "./Button";
import AddTask from "./AddTask";

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="addfilter">
      <Button onClick={() => setModalOpen(true)}>+</Button>
      <FilterButton>
        <option value="all">All</option>
        <option value="ongoing">On Going</option>
        <option value="completed">Completed</option>
      </FilterButton>
      <AddTask modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default Header;
