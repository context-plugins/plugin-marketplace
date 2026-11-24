import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ViewerActiveProduct = {
  /** UUID of product */
  id?: string;
  /** Amount of bought product (1 for one-time products, >1 in other cases) */
  value?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const viewerActiveProductProperties: s.Shape<ViewerActiveProduct> = {
  id: s.optional(s.string()),
  value: s.optional(s.int()),
};

export const viewerActiveProductInternalSchema: Schema<ViewerActiveProduct> = s.object<ViewerActiveProduct>(
  viewerActiveProductProperties,
  { additionalProperties: s.json() },
);

export const viewerActiveProductSchema: Schema<ViewerActiveProduct> = s.lazySchema(() =>
  s.object<ViewerActiveProduct>(
    {
      ...viewerActiveProductProperties,
      value: s.optional(s.int().check(s.gte(0))),
    },
    { additionalProperties: s.json() },
  ),
);
