import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopInstancesResponse = {
  stopped: number;
  errors?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopInstancesResponseSchema: Schema<StopInstancesResponse> = s.object<StopInstancesResponse>(
  {
    stopped: s.int(),
    errors: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
