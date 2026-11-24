import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  kmsServerSideEncryptionIntegrationConfigSchema,
  type KmsServerSideEncryptionIntegrationConfig,
} from "./kms-server-side-encryption-integration-config.js";
import {
  logsAnomalyDetectionIntegrationConfigSchema,
  type LogsAnomalyDetectionIntegrationConfig,
} from "./logs-anomaly-detection-integration-config.js";
import {
  opsCenterIntegrationConfigSchema,
  type OpsCenterIntegrationConfig,
} from "./ops-center-integration-config.js";

export type UpdateServiceIntegrationConfig = {
  opsCenter?: OpsCenterIntegrationConfig;
  logsAnomalyDetection?: LogsAnomalyDetectionIntegrationConfig;
  kmsServerSideEncryption?: KmsServerSideEncryptionIntegrationConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateServiceIntegrationConfigSchema: Schema<UpdateServiceIntegrationConfig> =
  s.object<UpdateServiceIntegrationConfig>(
    {
      opsCenter: s.optional(s.lazy(() => opsCenterIntegrationConfigSchema)),
      logsAnomalyDetection: s.optional(s.lazy(() => logsAnomalyDetectionIntegrationConfigSchema)),
      kmsServerSideEncryption: s.optional(s.lazy(() => kmsServerSideEncryptionIntegrationConfigSchema)),
      _keysMap: {
        opsCenter: "OpsCenter",
        logsAnomalyDetection: "LogsAnomalyDetection",
        kmsServerSideEncryption: "KMSServerSideEncryption",
      },
    },
    { additionalProperties: s.json() },
  );
