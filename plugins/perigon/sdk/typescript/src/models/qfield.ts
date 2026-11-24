import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Qfield = {
  Title: "TITLE",
  Description: "DESCRIPTION",
  Content: "CONTENT",
  Summary: "SUMMARY",
} as const;
export type Qfield = (typeof Qfield)[keyof typeof Qfield] | (string & {});

export const qfieldSchema: EnumSchema<Qfield> = s.enumOf<Qfield>(Qfield);
