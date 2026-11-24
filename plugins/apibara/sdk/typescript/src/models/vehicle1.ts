import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformSchema, type Platform } from "./platform.js";

export type Vehicle1 = {
  id?: number | null;
  platform: Platform;
  platformId?: number | null;
  lotNumber: string;
  vin?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vehicle1Schema: Schema<Vehicle1> = s.object<Vehicle1>(
  {
    id: s.optionalNullable(s.int()),
    platform: platformSchema,
    platformId: s.optionalNullable(s.int()),
    lotNumber: s.string(),
    vin: s.optionalNullable(s.string()),
    _keysMap: {
      platformId: "platform_id",
      lotNumber: "lot_number",
    },
  },
  { additionalProperties: s.json() },
);
