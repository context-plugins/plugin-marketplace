import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { nameSourceSchema, type NameSource } from "./name-source.js";
import { typeSourceSchema, type TypeSource } from "./type-source.js";
import { typeSchema, type Type } from "./type.js";

/**
 * Available seller name and name-based classification. Unknown means the source does not supply
 * enough evidence; damage, title and missing valuations do not establish seller type. Name-based
 * classification is inferred, not a verified source category.
 */
export type Seller = {
  name?: string | null;
  type?: Type;
  nameSource?: NameSource;
  typeSource?: TypeSource;
  typeIsInferred?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sellerSchema: Schema<Seller> = s.object<Seller>(
  {
    name: s.optionalNullable(s.string()),
    type: s.optional(s.lazy(() => typeSchema)),
    nameSource: s.optional(s.lazy(() => nameSourceSchema)),
    typeSource: s.optional(s.lazy(() => typeSourceSchema)),
    typeIsInferred: s.optional(s.boolean()),
    _keysMap: {
      nameSource: "name_source",
      typeSource: "type_source",
      typeIsInferred: "type_is_inferred",
    },
  },
  { additionalProperties: s.json() },
);
