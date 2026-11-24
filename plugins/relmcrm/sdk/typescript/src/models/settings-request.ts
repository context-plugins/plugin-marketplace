import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SettingsRequest = {
  /** USD cap on metered overage; 0 = never any overage, null = unlimited. */
  overageCapUsd: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const settingsRequestSchema: Schema<SettingsRequest> = s.object<SettingsRequest>(
  {
    overageCapUsd: s.nullable(s.float64()),
    _keysMap: {
      overageCapUsd: "overage_cap_usd",
    },
  },
  { additionalProperties: s.json() },
);
