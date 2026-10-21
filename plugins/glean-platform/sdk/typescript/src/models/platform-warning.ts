import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Non-blocking warning attached to a successful Platform response. */
export type PlatformWarning = {
  /**
   * Open snake_case warning code. Clients must tolerate unknown values; the set of codes is not a
   * closed enum.
   */
  code: string;
  /** Human-readable warning message. */
  message: string;
};

export const platformWarningSchema: Schema<PlatformWarning> = s.object<PlatformWarning>({
  code: s.string(),
  message: s.string(),
});
