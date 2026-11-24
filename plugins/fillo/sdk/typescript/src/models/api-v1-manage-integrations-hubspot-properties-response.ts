import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { propertySchema, type Property } from "./property.js";

export type ApiV1ManageIntegrationsHubspotPropertiesResponse = {
  properties: Property[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageIntegrationsHubspotPropertiesResponseSchema: Schema<ApiV1ManageIntegrationsHubspotPropertiesResponse> =
  s.object<ApiV1ManageIntegrationsHubspotPropertiesResponse>(
    {
      properties: s.array(s.lazy(() => propertySchema)),
    },
    { additionalProperties: s.json() },
  );
