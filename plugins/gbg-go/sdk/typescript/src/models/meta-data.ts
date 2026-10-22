import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MetaData = {
  createdTime?: string;
  completedTime?: string;
};

export const metaDataSchema: Schema<MetaData> = s.object<MetaData>({
  createdTime: s.optional(s.string()),
  completedTime: s.optional(s.string()),
});
