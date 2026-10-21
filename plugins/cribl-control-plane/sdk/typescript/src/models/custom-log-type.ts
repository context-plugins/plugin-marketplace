import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomLogType = {
  /** Log Type */
  logType: string;
  /** Description */
  description?: string;
};

export const customLogTypeSchema: Schema<CustomLogType> = s.object<CustomLogType>({
  logType: s.string(),
  description: s.optional(s.string()),
});
