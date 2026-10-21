import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientExtensionRequestableScopesGetResponse = {
  /**
   * The requestable scopes for this client. This is null if the Requestable Scopes per Client
   * feature is not enabled for this client.
   */
  requestableScopes?: string[] | null;
};

export const clientExtensionRequestableScopesGetResponseSchema: Schema<ClientExtensionRequestableScopesGetResponse> =
  s.object<ClientExtensionRequestableScopesGetResponse>({
    requestableScopes: s.optionalNullable(s.array(s.string())),
  });
