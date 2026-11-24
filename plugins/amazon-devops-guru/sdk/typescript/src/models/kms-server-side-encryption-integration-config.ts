import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { optInStatus3Schema, type OptInStatus3 } from "./opt-in-status3.js";
import {
  typeAmazonDevOpsGuruServiceIntegrationsApiSchema,
  type TypeAmazonDevOpsGuruServiceIntegrationsApi,
} from "./type-amazon-dev-ops-guru-service-integrations-api.js";

export type KmsServerSideEncryptionIntegrationConfig = {
  /**
   * Describes the specified KMS key. To specify a KMS key, use its key ID, key ARN, alias name, or
   * alias ARN. When using an alias name, prefix it with "alias/". If you specify a predefined
   * Amazon Web Services alias (an Amazon Web Services alias with no key ID), Amazon Web Services
   * KMS associates the alias with an Amazon Web Services managed key and returns its KeyId and Arn
   * in the response. To specify a KMS key in a different Amazon Web Services account, you must use
   * the key ARN or alias ARN. For example: Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab Key ARN:
   * arn:aws:kms:us-east-2:111122223333:key/
   */
  kmsKeyId?: string;
  /** Specifies if DevOps Guru is enabled for KMS integration. */
  optInStatus?: OptInStatus3;
  /**
   * The type of KMS key used. Customer managed keys are the KMS keys that you create. Amazon Web
   * Services owned keys are keys that are owned and managed by DevOps Guru.
   */
  type?: TypeAmazonDevOpsGuruServiceIntegrationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const kmsServerSideEncryptionIntegrationConfigSchema: Schema<KmsServerSideEncryptionIntegrationConfig> =
  s.object<KmsServerSideEncryptionIntegrationConfig>(
    {
      kmsKeyId: s.optional(s.string()),
      optInStatus: s.optional(s.lazy(() => optInStatus3Schema)),
      type: s.optional(s.lazy(() => typeAmazonDevOpsGuruServiceIntegrationsApiSchema)),
      _keysMap: {
        kmsKeyId: "KMSKeyId",
        optInStatus: "OptInStatus",
        type: "Type",
      },
    },
    { additionalProperties: s.json() },
  );
