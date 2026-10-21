import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvalidExchangeToken = {
  code: string;
  message: string;
};

export const invalidExchangeTokenSchema: Schema<InvalidExchangeToken> = s.object<InvalidExchangeToken>({
  code: s.string(),
  message: s.string(),
});
