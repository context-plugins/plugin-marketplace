import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  entitlementRequestDtoInternalSchema,
  type EntitlementRequestDto,
} from "../models/entitlement-request-dto.js";
import {
  entitlementResponseDtoSchema,
  type EntitlementResponseDto,
} from "../models/entitlement-response-dto.js";
import { errorResponseDtoSchema, type ErrorResponseDto } from "../models/error-response-dto.js";
import type { Servers } from "../servers.js";

export class EntitlementRestController {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Entitlement Results
   *
   * @remarks
   * Get entitlement results for a given user and site
   *
   * @returns Returned if the file upload is successful.
   *
   * @throws {@link EntitlementRestController.EvaluateEntitlementsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AtlassianCompassError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  evaluateEntitlements(
    request: EntitlementRestController.EvaluateEntitlementsRequest,
    options?: RequestOptions,
  ): ApiPromise<EntitlementResponseDto, EntitlementRestController.EvaluateEntitlementsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/compass/v1/entitlements"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: entitlementRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: entitlementResponseDtoSchema },
        errorFactory: EntitlementRestController.EvaluateEntitlementsError,
      },
      options,
    );
  }
}

export namespace EntitlementRestController {
  export type EvaluateEntitlementsRequest = {
    body: EntitlementRequestDto;
  };

  export class EvaluateEntitlementsError extends ApiError {
    declare readonly payload: Declared<"errorResponseDto", ErrorResponseDto> | Undeclared;

    static readonly errors: ErrorDecoders<EvaluateEntitlementsError> = [
      { on: 401, kind: "errorResponseDto", decode: { kind: "json", schema: errorResponseDtoSchema } },
    ];
  }
}
