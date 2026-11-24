import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataFlightdeckDopeSecurityPublicApiSpecificationSchema,
  type DataFlightdeckDopeSecurityPublicApiSpecification,
} from "./data-flightdeck-dope-security-public-api-specification.js";

export type EndpointsSearchResponse = {
  data?: DataFlightdeckDopeSecurityPublicApiSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const endpointsSearchResponseSchema: Schema<EndpointsSearchResponse> =
  s.object<EndpointsSearchResponse>(
    {
      data: s.optional(s.lazy(() => dataFlightdeckDopeSecurityPublicApiSpecificationSchema)),
    },
    { additionalProperties: s.json() },
  );
