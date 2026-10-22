import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Resource type identifier. */
export const TypeOptionsRunnableJobCollectionInput = {
  Collection: "collection",
} as const;
export type TypeOptionsRunnableJobCollectionInput =
  | (typeof TypeOptionsRunnableJobCollectionInput)[keyof typeof TypeOptionsRunnableJobCollectionInput]
  | (string & {});

export const typeOptionsRunnableJobCollectionInputSchema: EnumSchema<TypeOptionsRunnableJobCollectionInput> =
  s.enumOf<TypeOptionsRunnableJobCollectionInput>(TypeOptionsRunnableJobCollectionInput);
