import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Organization metadata returned by the API. */
export type Organization = {
  /** The unique ID of the organization */
  id?: string;
  /** The name of the organization */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationSchema: Schema<Organization> = s.object<Organization>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
