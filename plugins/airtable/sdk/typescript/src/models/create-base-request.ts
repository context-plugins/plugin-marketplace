import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tableInternalSchema, tableSchema, type Table } from "./table.js";

/** Request body for creating a new base. */
export type CreateBaseRequest = {
  /** The name of the new base. */
  name: string;
  /** The ID of the workspace where the base will be created (starts with 'wsp'). */
  workspaceId: string;
  /** The initial table definitions for the base. */
  tables: Table[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createBaseRequestProperties: s.Shape<CreateBaseRequest> = {
  name: s.string(),
  workspaceId: s.string(),
  tables: s.array(s.lazy(() => tableInternalSchema)),
};

export const createBaseRequestInternalSchema: Schema<CreateBaseRequest> = s.object<CreateBaseRequest>(
  createBaseRequestProperties,
  { additionalProperties: s.json() },
);

export const createBaseRequestSchema: Schema<CreateBaseRequest> = s.lazySchema(() =>
  s.object<CreateBaseRequest>(
    {
      ...createBaseRequestProperties,
      tables: s.array(s.lazy(() => tableSchema)).check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
