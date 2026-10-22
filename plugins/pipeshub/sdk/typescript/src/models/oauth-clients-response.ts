import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OauthClientsResponse = {
  message?: string;
};

export const oauthClientsResponseSchema: Schema<OauthClientsResponse> = s.object<OauthClientsResponse>({
  message: s.optional(s.string()),
});
