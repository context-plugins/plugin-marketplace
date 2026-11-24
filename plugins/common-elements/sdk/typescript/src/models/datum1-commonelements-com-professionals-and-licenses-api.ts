import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Datum1CommonelementsComProfessionalsAndLicensesApi = {
  /** License record id. Pass this to the detail endpoints below. */
  id?: string;
  /** Issuing jurisdiction and board. */
  state?: string;
  /** Issuing jurisdiction and board. */
  board?: string;
  /** License identity. */
  licenseNumber?: string | null;
  /** License identity. */
  licenseType?: string | null;
  /** License identity. */
  licenseTypeDesc?: string | null;
  /** Licensee name and trade name. */
  name?: string | null;
  /** Licensee name and trade name. */
  dba?: string | null;
  /** Board status verbatim. */
  status?: string | null;
  /** License dates verbatim. */
  issueDate?: string | null;
  /** License dates verbatim. */
  expiryDate?: string | null;
  /** True when expiry_date is in the past. */
  isExpired?: boolean;
  /** Address of record. */
  city?: string | null;
  /** Address of record. */
  county?: string | null;
  /** Address of record. */
  zip?: string | null;
  /** Linked Common Elements org, when one is resolved. */
  organizationId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum1CommonelementsComProfessionalsAndLicensesApiSchema: Schema<Datum1CommonelementsComProfessionalsAndLicensesApi> =
  s.object<Datum1CommonelementsComProfessionalsAndLicensesApi>(
    {
      id: s.optional(s.string()),
      state: s.optional(s.string()),
      board: s.optional(s.string()),
      licenseNumber: s.optionalNullable(s.string()),
      licenseType: s.optionalNullable(s.string()),
      licenseTypeDesc: s.optionalNullable(s.string()),
      name: s.optionalNullable(s.string()),
      dba: s.optionalNullable(s.string()),
      status: s.optionalNullable(s.string()),
      issueDate: s.optionalNullable(s.dateOnly()),
      expiryDate: s.optionalNullable(s.dateOnly()),
      isExpired: s.optional(s.boolean()),
      city: s.optionalNullable(s.string()),
      county: s.optionalNullable(s.string()),
      zip: s.optionalNullable(s.string()),
      organizationId: s.optionalNullable(s.string()),
      _keysMap: {
        licenseNumber: "license_number",
        licenseType: "license_type",
        licenseTypeDesc: "license_type_desc",
        issueDate: "issue_date",
        expiryDate: "expiry_date",
        isExpired: "is_expired",
        organizationId: "organization_id",
      },
    },
    { additionalProperties: s.json() },
  );
