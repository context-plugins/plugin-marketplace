import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Credit information for an async task. */
export type AsyncTaskCredits = {
  /**
   * Estimated cost, computed when the task is submitted. Nothing is reserved or deducted then;
   * credits are deducted only when the task completes.
   */
  creditsToCharge: number;
  /**
   * Credits actually charged: null until the task finishes, then the amount billed for `COMPLETED`,
   * or `0` for `FAILED` (failed tasks are never charged). Equals `creditsToCharge`, except that AI
   * Mode with `include.expandProducts` adds +1 credit per product cluster returned.
   */
  creditsCharged: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const asyncTaskCreditsSchema: Schema<AsyncTaskCredits> = s.object<AsyncTaskCredits>(
  {
    creditsToCharge: s.float64(),
    creditsCharged: s.nullable(s.float64()),
  },
  { additionalProperties: s.json() },
);
