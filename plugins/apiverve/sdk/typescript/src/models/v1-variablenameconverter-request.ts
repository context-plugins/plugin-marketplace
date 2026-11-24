import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1VariablenameconverterRequest = {
  /** Array of variable names to convert (max 100). Every entry must be a string. */
  variables: string;
  /** Target naming convention */
  to: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1VariablenameconverterRequestSchema: Schema<V1VariablenameconverterRequest> =
  s.object<V1VariablenameconverterRequest>(
    {
      variables: s.string(),
      to: s.string(),
    },
    { additionalProperties: s.json() },
  );
