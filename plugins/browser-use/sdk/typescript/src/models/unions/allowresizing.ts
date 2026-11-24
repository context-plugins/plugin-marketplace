import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Let you or the agent resize the browser window over CDP. Resizing makes the browser easier to
 * detect. API runs default to off. Follow-up runs inherit the value of the previous browser. The
 * value applies only when the run starts a new browser.
 */
export type Allowresizing = boolean;

export const allowresizingSchema: Schema<Allowresizing> = s.of<Allowresizing>(s.union([s.boolean()]));
