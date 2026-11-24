import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SequencesRequest = {
  enabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sequencesRequestSchema: Schema<SequencesRequest> = s.object<SequencesRequest>(
  {
    enabled: s.boolean(),
  },
  { additionalProperties: s.json() },
);
