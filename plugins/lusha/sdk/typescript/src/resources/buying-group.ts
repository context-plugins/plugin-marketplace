import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  v3BuyingGroupRequestInternalSchema,
  type V3BuyingGroupRequest,
} from "../models/v3-buying-group-request.js";
import {
  v3BuyingGroupResponseInternalSchema,
  type V3BuyingGroupResponse,
} from "../models/v3-buying-group-response.js";
import type { Servers } from "../servers.js";

/**
 * **Buying Group API:** Identify and prioritize the buying committee within a set of target
 * companies.
 */
export class BuyingGroup {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Buying Group Contacts
   *
   * @remarks
   * Identify the buying group within a set of target companies. Supply companies by `domain` or
   * Lusha company `id` - the model scores and labels each returned contact with a persona role.
   *
   * **Personas:**
   * - `decision_maker` — has budget or sign-off authority
   * - `potential_champion` — likely internal advocate for the purchase
   * - `end_user` — likely day-to-day user of the product
   *
   * Pass `personas` to filter to specific roles, or omit it to get all three. Use `contactsLimit`
   * to cap how many contacts are returned per company (default 60).
   *
   * Results are lightweight previews grouped by company. Each contact includes a `has` field
   * listing available data points, a `canReveal` field showing what can be unlocked via Enrich, a
   * `roles` array with the assigned persona(s), and a `score` (0-1) reflecting relevance to the
   * assigned role.
   *
   * Use Enrich Contacts with the returned contact `id` to reveal emails and phones.
   *
   * > **Billing:** Charged per contact returned via the `buyingGroupContact` action.
   *
   * @returns Successful response
   *
   * @throws {@link BuyingGroup.GetContactsBuyingGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContactsBuyingGroup(
    request: BuyingGroup.GetContactsBuyingGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<V3BuyingGroupResponse, BuyingGroup.GetContactsBuyingGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/contacts/buying-group"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v3BuyingGroupRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v3BuyingGroupResponseInternalSchema },
        errorFactory: BuyingGroup.GetContactsBuyingGroupError,
      },
      options,
    );
  }
}

export namespace BuyingGroup {
  export type GetContactsBuyingGroupRequest = {
    body: V3BuyingGroupRequest;
  };

  export class GetContactsBuyingGroupError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContactsBuyingGroupError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
