import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientTokensResponse = {
  /** The client token that can be used with drop-in components */
  token: string;
};

export const clientTokensResponseSchema: Schema<ClientTokensResponse> = s.object<ClientTokensResponse>({
  token: s.string(),
});
