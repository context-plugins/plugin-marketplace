import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Company owner. */
export type CompanyOwner = {
  /** Company owner name */
  name?: string;
  /** Company owner date of birth. The value is in the `yyyy-MM-dd` format. */
  dateOfBirth?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companyOwnerProperties: s.Shape<CompanyOwner> = {
  name: s.optional(s.string()),
  dateOfBirth: s.optional(s.dateOnly()),
};

export const companyOwnerInternalSchema: Schema<CompanyOwner> = s.object<CompanyOwner>(
  companyOwnerProperties,
  { additionalProperties: s.json() },
);

export const companyOwnerSchema: Schema<CompanyOwner> = s.lazySchema(() =>
  s.object<CompanyOwner>(
    {
      ...companyOwnerProperties,
      name: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
