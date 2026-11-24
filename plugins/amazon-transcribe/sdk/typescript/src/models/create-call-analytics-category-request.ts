import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputType1Schema, type InputType1 } from "./input-type1.js";
import { ruleSchema, type Rule } from "./rule.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateCallAnalyticsCategoryRequest = {
  /**
   * A unique name, chosen by you, for your Call Analytics category. It's helpful to use a detailed
   * naming system that will make sense to you in the future. For example, it's better to use
   * sentiment-positive-last30seconds for a category over a generic name like test-category.
   * Category names are case sensitive.
   */
  categoryName: string;
  /**
   * Rules define a Call Analytics category. When creating a new category, you must create between 1
   * and 20 rules for that category. For each rule, you specify a filter you want applied to the
   * attributes of a call. For example, you can choose a sentiment filter that detects if a
   * customer's sentiment was positive during the last 30 seconds of the call.
   */
  rules: Rule[];
  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to a new call analytics
   * category at the time you start this new job. To learn more about using tags with Amazon
   * Transcribe, refer to Tagging resources.
   */
  tags?: Tag[];
  /**
   * Choose whether you want to create a real-time or a post-call category for your Call Analytics
   * transcription. Specifying POST_CALL assigns your category to post-call transcriptions;
   * categories with this input type cannot be applied to streaming (real-time) transcriptions.
   * Specifying REAL_TIME assigns your category to streaming transcriptions; categories with this
   * input type cannot be applied to post-call transcriptions. If you do not include InputType, your
   * category is created as a post-call category by default.
   */
  inputType?: InputType1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createCallAnalyticsCategoryRequestSchema: Schema<CreateCallAnalyticsCategoryRequest> =
  s.object<CreateCallAnalyticsCategoryRequest>(
    {
      categoryName: s.string(),
      rules: s.array(s.lazy(() => ruleSchema)),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      inputType: s.optional(s.lazy(() => inputType1Schema)),
      _keysMap: {
        categoryName: "CategoryName",
        rules: "Rules",
        tags: "Tags",
        inputType: "InputType",
      },
    },
    { additionalProperties: s.json() },
  );
