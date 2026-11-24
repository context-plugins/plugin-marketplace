import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Issue type of the IPO. `regular` is a mainboard issue */
export const IssueType = {
  Regular: "regular",
  Sme: "sme",
} as const;
export type IssueType = (typeof IssueType)[keyof typeof IssueType] | (string & {});

export const issueTypeSchema: EnumSchema<IssueType> = s.enumOf<IssueType>(IssueType);
