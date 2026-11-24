import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type Health = {
  status?: Status;
  service?: string;
  version?: string;
  time?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const healthSchema: Schema<Health> = s.object<Health>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    service: s.optional(s.string()),
    version: s.optional(s.string()),
    time: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
