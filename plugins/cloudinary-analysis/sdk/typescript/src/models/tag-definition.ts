import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TagDefinition = {
  /**
   * The name of the tag to apply. This can be any string and does not affect the decision process
   */
  name: string;
  /** A description to be used by the AI to determine whether the tag should be applied */
  description: string;
};

export const tagDefinitionSchema: Schema<TagDefinition> = s.object<TagDefinition>({
  name: s.string(),
  description: s.string(),
});
