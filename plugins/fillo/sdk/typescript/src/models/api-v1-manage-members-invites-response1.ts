import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageMembersInvitesResponse1 = {
  id: string;
  /** @default "True" */
  cancelled?: "True";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageMembersInvitesResponse1Schema: Schema<ApiV1ManageMembersInvitesResponse1> =
  s.object<ApiV1ManageMembersInvitesResponse1>(
    {
      id: s.string(),
      cancelled: s.defaulted(s.literal("True"), "True"),
    },
    { additionalProperties: s.json() },
  );
