import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of environment to create */
export const EnvironmentType = {
  Production: "Production",
  Sandbox: "Sandbox",
} as const;
export type EnvironmentType = (typeof EnvironmentType)[keyof typeof EnvironmentType] | (string & {});

export const environmentTypeSchema: EnumSchema<EnvironmentType> = s.enumOf<EnvironmentType>(EnvironmentType);
