import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusAfterSchema, type StatusAfter } from "./status-after.js";
import { statusBeforeSchema, type StatusBefore } from "./status-before.js";

export type ResultBundleSocialPostApi = {
  postId: string;
  title?: string | null;
  success: boolean;
  statusBefore?: StatusBefore;
  statusAfter?: StatusAfter;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultBundleSocialPostApiSchema: Schema<ResultBundleSocialPostApi> =
  s.object<ResultBundleSocialPostApi>(
    {
      postId: s.string(),
      title: s.optionalNullable(s.string()),
      success: s.boolean(),
      statusBefore: s.optional(s.lazy(() => statusBeforeSchema)),
      statusAfter: s.optional(s.lazy(() => statusAfterSchema)),
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
