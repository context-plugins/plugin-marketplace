import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The state of the association. The valid values are associating, associated, disassociating, and
 * disassociated.
 */
export const State = {
  Associating: "associating",
  Associated: "associated",
  Disassociating: "disassociating",
  Disassociated: "disassociated",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
