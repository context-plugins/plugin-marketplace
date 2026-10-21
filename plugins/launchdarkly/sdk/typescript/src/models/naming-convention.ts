import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { caseSchema, type Case } from "./case.js";

export type NamingConvention = {
  /** The casing convention to enforce for new flag keys in this project */
  case?: Case;
  /** The prefix to enforce for new flag keys in this project */
  prefix?: string;
};

export const namingConventionSchema: Schema<NamingConvention> = s.object<NamingConvention>({
  case: s.optional(s.lazy(() => caseSchema)),
  prefix: s.optional(s.string()),
});
