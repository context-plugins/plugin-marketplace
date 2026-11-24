import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";

/** Set a custom SSL inspection state on a policy. */
export type SslInspectionStateBody = {
  /** The state of SSL inspection for this policy. */
  state: State;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sslInspectionStateBodySchema: Schema<SslInspectionStateBody> = s.object<SslInspectionStateBody>(
  {
    state: stateSchema,
  },
  { additionalProperties: s.json() },
);
