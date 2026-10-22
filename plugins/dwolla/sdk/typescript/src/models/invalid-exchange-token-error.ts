import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvalidExchangeTokenError = {
  code: string;
  message: string;
};

export const invalidExchangeTokenErrorSchema: Schema<InvalidExchangeTokenError> =
  s.object<InvalidExchangeTokenError>({
    code: s.string(),
    message: s.string(),
  });
