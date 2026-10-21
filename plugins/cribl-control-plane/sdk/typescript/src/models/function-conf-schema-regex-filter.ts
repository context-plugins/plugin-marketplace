import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalRegexSchema, type AdditionalRegex } from "./additional-regex.js";

export type FunctionConfSchemaRegexFilter = {
  /** Regex to test against */
  regex?: string;
  /** Additional regex patterns to test against the field. */
  regexList?: AdditionalRegex[];
  /** Name of the field to apply the regex on (defaults to _raw) */
  field?: string;
};

export const functionConfSchemaRegexFilterSchema: Schema<FunctionConfSchemaRegexFilter> =
  s.object<FunctionConfSchemaRegexFilter>({
    regex: s.optional(s.string()),
    regexList: s.optional(s.array(s.lazy(() => additionalRegexSchema))),
    field: s.optional(s.string()),
  });
