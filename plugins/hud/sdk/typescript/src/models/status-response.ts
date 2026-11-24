import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StatusResponse = {
  status: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statusResponseSchema: Schema<StatusResponse> = s.object<StatusResponse>(
  {
    status: s.string(),
  },
  { additionalProperties: s.json() },
);
