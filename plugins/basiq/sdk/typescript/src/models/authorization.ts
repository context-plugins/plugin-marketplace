import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  metaPlatformConnectorsApiSchema,
  type MetaPlatformConnectorsApi,
} from "./meta-platform-connectors-api.js";
import { type1Schema, type Type1 } from "./type1.js";

export type Authorization = {
  /**
   * Authorization type identifier user AuthorizationUser AuthorizationUser "User" authorization
   * type identifier token AuthorizationToken AuthorizationToken "Token" authorization type
   * identifier other AuthorizationOther AuthorizationOther "Other" authorization type identifier
   * user-mfa AuthorizationUserMfa AuthorizationUserMfa "UserMfa" authorization type identifier
   * user-mfa-intermittent AuthorizationUserMfaIntermittent AuthorizationUserMfaIntermittent
   * "UserMfaIntermittent" authorization type identifier
   */
  type: Type1;
  meta?: MetaPlatformConnectorsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authorizationSchema: Schema<Authorization> = s.object<Authorization>(
  {
    type: type1Schema,
    meta: s.optional(s.lazy(() => metaPlatformConnectorsApiSchema)),
  },
  { additionalProperties: s.json() },
);
