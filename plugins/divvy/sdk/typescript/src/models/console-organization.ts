import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Console organization response. */
export type ConsoleOrganization = {
  /** BILL-generated ID of the organization. The value begins with `008`. */
  id?: string;
  /** Organization name */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const consoleOrganizationSchema: Schema<ConsoleOrganization> = s.object<ConsoleOrganization>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
