import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteSourceCredentialsInput = {
  /** The Amazon Resource Name (ARN) of the token. */
  arn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteSourceCredentialsInputSchema: Schema<DeleteSourceCredentialsInput> =
  s.object<DeleteSourceCredentialsInput>(
    {
      arn: s.string(),
    },
    { additionalProperties: s.json() },
  );
