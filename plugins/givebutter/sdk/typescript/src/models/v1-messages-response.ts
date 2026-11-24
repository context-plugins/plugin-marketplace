import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linksSchema, type Links } from "./links.js";
import { messageResourceSchema, type MessageResource } from "./message-resource.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";

export type V1MessagesResponse = {
  data: MessageResource[];
  links: Links;
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1MessagesResponseProperties: s.Shape<V1MessagesResponse> = {
  data: s.array(s.lazy(() => messageResourceSchema)),
  links: linksSchema,
  meta: metaInternalSchema,
};

export const v1MessagesResponseInternalSchema: Schema<V1MessagesResponse> = s.object<V1MessagesResponse>(
  v1MessagesResponseProperties,
  { additionalProperties: s.json() },
);

export const v1MessagesResponseSchema: Schema<V1MessagesResponse> = s.lazySchema(() =>
  s.object<V1MessagesResponse>(
    {
      ...v1MessagesResponseProperties,
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
