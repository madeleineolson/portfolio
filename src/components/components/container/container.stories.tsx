//
// Container story
//

// Imports
import React from "react";
import Container, {
  ContainerProps,
  ItemSmall,
  ItemBig,
  ItemSmallCollapse,
} from "./container";
import Paragraph from "../paragraph/paragraph";

// Story
export default {
  component: Container,
  title: "Components/Container",
};

// Story versions
export const Default = (args: ContainerProps) => <Container {...args} />;
Default.args = { children: Paragraph };

export const Small = (args: ContainerProps) => <ItemSmall {...args} />;
Small.args = { children: Paragraph };

export const SmallCollapse = (args: ContainerProps) => (
  <ItemSmallCollapse {...args} />
);
SmallCollapse.args = { children: Paragraph };

export const Big = (args: ContainerProps) => <ItemBig {...args} />;
Big.args = { children: Paragraph };
