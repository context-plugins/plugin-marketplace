import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scimPatchOperationSchema, type ScimPatchOperation } from "./scim-patch-operation.js";

/** A SCIM 2.0 PatchOp request for partial resource updates. */
export type ScimPatchRequest = {
  /** SCIM schema URN identifying this as a PatchOp request. */
  schemas?: string[];
  /** List of PATCH operations to perform. */
  operations?: ScimPatchOperation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scimPatchRequestSchema: Schema<ScimPatchRequest> = s.object<ScimPatchRequest>(
  {
    schemas: s.optional(s.array(s.string())),
    operations: s.optional(s.array(s.lazy(() => scimPatchOperationSchema))),
    _keysMap: {
      operations: "Operations",
    },
  },
  { additionalProperties: s.json() },
);
