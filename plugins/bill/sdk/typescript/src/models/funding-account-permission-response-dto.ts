import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { organizationSchema, type Organization } from "./organization.js";
import { userSchema, type User } from "./user.js";

/** Funding Account Permission response DTO. */
export type FundingAccountPermissionResponseDto = {
  organization?: Organization;
  user?: User;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingAccountPermissionResponseDtoSchema: Schema<FundingAccountPermissionResponseDto> =
  s.object<FundingAccountPermissionResponseDto>(
    {
      organization: s.optional(s.lazy(() => organizationSchema)),
      user: s.optional(s.lazy(() => userSchema)),
    },
    { additionalProperties: s.json() },
  );
