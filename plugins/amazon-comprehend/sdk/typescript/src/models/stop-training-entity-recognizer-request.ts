import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopTrainingEntityRecognizerRequest = {
  /**
   * The Amazon Resource Name (ARN) that identifies the entity recognizer currently being trained.
   */
  entityRecognizerArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopTrainingEntityRecognizerRequestSchema: Schema<StopTrainingEntityRecognizerRequest> =
  s.object<StopTrainingEntityRecognizerRequest>(
    {
      entityRecognizerArn: s.string(),
      _keysMap: {
        entityRecognizerArn: "EntityRecognizerArn",
      },
    },
    { additionalProperties: s.json() },
  );
