import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error = {
  /** @default "This campaign has already raised money, and can not be deleted." */
  message?: "This campaign has already raised money, and can not be deleted.";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    message: s.defaulted(
      s.literal("This campaign has already raised money, and can not be deleted."),
      "This campaign has already raised money, and can not be deleted.",
    ),
  },
  { additionalProperties: s.json() },
);
