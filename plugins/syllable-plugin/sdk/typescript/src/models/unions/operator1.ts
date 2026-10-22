import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { operatorSchema, type Operator } from "../operator.js";

/** The operator to use for the comparison. Currently only supports "eq" */
export type Operator1 = Operator;

export const operator1Schema: Schema<Operator1> = s.of<Operator1>(s.union([s.lazy(() => operatorSchema)]));
