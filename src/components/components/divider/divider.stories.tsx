//
// Divider component
//

// Imports
import React from "react";

import Divider, { DividerProps, DividerNoBorder } from "./divider";

export default {
  component: Divider,
  title: "Components/Divider",
};

export const Default = (args: DividerProps) => <Divider {...args} />;
Default.args = { title: "the content" };

export const NoBorder = (args: DividerProps) => <DividerNoBorder {...args} />;
NoBorder.args = { title: "the content" };
