import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Clause = {
  id?: string;
  attribute: string;
  op: string;
  values: Record<string, unknown>[];
  contextKind?: string;
  negate: boolean;
};

export const clauseSchema: Schema<Clause> = s.object<Clause>({
  id: s.optional(s.string()),
  attribute: s.string(),
  op: s.string(),
  values: s.array(s.record(s.string(), s.unknown())),
  contextKind: s.optional(s.string()),
  negate: s.boolean(),
  _keysMap: {
    id: "_id",
  },
});
