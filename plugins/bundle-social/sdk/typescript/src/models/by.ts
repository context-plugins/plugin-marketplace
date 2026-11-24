import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How the list was resolved. `category` means your `regionCode`/`languageCode` were applied;
 * `location` means they could not be (the location has no primary category or no region code, which
 * is common for service-area businesses) and the attributes are the location's defaults instead.
 */
export const By = {
  Category: "category",
  Location: "location",
} as const;
export type By = (typeof By)[keyof typeof By] | (string & {});

export const bySchema: EnumSchema<By> = s.enumOf<By>(By);
