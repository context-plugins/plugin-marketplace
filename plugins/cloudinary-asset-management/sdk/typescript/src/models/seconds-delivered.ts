import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SecondsDelivered = {
  /** Number of seconds delivered */
  usage?: number;
};

export const secondsDeliveredSchema: Schema<SecondsDelivered> = s.object<SecondsDelivered>({
  usage: s.optional(s.int()),
});
