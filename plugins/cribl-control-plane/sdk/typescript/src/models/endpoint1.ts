import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Endpoint */
export const Endpoint1 = {
  Cloud: "cloud",
  ActiveGate: "activeGate",
  Manual: "manual",
} as const;
export type Endpoint1 = (typeof Endpoint1)[keyof typeof Endpoint1] | (string & {});

export const endpoint1Schema: EnumSchema<Endpoint1> = s.enumOf<Endpoint1>(Endpoint1);
