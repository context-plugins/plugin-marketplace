import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sourcePolicySchema, type SourcePolicy } from "../source-policy.js";

/**
 * Domain filtering preferences: preferred and disallowed domains for monitor search results.,
 * Domain and date filtering preferences for search results., Optional source policy governing
 * preferred and disallowed domains in web search results.
 */
export type SourcePolicy1 = SourcePolicy;

export const sourcePolicy1Schema: Schema<SourcePolicy1> = s.of<SourcePolicy1>(
  s.union([s.lazy(() => sourcePolicySchema)]),
);
