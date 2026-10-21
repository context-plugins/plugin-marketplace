import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  maxSubscriptionsReachedErrorSchema,
  type MaxSubscriptionsReachedError,
} from "./max-subscriptions-reached-error.js";

export type BadRequestSchema = {
  code: string;
  message: string;
  embedded?: MaxSubscriptionsReachedError;
};

export const badRequestSchemaSchema: Schema<BadRequestSchema> = s.object<BadRequestSchema>({
  code: s.string(),
  message: s.string(),
  embedded: s.optional(s.lazy(() => maxSubscriptionsReachedErrorSchema)),
  _keysMap: {
    embedded: "_embedded",
  },
});
