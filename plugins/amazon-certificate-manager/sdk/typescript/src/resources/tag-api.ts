import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsCertificateManagerTagApiSchema,
  type XAmzTargetAwsCertificateManagerTagApi,
} from "../models/xamz-target-aws-certificate-manager-tag-api.js";
import {
  xAmzTarget1AwsCertificateManagerTagApiSchema,
  type XAmzTarget1AwsCertificateManagerTagApi,
} from "../models/xamz-target1-aws-certificate-manager-tag-api.js";
import {
  xAmzTarget2AwsCertificateManagerTagApiSchema,
  type XAmzTarget2AwsCertificateManagerTagApi,
} from "../models/xamz-target2-aws-certificate-manager-tag-api.js";
import {
  xAmzTarget3AwsCertificateManagerTagApiSchema,
  type XAmzTarget3AwsCertificateManagerTagApi,
} from "../models/xamz-target3-aws-certificate-manager-tag-api.js";
import type { Servers } from "../servers.js";

export class TagApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add Tags To Certificate
   *
   * @remarks
   * Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and
   * organize your Amazon Web Services resources. Each tag consists of a key and an optional value.
   * You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by
   * using a key-value pair. This action applies only to the certificate resource type. For all
   * other ACM resource types, use TagResource instead. You can apply a tag to just one certificate
   * if you want to identify a specific characteristic of that certificate, or you can apply the
   * same tag to multiple certificates if you want to filter for a common relationship among those
   * certificates. Similarly, you can apply the same tag to multiple resources if you want to
   * specify a relationship among those resources. For example, you can add the same tag to an ACM
   * certificate and an Elastic Load Balancing load balancer to indicate that they are both used by
   * the same website. For more information, see Tagging ACM certificates. To remove one or more
   * tags, use the RemoveTagsFromCertificate action. To view all of the tags that have been applied
   * to the certificate, use the ListTagsForCertificate action.
   *
   * @returns Success
   *
   * @throws {@link TagApi.AddTagsToCertificateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  addTagsToCertificate(
    request: TagApi.AddTagsToCertificateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, TagApi.AddTagsToCertificateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AddTagsToCertificate"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsCertificateManagerTagApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TagApi.AddTagsToCertificateError,
      },
      options,
    );
  }

  /**
   * List Tags For Certificate
   *
   * @remarks
   * Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon
   * Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the
   * AddTagsToCertificate action. To delete a tag, use the RemoveTagsFromCertificate action. This
   * action applies only to the certificate resource type. For all other ACM resource types, use
   * ListTagsForResource instead.
   *
   * @returns Success
   *
   * @throws {@link TagApi.ListTagsForCertificateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listTagsForCertificate(
    request: TagApi.ListTagsForCertificateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, TagApi.ListTagsForCertificateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListTagsForCertificate"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsCertificateManagerTagApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TagApi.ListTagsForCertificateError,
      },
      options,
    );
  }

  /**
   * List Tags For Resource
   *
   * @remarks
   * Lists the tags associated with an ACM resource. Use this action for all ACM resource types
   * except the certificate resource type. For certificate resources, use ListTagsForCertificate
   * instead. To add one or more tags, use the TagResource action. To remove one or more tags, use
   * the UntagResource action.
   *
   * @returns Success
   *
   * @throws {@link TagApi.ListTagsForResourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listTagsForResource(
    request: TagApi.ListTagsForResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, TagApi.ListTagsForResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListTagsForResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AwsCertificateManagerTagApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TagApi.ListTagsForResourceError,
      },
      options,
    );
  }

  /**
   * Remove Tags From Certificate
   *
   * @remarks
   * Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do
   * not specify the value portion of the tag when calling this function, the tag will be removed
   * regardless of value. If you specify a value, the tag is removed only if it is associated with
   * the specified value. This action applies only to the certificate resource type. For all other
   * ACM resource types, use UntagResource instead. To add tags to a certificate, use the
   * AddTagsToCertificate action. To view all of the tags that have been applied to a specific ACM
   * certificate, use the ListTagsForCertificate action.
   *
   * @returns Success
   *
   * @throws {@link TagApi.RemoveTagsFromCertificateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  removeTagsFromCertificate(
    request: TagApi.RemoveTagsFromCertificateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, TagApi.RemoveTagsFromCertificateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RemoveTagsFromCertificate"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AwsCertificateManagerTagApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TagApi.RemoveTagsFromCertificateError,
      },
      options,
    );
  }
}

export namespace TagApi {
  export type AddTagsToCertificateRequestParams = {
    xAmzTarget: XAmzTargetAwsCertificateManagerTagApi;
  };

  export class AddTagsToCertificateError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AddTagsToCertificateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListTagsForCertificateRequestParams = {
    xAmzTarget: XAmzTarget1AwsCertificateManagerTagApi;
  };

  export class ListTagsForCertificateError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListTagsForCertificateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListTagsForResourceRequestParams = {
    xAmzTarget: XAmzTarget2AwsCertificateManagerTagApi;
  };

  export class ListTagsForResourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListTagsForResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RemoveTagsFromCertificateRequestParams = {
    xAmzTarget: XAmzTarget3AwsCertificateManagerTagApi;
  };

  export class RemoveTagsFromCertificateError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RemoveTagsFromCertificateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
