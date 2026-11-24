import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { tasksupportSchema, type Tasksupport } from "../tasksupport.js";

export type Tasksupport1 = Tasksupport;

export const tasksupport1Schema: Schema<Tasksupport1> = s.of<Tasksupport1>(
  s.union([s.lazy(() => tasksupportSchema)]),
);
