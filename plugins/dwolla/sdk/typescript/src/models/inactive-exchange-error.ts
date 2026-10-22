import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InactiveExchangeError = {
  code: string;
  message: string;
};

export const inactiveExchangeErrorSchema: Schema<InactiveExchangeError> = s.object<InactiveExchangeError>({
  code: s.string(),
  message: s.string(),
});
