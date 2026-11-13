import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { schema1Schema, type Schema1 } from "./schema1.js";
import { userInResponseSchema, type UserInResponse } from "./user-in-response.js";

export type ScimV2UsersSearchResponse = {
  schemas?: Schema1[];
  /** Total number of users found. */
  totalResults?: number;
  resources?: UserInResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scimV2UsersSearchResponseSchema: Schema<ScimV2UsersSearchResponse> =
  s.object<ScimV2UsersSearchResponse>(
    {
      schemas: s.optional(s.array(s.lazy(() => schema1Schema))),
      totalResults: s.optional(s.int()),
      resources: s.optional(s.array(s.lazy(() => userInResponseSchema))),
      _keysMap: {
        resources: "Resources",
      },
    },
    { additionalProperties: s.json() },
  );
