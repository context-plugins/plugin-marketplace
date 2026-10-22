import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MinMessages = {
  type?: string;
  description?: string;
  current?: number | null;
  applied?: boolean;
};

export const minMessagesSchema: Schema<MinMessages> = s.object<MinMessages>({
  type: s.optional(s.string()),
  description: s.optional(s.string()),
  current: s.optionalNullable(s.float64()),
  applied: s.optional(s.boolean()),
});
