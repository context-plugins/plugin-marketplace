import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tableSchemaSchema, type TableSchema } from "./table-schema.js";

/** The full schema of a base including all tables. */
export type BaseSchema = {
  /** The unique identifier of the base. */
  id: string;
  /** The name of the base. */
  name?: string;
  tables: TableSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const baseSchemaSchema: Schema<BaseSchema> = s.object<BaseSchema>(
  {
    id: s.string(),
    name: s.optional(s.string()),
    tables: s.array(s.lazy(() => tableSchemaSchema)),
  },
  { additionalProperties: s.json() },
);
