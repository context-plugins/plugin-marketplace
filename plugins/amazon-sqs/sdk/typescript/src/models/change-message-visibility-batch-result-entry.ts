import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChangeMessageVisibilityBatchResultEntry = {
  /** Represents a message whose visibility timeout has been changed successfully. */
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const changeMessageVisibilityBatchResultEntrySchema: Schema<ChangeMessageVisibilityBatchResultEntry> =
  s.object<ChangeMessageVisibilityBatchResultEntry>(
    {
      id: s.string(),
      _keysMap: {
        id: "Id",
      },
    },
    { additionalProperties: s.json() },
  );
