import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  phoneNumberReportingReportsApiSchema,
  type PhoneNumberReportingReportsApi,
} from "./phone-number-reporting-reports-api.js";

export type MerchantReportingReportsApi = {
  /** id */
  id: string;
  /** Merchant name */
  businessName: string;
  /** ABN */
  abn: string;
  /** full merchant logo */
  logoMaster: string;
  /** thumbnail merchant logo */
  logoThumb: string;
  phoneNumber?: PhoneNumberReportingReportsApi;
  /** Merchant Website */
  website: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const merchantReportingReportsApiSchema: Schema<MerchantReportingReportsApi> =
  s.object<MerchantReportingReportsApi>(
    {
      id: s.string(),
      businessName: s.string(),
      abn: s.string(),
      logoMaster: s.string(),
      logoThumb: s.string(),
      phoneNumber: s.optional(s.lazy(() => phoneNumberReportingReportsApiSchema)),
      website: s.string(),
      _keysMap: {
        abn: "ABN",
      },
    },
    { additionalProperties: s.json() },
  );
