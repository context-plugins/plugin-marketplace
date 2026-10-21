import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LogLabelConfOutputGoogleCloudLogging = {
  /** Label name */
  label: string;
  /** JavaScript expression to compute the label's value. */
  valueExpression: string;
};

export const logLabelConfOutputGoogleCloudLoggingSchema: Schema<LogLabelConfOutputGoogleCloudLogging> =
  s.object<LogLabelConfOutputGoogleCloudLogging>({
    label: s.string(),
    valueExpression: s.string(),
  });
