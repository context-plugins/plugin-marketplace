import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeLushaWebhooksApiSchema, type CodeLushaWebhooksApi } from "./code-lusha-webhooks-api.js";

export type Error = {
  code: CodeLushaWebhooksApi;
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    code: codeLushaWebhooksApiSchema,
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
