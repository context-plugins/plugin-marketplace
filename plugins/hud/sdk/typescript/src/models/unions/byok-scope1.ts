import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { byokScopeSchema, type ByokScope } from "../byok-scope.js";

export type ByokScope1 = ByokScope;

export const byokScope1Schema: Schema<ByokScope1> = s.of<ByokScope1>(
  s.union([s.lazy(() => byokScopeSchema)]),
);
