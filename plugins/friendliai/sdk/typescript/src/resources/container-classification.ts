import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  containerTextClassificationBodySchema,
  type ContainerTextClassificationBody,
} from "../models/container-text-classification-body.js";
import {
  textClassificationResultSchema,
  type TextClassificationResult,
} from "../models/text-classification-result.js";
import type { Servers } from "../servers.js";

export class ContainerClassification {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Text classification
   *
   * @remarks
   * Classify text input into categories with per-class probabilities.
   *
   * @returns Successfully classified the text input.
   *
   * @throws {@link ContainerClassification.ContainerTextClassificationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  containerTextClassification(
    request: ContainerClassification.ContainerTextClassificationRequest,
    options?: RequestOptions,
  ): ApiPromise<TextClassificationResult, ContainerClassification.ContainerTextClassificationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/classify"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: containerTextClassificationBodySchema },
      },
      {
        success: { kind: "json", schema: textClassificationResultSchema },
        errorFactory: ContainerClassification.ContainerTextClassificationError,
      },
      options,
    );
  }
}

export namespace ContainerClassification {
  export type ContainerTextClassificationRequest = {
    body: ContainerTextClassificationBody;
  };

  export class ContainerTextClassificationError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ContainerTextClassificationError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
