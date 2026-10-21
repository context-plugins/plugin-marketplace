import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { schemaModelSchema, type SchemaModel } from "./schema-model.js";

export type Task1 = {
  /** Task Id, a unique identifier for a task assigned to an End User during a Journey. */
  taskId: string;
  schema: SchemaModel;
};

export const task1Schema: Schema<Task1> = s.object<Task1>({
  taskId: s.string(),
  schema: schemaModelSchema,
});
