import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { endpointSchema, type Endpoint } from "./endpoint.js";
import { paginationResponseSchema, type PaginationResponse } from "./pagination-response.js";

export type DataFlightdeckDopeSecurityPublicApiSpecification = {
  /** Information about current and next page for cursor based pagination */
  pageInfo?: PaginationResponse;
  endpoints?: Endpoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataFlightdeckDopeSecurityPublicApiSpecificationSchema: Schema<DataFlightdeckDopeSecurityPublicApiSpecification> =
  s.object<DataFlightdeckDopeSecurityPublicApiSpecification>(
    {
      pageInfo: s.optional(s.lazy(() => paginationResponseSchema)),
      endpoints: s.optional(s.array(s.lazy(() => endpointSchema))),
    },
    { additionalProperties: s.json() },
  );
