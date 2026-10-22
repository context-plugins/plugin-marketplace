import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether transfer leg voicemail detection is enabled */
export type TransferLegVoicemailDetectionEnabled = boolean;

export const transferLegVoicemailDetectionEnabledSchema: Schema<TransferLegVoicemailDetectionEnabled> =
  s.of<TransferLegVoicemailDetectionEnabled>(s.union([s.boolean()]));
