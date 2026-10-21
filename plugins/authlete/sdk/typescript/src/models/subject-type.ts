import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The subject type that the client application requests. Details about the subject type are
 * described in [OpenID Connect Core 1.0, 8. Subjct Identifier
 * Types](https://openid.net/specs/openid-connect-core-1_0.html#SubjectIDTypes).
 *
 * This property corresponds to `subject_type` in [OpenID Connect Dynamic Client Registration 1.0,
 * 2. Client
 * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
 */
export const SubjectType = {
  Public: "PUBLIC",
  Pairwise: "PAIRWISE",
} as const;
export type SubjectType = (typeof SubjectType)[keyof typeof SubjectType] | (string & {});

export const subjectTypeSchema: EnumSchema<SubjectType> = s.enumOf<SubjectType>(SubjectType);
