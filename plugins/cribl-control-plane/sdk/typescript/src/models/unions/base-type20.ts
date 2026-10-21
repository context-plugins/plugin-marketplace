import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  splunkAuthenticationBasicSecretSchema,
  type SplunkAuthenticationBasicSecret,
} from "../splunk-authentication-basic-secret.js";
import {
  splunkAuthenticationBasicSchema,
  type SplunkAuthenticationBasic,
} from "../splunk-authentication-basic.js";
import {
  splunkAuthenticationNoneSchema,
  type SplunkAuthenticationNone,
} from "../splunk-authentication-none.js";
import {
  splunkAuthenticationTokenSecretSchema,
  type SplunkAuthenticationTokenSecret,
} from "../splunk-authentication-token-secret.js";
import {
  splunkAuthenticationTokenSchema,
  type SplunkAuthenticationToken,
} from "../splunk-authentication-token.js";

export type BaseType20 =
  | (SplunkAuthenticationNone & { authentication: "none" })
  | (SplunkAuthenticationBasic & { authentication: "basic" })
  | (SplunkAuthenticationBasicSecret & { authentication: "basicSecret" })
  | (SplunkAuthenticationToken & { authentication: "token" })
  | (SplunkAuthenticationTokenSecret & { authentication: "tokenSecret" });

export const baseType20Schema: Schema<BaseType20> = s.discriminatedUnion<BaseType20>("authentication", {
  none: splunkAuthenticationNoneSchema,
  basic: splunkAuthenticationBasicSchema,
  basicSecret: splunkAuthenticationBasicSecretSchema,
  token: splunkAuthenticationTokenSchema,
  tokenSecret: splunkAuthenticationTokenSecretSchema,
});
