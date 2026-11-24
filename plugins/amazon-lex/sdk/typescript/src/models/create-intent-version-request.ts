import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateIntentVersionRequest = {
  /**
   * The name of the intent that you want to create a new version of. The name is case sensitive.
   */
  name: string;
  /**
   * Checksum of the $LATEST version of the intent that should be used to create the new version. If
   * you specify a checksum and the $LATEST version of the intent has a different checksum, Amazon
   * Lex returns a PreconditionFailedException exception and doesn't publish a new version. If you
   * don't specify a checksum, Amazon Lex publishes the $LATEST version.
   */
  checksum?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createIntentVersionRequestSchema: Schema<CreateIntentVersionRequest> =
  s.object<CreateIntentVersionRequest>(
    {
      name: s.string(),
      checksum: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
