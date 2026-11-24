import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Principal = {
  /**
   * The name of the Amazon Web Services service that should allowed or denied access to an Amazon
   * Lex action.
   */
  service?: string;
  /** The Amazon Resource Name (ARN) of the principal. */
  arn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const principalSchema: Schema<Principal> = s.object<Principal>(
  {
    service: s.optional(s.string()),
    arn: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
