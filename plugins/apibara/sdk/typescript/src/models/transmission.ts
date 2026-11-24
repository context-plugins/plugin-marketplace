import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Transmission = {
  Manual: "Manual",
  Unknown: "Unknown",
  Automatic: "Automatic",
} as const;
export type Transmission = (typeof Transmission)[keyof typeof Transmission] | (string & {});

export const transmissionSchema: EnumSchema<Transmission> = s.enumOf<Transmission>(Transmission);
