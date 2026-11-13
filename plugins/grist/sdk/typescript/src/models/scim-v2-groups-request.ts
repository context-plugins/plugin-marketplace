import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { patchItemSchema, type PatchItem } from "./patch-item.js";
import { schema9Schema, type Schema9 } from "./schema9.js";

export type ScimV2GroupsRequest = {
  schemas?: Schema9[];
  operations?: PatchItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scimV2GroupsRequestSchema: Schema<ScimV2GroupsRequest> = s.object<ScimV2GroupsRequest>(
  {
    schemas: s.optional(s.array(s.lazy(() => schema9Schema))),
    operations: s.optional(s.array(s.lazy(() => patchItemSchema))),
    _keysMap: {
      operations: "Operations",
    },
  },
  { additionalProperties: s.json() },
);
