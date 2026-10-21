import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { textRangeSchema, type TextRange } from "./text-range.js";

export type CodeLine = {
  lineNumber?: number;
  content?: string;
  /** Index ranges depicting matched sections of the line */
  ranges?: TextRange[];
};

export const codeLineSchema: Schema<CodeLine> = s.object<CodeLine>({
  lineNumber: s.optional(s.int()),
  content: s.optional(s.string()),
  ranges: s.optional(s.array(s.lazy(() => textRangeSchema))),
});
