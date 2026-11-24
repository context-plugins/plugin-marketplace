import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { hlrRequestSchema, type HlrRequest } from "./hlr-request.js";

export type ApiV2HlrResponse = {
  /** Created HLR lookup task details */
  hlrRequest: HlrRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2HlrResponseSchema: Schema<ApiV2HlrResponse> = s.object<ApiV2HlrResponse>(
  {
    hlrRequest: hlrRequestSchema,
    _keysMap: {
      hlrRequest: "hlr_request",
    },
  },
  { additionalProperties: s.json() },
);
