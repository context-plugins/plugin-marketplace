import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ModelsLexUntagResourceRequest = {
  /** The Amazon Resource Name (ARN) of the resource to remove the tags from. */
  resourceArn: string;
  /**
   * A list of tag keys to remove from the resource. If a tag key does not exist on the resource, it
   * is ignored.
   */
  tagKeys: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexUntagResourceRequestSchema: Schema<ModelsLexUntagResourceRequest> =
  s.object<ModelsLexUntagResourceRequest>(
    {
      resourceArn: s.string(),
      tagKeys: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
