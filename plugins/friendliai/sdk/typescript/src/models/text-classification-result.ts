import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { baseClassificationDataSchema, type BaseClassificationData } from "./base-classification-data.js";
import { textClassificationUsageSchema, type TextClassificationUsage } from "./text-classification-usage.js";

export type TextClassificationResult = {
  data: BaseClassificationData[];
  /** The object type, which is always set to `list`. @default "list" */
  object?: "list";
  usage: TextClassificationUsage;
};

export const textClassificationResultSchema: Schema<TextClassificationResult> =
  s.object<TextClassificationResult>({
    data: s.array(s.lazy(() => baseClassificationDataSchema)),
    object: s.defaulted(s.literal("list"), "list"),
    usage: textClassificationUsageSchema,
  });
