import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IamDiff = {
  missing?: string[];
  extra?: string[];
};

export const iamDiffSchema: Schema<IamDiff> = s.object<IamDiff>({
  missing: s.optional(s.array(s.string())),
  extra: s.optional(s.array(s.string())),
});
