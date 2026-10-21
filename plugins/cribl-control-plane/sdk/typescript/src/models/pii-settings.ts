import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PiiSettings = {
  /**
   * If <code>true</code>, enable PII detection for events processed by the Cribl instance.
   * Otherwise, <code>false</code>.
   */
  enablePiiDetection: boolean;
};

export const piiSettingsSchema: Schema<PiiSettings> = s.object<PiiSettings>({
  enablePiiDetection: s.boolean(),
});
