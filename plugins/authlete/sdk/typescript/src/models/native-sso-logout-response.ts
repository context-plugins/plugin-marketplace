import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action19Schema, type Action19 } from "./action19.js";

export type NativeSsoLogoutResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the API caller should take. */
  action?: Action19;
  /** The number of deleted access/refresh token records. */
  count?: number;
};

export const nativeSsoLogoutResponseSchema: Schema<NativeSsoLogoutResponse> =
  s.object<NativeSsoLogoutResponse>({
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
    action: s.optional(s.lazy(() => action19Schema)),
    count: s.optional(s.int()),
  });
