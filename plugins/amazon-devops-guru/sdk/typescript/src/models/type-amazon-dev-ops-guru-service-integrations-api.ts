import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of KMS key used. Customer managed keys are the KMS keys that you create. Amazon Web
 * Services owned keys are keys that are owned and managed by DevOps Guru.
 */
export const TypeAmazonDevOpsGuruServiceIntegrationsApi = {
  CustomerManagedKey: "CUSTOMER_MANAGED_KEY",
  AwsOwnedKmsKey: "AWS_OWNED_KMS_KEY",
} as const;
export type TypeAmazonDevOpsGuruServiceIntegrationsApi =
  | (typeof TypeAmazonDevOpsGuruServiceIntegrationsApi)[keyof typeof TypeAmazonDevOpsGuruServiceIntegrationsApi]
  | (string & {});

export const typeAmazonDevOpsGuruServiceIntegrationsApiSchema: EnumSchema<TypeAmazonDevOpsGuruServiceIntegrationsApi> =
  s.enumOf<TypeAmazonDevOpsGuruServiceIntegrationsApi>(TypeAmazonDevOpsGuruServiceIntegrationsApi);
