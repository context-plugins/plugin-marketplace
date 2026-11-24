import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { xAmzTargetSchema, type XAmzTarget } from "../models/xamz-target.js";
import { xAmzTarget1Schema, type XAmzTarget1 } from "../models/xamz-target1.js";
import { xAmzTarget2Schema, type XAmzTarget2 } from "../models/xamz-target2.js";
import { xAmzTarget3Schema, type XAmzTarget3 } from "../models/xamz-target3.js";
import { xAmzTarget4Schema, type XAmzTarget4 } from "../models/xamz-target4.js";
import type { Servers } from "../servers.js";

export class AmazonStorageGatewayRestApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Activate Gateway
   *
   * @remarks
   * Activates the gateway you previously deployed on your host. In the activation process, you
   * specify information such as the Amazon Web Services Region that you want to use for storing
   * snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window,
   * an activation key, and a name for your gateway. The activation process also associates your
   * gateway with your account. For more information, see UpdateGatewayInformation. You must turn on
   * the gateway VM before you can activate your gateway.
   *
   * @returns Success
   *
   * @throws {@link AmazonStorageGatewayRestApi.ActivateGatewayError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  activateGateway(
    request: AmazonStorageGatewayRestApi.ActivateGatewayRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonStorageGatewayRestApi.ActivateGatewayError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ActivateGateway"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTargetSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonStorageGatewayRestApi.ActivateGatewayError,
      },
      options,
    );
  }

  /**
   * Create NFSFile Share
   *
   * @remarks
   * Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage
   * Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage
   * Gateway exposes file shares using an NFS interface. This operation is only supported for S3
   * File Gateways. S3 File gateway requires Security Token Service (Amazon Web Services STS) to be
   * activated to enable you to create a file share. Make sure Amazon Web Services STS is activated
   * in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon Web
   * Services STS is not activated in the Amazon Web Services Region, activate it. For information
   * about how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web
   * Services STS in an Amazon Web Services Region in the Identity and Access Management User Guide.
   * S3 File Gateways do not support creating hard or symbolic links on a file share.
   *
   * @returns Success
   *
   * @throws {@link AmazonStorageGatewayRestApi.CreateNfsFileShareError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createNfsFileShare(
    request: AmazonStorageGatewayRestApi.CreateNfsFileShareRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonStorageGatewayRestApi.CreateNfsFileShareError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateNFSFileShare"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget2Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonStorageGatewayRestApi.CreateNfsFileShareError,
      },
      options,
    );
  }

  /**
   * Describe Gateway Information
   *
   * @remarks
   * Returns metadata about a gateway such as its name, network interfaces, time zone, status, and
   * software version. To specify which gateway to describe, use the Amazon Resource Name (ARN) of
   * the gateway in your request.
   *
   * @returns Success
   *
   * @throws {@link AmazonStorageGatewayRestApi.DescribeGatewayInformationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeGatewayInformation(
    request: AmazonStorageGatewayRestApi.DescribeGatewayInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonStorageGatewayRestApi.DescribeGatewayInformationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeGatewayInformation"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget4Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonStorageGatewayRestApi.DescribeGatewayInformationError,
      },
      options,
    );
  }

  /**
   * List Gateways
   *
   * @remarks
   * Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region
   * specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN).
   * By default, the operation returns a maximum of 100 gateways. This operation supports pagination
   * that allows you to optionally reduce the number of gateways returned in a response. If you have
   * more gateways than are returned in a response (that is, the response returns only a truncated
   * list of your gateways), the response contains a marker that you can specify in your next
   * request to fetch the next page of gateways.
   *
   * @returns Success
   *
   * @throws {@link AmazonStorageGatewayRestApi.ListGatewaysError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listGateways(
    request: AmazonStorageGatewayRestApi.ListGatewaysRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonStorageGatewayRestApi.ListGatewaysError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListGateways"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget3Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonStorageGatewayRestApi.ListGatewaysError,
      },
      options,
    );
  }

  /**
   * List Volumes
   *
   * @remarks
   * Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response
   * includes only the volume ARNs. If you want additional volume information, use the
   * DescribeStorediSCSIVolumes or the DescribeCachediSCSIVolumes API. The operation supports
   * pagination. By default, the operation returns a maximum of up to 100 volumes. You can
   * optionally specify the Limit field in the body to limit the number of volumes in the response.
   * If the number of volumes returned in the response is truncated, the response includes a Marker
   * field. You can use this Marker value in your subsequent request to retrieve the next set of
   * volumes. This operation is only supported in the cached volume and stored volume gateway types.
   *
   * @returns Success
   *
   * @throws {@link AmazonStorageGatewayRestApi.ListVolumesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listVolumes(
    request: AmazonStorageGatewayRestApi.ListVolumesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonStorageGatewayRestApi.ListVolumesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListVolumes"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget1Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonStorageGatewayRestApi.ListVolumesError,
      },
      options,
    );
  }
}

export namespace AmazonStorageGatewayRestApi {
  export type ActivateGatewayRequest = {
    xAmzTarget: XAmzTarget;
  };

  export class ActivateGatewayError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ActivateGatewayError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CreateNfsFileShareRequest = {
    xAmzTarget: XAmzTarget2;
  };

  export class CreateNfsFileShareError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateNfsFileShareError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeGatewayInformationRequest = {
    xAmzTarget: XAmzTarget4;
  };

  export class DescribeGatewayInformationError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeGatewayInformationError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListGatewaysRequest = {
    xAmzTarget: XAmzTarget3;
  };

  export class ListGatewaysError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListGatewaysError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListVolumesRequest = {
    xAmzTarget: XAmzTarget1;
  };

  export class ListVolumesError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListVolumesError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
