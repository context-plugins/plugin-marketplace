import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type EventBreakerExistingOrNewNewTimestampTypeFormat = {
  /**
   * Method to use for timestamp extraction. Use <code>auto</code> for automatic detection,
   * <code>format</code> to specify a strptime format, or <code>current</code> to use the current
   * system time.
   */
  type?: Type1;
  /**
   * Strptime format string for parsing timestamps (for example, <code>%Y-%m-%d %H:%M:%S</code>).
   */
  format: string;
};

export const eventBreakerExistingOrNewNewTimestampTypeFormatSchema: Schema<EventBreakerExistingOrNewNewTimestampTypeFormat> =
  s.object<EventBreakerExistingOrNewNewTimestampTypeFormat>({
    type: s.optional(s.lazy(() => type1Schema)),
    format: s.string(),
  });
