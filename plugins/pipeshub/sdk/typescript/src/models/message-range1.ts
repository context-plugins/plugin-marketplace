import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessageRange1 = {
  start?: number;
  end?: number;
};

export const messageRange1Schema: Schema<MessageRange1> = s.object<MessageRange1>({
  start: s.optional(s.int()),
  end: s.optional(s.int()),
});
