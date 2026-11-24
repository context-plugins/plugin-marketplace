import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { state1Schema, type State1 } from "./state1.js";

/**
 * A read-only bypass entry pre-configured by Dope Security. Default entries cannot be created or
 * deleted, but partners can set their state to ignored to prevent them from being enforced.
 */
export type DefaultBypassItem = {
  /** The name of the default bypass entry (application name or URL pattern) */
  name: string;
  /** Whether this default entry is applied or ignored for the policy */
  state: State1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const defaultBypassItemSchema: Schema<DefaultBypassItem> = s.object<DefaultBypassItem>(
  {
    name: s.string(),
    state: state1Schema,
  },
  { additionalProperties: s.json() },
);
