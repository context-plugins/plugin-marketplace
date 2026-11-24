import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValidationExceptionField = {
  /** The name of the field. */
  name: string;
  /**
   * The message associated with the validation exception with information to help determine its
   * cause.
   */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validationExceptionFieldSchema: Schema<ValidationExceptionField> =
  s.object<ValidationExceptionField>(
    {
      name: s.string(),
      message: s.string(),
      _keysMap: {
        name: "Name",
        message: "Message",
      },
    },
    { additionalProperties: s.json() },
  );
