import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether a voicemail was detected during the transfer leg of the session */
export type TransferVoicemailDetected = boolean;

export const transferVoicemailDetectedSchema: Schema<TransferVoicemailDetected> =
  s.of<TransferVoicemailDetected>(s.union([s.boolean()]));
