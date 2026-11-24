import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CopyProjectVersionResponse = {
  /** The ARN of the copied model version in the destination project. */
  projectVersionArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const copyProjectVersionResponseSchema: Schema<CopyProjectVersionResponse> =
  s.object<CopyProjectVersionResponse>(
    {
      projectVersionArn: s.optional(s.string()),
      _keysMap: {
        projectVersionArn: "ProjectVersionArn",
      },
    },
    { additionalProperties: s.json() },
  );
