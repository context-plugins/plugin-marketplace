import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyOwner2 = {
  /** Company owner name */
  name?: string;
  /** Company owner date of birth. The value is in the `yyyy-MM-dd` format. */
  dateOfBirth?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companyOwner2Properties: s.Shape<CompanyOwner2> = {
  name: s.optional(s.string()),
  dateOfBirth: s.optional(s.dateOnly()),
};

export const companyOwner2InternalSchema: Schema<CompanyOwner2> = s.object<CompanyOwner2>(
  companyOwner2Properties,
  { additionalProperties: s.json() },
);

export const companyOwner2Schema: Schema<CompanyOwner2> = s.lazySchema(() =>
  s.object<CompanyOwner2>(
    {
      ...companyOwner2Properties,
      name: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
