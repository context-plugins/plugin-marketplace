import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attributeSchema, type Attribute } from "./attribute.js";

export type ApiV1MiscGoogleBusinessLocationAttributesResponse = {
  name?: string;
  attributes?: Attribute[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscGoogleBusinessLocationAttributesResponseSchema: Schema<ApiV1MiscGoogleBusinessLocationAttributesResponse> =
  s.object<ApiV1MiscGoogleBusinessLocationAttributesResponse>(
    {
      name: s.optional(s.string()),
      attributes: s.optional(s.array(s.lazy(() => attributeSchema))),
    },
    { additionalProperties: s.json() },
  );
