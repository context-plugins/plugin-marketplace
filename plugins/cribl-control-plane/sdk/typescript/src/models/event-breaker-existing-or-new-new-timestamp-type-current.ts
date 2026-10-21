import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type2Schema, type Type2 } from "./type2.js";

export type EventBreakerExistingOrNewNewTimestampTypeCurrent = {
  /**
   * Method to use for timestamp extraction. Use <code>auto</code> for automatic detection,
   * <code>format</code> to specify a strptime format, or <code>current</code> to use the current
   * system time.
   */
  type?: Type2;
};

export const eventBreakerExistingOrNewNewTimestampTypeCurrentSchema: Schema<EventBreakerExistingOrNewNewTimestampTypeCurrent> =
  s.object<EventBreakerExistingOrNewNewTimestampTypeCurrent>({
    type: s.optional(s.lazy(() => type2Schema)),
  });
