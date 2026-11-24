import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteProjectRequest = {
  /** The Amazon Resource Name (ARN) of the project that you want to delete. */
  projectArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteProjectRequestSchema: Schema<DeleteProjectRequest> = s.object<DeleteProjectRequest>(
  {
    projectArn: s.string(),
    _keysMap: {
      projectArn: "ProjectArn",
    },
  },
  { additionalProperties: s.json() },
);
