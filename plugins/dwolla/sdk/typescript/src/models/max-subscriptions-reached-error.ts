import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MaxSubscriptionsReachedError = {
  code?: string;
  message?: string;
};

export const maxSubscriptionsReachedErrorSchema: Schema<MaxSubscriptionsReachedError> =
  s.object<MaxSubscriptionsReachedError>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
