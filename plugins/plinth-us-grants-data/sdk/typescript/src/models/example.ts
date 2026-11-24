import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Example = {
  _1: "1",
  Strict: "strict",
  SubjectPcs: "subject_pcs",
  Unsupported: "unsupported",
  Xml: "xml",
  List: "list",
} as const;
export type Example = (typeof Example)[keyof typeof Example] | (string & {});

export const exampleSchema: EnumSchema<Example> = s.enumOf<Example>(Example);
