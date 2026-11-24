import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputType2Schema, type InputType2 } from "./input-type2.js";
import { ruleSchema, type Rule } from "./rule.js";

export type UpdateCallAnalyticsCategoryRequest = {
  /**
   * The name of the Call Analytics category you want to update. Category names are case sensitive.
   */
  categoryName: string;
  /**
   * The rules used for the updated Call Analytics category. The rules you provide in this field
   * replace the ones that are currently being used in the specified category.
   */
  rules: Rule[];
  /**
   * Choose whether you want to update a real-time or a post-call category. The input type you
   * specify must match the input type specified when the category was created. For example, if you
   * created a category with the POST_CALL input type, you must use POST_CALL as the input type when
   * updating this category.
   */
  inputType?: InputType2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateCallAnalyticsCategoryRequestSchema: Schema<UpdateCallAnalyticsCategoryRequest> =
  s.object<UpdateCallAnalyticsCategoryRequest>(
    {
      categoryName: s.string(),
      rules: s.array(s.lazy(() => ruleSchema)),
      inputType: s.optional(s.lazy(() => inputType2Schema)),
      _keysMap: {
        categoryName: "CategoryName",
        rules: "Rules",
        inputType: "InputType",
      },
    },
    { additionalProperties: s.json() },
  );
