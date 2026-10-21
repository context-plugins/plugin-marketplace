import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  maxSubscriptionsReachedErrorSchema,
  type MaxSubscriptionsReachedError,
} from "./max-subscriptions-reached-error.js";

export type ValidationErrorSchema = {
  code: string;
  message: string;
  embedded?: MaxSubscriptionsReachedError;
};

export const validationErrorSchemaSchema: Schema<ValidationErrorSchema> = s.object<ValidationErrorSchema>({
  code: s.string(),
  message: s.string(),
  embedded: s.optional(s.lazy(() => maxSubscriptionsReachedErrorSchema)),
  _keysMap: {
    embedded: "_embedded",
  },
});
