import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BotExportSpecification = {
  /** The identifier of the bot assigned by Amazon Lex. */
  botId: string;
  /** The version of the bot that was exported. This will be either DRAFT or the version number. */
  botVersion: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botExportSpecificationSchema: Schema<BotExportSpecification> = s.object<BotExportSpecification>(
  {
    botId: s.string(),
    botVersion: s.string(),
  },
  { additionalProperties: s.json() },
);
