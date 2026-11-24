import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Organization = {
  slug?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationSchema: Schema<Organization> = s.object<Organization>(
  {
    slug: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
