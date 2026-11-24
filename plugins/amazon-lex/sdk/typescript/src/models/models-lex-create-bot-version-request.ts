import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ModelsLexCreateBotVersionRequest = {
  /** The name of the bot that you want to create a new version of. The name is case sensitive. */
  name: string;
  /**
   * Identifies a specific revision of the $LATEST version of the bot. If you specify a checksum and
   * the $LATEST version of the bot has a different checksum, a PreconditionFailedException
   * exception is returned and Amazon Lex doesn't publish a new version. If you don't specify a
   * checksum, Amazon Lex publishes the $LATEST version.
   */
  checksum?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexCreateBotVersionRequestSchema: Schema<ModelsLexCreateBotVersionRequest> =
  s.object<ModelsLexCreateBotVersionRequest>(
    {
      name: s.string(),
      checksum: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
