import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ModelsLexDeleteBotVersionRequest = {
  /** The name of the bot. */
  name: string;
  /**
   * The version of the bot to delete. You cannot delete the $LATEST version of the bot. To delete
   * the $LATEST version, use the DeleteBot operation.
   */
  version: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexDeleteBotVersionRequestSchema: Schema<ModelsLexDeleteBotVersionRequest> =
  s.object<ModelsLexDeleteBotVersionRequest>(
    {
      name: s.string(),
      version: s.string(),
    },
    { additionalProperties: s.json() },
  );
