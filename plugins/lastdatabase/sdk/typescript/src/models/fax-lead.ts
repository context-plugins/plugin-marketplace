import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { idSchema, type Id } from "./unions/id.js";
import { optinStatusSchema, type OptinStatus } from "./unions/optin-status.js";
import { packageIdSchema, type PackageId } from "./unions/package-id.js";

export type FaxLead = {
  id?: Id;
  packageId?: PackageId | null;
  companyName?: string | null;
  faxNumber?: string | null;
  industry?: string | null;
  country?: string | null;
  city?: string | null;
  source?: string | null;
  optinStatus?: OptinStatus | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const faxLeadSchema: Schema<FaxLead> = s.object<FaxLead>(
  {
    id: s.optional(s.lazy(() => idSchema)),
    packageId: s.optionalNullable(s.lazy(() => packageIdSchema)),
    companyName: s.optionalNullable(s.string()),
    faxNumber: s.optionalNullable(s.string()),
    industry: s.optionalNullable(s.string()),
    country: s.optionalNullable(s.string()),
    city: s.optionalNullable(s.string()),
    source: s.optionalNullable(s.string()),
    optinStatus: s.optionalNullable(s.lazy(() => optinStatusSchema)),
    _keysMap: {
      packageId: "package_id",
      companyName: "company_name",
      faxNumber: "fax_number",
      optinStatus: "optin_status",
    },
  },
  { additionalProperties: s.json() },
);
