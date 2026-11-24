import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataZillapiZillowPropertyDataPropertiesApiSchema,
  type DataZillapiZillowPropertyDataPropertiesApi,
} from "./data-zillapi-zillow-property-data-properties-api.js";

export type AgentOk = {
  data?: DataZillapiZillowPropertyDataPropertiesApi;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentOkSchema: Schema<AgentOk> = s.object<AgentOk>(
  {
    data: s.optional(s.lazy(() => dataZillapiZillowPropertyDataPropertiesApiSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
