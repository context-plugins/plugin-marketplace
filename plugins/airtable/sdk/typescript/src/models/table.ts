import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createFieldRequestSchema, type CreateFieldRequest } from "./create-field-request.js";

export type Table = {
  /** The name of the table. */
  name: string;
  /** The description of the table. */
  description?: string;
  /** The field definitions for the table. */
  fields: CreateFieldRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tableProperties: s.Shape<Table> = {
  name: s.string(),
  description: s.optional(s.string()),
  fields: s.array(s.lazy(() => createFieldRequestSchema)),
};

export const tableInternalSchema: Schema<Table> = s.object<Table>(tableProperties, {
  additionalProperties: s.json(),
});

export const tableSchema: Schema<Table> = s.lazySchema(() =>
  s.object<Table>(
    {
      ...tableProperties,
      fields: s.array(s.lazy(() => createFieldRequestSchema)).check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
