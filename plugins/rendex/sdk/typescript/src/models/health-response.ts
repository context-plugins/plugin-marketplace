import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status2Schema, type Status2 } from "./status2.js";

export type HealthResponse = {
  status?: Status2;
  product?: string;
  version?: string;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const healthResponseSchema: Schema<HealthResponse> = s.object<HealthResponse>(
  {
    status: s.optional(s.lazy(() => status2Schema)),
    product: s.optional(s.string()),
    version: s.optional(s.string()),
    timestamp: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
