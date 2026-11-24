import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attribute1Schema, type Attribute1 } from "./attribute1.js";
import { order10Schema, type Order10 } from "./order10.js";

export type GenerationSortBy = {
  /**
   * The attribute by which to sort the generation request information. You can sort by the
   * following attributes. creationStartTime – The time at which the generation request was created.
   * lastUpdatedTime – The time at which the generation request was last updated.
   */
  attribute: Attribute1;
  /** The order by which to sort the generation request information. */
  order: Order10;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const generationSortBySchema: Schema<GenerationSortBy> = s.object<GenerationSortBy>(
  {
    attribute: attribute1Schema,
    order: order10Schema,
  },
  { additionalProperties: s.json() },
);
