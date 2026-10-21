import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Code indicating the 3-D Secure component that identified the error. */
export type Component = string;

export const componentSchema: Schema<Component> = s.of<Component>(s.union([s.string()]));
