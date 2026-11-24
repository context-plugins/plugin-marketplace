import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** OPTIONAL. You can create models category to display all your models. */
export const ShouldCreateSchemaCategory = {
  True: "true",
  False: "false",
} as const;
export type ShouldCreateSchemaCategory =
  | (typeof ShouldCreateSchemaCategory)[keyof typeof ShouldCreateSchemaCategory]
  | (string & {});

export const shouldCreateSchemaCategorySchema: EnumSchema<ShouldCreateSchemaCategory> =
  s.enumOf<ShouldCreateSchemaCategory>(ShouldCreateSchemaCategory);
