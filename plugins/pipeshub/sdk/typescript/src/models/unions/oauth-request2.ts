import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { oauthRequestSchema, type OauthRequest } from "../oauth-request.js";
import { oauthRequest1Schema, type OauthRequest1 } from "../oauth-request1.js";

export type OauthRequest2 = OauthRequest | OauthRequest1;

export const oauthRequest2Schema: Schema<OauthRequest2> = s.of<OauthRequest2>(
  s.union([s.lazy(() => oauthRequestSchema), s.lazy(() => oauthRequest1Schema)]),
);
