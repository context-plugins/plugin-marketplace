import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";
import { typeSchema, type Type } from "./type.js";

/** The canonical error object (§6.4). `code` is the SINGLE source of truth for error sub-codes. */
export type Error = {
  type: Type;
  /** Error sub-code; each has a docs page at https://stayingapi.com/docs/errors/<code>. */
  code: Code;
  message: string;
  param?: string | null;
  requestId: string;
  /** Errors never bill (always 0). @default 0 */
  creditsCharged?: 0;
  retryable: boolean;
  docUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const errorProperties: s.Shape<Error> = {
  type: typeSchema,
  code: codeSchema,
  message: s.string(),
  param: s.optionalNullable(s.string()),
  requestId: s.string(),
  creditsCharged: s.defaulted(s.literal(0), 0),
  retryable: s.boolean(),
  docUrl: s.string(),
};

export const errorInternalSchema: Schema<Error> = s.object<Error>(errorProperties, {
  additionalProperties: s.json(),
});

export const errorSchema: Schema<Error> = s.lazySchema(() =>
  s.object<Error>(
    {
      ...errorProperties,
      requestId: s.string().check(s.pattern("^req_[0-9A-HJKMNP-TV-Z]{26}$")),
      docUrl: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
