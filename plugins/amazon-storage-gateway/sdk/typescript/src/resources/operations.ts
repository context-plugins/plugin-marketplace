import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { xAmzTargetSchema, type XAmzTarget } from "../models/xamz-target.js";
import {
  xAmzTarget1AwsStorageGatewayAwsStorageGatewayApiSchema,
  type XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi,
} from "../models/xamz-target1-aws-storage-gateway-aws-storage-gateway-api.js";
import {
  xAmzTarget2AwsStorageGatewayOperationsApiSchema,
  type XAmzTarget2AwsStorageGatewayOperationsApi,
} from "../models/xamz-target2-aws-storage-gateway-operations-api.js";
import {
  xAmzTarget3AwsStorageGatewayOperationsApiSchema,
  type XAmzTarget3AwsStorageGatewayOperationsApi,
} from "../models/xamz-target3-aws-storage-gateway-operations-api.js";
import {
  xAmzTarget4AwsStorageGatewayOperationsApiSchema,
  type XAmzTarget4AwsStorageGatewayOperationsApi,
} from "../models/xamz-target4-aws-storage-gateway-operations-api.js";
import {
  xAmzTarget5AwsStorageGatewayOperationsApiSchema,
  type XAmzTarget5AwsStorageGatewayOperationsApi,
} from "../models/xamz-target5-aws-storage-gateway-operations-api.js";
import {
  xAmzTarget6AwsStorageGatewayOperationsApiSchema,
  type XAmzTarget6AwsStorageGatewayOperationsApi,
} from "../models/xamz-target6-aws-storage-gateway-operations-api.js";
import {
  xAmzTarget7AwsStorageGatewayOperationsApiSchema,
  type XAmzTarget7AwsStorageGatewayOperationsApi,
} from "../models/xamz-target7-aws-storage-gateway-operations-api.js";
import {
  xAmzTarget8AwsStorageGatewayOperationsApiSchema,
  type XAmzTarget8AwsStorageGatewayOperationsApi,
} from "../models/xamz-target8-aws-storage-gateway-operations-api.js";
import type { Servers } from "../servers.js";

export class Operations {
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
   * @throws {@link Operations.ActivateGateway3Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  activateGateway3(
    request: Operations.ActivateGateway3Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ActivateGateway3Error> {
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
        errorFactory: Operations.ActivateGateway3Error,
      },
      options,
    );
  }

