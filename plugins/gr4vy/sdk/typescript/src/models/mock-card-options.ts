import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  merchantAdviceCodeModelSchema,
  type MerchantAdviceCodeModel,
} from "./unions/merchant-advice-code-model.js";
import { skipRetrySchema, type SkipRetry } from "./unions/skip-retry.js";

export type MockCardOptions = {
  /** Allows for mocking the merchant advice code. */
  merchantAdviceCode?: MerchantAdviceCodeModel;
  /** When set to true, prevents retries on failed transactions. */
  skipRetry?: SkipRetry;
};

export const mockCardOptionsSchema: Schema<MockCardOptions> = s.object<MockCardOptions>({
  merchantAdviceCode: s.optional(s.lazy(() => merchantAdviceCodeModelSchema)),
  skipRetry: s.optional(s.lazy(() => skipRetrySchema)),
  _keysMap: {
    merchantAdviceCode: "merchant_advice_code",
    skipRetry: "skip_retry",
  },
});
