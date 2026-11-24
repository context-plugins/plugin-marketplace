import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Available actions that can be performed on a browser session
 *
 * Attributes: STOP: Stop the browser session (cannot be undone)
 */
export const BrowserSessionUpdateAction = {
  Stop: "stop",
} as const;
export type BrowserSessionUpdateAction =
  | (typeof BrowserSessionUpdateAction)[keyof typeof BrowserSessionUpdateAction]
  | (string & {});

export const browserSessionUpdateActionSchema: EnumSchema<BrowserSessionUpdateAction> =
  s.enumOf<BrowserSessionUpdateAction>(BrowserSessionUpdateAction);
