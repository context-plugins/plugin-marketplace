import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  mockCardMerchantAdviceCodeOptionsSchema,
  type MockCardMerchantAdviceCodeOptions,
} from "../mock-card-merchant-advice-code-options.js";

/** Allows for mocking the merchant advice code. */
export type MerchantAdviceCodeModel = MockCardMerchantAdviceCodeOptions;

export const merchantAdviceCodeModelSchema: Schema<MerchantAdviceCodeModel> = s.of<MerchantAdviceCodeModel>(
  s.union([s.lazy(() => mockCardMerchantAdviceCodeOptionsSchema)]),
);
