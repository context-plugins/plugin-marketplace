import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputTypeSchema, type InputType } from "./input-type.js";
import { ruleSchema, type Rule } from "./rule.js";
import { tagSchema, type Tag } from "./tag.js";

export type CategoryProperties = {
  /**
   * The name of the Call Analytics category. Category names are case sensitive and must be unique
   * within an Amazon Web Services account.
   */
  categoryName?: string;
  /**
   * The rules used to define a Call Analytics category. Each category can have between 1 and 20
   * rules.
   */
  rules?: Rule[];
  /**
   * The date and time the specified Call Analytics category was created. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00
   * represents 12:32 PM UTC-7 on May 4, 2022.
   */
  createTime?: Date;
  /**
   * The date and time the specified Call Analytics category was last updated. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-05T12:45:32.691000-07:00
   * represents 12:45 PM UTC-7 on May 5, 2022.
   */
  lastUpdateTime?: Date;
  /**
   * The tags, each in the form of a key:value pair, assigned to the specified call analytics
   * category.
   */
  tags?: Tag[];
  /**
   * The input type associated with the specified category. POST_CALL refers to a category that is
   * applied to batch transcriptions; REAL_TIME refers to a category that is applied to streaming
   * transcriptions.
   */
  inputType?: InputType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const categoryPropertiesSchema: Schema<CategoryProperties> = s.object<CategoryProperties>(
  {
    categoryName: s.optional(s.string()),
    rules: s.optional(s.array(s.lazy(() => ruleSchema))),
    createTime: s.optional(s.dateTime()),
    lastUpdateTime: s.optional(s.dateTime()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    inputType: s.optional(s.lazy(() => inputTypeSchema)),
    _keysMap: {
      categoryName: "CategoryName",
      rules: "Rules",
      createTime: "CreateTime",
      lastUpdateTime: "LastUpdateTime",
      tags: "Tags",
      inputType: "InputType",
    },
  },
  { additionalProperties: s.json() },
);
