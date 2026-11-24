import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SystemFingerprint = string;

export const systemFingerprintSchema: Schema<SystemFingerprint> = s.of<SystemFingerprint>(
  s.union([s.string()]),
);
