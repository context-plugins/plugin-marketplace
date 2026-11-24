import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { invitation1Schema, type Invitation1 } from "./invitation1.js";

export type ApiV1ManageMembersInvitesResponse = {
  invitation: Invitation1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageMembersInvitesResponseSchema: Schema<ApiV1ManageMembersInvitesResponse> =
  s.object<ApiV1ManageMembersInvitesResponse>(
    {
      invitation: invitation1Schema,
    },
    { additionalProperties: s.json() },
  );
