import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataCommonelementsComProfessionalsAndLicensesApi = {
  /** License record id. */
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
  /** Address of record, to locality level. The street line is never returned. */
  city?: string | null;
  /** Address of record, to locality level. The street line is never returned. */
  county?: string | null;
  /** Address of record, to locality level. The street line is never returned. */
  zip?: string | null;
  /** Linked Common Elements org, when one is resolved. */
  organizationId?: string | null;
  /** When the record entered Common Elements. */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataCommonelementsComProfessionalsAndLicensesApiSchema: Schema<DataCommonelementsComProfessionalsAndLicensesApi> =
  s.object<DataCommonelementsComProfessionalsAndLicensesApi>(
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
      createdAt: s.optional(s.dateTime()),
      _keysMap: {
        licenseNumber: "license_number",
        licenseType: "license_type",
        licenseTypeDesc: "license_type_desc",
        issueDate: "issue_date",
        expiryDate: "expiry_date",
        isExpired: "is_expired",
        organizationId: "organization_id",
        createdAt: "created_at",
      },
    },
    { additionalProperties: s.json() },
  );
