import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  maxSubscriptionsReachedErrorSchema,
  type MaxSubscriptionsReachedError,
} from "./max-subscriptions-reached-error.js";

export type ValidationErrorSchemaError = {
  code: string;
  message: string;
  embedded?: MaxSubscriptionsReachedError;
};

export const validationErrorSchemaErrorSchema: Schema<ValidationErrorSchemaError> =
  s.object<ValidationErrorSchemaError>({
    code: s.string(),
    message: s.string(),
    embedded: s.optional(s.lazy(() => maxSubscriptionsReachedErrorSchema)),
    _keysMap: {
      embedded: "_embedded",
    },
  });
