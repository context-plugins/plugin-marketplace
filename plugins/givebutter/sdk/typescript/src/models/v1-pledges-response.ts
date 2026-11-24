import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linksSchema, type Links } from "./links.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";
import { pledgeResourceSchema, type PledgeResource } from "./pledge-resource.js";

export type V1PledgesResponse = {
  data: PledgeResource[];
  links: Links;
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1PledgesResponseProperties: s.Shape<V1PledgesResponse> = {
  data: s.array(s.lazy(() => pledgeResourceSchema)),
  links: linksSchema,
  meta: metaInternalSchema,
};

export const v1PledgesResponseInternalSchema: Schema<V1PledgesResponse> = s.object<V1PledgesResponse>(
  v1PledgesResponseProperties,
  { additionalProperties: s.json() },
);

export const v1PledgesResponseSchema: Schema<V1PledgesResponse> = s.lazySchema(() =>
  s.object<V1PledgesResponse>(
    {
      ...v1PledgesResponseProperties,
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
