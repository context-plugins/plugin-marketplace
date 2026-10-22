import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { variableSchema, type Variable } from "../variable.js";

export type Variables = Variable[];

export const variablesSchema: Schema<Variables> = s.of<Variables>(
  s.union([s.array(s.lazy(() => variableSchema))]),
);
