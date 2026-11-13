import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { operation1Schema, type Operation1 } from "./operation1.js";
import { schema11Schema, type Schema11 } from "./schema11.js";

export type ScimV2BulkRequest = {
  schemas?: Schema11[];
  /** List of operations to be executed. */
  operations?: Operation1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scimV2BulkRequestSchema: Schema<ScimV2BulkRequest> = s.object<ScimV2BulkRequest>(
  {
    schemas: s.optional(s.array(s.lazy(() => schema11Schema))),
    operations: s.optional(s.array(s.lazy(() => operation1Schema))),
    _keysMap: {
      operations: "Operations",
    },
  },
  { additionalProperties: s.json() },
);
