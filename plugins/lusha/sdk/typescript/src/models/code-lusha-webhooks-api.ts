import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CodeLushaWebhooksApi = {
  NotFound: "NOT_FOUND",
  ValidationError: "VALIDATION_ERROR",
  Forbidden: "FORBIDDEN",
  UnknownError: "UNKNOWN_ERROR",
} as const;
export type CodeLushaWebhooksApi =
  | (typeof CodeLushaWebhooksApi)[keyof typeof CodeLushaWebhooksApi]
  | (string & {});

export const codeLushaWebhooksApiSchema: EnumSchema<CodeLushaWebhooksApi> =
  s.enumOf<CodeLushaWebhooksApi>(CodeLushaWebhooksApi);
