import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  meta1ZillapiZillowPropertyDataPropertiesApiSchema,
  type Meta1ZillapiZillowPropertyDataPropertiesApi,
} from "./meta1-zillapi-zillow-property-data-properties-api.js";
import { openHouseSchema, type OpenHouse } from "./open-house.js";

export type OpenHousesOk = {
  data?: OpenHouse[];
  meta?: Meta1ZillapiZillowPropertyDataPropertiesApi;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const openHousesOkSchema: Schema<OpenHousesOk> = s.object<OpenHousesOk>(
  {
    data: s.optional(s.array(s.lazy(() => openHouseSchema))),
    meta: s.optional(s.lazy(() => meta1ZillapiZillowPropertyDataPropertiesApiSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
