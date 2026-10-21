import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvalidExchange = {
  code: string;
  message: string;
};

export const invalidExchangeSchema: Schema<InvalidExchange> = s.object<InvalidExchange>({
  code: s.string(),
  message: s.string(),
});
