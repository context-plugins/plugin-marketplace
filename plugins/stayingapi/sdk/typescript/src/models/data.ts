import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

export type Data = {
  jobId?: string;
  status?: Status1;
  pollUrl?: string;
  estimatedSeconds?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSchema: Schema<Data> = s.object<Data>(
  {
    jobId: s.optional(s.string()),
    status: s.optional(s.lazy(() => status1Schema)),
    pollUrl: s.optional(s.string()),
    estimatedSeconds: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
