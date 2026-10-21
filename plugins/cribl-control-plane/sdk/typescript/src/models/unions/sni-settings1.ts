import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sniSettingsSchema, type SniSettings } from "../sni-settings.js";

/** Server Name Indication (SNI) routing configuration. */
export type SniSettings1 = SniSettings | Record<string, unknown>;

export const sniSettings1Schema: Schema<SniSettings1> = s.of<SniSettings1>(
  s.union([s.lazy(() => sniSettingsSchema), s.record(s.string(), s.unknown())]),
);
