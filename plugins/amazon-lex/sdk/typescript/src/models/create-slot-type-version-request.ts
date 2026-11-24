import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateSlotTypeVersionRequest = {
  /**
   * The name of the slot type that you want to create a new version for. The name is case
   * sensitive.
   */
  name: string;
  /**
   * Checksum for the $LATEST version of the slot type that you want to publish. If you specify a
   * checksum and the $LATEST version of the slot type has a different checksum, Amazon Lex returns
   * a PreconditionFailedException exception and doesn't publish the new version. If you don't
   * specify a checksum, Amazon Lex publishes the $LATEST version.
   */
  checksum?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSlotTypeVersionRequestSchema: Schema<CreateSlotTypeVersionRequest> =
  s.object<CreateSlotTypeVersionRequest>(
    {
      name: s.string(),
      checksum: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
