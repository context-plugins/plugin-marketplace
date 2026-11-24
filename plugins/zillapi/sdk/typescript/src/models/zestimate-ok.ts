import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  data1ZillapiZillowPropertyDataPropertiesApiSchema,
  type Data1ZillapiZillowPropertyDataPropertiesApi,
} from "./data1-zillapi-zillow-property-data-properties-api.js";

export type ZestimateOk = {
  data?: Data1ZillapiZillowPropertyDataPropertiesApi;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const zestimateOkSchema: Schema<ZestimateOk> = s.object<ZestimateOk>(
  {
    data: s.optional(s.lazy(() => data1ZillapiZillowPropertyDataPropertiesApiSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
