import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Settings = {
  overageCapUsd?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const settingsSchema: Schema<Settings> = s.object<Settings>(
  {
    overageCapUsd: s.optionalNullable(s.float64()),
    _keysMap: {
      overageCapUsd: "overage_cap_usd",
    },
  },
  { additionalProperties: s.json() },
);
