import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { optInStatus1Schema, type OptInStatus1 } from "./opt-in-status1.js";

export type LogsAnomalyDetectionIntegration = {
  /**
   * Specifies if DevOps Guru is configured to perform log anomaly detection on CloudWatch log
   * groups.
   */
  optInStatus?: OptInStatus1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logsAnomalyDetectionIntegrationSchema: Schema<LogsAnomalyDetectionIntegration> =
  s.object<LogsAnomalyDetectionIntegration>(
    {
      optInStatus: s.optional(s.lazy(() => optInStatus1Schema)),
      _keysMap: {
        optInStatus: "OptInStatus",
      },
    },
    { additionalProperties: s.json() },
  );
