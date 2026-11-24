import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  kmsServerSideEncryptionIntegrationSchema,
  type KmsServerSideEncryptionIntegration,
} from "./kms-server-side-encryption-integration.js";
import {
  logsAnomalyDetectionIntegrationSchema,
  type LogsAnomalyDetectionIntegration,
} from "./logs-anomaly-detection-integration.js";
import { opsCenterIntegrationSchema, type OpsCenterIntegration } from "./ops-center-integration.js";

export type ServiceIntegrationConfig = {
  opsCenter?: OpsCenterIntegration;
  logsAnomalyDetection?: LogsAnomalyDetectionIntegration;
  kmsServerSideEncryption?: KmsServerSideEncryptionIntegration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceIntegrationConfigSchema: Schema<ServiceIntegrationConfig> =
  s.object<ServiceIntegrationConfig>(
    {
      opsCenter: s.optional(s.lazy(() => opsCenterIntegrationSchema)),
      logsAnomalyDetection: s.optional(s.lazy(() => logsAnomalyDetectionIntegrationSchema)),
      kmsServerSideEncryption: s.optional(s.lazy(() => kmsServerSideEncryptionIntegrationSchema)),
      _keysMap: {
        opsCenter: "OpsCenter",
        logsAnomalyDetection: "LogsAnomalyDetection",
        kmsServerSideEncryption: "KMSServerSideEncryption",
      },
    },
    { additionalProperties: s.json() },
  );
