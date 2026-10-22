import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The verification state for the document. */
export const State = {
  Unverified: "UNVERIFIED",
  Verified: "VERIFIED",
  Deprecated: "DEPRECATED",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
