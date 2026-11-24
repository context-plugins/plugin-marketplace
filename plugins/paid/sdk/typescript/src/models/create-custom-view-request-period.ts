import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customViewDetailPeriodKindSchema,
  type CustomViewDetailPeriodKind,
} from "./custom-view-detail-period-kind.js";
import {
  customViewDetailPeriodUnitSchema,
  type CustomViewDetailPeriodUnit,
} from "./custom-view-detail-period-unit.js";

/**
 * Optional default date range. Required if any query uses the `{period_start:DateTime}` /
 * `{period_end:DateTime}` placeholders. Can be changed later in Paid without re-authoring.
 */
export type CreateCustomViewRequestPeriod = {
  /**
   * 'relative' = a rolling window ending today (set `unit` + `amount`); 'absolute' = a fixed
   * calendar range (set `start` + `end`).
   */
  kind: CustomViewDetailPeriodKind;
  /** relative only: the unit of the rolling window. */
  unit?: CustomViewDetailPeriodUnit;
  /** relative only: how many units back from today (e.g. unit 'day', amount 30 = last 30 days). */
  amount?: number;
  /** absolute only: inclusive start date (YYYY-MM-DD). */
  start?: string;
  /** absolute only: inclusive end date (YYYY-MM-DD). */
  end?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createCustomViewRequestPeriodSchema: Schema<CreateCustomViewRequestPeriod> =
  s.object<CreateCustomViewRequestPeriod>(
    {
      kind: customViewDetailPeriodKindSchema,
      unit: s.optional(s.lazy(() => customViewDetailPeriodUnitSchema)),
      amount: s.optional(s.int()),
      start: s.optional(s.string()),
      end: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
