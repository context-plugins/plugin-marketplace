import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { profileData2Schema, type ProfileData2 } from "./profile-data2.js";
import { statusSchema, type Status } from "./status.js";

export type GetProfileResponse = {
  status?: Status;
  /** Response data for user profile */
  data?: ProfileData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getProfileResponseSchema: Schema<GetProfileResponse> = s.object<GetProfileResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => profileData2Schema)),
  },
  { additionalProperties: s.json() },
);
