import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  links1ConnectConsentsApiSchema,
  type Links1ConnectConsentsApi,
} from "./links1-connect-consents-api.js";
import { userConsentGetResponseSchema, type UserConsentGetResponse } from "./user-consent-get-response.js";

export type UsersConsentsResponse = {
  type?: string;
  size?: number;
  data?: UserConsentGetResponse[];
  links?: Links1ConnectConsentsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersConsentsResponseSchema: Schema<UsersConsentsResponse> = s.object<UsersConsentsResponse>(
  {
    type: s.optional(s.string()),
    size: s.optional(s.int()),
    data: s.optional(s.array(s.lazy(() => userConsentGetResponseSchema))),
    links: s.optional(s.lazy(() => links1ConnectConsentsApiSchema)),
  },
  { additionalProperties: s.json() },
);
