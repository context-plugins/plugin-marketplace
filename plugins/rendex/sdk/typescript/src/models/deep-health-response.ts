import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checksSchema, type Checks } from "./checks.js";
import { status1Schema, type Status1 } from "./status1.js";

export type DeepHealthResponse = {
  status?: Status1;
  product?: string;
  version?: string;
  timestamp?: Date;
  checks?: Checks;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deepHealthResponseSchema: Schema<DeepHealthResponse> = s.object<DeepHealthResponse>(
  {
    status: s.optional(s.lazy(() => status1Schema)),
    product: s.optional(s.string()),
    version: s.optional(s.string()),
    timestamp: s.optional(s.dateTime()),
    checks: s.optional(s.lazy(() => checksSchema)),
  },
  { additionalProperties: s.json() },
);
