import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeneficialOwnersDocuments413Error = {
  code?: string;
  message?: string;
};

export const beneficialOwnersDocuments413ErrorSchema: Schema<BeneficialOwnersDocuments413Error> =
  s.object<BeneficialOwnersDocuments413Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
