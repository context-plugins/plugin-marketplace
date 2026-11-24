import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sourceAccessSchema, type SourceAccess } from "../source-access.js";

export type SourceAccess1 = SourceAccess;

export const sourceAccess1Schema: Schema<SourceAccess1> = s.of<SourceAccess1>(
  s.union([s.lazy(() => sourceAccessSchema)]),
);
