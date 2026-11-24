import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insiderTradesTopInsiderSchema, type InsiderTradesTopInsider } from "./insider-trades-top-insider.js";
import {
  insiderTradesWindowInternalSchema,
  insiderTradesWindowSchema,
  type InsiderTradesWindow,
} from "./insider-trades-window.js";

export type InsiderTradesSummary = {
  /**
   * Event-level aggregates over one rolling window. Counts here are grouped EVENTS, not tranches,
   * so they run lower than the transaction counts of `/api/symbols/{ticker}/insider-summary/`.
   */
  last3M: InsiderTradesWindow;
  /**
   * Event-level aggregates over one rolling window. Counts here are grouped EVENTS, not tranches,
   * so they run lower than the transaction counts of `/api/symbols/{ticker}/insider-summary/`.
   */
  last12M: InsiderTradesWindow;
  /**
   * Event-level aggregates over one rolling window. Counts here are grouped EVENTS, not tranches,
   * so they run lower than the transaction counts of `/api/symbols/{ticker}/insider-summary/`.
   */
  allTime: InsiderTradesWindow;
  /** Most active reporters of the last 12 months, at most five. */
  topInsiders: InsiderTradesTopInsider[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const insiderTradesSummaryProperties: s.Shape<InsiderTradesSummary> = {
  last3M: insiderTradesWindowInternalSchema,
  last12M: insiderTradesWindowInternalSchema,
  allTime: insiderTradesWindowInternalSchema,
  topInsiders: s.array(s.lazy(() => insiderTradesTopInsiderSchema)),
  _keysMap: {
    last3M: "last_3m",
    last12M: "last_12m",
    allTime: "all_time",
    topInsiders: "top_insiders",
  },
};

export const insiderTradesSummaryInternalSchema: Schema<InsiderTradesSummary> =
  s.object<InsiderTradesSummary>(insiderTradesSummaryProperties, { additionalProperties: s.json() });

export const insiderTradesSummarySchema: Schema<InsiderTradesSummary> = s.lazySchema(() =>
  s.object<InsiderTradesSummary>(
    {
      ...insiderTradesSummaryProperties,
      last3M: insiderTradesWindowSchema,
      last12M: insiderTradesWindowSchema,
      allTime: insiderTradesWindowSchema,
    },
    { additionalProperties: s.json() },
  ),
);
