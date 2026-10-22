import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta = {
  requestId?: string;
  timestamp: Date;
  duration: number;
};

export const metaSchema: Schema<Meta> = s.object<Meta>({
  requestId: s.optional(s.string()),
  timestamp: s.dateTime(),
  duration: s.int(),
});
