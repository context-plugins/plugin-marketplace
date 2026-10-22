import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Topic = {
  id: string;
  name: string;
};

export const topicSchema: Schema<Topic> = s.object<Topic>({
  id: s.string(),
  name: s.string(),
});
