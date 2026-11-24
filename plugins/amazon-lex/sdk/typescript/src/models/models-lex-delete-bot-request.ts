import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ModelsLexDeleteBotRequest = {
  /** The name of the bot. The name is case sensitive. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexDeleteBotRequestSchema: Schema<ModelsLexDeleteBotRequest> =
  s.object<ModelsLexDeleteBotRequest>(
    {
      name: s.string(),
    },
    { additionalProperties: s.json() },
  );
