import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiInviteUserRequestDto = {
  emails: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiInviteUserRequestDtoSchema: Schema<PublicApiInviteUserRequestDto> =
  s.object<PublicApiInviteUserRequestDto>(
    {
      emails: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
