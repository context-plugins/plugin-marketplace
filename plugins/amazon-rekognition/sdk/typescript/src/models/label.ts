import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { instanceSchema, type Instance } from "./instance.js";
import { labelAliasSchema, type LabelAlias } from "./label-alias.js";
import { labelCategorySchema, type LabelCategory } from "./label-category.js";
import { parentSchema, type Parent } from "./parent.js";

export type Label = {
  /** The name (label) of the object or scene. */
  name?: string;
  /** Level of confidence. */
  confidence?: number;
  /**
   * If Label represents an object, Instances contains the bounding boxes for each instance of the
   * detected object. Bounding boxes are returned for common object labels such as people, cars,
   * furniture, apparel or pets.
   */
  instances?: Instance[];
  /** The parent labels for a label. The response includes all ancestor labels. */
  parents?: Parent[];
  /** A list of potential aliases for a given label. */
  aliases?: LabelAlias[];
  /** A list of the categories associated with a given label. */
  categories?: LabelCategory[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const labelSchema: Schema<Label> = s.object<Label>(
  {
    name: s.optional(s.string()),
    confidence: s.optional(s.float64()),
    instances: s.optional(s.array(s.lazy(() => instanceSchema))),
    parents: s.optional(s.array(s.lazy(() => parentSchema))),
    aliases: s.optional(s.array(s.lazy(() => labelAliasSchema))),
    categories: s.optional(s.array(s.lazy(() => labelCategorySchema))),
    _keysMap: {
      name: "Name",
      confidence: "Confidence",
      instances: "Instances",
      parents: "Parents",
      aliases: "Aliases",
      categories: "Categories",
    },
  },
  { additionalProperties: s.json() },
);
