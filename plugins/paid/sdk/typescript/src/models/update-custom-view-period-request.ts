import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  updateCustomViewPeriodRequestPeriodSchema,
  type UpdateCustomViewPeriodRequestPeriod,
} from "./update-custom-view-period-request-period.js";

export type UpdateCustomViewPeriodRequest = {
  /**
   * Default date range for the view's queries. Use `{period_start:DateTime}` /
   * `{period_end:DateTime}` placeholders in your SQL to make the range adjustable. Either relative
   * (unit+amount) or absolute (start+end).
   */
  period: UpdateCustomViewPeriodRequestPeriod;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateCustomViewPeriodRequestSchema: Schema<UpdateCustomViewPeriodRequest> =
  s.object<UpdateCustomViewPeriodRequest>(
    {
      period: updateCustomViewPeriodRequestPeriodSchema,
    },
    { additionalProperties: s.json() },
  );
