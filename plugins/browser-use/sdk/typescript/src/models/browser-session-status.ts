import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Enumeration of possible browser session states
 *
 * Attributes: ACTIVE: Session is currently active and running (browser is running) STOPPED: Session
 * has been stopped and is no longer active (browser is stopped)
 */
export const BrowserSessionStatus = {
  Active: "active",
  Stopped: "stopped",
} as const;
export type BrowserSessionStatus =
  | (typeof BrowserSessionStatus)[keyof typeof BrowserSessionStatus]
  | (string & {});

export const browserSessionStatusSchema: EnumSchema<BrowserSessionStatus> =
  s.enumOf<BrowserSessionStatus>(BrowserSessionStatus);
