import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopProjectVersionRequest = {
  /**
   * The Amazon Resource Name (ARN) of the model version that you want to stop. This operation
   * requires permissions to perform the rekognition:StopProjectVersion action.
   */
  projectVersionArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopProjectVersionRequestSchema: Schema<StopProjectVersionRequest> =
  s.object<StopProjectVersionRequest>(
    {
      projectVersionArn: s.string(),
      _keysMap: {
        projectVersionArn: "ProjectVersionArn",
      },
    },
    { additionalProperties: s.json() },
  );
