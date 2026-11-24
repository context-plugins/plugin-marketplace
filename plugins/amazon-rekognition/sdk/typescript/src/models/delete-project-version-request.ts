import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteProjectVersionRequest = {
  /** The Amazon Resource Name (ARN) of the project version that you want to delete. */
  projectVersionArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteProjectVersionRequestSchema: Schema<DeleteProjectVersionRequest> =
  s.object<DeleteProjectVersionRequest>(
    {
      projectVersionArn: s.string(),
      _keysMap: {
        projectVersionArn: "ProjectVersionArn",
      },
    },
    { additionalProperties: s.json() },
  );
