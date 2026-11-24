import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Details2 = {
  /** Maximum number of `QUEUED` tasks your organization can hold. */
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const details2Schema: Schema<Details2> = s.object<Details2>(
  {
    limit: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
