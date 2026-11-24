import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type ModelsLexTagResourceRequest = {
  /** The Amazon Resource Name (ARN) of the bot, bot alias, or bot channel to tag. */
  resourceArn: string;
  /**
   * A list of tag keys to add to the resource. If a tag key already exists, the existing value is
   * replaced with the new value.
   */
  tags: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexTagResourceRequestSchema: Schema<ModelsLexTagResourceRequest> =
  s.object<ModelsLexTagResourceRequest>(
    {
      resourceArn: s.string(),
      tags: s.array(s.lazy(() => tagSchema)),
    },
    { additionalProperties: s.json() },
  );
