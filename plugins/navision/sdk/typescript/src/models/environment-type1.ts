import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of the new environment */
export const EnvironmentType1 = {
  Production: "Production",
  Sandbox: "Sandbox",
} as const;
export type EnvironmentType1 = (typeof EnvironmentType1)[keyof typeof EnvironmentType1] | (string & {});

export const environmentType1Schema: EnumSchema<EnvironmentType1> =
  s.enumOf<EnvironmentType1>(EnvironmentType1);
