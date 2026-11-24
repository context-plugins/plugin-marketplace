import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SettingsCount = {
  siteId: number;
  /** Entries stored after the replace. */
  count: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const settingsCountSchema: Schema<SettingsCount> = s.object<SettingsCount>(
  {
    siteId: s.int(),
    count: s.int(),
    _keysMap: {
      siteId: "site_id",
    },
  },
  { additionalProperties: s.json() },
);
