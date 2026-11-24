import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { evalReasonSchema, type EvalReason } from "./eval-reason.js";
import { type1Schema, type Type1 } from "./type1.js";

export type Feature = {
  /** unique database id */
  id: string;
  /** Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id. */
  key: string;
  /** Feature type */
  type: Type1;
  /** Bucketed feature variation ID */
  variation: string;
  /** Bucketed feature variation Name */
  variationName?: string;
  /** Bucketed feature variation Key */
  variationKey?: string;
  /** The reason the User was Served this particular value */
  eval?: EvalReason;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const featureProperties: s.Shape<Feature> = {
  id: s.string(),
  key: s.string(),
  type: type1Schema,
  variation: s.string(),
  variationName: s.optional(s.string()),
  variationKey: s.optional(s.string()),
  eval: s.optional(s.lazy(() => evalReasonSchema)),
  _keysMap: {
    id: "_id",
    variation: "_variation",
  },
};

export const featureInternalSchema: Schema<Feature> = s.object<Feature>(featureProperties, {
  additionalProperties: s.json(),
});

export const featureSchema: Schema<Feature> = s.lazySchema(() =>
  s.object<Feature>(
    {
      ...featureProperties,
      key: s.string().check(s.pattern("^[a-z0-9-_.]+$")),
    },
    { additionalProperties: s.json() },
  ),
);