  /**
   * Assign Tape Pool
   *
   * @remarks
   * Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3
   * storage class that is associated with the pool. When you use your backup application to eject
   * the tape, the tape is archived directly into the S3 storage class (S3 Glacier or S3 Glacier
   * Deep Archive) that corresponds to the pool.
   *
   * @returns Success
   *
   * @throws {@link Operations.AssignTapePool2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  assignTapePool2(
    request: Operations.AssignTapePool2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.AssignTapePool2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AssignTapePool"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsStorageGatewayAwsStorageGatewayApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.AssignTapePool2Error,
      },
      options,
    );
  }

  /**
   * Evict Files Failing Upload
   *
   * @remarks
   * Starts a process that cleans the specified file share's cache of file entries that are failing
   * upload to Amazon S3. This API operation reports success if the request is received with valid
   * arguments, and there are no other cache clean operations currently in-progress for the
   * specified file share. After a successful request, the cache clean operation occurs
   * asynchronously and reports progress using CloudWatch logs and notifications. If ForceRemove is
   * set to True, the cache clean operation will delete file data from the gateway which might
   * otherwise be recoverable. We recommend using this operation only after all other methods to
   * clear files failing upload have been exhausted, and if your business need outweighs the
   * potential data loss.
   *
   * @returns Success
   *
   * @throws {@link Operations.EvictFilesFailingUploadError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  evictFilesFailingUpload(
    request: Operations.EvictFilesFailingUploadRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.EvictFilesFailingUploadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#EvictFilesFailingUpload"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AwsStorageGatewayOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.EvictFilesFailingUploadError,
      },
      options,
    );
  }

  /**
   * Join Domain
   *
   * @remarks
   * Adds a file gateway to an Active Directory domain. This operation is only supported for file
   * gateways that support the SMB file protocol. Joining a domain creates an Active Directory
   * computer account in the default organizational unit, using the gateway's Gateway ID as the
   * account name (for example, SGW-1234ADE). If your Active Directory environment requires that you
   * pre-stage accounts to facilitate the join domain process, you will need to create this account
   * ahead of time. To create the gateway's computer account in an organizational unit other than
   * the default, you must specify the organizational unit when joining the domain.
   *
   * @returns Success
   *
   * @throws {@link Operations.JoinDomain2Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  joinDomain2(
    request: Operations.JoinDomain2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.JoinDomain2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#JoinDomain"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AwsStorageGatewayOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.JoinDomain2Error,
      },
      options,
    );
  }

  /**
   * Notify When Uploaded
   *
   * @remarks
   * Sends you notification through Amazon EventBridge when all files written to your file share
   * have been uploaded to Amazon S3. Storage Gateway can send a notification through Amazon
   * EventBridge when all files written to your file share up to that point in time have been
   * uploaded to Amazon S3. These files include files written to the file share up to the time that
   * you make a request for notification. When the upload is done, Storage Gateway sends you
   * notification through EventBridge. You can configure EventBridge to send the notification
   * through event targets such as Amazon SNS or Lambda function. This operation is only supported
   * for S3 File Gateways. For more information, see Getting file upload notification in the Amazon
   * S3 File Gateway User Guide.
   *
   * @returns Success
   *
   * @throws {@link Operations.NotifyWhenUploaded2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  notifyWhenUploaded2(
    request: Operations.NotifyWhenUploaded2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.NotifyWhenUploaded2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#NotifyWhenUploaded"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AwsStorageGatewayOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.NotifyWhenUploaded2Error,
      },
      options,
    );
  }

  /**
   * Refresh Cache
   *
   * @remarks
   * Refreshes the cached inventory of objects for the specified file share. This operation finds
   * objects in the Amazon S3 bucket that were added, removed, or replaced since the gateway last
   * listed the bucket's contents and cached the results. This operation does not import files into
   * the S3 File Gateway cache storage. It only updates the cached inventory to reflect changes in
   * the inventory of the objects in the S3 bucket. This operation is only supported in the S3 File
   * Gateway types. You can subscribe to be notified through an Amazon CloudWatch event when your
   * RefreshCache operation completes. For more information, see Getting notified about file
   * operations in the Amazon S3 File Gateway User Guide. This operation is Only supported for S3
   * File Gateways. When this API is called, it only initiates the refresh operation. When the API
   * call completes and returns a success code, it doesn't necessarily mean that the file refresh
   * has completed. You should use the refresh-complete notification to determine that the operation
   * has completed before you check for new files on the gateway file share. You can subscribe to be
   * notified through a CloudWatch event when your RefreshCache operation complete
   *
   * @returns Success
   *
   * @throws {@link Operations.RefreshCache2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  refreshCache2(
    request: Operations.RefreshCache2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.RefreshCache2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RefreshCache"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget5AwsStorageGatewayOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.RefreshCache2Error,
      },
      options,
    );
  }

  /**
   * Retrieve Tape Archive
   *
   * @remarks
   * Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual
   * tapes archived in the VTS are not associated with any gateway. However after a tape is
   * retrieved, it is associated with a gateway, even though it is also listed in the VTS, that is,
   * archive. This operation is only supported in the tape gateway type. Once a tape is successfully
   * retrieved to a gateway, it cannot be retrieved again to another gateway. You must archive the
   * tape again before you can retrieve it to another gateway. This operation is only supported in
   * the tape gateway type.
   *
   * @returns Success
   *
   * @throws {@link Operations.RetrieveTapeArchive2Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  retrieveTapeArchive2(
    request: Operations.RetrieveTapeArchive2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.RetrieveTapeArchive2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RetrieveTapeArchive"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget6AwsStorageGatewayOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.RetrieveTapeArchive2Error,
      },
      options,
    );
  }

  /**
   * Retrieve Tape Recovery Point
   *
   * @remarks
   * Retrieves the recovery point for the specified virtual tape. This operation is only supported
   * in the tape gateway type. A recovery point is a point in time view of a virtual tape at which
   * all the data on the tape is consistent. If your gateway crashes, virtual tapes that have
   * recovery points can be recovered to a new gateway. The virtual tape can be retrieved to only
   * one gateway. The retrieved tape is read-only. The virtual tape can be retrieved to only a tape
   * gateway. There is no charge for retrieving recovery points.
   *
   * @returns Success
   *
   * @throws {@link Operations.RetrieveTapeRecoveryPoint2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  retrieveTapeRecoveryPoint2(
    request: Operations.RetrieveTapeRecoveryPoint2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.RetrieveTapeRecoveryPoint2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RetrieveTapeRecoveryPoint"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget7AwsStorageGatewayOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.RetrieveTapeRecoveryPoint2Error,
      },
      options,
    );
  }

  /**
   * Shutdown Gateway
   *
   * @remarks
   * Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use the
   * Amazon Resource Name (ARN) of the gateway in the body of your request. This API action cannot
   * be used to shut down S3 File Gateway or FSx File Gateway. The operation shuts down the gateway
   * service component running in the gateway's virtual machine (VM) and not the host VM. If you
   * want to shut down the VM, it is recommended that you first shut down the gateway component in
   * the VM to avoid unpredictable conditions. After the gateway is shutdown, you cannot call any
   * other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more
   * information, see ActivateGateway. Your applications cannot read from or write to the gateway's
   * storage volumes, and there are no snapshots taken. When you make a shutdown request, you will
   * get a 200 OK success response immediately. However, it might take some time for the gateway to
   * shut down. You can call the DescribeGatewayInformation API to check the status. For more
   * information, see ActivateGateway. If do not intend to use the gateway again, you must delete
   * the gateway (using DeleteGateway) to no longer pay software charges associated with the
   *
   * @returns Success
   *
   * @throws {@link Operations.ShutdownGateway2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  shutdownGateway2(
    request: Operations.ShutdownGateway2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ShutdownGateway2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ShutdownGateway"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget8AwsStorageGatewayOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ShutdownGateway2Error,
      },
      options,
    );
  }
}

export namespace Operations {
  export type ActivateGateway3Request = {
    xAmzTarget: XAmzTarget;
  };

  export class ActivateGateway3Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ActivateGateway3Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type AssignTapePool2Request = {
    xAmzTarget: XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi;
  };

  export class AssignTapePool2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AssignTapePool2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type EvictFilesFailingUploadRequest = {
    xAmzTarget: XAmzTarget2AwsStorageGatewayOperationsApi;
  };

  export class EvictFilesFailingUploadError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<EvictFilesFailingUploadError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type JoinDomain2Request = {
    xAmzTarget: XAmzTarget3AwsStorageGatewayOperationsApi;
  };

  export class JoinDomain2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<JoinDomain2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type NotifyWhenUploaded2Request = {
    xAmzTarget: XAmzTarget4AwsStorageGatewayOperationsApi;
  };

  export class NotifyWhenUploaded2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<NotifyWhenUploaded2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RefreshCache2Request = {
    xAmzTarget: XAmzTarget5AwsStorageGatewayOperationsApi;
  };

  export class RefreshCache2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RefreshCache2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RetrieveTapeArchive2Request = {
    xAmzTarget: XAmzTarget6AwsStorageGatewayOperationsApi;
  };

  export class RetrieveTapeArchive2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RetrieveTapeArchive2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RetrieveTapeRecoveryPoint2Request = {
    xAmzTarget: XAmzTarget7AwsStorageGatewayOperationsApi;
  };

  export class RetrieveTapeRecoveryPoint2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RetrieveTapeRecoveryPoint2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ShutdownGateway2Request = {
    xAmzTarget: XAmzTarget8AwsStorageGatewayOperationsApi;
  };

  export class ShutdownGateway2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ShutdownGateway2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
