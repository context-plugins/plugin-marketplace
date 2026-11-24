import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyProfileDataSchema, type CompanyProfileData } from "./company-profile-data.js";
import { statusSchema, type Status } from "./status.js";

export type CompanyProfileResponse = {
  status?: Status;
  data?: CompanyProfileData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyProfileResponseSchema: Schema<CompanyProfileResponse> = s.object<CompanyProfileResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => companyProfileDataSchema)),
  },
  { additionalProperties: s.json() },
);
