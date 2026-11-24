import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { fullContentSettingsSchema, type FullContentSettings } from "../full-content-settings.js";

/**
 * Controls full content extraction. Set to true to enable with defaults, false to disable, or
 * provide FullContentSettings for fine-grained control.
 */
export type FullContent1 = FullContentSettings | boolean;

export const fullContent1Schema: Schema<FullContent1> = s.of<FullContent1>(
  s.union([s.lazy(() => fullContentSettingsSchema), s.boolean()]),
);
