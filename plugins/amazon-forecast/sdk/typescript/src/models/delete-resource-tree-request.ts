import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteResourceTreeRequest = {
  /**
   * The Amazon Resource Name (ARN) of the parent resource to delete. All child resources of the
   * parent resource will also be deleted.
   */
  resourceArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteResourceTreeRequestSchema: Schema<DeleteResourceTreeRequest> =
  s.object<DeleteResourceTreeRequest>(
    {
      resourceArn: s.string(),
      _keysMap: {
        resourceArn: "ResourceArn",
      },
    },
    { additionalProperties: s.json() },
  );
