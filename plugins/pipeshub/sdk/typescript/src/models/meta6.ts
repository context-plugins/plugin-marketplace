import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta6 = {
  requestId?: string;
  timestamp?: Date;
  duration?: number;
};

export const meta6Schema: Schema<Meta6> = s.object<Meta6>({
  requestId: s.optional(s.string()),
  timestamp: s.optional(s.dateTime()),
  duration: s.optional(s.int()),
});
