import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BatchResultErrorEntry = {
  /** The Id of an entry in a batch request. */
  id: string;
  /** Specifies whether the error happened due to the caller of the batch API action. */
  senderFault: boolean;
  /** An error code representing why the action failed on this entry. */
  code: string;
  /** A message explaining why the action failed on this entry. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchResultErrorEntrySchema: Schema<BatchResultErrorEntry> = s.object<BatchResultErrorEntry>(
  {
    id: s.string(),
    senderFault: s.boolean(),
    code: s.string(),
    message: s.optional(s.string()),
    _keysMap: {
      id: "Id",
      senderFault: "SenderFault",
      code: "Code",
      message: "Message",
    },
  },
  { additionalProperties: s.json() },
);
