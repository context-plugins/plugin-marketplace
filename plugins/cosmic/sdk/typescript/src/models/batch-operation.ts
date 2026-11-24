import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { methodSchema, type Method } from "./method.js";

/** One operation in a batch request. */
export type BatchOperation = {
  method: Method;
  /** Required for `edit` and `delete`. */
  objectId?: string;
  /**
   * Required for `add` and `edit`. Accepts the same properties as the single-Object create and
   * update endpoints.
   */
  object?: Record<string, unknown>;
  triggerWebhook?: boolean;
};

export const batchOperationSchema: Schema<BatchOperation> = s.object<BatchOperation>({
  method: methodSchema,
  objectId: s.optional(s.string()),
  object: s.optional(s.record(s.string(), s.unknown())),
  triggerWebhook: s.optional(s.boolean()),
  _keysMap: {
    objectId: "object_id",
    triggerWebhook: "trigger_webhook",
  },
});
