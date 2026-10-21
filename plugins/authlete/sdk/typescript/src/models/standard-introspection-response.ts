import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action8Schema, type Action8 } from "./action8.js";

export type StandardIntrospectionResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action8;
  /**
   * The content that the authorization server implementation is to return to the client
   * application.
   */
  responseContent?: string;
};

export const standardIntrospectionResponseSchema: Schema<StandardIntrospectionResponse> =
  s.object<StandardIntrospectionResponse>({
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
    action: s.optional(s.lazy(() => action8Schema)),
    responseContent: s.optional(s.string()),
  });
