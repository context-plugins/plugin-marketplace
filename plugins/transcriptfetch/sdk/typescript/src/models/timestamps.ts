import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Timestamps = {
  None: "none",
  Segment: "segment",
} as const;
export type Timestamps = (typeof Timestamps)[keyof typeof Timestamps] | (string & {});

export const timestampsSchema: EnumSchema<Timestamps> = s.enumOf<Timestamps>(Timestamps);
