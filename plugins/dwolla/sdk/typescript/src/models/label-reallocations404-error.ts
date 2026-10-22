import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LabelReallocations404Error = {
  code?: string;
  message?: string;
};

export const labelReallocations404ErrorSchema: Schema<LabelReallocations404Error> =
  s.object<LabelReallocations404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
