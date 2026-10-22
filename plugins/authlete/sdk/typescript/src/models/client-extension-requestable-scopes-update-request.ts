import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientExtensionRequestableScopesUpdateRequest = {
  /**
   * The set of scopes that the client application is allowed to request. This parameter will be one
   * of the following. Details are described in the description.
   *
   *
   * - an empty set
   * - a set with at least one element
   *
   * If this parameter contains scopes that the service does not support, those scopes are just
   * ignored. Also, if this parameter is `null` or is not included in the request, it is equivalent
   * to calling `/client/extension/requestable_scopes/delete` API.
   */
  requestableScopes?: string[];
};

export const clientExtensionRequestableScopesUpdateRequestSchema: Schema<ClientExtensionRequestableScopesUpdateRequest> =
  s.object<ClientExtensionRequestableScopesUpdateRequest>({
    requestableScopes: s.optional(s.array(s.string())),
  });
