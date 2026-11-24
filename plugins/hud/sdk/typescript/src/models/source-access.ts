import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SourceAccess = {
  Team: "team",
  Published: "published",
} as const;
export type SourceAccess = (typeof SourceAccess)[keyof typeof SourceAccess] | (string & {});

export const sourceAccessSchema: EnumSchema<SourceAccess> = s.enumOf<SourceAccess>(SourceAccess);
