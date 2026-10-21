import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Tag = {
  name?: string;
};

export const tagSchema: Schema<Tag> = s.object<Tag>({
  name: s.optional(s.string()),
});
