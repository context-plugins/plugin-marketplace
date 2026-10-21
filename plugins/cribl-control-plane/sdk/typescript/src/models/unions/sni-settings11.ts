import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sniSettingsSchema, type SniSettings } from "../sni-settings.js";

export type SniSettings11 = SniSettings | Record<string, unknown>;

export const sniSettings11Schema: Schema<SniSettings11> = s.of<SniSettings11>(
  s.union([s.lazy(() => sniSettingsSchema), s.record(s.string(), s.unknown())]),
);
