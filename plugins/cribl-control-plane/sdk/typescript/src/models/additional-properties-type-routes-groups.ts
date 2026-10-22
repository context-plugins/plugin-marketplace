import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalPropertiesTypeRoutesGroups = {
  /** Brief description of the Route Group. */
  description?: string;
  /**
   * Relative position of the Route Group among all Route Groups. Routes are evaluated in ascending
   * order according to the index value of their Route Group.
   */
  index: number;
  /** Name of the Route Group. */
  name: string;
};

export const additionalPropertiesTypeRoutesGroupsSchema: Schema<AdditionalPropertiesTypeRoutesGroups> =
  s.object<AdditionalPropertiesTypeRoutesGroups>({
    description: s.optional(s.string()),
    index: s.int(),
    name: s.string(),
  });
