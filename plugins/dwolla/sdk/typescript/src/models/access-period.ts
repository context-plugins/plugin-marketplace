import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccessPeriod = {
  type?: string;
  startTime?: string;
  endTime?: Date;
};

export const accessPeriodSchema: Schema<AccessPeriod> = s.object<AccessPeriod>({
  type: s.optional(s.string()),
  startTime: s.optional(s.dateOnly()),
  endTime: s.optional(s.dateTime()),
});
