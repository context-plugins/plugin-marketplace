import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { alertGtSchema, type AlertGt } from "./unions/alert-gt.js";
import { alertLtSchema, type AlertLt } from "./unions/alert-lt.js";

export type MonitoringThresholdAlertingPolicyParams = {
  /** The value above which a sample is considered unhealthy. */
  alertGt?: AlertGt;
  /** The value below which a sample is considered unhealthy. */
  alertLt?: AlertLt;
};

export const monitoringThresholdAlertingPolicyParamsSchema: Schema<MonitoringThresholdAlertingPolicyParams> =
  s.object<MonitoringThresholdAlertingPolicyParams>({
    alertGt: s.optional(s.lazy(() => alertGtSchema)),
    alertLt: s.optional(s.lazy(() => alertLtSchema)),
    _keysMap: {
      alertGt: "alert_gt",
      alertLt: "alert_lt",
    },
  });
