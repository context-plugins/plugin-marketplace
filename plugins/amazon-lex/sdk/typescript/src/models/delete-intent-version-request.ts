import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteIntentVersionRequest = {
  /** The name of the intent. */
  name: string;
  /**
   * The version of the intent to delete. You cannot delete the $LATEST version of the intent. To
   * delete the $LATEST version, use the DeleteIntent operation.
   */
  version: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteIntentVersionRequestSchema: Schema<DeleteIntentVersionRequest> =
  s.object<DeleteIntentVersionRequest>(
    {
      name: s.string(),
      version: s.string(),
    },
    { additionalProperties: s.json() },
  );
