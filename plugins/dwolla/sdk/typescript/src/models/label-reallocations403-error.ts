import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LabelReallocations403Error = {
  code?: string;
  message?: string;
};

export const labelReallocations403ErrorSchema: Schema<LabelReallocations403Error> =
  s.object<LabelReallocations403Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
