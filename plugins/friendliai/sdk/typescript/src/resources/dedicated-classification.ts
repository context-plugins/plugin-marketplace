import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  dedicatedTextClassificationBodySchema,
  type DedicatedTextClassificationBody,
} from "../models/dedicated-text-classification-body.js";
import {
  textClassificationResultSchema,
  type TextClassificationResult,
} from "../models/text-classification-result.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class DedicatedClassification {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Text classification
   *
   * @remarks
   * Classify text input into categories with per-class probabilities.
   *
   * @returns Successfully classified the text input.
   *
   * @throws {@link DedicatedClassification.DedicatedTextClassificationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedTextClassification(
    request: DedicatedClassification.DedicatedTextClassificationRequest,
    options?: RequestOptions,
  ): ApiPromise<TextClassificationResult, DedicatedClassification.DedicatedTextClassificationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dedicated/classify"),
        auth: this.#auth.token,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: dedicatedTextClassificationBodySchema },
      },
      {
        success: { kind: "json", schema: textClassificationResultSchema },
        errorFactory: DedicatedClassification.DedicatedTextClassificationError,
      },
      options,
    );
  }
}

export namespace DedicatedClassification {
  export type DedicatedTextClassificationRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: DedicatedTextClassificationBody;
  };

  export class DedicatedTextClassificationError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedTextClassificationError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
