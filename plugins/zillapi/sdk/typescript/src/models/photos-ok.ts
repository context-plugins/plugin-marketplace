import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  metaZillapiZillowPropertyDataPropertiesApiSchema,
  type MetaZillapiZillowPropertyDataPropertiesApi,
} from "./meta-zillapi-zillow-property-data-properties-api.js";
import { photoSchema, type Photo } from "./photo.js";

export type PhotosOk = {
  data?: Photo[];
  meta?: MetaZillapiZillowPropertyDataPropertiesApi;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const photosOkSchema: Schema<PhotosOk> = s.object<PhotosOk>(
  {
    data: s.optional(s.array(s.lazy(() => photoSchema))),
    meta: s.optional(s.lazy(() => metaZillapiZillowPropertyDataPropertiesApiSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
