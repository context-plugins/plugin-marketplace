import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `degraded` when a board is past the age bound (`stale_boards`) or cannot be served
 * (`missing_boards`). Still HTTP 200.
 */
export const Status3 = {
  Ok: "ok",
  Degraded: "degraded",
} as const;
export type Status3 = (typeof Status3)[keyof typeof Status3] | (string & {});

export const status3Schema: EnumSchema<Status3> = s.enumOf<Status3>(Status3);
