import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * draft: save evidence without submitting. submit: send for bank review. Minimum one document
 * required for submit.
 */
export const Action = {
  Draft: "draft",
  Submit: "submit",
} as const;
export type Action = (typeof Action)[keyof typeof Action] | (string & {});

export const actionSchema: EnumSchema<Action> = s.enumOf<Action>(Action);
