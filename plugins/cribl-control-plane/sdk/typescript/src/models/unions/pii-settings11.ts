import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { piiSettingsSchema, type PiiSettings } from "../pii-settings.js";

export type PiiSettings11 = PiiSettings | Record<string, unknown>;

export const piiSettings11Schema: Schema<PiiSettings11> = s.of<PiiSettings11>(
  s.union([s.lazy(() => piiSettingsSchema), s.record(s.string(), s.unknown())]),
);
