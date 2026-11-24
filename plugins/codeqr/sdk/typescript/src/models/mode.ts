import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The mode to use for tracking the lead event. `async` will not block the request; `wait` will
 * block the request until the lead event is fully recorded in CodeQR; `deferred` will defer the
 * lead event creation to a subsequent request.
 */
export const Mode = {
  Async: "async",
  Wait: "wait",
  Deferred: "deferred",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
