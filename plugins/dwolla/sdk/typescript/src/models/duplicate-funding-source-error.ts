import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DuplicateFundingSourceError = {
  code: string;
  message: string;
};

export const duplicateFundingSourceErrorSchema: Schema<DuplicateFundingSourceError> =
  s.object<DuplicateFundingSourceError>({
    code: s.string(),
    message: s.string(),
  });
