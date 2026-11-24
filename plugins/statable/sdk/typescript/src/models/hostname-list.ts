import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The stored lists, as GET returns them. Both keys are always present; an empty list is []. */
export type HostnameList = {
  allowed: string[];
  blocked: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hostnameListSchema: Schema<HostnameList> = s.object<HostnameList>(
  {
    allowed: s.array(s.string()),
    blocked: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
