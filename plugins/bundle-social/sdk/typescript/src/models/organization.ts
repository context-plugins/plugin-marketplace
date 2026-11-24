import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Organization = {
  /** @default "organization" */
  kind?: "organization";
  urn: string;
  display: string;
  vanityName?: string;
  logoUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const organizationProperties: s.Shape<Organization> = {
  kind: s.defaulted(s.literal("organization"), "organization"),
  urn: s.string(),
  display: s.string(),
  vanityName: s.optional(s.string()),
  logoUrl: s.optional(s.string()),
};

export const organizationInternalSchema: Schema<Organization> = s.object<Organization>(
  organizationProperties,
  { additionalProperties: s.json() },
);

export const organizationSchema: Schema<Organization> = s.lazySchema(() =>
  s.object<Organization>(
    {
      ...organizationProperties,
      logoUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
