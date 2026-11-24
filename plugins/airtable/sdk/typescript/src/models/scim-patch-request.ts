import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { operationSchema, type Operation } from "./operation.js";

/** A SCIM 2.0 PATCH request with one or more operations. */
export type ScimPatchRequest = {
  schemas: string[];
  /** The list of PATCH operations to apply. */
  operations: Operation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scimPatchRequestSchema: Schema<ScimPatchRequest> = s.object<ScimPatchRequest>(
  {
    schemas: s.array(s.string()),
    operations: s.array(s.lazy(() => operationSchema)),
    _keysMap: {
      operations: "Operations",
    },
  },
  { additionalProperties: s.json() },
);
