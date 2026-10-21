import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { codeLineSchema, type CodeLine } from "./code-line.js";

export type Code = {
  repoName?: string;
  fileName?: string;
  fileUrl?: string;
  lines?: CodeLine[];
  /** Last file match for a repo */
  isLastMatch?: boolean;
};

export const codeSchema: Schema<Code> = s.object<Code>({
  repoName: s.optional(s.string()),
  fileName: s.optional(s.string()),
  fileUrl: s.optional(s.string()),
  lines: s.optional(s.array(s.lazy(() => codeLineSchema))),
  isLastMatch: s.optional(s.boolean()),
});
