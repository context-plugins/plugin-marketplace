import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1EnvironmentGroupSchema,
  type GoogleCloudApigeeV1EnvironmentGroup,
} from "./google-cloud-apigee-v1-environment-group.js";

/** Response for ListEnvironmentGroups. */
export type GoogleCloudApigeeV1ListEnvironmentGroupsResponse = {
  /** EnvironmentGroups in the specified organization. */
  environmentGroups?: GoogleCloudApigeeV1EnvironmentGroup[];
  /**
   * Page token that you can include in a ListEnvironmentGroups request to retrieve the next page.
   * If omitted, no subsequent pages exist.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListEnvironmentGroupsResponseSchema: Schema<GoogleCloudApigeeV1ListEnvironmentGroupsResponse> =
  s.object<GoogleCloudApigeeV1ListEnvironmentGroupsResponse>(
    {
      environmentGroups: s.optional(s.array(s.lazy(() => googleCloudApigeeV1EnvironmentGroupSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
