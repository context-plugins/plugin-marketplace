import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { patchItemSchema, type PatchItem } from "./patch-item.js";
import { schema9Schema, type Schema9 } from "./schema9.js";

export type ScimV2RolesRequest = {
  schemas?: Schema9[];
  operations?: PatchItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scimV2RolesRequestSchema: Schema<ScimV2RolesRequest> = s.object<ScimV2RolesRequest>(
  {
    schemas: s.optional(s.array(s.lazy(() => schema9Schema))),
    operations: s.optional(s.array(s.lazy(() => patchItemSchema))),
    _keysMap: {
      operations: "Operations",
    },
  },
  { additionalProperties: s.json() },
);
