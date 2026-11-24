import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateEntityRecognizerResponse = {
  /** The Amazon Resource Name (ARN) that identifies the entity recognizer. */
  entityRecognizerArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createEntityRecognizerResponseSchema: Schema<CreateEntityRecognizerResponse> =
  s.object<CreateEntityRecognizerResponse>(
    {
      entityRecognizerArn: s.optional(s.string()),
      _keysMap: {
        entityRecognizerArn: "EntityRecognizerArn",
      },
    },
    { additionalProperties: s.json() },
  );
