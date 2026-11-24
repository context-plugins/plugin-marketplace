import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SummarizeField = {
  Title: "TITLE",
  Content: "CONTENT",
  Summary: "SUMMARY",
} as const;
export type SummarizeField = (typeof SummarizeField)[keyof typeof SummarizeField] | (string & {});

export const summarizeFieldSchema: EnumSchema<SummarizeField> = s.enumOf<SummarizeField>(SummarizeField);
