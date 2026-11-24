import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { organizationInternalSchema, organizationSchema, type Organization } from "./organization.js";
import { personInternalSchema, personSchema, type Person } from "./person.js";

export type ApiV1MiscLinkedinMentionsTagsResponse = {
  people?: Person[];
  organizations?: Organization[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscLinkedinMentionsTagsResponseProperties: s.Shape<ApiV1MiscLinkedinMentionsTagsResponse> = {
  people: s.optional(s.array(s.lazy(() => personInternalSchema))),
  organizations: s.optional(s.array(s.lazy(() => organizationInternalSchema))),
};

export const apiV1MiscLinkedinMentionsTagsResponseInternalSchema: Schema<ApiV1MiscLinkedinMentionsTagsResponse> =
  s.object<ApiV1MiscLinkedinMentionsTagsResponse>(apiV1MiscLinkedinMentionsTagsResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscLinkedinMentionsTagsResponseSchema: Schema<ApiV1MiscLinkedinMentionsTagsResponse> =
  s.lazySchema(() =>
    s.object<ApiV1MiscLinkedinMentionsTagsResponse>(
      {
        ...apiV1MiscLinkedinMentionsTagsResponseProperties,
        people: s.optional(s.array(s.lazy(() => personSchema))),
        organizations: s.optional(s.array(s.lazy(() => organizationSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
