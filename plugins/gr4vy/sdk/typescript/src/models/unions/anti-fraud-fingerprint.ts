import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** This field represents the fingerprint data to be passed to the active anti-fraud service. */
export type AntiFraudFingerprint = string;

export const antiFraudFingerprintSchema: Schema<AntiFraudFingerprint> = s.of<AntiFraudFingerprint>(
  s.union([s.string()]),
);
