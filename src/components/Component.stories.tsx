import { ComponentMeta } from "@storybook/react";
import React from "react";
import { Component } from "./Component";

export default {
  title: "Component",
  component: Component,
} as ComponentMeta<typeof Component>;

export const Common = () => <Component />;
