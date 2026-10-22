import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type EventBreakerExistingOrNewNewTimestampTypeAuto = {
  /**
   * Method to use for timestamp extraction. Use <code>auto</code> for automatic detection,
   * <code>format</code> to specify a strptime format, or <code>current</code> to use the current
   * system time.
   */
  type?: Type;
  /**
   * Maximum number of characters to search for a timestamp value from the beginning of the match.
   */
  length: number;
};

export const eventBreakerExistingOrNewNewTimestampTypeAutoSchema: Schema<EventBreakerExistingOrNewNewTimestampTypeAuto> =
  s.object<EventBreakerExistingOrNewNewTimestampTypeAuto>({
    type: s.optional(s.lazy(() => typeSchema)),
    length: s.float64(),
  });
