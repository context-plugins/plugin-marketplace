import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OrganizationHealthRequest = {
  /** The ID of the Amazon Web Services account. */
  accountIds?: string[];
  /** The ID of the organizational unit. */
  organizationalUnitIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationHealthRequestSchema: Schema<OrganizationHealthRequest> =
  s.object<OrganizationHealthRequest>(
    {
      accountIds: s.optional(s.array(s.string())),
      organizationalUnitIds: s.optional(s.array(s.string())),
      _keysMap: {
        accountIds: "AccountIds",
        organizationalUnitIds: "OrganizationalUnitIds",
      },
    },
    { additionalProperties: s.json() },
  );
