import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { threeDSecureScenarioSchema, type ThreeDSecureScenario } from "./three-dsecure-scenario.js";
import { nextCursorSchema, type NextCursor } from "./unions/next-cursor.js";
import { previousCursorSchema, type PreviousCursor } from "./unions/previous-cursor.js";

export type ThreeDSecureScenarios = {
  /** A list of items returned for this request. */
  items: ThreeDSecureScenario[];
  /** The number of items for this page. @default 20 */
  limit?: number;
  /** The cursor pointing at the next page of items. */
  nextCursor?: NextCursor;
  /** The cursor pointing at the previous page of items. */
  previousCursor?: PreviousCursor;
};

export const threeDSecureScenariosSchema: Schema<ThreeDSecureScenarios> = s.object<ThreeDSecureScenarios>({
  items: s.array(s.lazy(() => threeDSecureScenarioSchema)),
  limit: s.defaulted(s.int(), 20),
  nextCursor: s.optional(s.lazy(() => nextCursorSchema)),
  previousCursor: s.optional(s.lazy(() => previousCursorSchema)),
  _keysMap: {
    nextCursor: "next_cursor",
    previousCursor: "previous_cursor",
  },
});
