import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createFieldRequestSchema, type CreateFieldRequest } from "./create-field-request.js";

/** Request body for creating a new table within a base. */
export type CreateTableRequest = {
  /** The name of the new table. */
  name: string;
  /** The description of the new table. */
  description?: string;
  /** The field definitions for the table. At least one field is required. */
  fields: CreateFieldRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createTableRequestProperties: s.Shape<CreateTableRequest> = {
  name: s.string(),
  description: s.optional(s.string()),
  fields: s.array(s.lazy(() => createFieldRequestSchema)),
};

export const createTableRequestInternalSchema: Schema<CreateTableRequest> = s.object<CreateTableRequest>(
  createTableRequestProperties,
  { additionalProperties: s.json() },
);

export const createTableRequestSchema: Schema<CreateTableRequest> = s.lazySchema(() =>
  s.object<CreateTableRequest>(
    {
      ...createTableRequestProperties,
      fields: s.array(s.lazy(() => createFieldRequestSchema)).check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
