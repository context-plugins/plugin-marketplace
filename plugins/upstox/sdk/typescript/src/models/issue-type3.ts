import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IssueType3 = {
  Regular: "regular",
  Sme: "sme",
} as const;
export type IssueType3 = (typeof IssueType3)[keyof typeof IssueType3] | (string & {});

export const issueType3Schema: EnumSchema<IssueType3> = s.enumOf<IssueType3>(IssueType3);
