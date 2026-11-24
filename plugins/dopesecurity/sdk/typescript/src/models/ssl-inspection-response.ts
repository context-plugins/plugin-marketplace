import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";

/** SSL inspection configuration for a policy. */
export type SslInspectionResponse = {
  /** The state of SSL inspection for this policy. */
  state: State;
  /** Whether SSL inspection is inherited from the Base Policy. */
  inheritsFromBase: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sslInspectionResponseSchema: Schema<SslInspectionResponse> = s.object<SslInspectionResponse>(
  {
    state: stateSchema,
    inheritsFromBase: s.boolean(),
  },
  { additionalProperties: s.json() },
);
