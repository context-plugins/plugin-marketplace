import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatumCommonelementsComProfessionalsAndLicensesApi = {
  /** License number as issued. */
  licenseNumber?: string;
  /** License class and its description. */
  licenseType?: string | null;
  /** License class and its description. */
  licenseTypeDesc?: string | null;
  /** Licensee name and trade name. */
  name?: string | null;
  /** Licensee name and trade name. */
  dba?: string | null;
  /** Board status verbatim from the source roll. */
  status?: string | null;
  /** License dates verbatim from the source roll. */
  issueDate?: string | null;
  /** License dates verbatim from the source roll. */
  expiryDate?: string | null;
  /** Address of record. */
  city?: string | null;
  /** Address of record. */
  county?: string | null;
  /** Issuing board. */
  board?: string | null;
  /** Linked Common Elements org, when the licensee resolves to one. */
  organizationId?: string | null;
  /** True when expiry_date is in the past. */
  isExpired?: boolean;
  /**
   * The trust signal to branch on: status reads current/active/valid/clear AND the license is not
   * past expiry.
   */
  isActive?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumCommonelementsComProfessionalsAndLicensesApiSchema: Schema<DatumCommonelementsComProfessionalsAndLicensesApi> =
  s.object<DatumCommonelementsComProfessionalsAndLicensesApi>(
    {
      licenseNumber: s.optional(s.string()),
      licenseType: s.optionalNullable(s.string()),
      licenseTypeDesc: s.optionalNullable(s.string()),
      name: s.optionalNullable(s.string()),
      dba: s.optionalNullable(s.string()),
      status: s.optionalNullable(s.string()),
      issueDate: s.optionalNullable(s.dateOnly()),
      expiryDate: s.optionalNullable(s.dateOnly()),
      city: s.optionalNullable(s.string()),
      county: s.optionalNullable(s.string()),
      board: s.optionalNullable(s.string()),
      organizationId: s.optionalNullable(s.string()),
      isExpired: s.optional(s.boolean()),
      isActive: s.optional(s.boolean()),
      _keysMap: {
        licenseNumber: "license_number",
        licenseType: "license_type",
        licenseTypeDesc: "license_type_desc",
        issueDate: "issue_date",
        expiryDate: "expiry_date",
        organizationId: "organization_id",
        isExpired: "is_expired",
        isActive: "is_active",
      },
    },
    { additionalProperties: s.json() },
  );
