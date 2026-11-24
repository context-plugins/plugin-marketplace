import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Verbosity = {
  Low: "low",
  Medium: "medium",
  High: "high",
} as const;
export type Verbosity = (typeof Verbosity)[keyof typeof Verbosity] | (string & {});

export const verbositySchema: EnumSchema<Verbosity> = s.enumOf<Verbosity>(Verbosity);
