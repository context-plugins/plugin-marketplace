import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { settlementsSchema, type Settlements } from "./settlements.js";

export type ActiveConfiguration = {
  settlements?: Settlements;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activeConfigurationSchema: Schema<ActiveConfiguration> = s.object<ActiveConfiguration>(
  {
    settlements: s.optional(s.lazy(() => settlementsSchema)),
  },
  { additionalProperties: s.json() },
);
