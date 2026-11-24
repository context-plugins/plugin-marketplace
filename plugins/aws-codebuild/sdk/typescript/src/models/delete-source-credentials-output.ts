import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteSourceCredentialsOutput = {
  /** The Amazon Resource Name (ARN) of the token. */
  arn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteSourceCredentialsOutputSchema: Schema<DeleteSourceCredentialsOutput> =
  s.object<DeleteSourceCredentialsOutput>(
    {
      arn: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
