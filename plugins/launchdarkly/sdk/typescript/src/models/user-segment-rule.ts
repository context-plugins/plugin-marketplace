import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clauseSchema, type Clause } from "./clause.js";

export type UserSegmentRule = {
  id?: string;
  clauses: Clause[];
  weight?: number;
  rolloutContextKind?: string;
  bucketBy?: string;
  description?: string;
};

export const userSegmentRuleSchema: Schema<UserSegmentRule> = s.object<UserSegmentRule>({
  id: s.optional(s.string()),
  clauses: s.array(s.lazy(() => clauseSchema)),
  weight: s.optional(s.int()),
  rolloutContextKind: s.optional(s.string()),
  bucketBy: s.optional(s.string()),
  description: s.optional(s.string()),
  _keysMap: {
    id: "_id",
  },
});
