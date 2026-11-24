import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { serviceSchema, type Service } from "./service.js";

/** Response message for DataprocMetastore.ListServices. */
export type ListServicesResponse = {
  /** The services in the specified location. */
  services?: Service[];
  /** Locations that could not be reached. */
  unreachable?: string[];
  /**
   * A token that can be sent as page_token to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listServicesResponseSchema: Schema<ListServicesResponse> = s.object<ListServicesResponse>(
  {
    services: s.optional(s.array(s.lazy(() => serviceSchema))),
    unreachable: s.optional(s.array(s.string())),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
