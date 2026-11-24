import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteMessageBatchResultEntry = {
  /** Represents a successfully deleted message. */
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteMessageBatchResultEntrySchema: Schema<DeleteMessageBatchResultEntry> =
  s.object<DeleteMessageBatchResultEntry>(
    {
      id: s.string(),
      _keysMap: {
        id: "Id",
      },
    },
    { additionalProperties: s.json() },
  );
