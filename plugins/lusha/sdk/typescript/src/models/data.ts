import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runScopeSchema, type RunScope } from "./run-scope.js";

export type Data = {
  columnId?: string;
  /**
   * Controls which rows a column operation applies to. `all` re-runs every row, including
   * already-processed ones. `missing` only runs rows that don't have a value for this column yet.
   * `specific` requires `entityIds`.
   */
  runScope?: RunScope;
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSchema: Schema<Data> = s.object<Data>(
  {
    columnId: s.optional(s.string()),
    runScope: s.optional(s.lazy(() => runScopeSchema)),
    status: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
