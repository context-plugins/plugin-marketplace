import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessageRange = {
  start: number;
  end: number;
};

export const messageRangeSchema: Schema<MessageRange> = s.object<MessageRange>({
  start: s.int(),
  end: s.int(),
});
