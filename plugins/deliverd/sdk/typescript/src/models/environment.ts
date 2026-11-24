import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Environment = {
  Development: "development",
  Pilot: "pilot",
  Production: "production",
} as const;
export type Environment = (typeof Environment)[keyof typeof Environment] | (string & {});

export const environmentSchema: EnumSchema<Environment> = s.enumOf<Environment>(Environment);
