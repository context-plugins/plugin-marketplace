import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InsiderTradesTopInsider = {
  name: string;
  /** Officer title from the filing; empty when the filer reports as a director only. */
  title: string;
  eventCount: number;
  /**
   * Buys minus sells in USD over the last 12 months, as a decimal string; positive means a net
   * buyer.
   */
  netValueUsd?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insiderTradesTopInsiderSchema: Schema<InsiderTradesTopInsider> =
  s.object<InsiderTradesTopInsider>(
    {
      name: s.string(),
      title: s.string(),
      eventCount: s.int(),
      netValueUsd: s.optionalNullable(s.string()),
      _keysMap: {
        eventCount: "event_count",
        netValueUsd: "net_value_usd",
      },
    },
    { additionalProperties: s.json() },
  );
