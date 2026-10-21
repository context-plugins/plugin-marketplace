import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientExtensionRequestableScopesUpdateResponse = {
  requestableScopes?: string[];
};

export const clientExtensionRequestableScopesUpdateResponseSchema: Schema<ClientExtensionRequestableScopesUpdateResponse> =
  s.object<ClientExtensionRequestableScopesUpdateResponse>({
    requestableScopes: s.optional(s.array(s.string())),
  });
