import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteSlotTypeVersionRequest = {
  /** The name of the slot type. */
  name: string;
  /**
   * The version of the slot type to delete. You cannot delete the $LATEST version of the slot type.
   * To delete the $LATEST version, use the DeleteSlotType operation.
   */
  version: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteSlotTypeVersionRequestSchema: Schema<DeleteSlotTypeVersionRequest> =
  s.object<DeleteSlotTypeVersionRequest>(
    {
      name: s.string(),
      version: s.string(),
    },
    { additionalProperties: s.json() },
  );
