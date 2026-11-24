import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Cloud provider that owns the quota. */
export const CloudProviderDoiTServiceQuotasApi = {
  Aws: "aws",
  Gcp: "gcp",
} as const;
export type CloudProviderDoiTServiceQuotasApi =
  | (typeof CloudProviderDoiTServiceQuotasApi)[keyof typeof CloudProviderDoiTServiceQuotasApi]
  | (string & {});

export const cloudProviderDoiTServiceQuotasApiSchema: EnumSchema<CloudProviderDoiTServiceQuotasApi> =
  s.enumOf<CloudProviderDoiTServiceQuotasApi>(CloudProviderDoiTServiceQuotasApi);
