import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { piiSettingsSchema, type PiiSettings } from "../pii-settings.js";

/** Personally identifiable information (PII) detection configuration. */
export type PiiSettings1 = PiiSettings | Record<string, unknown>;

export const piiSettings1Schema: Schema<PiiSettings1> = s.of<PiiSettings1>(
  s.union([s.lazy(() => piiSettingsSchema), s.record(s.string(), s.unknown())]),
);
