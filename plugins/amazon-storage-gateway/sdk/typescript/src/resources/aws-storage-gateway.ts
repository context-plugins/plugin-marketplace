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
import { xAmzTarget1Schema, type XAmzTarget1 } from "../models/xamz-target1.js";
import { xAmzTarget10Schema, type XAmzTarget10 } from "../models/xamz-target10.js";
import { xAmzTarget11Schema, type XAmzTarget11 } from "../models/xamz-target11.js";
import { xAmzTarget12Schema, type XAmzTarget12 } from "../models/xamz-target12.js";
import { xAmzTarget13Schema, type XAmzTarget13 } from "../models/xamz-target13.js";
import { xAmzTarget14Schema, type XAmzTarget14 } from "../models/xamz-target14.js";
import { xAmzTarget15Schema, type XAmzTarget15 } from "../models/xamz-target15.js";
import { xAmzTarget16Schema, type XAmzTarget16 } from "../models/xamz-target16.js";
import { xAmzTarget17Schema, type XAmzTarget17 } from "../models/xamz-target17.js";
import { xAmzTarget18Schema, type XAmzTarget18 } from "../models/xamz-target18.js";
import { xAmzTarget19Schema, type XAmzTarget19 } from "../models/xamz-target19.js";
import {
  xAmzTarget2AwsStorageGatewayAwsStorageGatewayApiSchema,
  type XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi,
} from "../models/xamz-target2-aws-storage-gateway-aws-storage-gateway-api.js";
import { xAmzTarget2Schema, type XAmzTarget2 } from "../models/xamz-target2.js";
import { xAmzTarget20Schema, type XAmzTarget20 } from "../models/xamz-target20.js";
import { xAmzTarget21Schema, type XAmzTarget21 } from "../models/xamz-target21.js";
import { xAmzTarget22Schema, type XAmzTarget22 } from "../models/xamz-target22.js";
import { xAmzTarget23Schema, type XAmzTarget23 } from "../models/xamz-target23.js";
import { xAmzTarget24Schema, type XAmzTarget24 } from "../models/xamz-target24.js";
import { xAmzTarget25Schema, type XAmzTarget25 } from "../models/xamz-target25.js";
import { xAmzTarget26Schema, type XAmzTarget26 } from "../models/xamz-target26.js";
import { xAmzTarget27Schema, type XAmzTarget27 } from "../models/xamz-target27.js";
import { xAmzTarget28Schema, type XAmzTarget28 } from "../models/xamz-target28.js";
import { xAmzTarget29Schema, type XAmzTarget29 } from "../models/xamz-target29.js";
import {
  xAmzTarget3AwsStorageGatewayAwsStorageGatewayApiSchema,
  type XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi,
} from "../models/xamz-target3-aws-storage-gateway-aws-storage-gateway-api.js";
import { xAmzTarget3Schema, type XAmzTarget3 } from "../models/xamz-target3.js";
import { xAmzTarget30Schema, type XAmzTarget30 } from "../models/xamz-target30.js";
import { xAmzTarget31Schema, type XAmzTarget31 } from "../models/xamz-target31.js";
import { xAmzTarget32Schema, type XAmzTarget32 } from "../models/xamz-target32.js";
import { xAmzTarget33Schema, type XAmzTarget33 } from "../models/xamz-target33.js";
import { xAmzTarget34Schema, type XAmzTarget34 } from "../models/xamz-target34.js";
import { xAmzTarget35Schema, type XAmzTarget35 } from "../models/xamz-target35.js";
import { xAmzTarget36Schema, type XAmzTarget36 } from "../models/xamz-target36.js";
import { xAmzTarget37Schema, type XAmzTarget37 } from "../models/xamz-target37.js";
import { xAmzTarget38Schema, type XAmzTarget38 } from "../models/xamz-target38.js";
import { xAmzTarget39Schema, type XAmzTarget39 } from "../models/xamz-target39.js";
import {
  xAmzTarget4AwsStorageGatewayAwsStorageGatewayApiSchema,
  type XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi,
} from "../models/xamz-target4-aws-storage-gateway-aws-storage-gateway-api.js";
import { xAmzTarget4Schema, type XAmzTarget4 } from "../models/xamz-target4.js";
import { xAmzTarget40Schema, type XAmzTarget40 } from "../models/xamz-target40.js";
import { xAmzTarget41Schema, type XAmzTarget41 } from "../models/xamz-target41.js";
import { xAmzTarget42Schema, type XAmzTarget42 } from "../models/xamz-target42.js";
import { xAmzTarget43Schema, type XAmzTarget43 } from "../models/xamz-target43.js";
import { xAmzTarget44Schema, type XAmzTarget44 } from "../models/xamz-target44.js";
import { xAmzTarget45Schema, type XAmzTarget45 } from "../models/xamz-target45.js";
import { xAmzTarget46Schema, type XAmzTarget46 } from "../models/xamz-target46.js";
import { xAmzTarget47Schema, type XAmzTarget47 } from "../models/xamz-target47.js";
import { xAmzTarget48Schema, type XAmzTarget48 } from "../models/xamz-target48.js";
import { xAmzTarget49Schema, type XAmzTarget49 } from "../models/xamz-target49.js";
import { xAmzTarget5Schema, type XAmzTarget5 } from "../models/xamz-target5.js";
import { xAmzTarget50Schema, type XAmzTarget50 } from "../models/xamz-target50.js";
import { xAmzTarget51Schema, type XAmzTarget51 } from "../models/xamz-target51.js";
import { xAmzTarget52Schema, type XAmzTarget52 } from "../models/xamz-target52.js";
import { xAmzTarget53Schema, type XAmzTarget53 } from "../models/xamz-target53.js";
import { xAmzTarget54Schema, type XAmzTarget54 } from "../models/xamz-target54.js";
import { xAmzTarget55Schema, type XAmzTarget55 } from "../models/xamz-target55.js";
import { xAmzTarget56Schema, type XAmzTarget56 } from "../models/xamz-target56.js";
import { xAmzTarget57Schema, type XAmzTarget57 } from "../models/xamz-target57.js";
import { xAmzTarget58Schema, type XAmzTarget58 } from "../models/xamz-target58.js";
import { xAmzTarget59Schema, type XAmzTarget59 } from "../models/xamz-target59.js";
import { xAmzTarget6Schema, type XAmzTarget6 } from "../models/xamz-target6.js";
import { xAmzTarget60Schema, type XAmzTarget60 } from "../models/xamz-target60.js";
import { xAmzTarget61Schema, type XAmzTarget61 } from "../models/xamz-target61.js";
import { xAmzTarget62Schema, type XAmzTarget62 } from "../models/xamz-target62.js";
import { xAmzTarget63Schema, type XAmzTarget63 } from "../models/xamz-target63.js";
import { xAmzTarget64Schema, type XAmzTarget64 } from "../models/xamz-target64.js";
import { xAmzTarget65Schema, type XAmzTarget65 } from "../models/xamz-target65.js";
import { xAmzTarget66Schema, type XAmzTarget66 } from "../models/xamz-target66.js";
import { xAmzTarget67Schema, type XAmzTarget67 } from "../models/xamz-target67.js";
import { xAmzTarget68Schema, type XAmzTarget68 } from "../models/xamz-target68.js";
import { xAmzTarget69Schema, type XAmzTarget69 } from "../models/xamz-target69.js";
import { xAmzTarget7Schema, type XAmzTarget7 } from "../models/xamz-target7.js";
import { xAmzTarget70Schema, type XAmzTarget70 } from "../models/xamz-target70.js";
import { xAmzTarget71Schema, type XAmzTarget71 } from "../models/xamz-target71.js";
import { xAmzTarget72Schema, type XAmzTarget72 } from "../models/xamz-target72.js";
import { xAmzTarget73Schema, type XAmzTarget73 } from "../models/xamz-target73.js";
import { xAmzTarget74Schema, type XAmzTarget74 } from "../models/xamz-target74.js";
import { xAmzTarget75Schema, type XAmzTarget75 } from "../models/xamz-target75.js";
import { xAmzTarget76Schema, type XAmzTarget76 } from "../models/xamz-target76.js";
import { xAmzTarget77Schema, type XAmzTarget77 } from "../models/xamz-target77.js";
import { xAmzTarget78Schema, type XAmzTarget78 } from "../models/xamz-target78.js";
import { xAmzTarget79Schema, type XAmzTarget79 } from "../models/xamz-target79.js";
import { xAmzTarget8Schema, type XAmzTarget8 } from "../models/xamz-target8.js";
import { xAmzTarget80Schema, type XAmzTarget80 } from "../models/xamz-target80.js";
import { xAmzTarget81Schema, type XAmzTarget81 } from "../models/xamz-target81.js";
import { xAmzTarget82Schema, type XAmzTarget82 } from "../models/xamz-target82.js";
import { xAmzTarget83Schema, type XAmzTarget83 } from "../models/xamz-target83.js";
import { xAmzTarget84Schema, type XAmzTarget84 } from "../models/xamz-target84.js";
import { xAmzTarget85Schema, type XAmzTarget85 } from "../models/xamz-target85.js";
import { xAmzTarget9Schema, type XAmzTarget9 } from "../models/xamz-target9.js";
import type { Servers } from "../servers.js";

export class AwsStorageGateway {
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
   * @throws {@link AwsStorageGateway.ActivateGateway2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  activateGateway2(
    request: AwsStorageGateway.ActivateGateway2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.ActivateGateway2Error> {
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
        errorFactory: AwsStorageGateway.ActivateGateway2Error,
      },
      options,
    );
  }

  /**
   * Add Cache
   *
   * @remarks
   * Configures one or more gateway local disks as cache for a gateway. This operation is only
   * supported in the cached volume, tape, and file gateway type (see How Storage Gateway works
   * (architecture). In the request, you specify the gateway Amazon Resource Name (ARN) to which you
   * want to add cache, and one or more disk IDs that you want to configure as cache.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.AddCacheError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  addCache(
    request: AwsStorageGateway.AddCacheRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.AddCacheError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AddCache"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget8Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.AddCacheError,
      },
      options,
    );
  }

  /**
   * Add Tags To Resource
   *
   * @remarks
   * Adds one or more tags to the specified resource. You use tags to add metadata to resources,
   * which you can use to categorize these resources. For example, you can categorize resources by
   * purpose, owner, environment, or team. Each tag consists of a key and a value, which you define.
   * You can add tags to the following Storage Gateway resources: Storage gateways of all types
   * Storage volumes Virtual tapes NFS and SMB file shares File System associations You can create a
   * maximum of 50 tags for each resource. Virtual tapes and storage volumes that are recovered to a
   * new gateway maintain their tags.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.AddTagsToResourceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  addTagsToResource(
    request: AwsStorageGateway.AddTagsToResourceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.AddTagsToResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AddTagsToResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget11Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.AddTagsToResourceError,
      },
      options,
    );
  }

  /**
   * Add Upload Buffer
   *
   * @remarks
   * Configures one or more gateway local disks as upload buffer for a specified gateway. This
   * operation is supported for the stored volume, cached volume, and tape gateway types. In the
   * request, you specify the gateway Amazon Resource Name (ARN) to which you want to add upload
   * buffer, and one or more disk IDs that you want to configure as upload buffer.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.AddUploadBufferError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  addUploadBuffer(
    request: AwsStorageGateway.AddUploadBufferRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.AddUploadBufferError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AddUploadBuffer"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget14Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.AddUploadBufferError,
      },
      options,
    );
  }

  /**
   * Add Working Storage
   *
   * @remarks
   * Configures one or more gateway local disks as working storage for a gateway. This operation is
   * only supported in the stored volume gateway type. This operation is deprecated in cached volume
   * API version 20120630. Use AddUploadBuffer instead. Working storage is also referred to as
   * upload buffer. You can also use the AddUploadBuffer operation to add upload buffer to a stored
   * volume gateway. In the request, you specify the gateway Amazon Resource Name (ARN) to which you
   * want to add working storage, and one or more disk IDs that you want to configure as working
   * storage.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.AddWorkingStorageError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  addWorkingStorage(
    request: AwsStorageGateway.AddWorkingStorageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.AddWorkingStorageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AddWorkingStorage"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget16Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.AddWorkingStorageError,
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
   * @throws {@link AwsStorageGateway.AssignTapePoolError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  assignTapePool(
    request: AwsStorageGateway.AssignTapePoolRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.AssignTapePoolError> {
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
        errorFactory: AwsStorageGateway.AssignTapePoolError,
      },
      options,
    );
  }

  /**
   * Associate File System
   *
   * @remarks
   * Associate an Amazon FSx file system with the FSx File Gateway. After the association process is
   * complete, the file shares on the Amazon FSx file system are available for access through the
   * gateway. This operation only supports the FSx File Gateway type.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.AssociateFileSystemError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  associateFileSystem(
    request: AwsStorageGateway.AssociateFileSystemRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.AssociateFileSystemError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AssociateFileSystem"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget18Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.AssociateFileSystemError,
      },
      options,
    );
  }

  /**
   * Attach Volume
   *
   * @remarks
   * Connects a volume to an iSCSI connection and then attaches the volume to the specified gateway.
   * Detaching and attaching a volume enables you to recover your data from one gateway to a
   * different gateway without creating a snapshot. It also makes it easier to move your volumes
   * from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.AttachVolumeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  attachVolume(
    request: AwsStorageGateway.AttachVolumeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.AttachVolumeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AttachVolume"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget20Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.AttachVolumeError,
      },
      options,
    );
  }

  /**
   * Cancel Archival
   *
   * @remarks
   * Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process
   * is initiated. This operation is only supported in the tape gateway type.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.CancelArchivalError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cancelArchival(
    request: AwsStorageGateway.CancelArchivalRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.CancelArchivalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CancelArchival"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget23Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.CancelArchivalError,
      },
      options,
    );
  }

  /**
   * Cancel Retrieval
   *
   * @remarks
   * Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the
   * retrieval process is initiated. The virtual tape is returned to the VTS. This operation is only
   * supported in the tape gateway type.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.CancelRetrievalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cancelRetrieval(
    request: AwsStorageGateway.CancelRetrievalRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.CancelRetrievalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CancelRetrieval"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget24Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.CancelRetrievalError,
      },
      options,
    );
  }

  /**
   * Create Cachedi SCSIVolume
   *
   * @remarks
   * Creates a cached volume on a specified cached volume gateway. This operation is only supported
   * in the cached volume gateway type. Cache storage must be allocated to the gateway before you
   * can create a cached volume. Use the AddCache operation to add cache storage to a gateway. In
   * the request, you must specify the gateway, size of the volume in bytes, the iSCSI target name,
   * an IP address on which to expose the target, and a unique client token. In response, the
   * gateway creates the volume and returns information about it. This information includes the
   * volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use
   * to connect to the volume target. Optionally, you can provide the ARN for an existing volume as
   * the SourceVolumeARN for this cached volume, which creates an exact copy of the existing
   * volume’s latest recovery point. The VolumeSizeInBytes value must be equal to or larger than the
   * size of the copied volume, in bytes.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.CreateCachediScsiVolumeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createCachediScsiVolume(
    request: AwsStorageGateway.CreateCachediScsiVolumeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.CreateCachediScsiVolumeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateCachediSCSIVolume"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget25Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.CreateCachediScsiVolumeError,
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
   * @throws {@link AwsStorageGateway.CreateNfsFileShare2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createNfsFileShare2(
    request: AwsStorageGateway.CreateNfsFileShare2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.CreateNfsFileShare2Error> {
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
        errorFactory: AwsStorageGateway.CreateNfsFileShare2Error,
      },
      options,
    );
  }

  /**
   * Create SMBFile Share
   *
   * @remarks
   * Creates a Server Message Block (SMB) file share on an existing S3 File Gateway. In Storage
   * Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage
   * Gateway exposes file shares using an SMB interface. This operation is only supported for S3
   * File Gateways. S3 File Gateways require Security Token Service (Amazon Web Services STS) to be
   * activated to enable you to create a file share. Make sure that Amazon Web Services STS is
   * activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon
   * Web Services STS is not activated in this Amazon Web Services Region, activate it. For
   * information about how to activate Amazon Web Services STS, see Activating and deactivating
   * Amazon Web Services STS in an Amazon Web Services Region in the Identity and Access Management
   * User Guide. File gateways don't support creating hard or symbolic links on a file share.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.CreateSmbFileShareError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createSmbFileShare(
    request: AwsStorageGateway.CreateSmbFileShareRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.CreateSmbFileShareError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateSMBFileShare"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget29Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.CreateSmbFileShareError,
      },
      options,
    );
  }

  /**
   * Create Snapshot
   *
   * @remarks
   * Initiates a snapshot of a volume. Storage Gateway provides the ability to back up point-in-time
   * snapshots of your data to Amazon Simple Storage (Amazon S3) for durable off-site recovery, and
   * also import the data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute
   * Cloud (EC2). You can take snapshots of your gateway volume on a scheduled or ad hoc basis. This
   * API enables you to take an ad hoc snapshot. For more information, see Editing a snapshot
   * schedule. In the CreateSnapshot request, you identify the volume by providing its Amazon
   * Resource Name (ARN). You must also provide description for the snapshot. When Storage Gateway
   * takes the snapshot of specified volume, the snapshot and description appears in the Storage
   * Gateway console. In response, Storage Gateway returns you a snapshot ID. You can use this
   * snapshot ID to check the snapshot progress or later use it when you want to create a volume
   * from a snapshot. This operation is only supported in stored and cached volume gateway type. To
   * list or delete a snapshot, you must use the Amazon EC2 API. For more information, see
   * DescribeSnapshots or DeleteSnapshot in the Amazon Elastic Compute Cloud API Reference. Volume
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.CreateSnapshotError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createSnapshot(
    request: AwsStorageGateway.CreateSnapshotRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.CreateSnapshotError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateSnapshot"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget32Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.CreateSnapshotError,
      },
      options,
    );
  }

  /**
   * Create Snapshot From Volume Recovery Point
   *
   * @remarks
   * Initiates a snapshot of a gateway from a volume recovery point. This operation is only
   * supported in the cached volume gateway type. A volume recovery point is a point in time at
   * which all data of the volume is consistent and from which you can create a snapshot. To get a
   * list of volume recovery point for cached volume gateway, use ListVolumeRecoveryPoints. In the
   * CreateSnapshotFromVolumeRecoveryPoint request, you identify the volume by providing its Amazon
   * Resource Name (ARN). You must also provide a description for the snapshot. When the gateway
   * takes a snapshot of the specified volume, the snapshot and its description appear in the
   * Storage Gateway console. In response, the gateway returns you a snapshot ID. You can use this
   * snapshot ID to check the snapshot progress or later use it when you want to create a volume
   * from a snapshot. To list or delete a snapshot, you must use the Amazon EC2 API. For more
   * information, see DescribeSnapshots or DeleteSnapshot in the Amazon Elastic Compute Cloud API
   * Reference.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.CreateSnapshotFromVolumeRecoveryPointError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createSnapshotFromVolumeRecoveryPoint(
    request: AwsStorageGateway.CreateSnapshotFromVolumeRecoveryPointRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.CreateSnapshotFromVolumeRecoveryPointError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateSnapshotFromVolumeRecoveryPoint"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget33Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.CreateSnapshotFromVolumeRecoveryPointError,
      },
      options,
    );
  }

  /**
   * Create Storedi SCSIVolume
   *
   * @remarks
   * Creates a volume on a specified gateway. This operation is only supported in the stored volume
   * gateway type. The size of the volume to create is inferred from the disk size. You can choose
   * to preserve existing data on the disk, create volume from an existing snapshot, or create an
   * empty volume. If you choose to create an empty gateway volume, then any existing data on the
   * disk is erased. In the request, you must specify the gateway and the disk information on which
   * you are creating the volume. In response, the gateway creates the volume and returns volume
   * information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN
   * that initiators can use to connect to the volume target.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.CreateStorediScsiVolumeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createStorediScsiVolume(
    request: AwsStorageGateway.CreateStorediScsiVolumeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.CreateStorediScsiVolumeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateStorediSCSIVolume"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget34Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.CreateStorediScsiVolumeError,
      },
      options,
    );
  }

  /**
   * Create Tape Pool
   *
   * @remarks
   * Creates a new custom tape pool. You can use custom tape pool to enable tape retention lock on
   * tapes that are archived in the custom pool.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.CreateTapePoolError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createTapePool(
    request: AwsStorageGateway.CreateTapePoolRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.CreateTapePoolError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateTapePool"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget36Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.CreateTapePoolError,
      },
      options,
    );
  }

  /**
   * Create Tape With Barcode
   *
   * @remarks
   * Creates a virtual tape by using your own barcode. You write data to the virtual tape and then
   * archive the tape. A barcode is unique and cannot be reused if it has already been used on a
   * tape. This applies to barcodes used on deleted tapes. This operation is only supported in the
   * tape gateway type. Cache storage must be allocated to the gateway before you can create a
   * virtual tape. Use the AddCache operation to add cache storage to a gateway.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.CreateTapeWithBarcodeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createTapeWithBarcode(
    request: AwsStorageGateway.CreateTapeWithBarcodeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.CreateTapeWithBarcodeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateTapeWithBarcode"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget40Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.CreateTapeWithBarcodeError,
      },
      options,
    );
  }

  /**
   * Create Tapes
   *
   * @remarks
   * Creates one or more virtual tapes. You write data to the virtual tapes and then archive the
   * tapes. This operation is only supported in the tape gateway type. Cache storage must be
   * allocated to the gateway before you can create virtual tapes. Use the AddCache operation to add
   * cache storage to a gateway.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.CreateTapesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createTapes(
    request: AwsStorageGateway.CreateTapesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.CreateTapesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateTapes"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget39Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.CreateTapesError,
      },
      options,
    );
  }

  /**
   * Delete Automatic Tape Creation Policy
   *
   * @remarks
   * Deletes the automatic tape creation policy of a gateway. If you delete this policy, new virtual
   * tapes must be created manually. Use the Amazon Resource Name (ARN) of the gateway in your
   * request to remove the policy.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DeleteAutomaticTapeCreationPolicyError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteAutomaticTapeCreationPolicy(
    request: AwsStorageGateway.DeleteAutomaticTapeCreationPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DeleteAutomaticTapeCreationPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteAutomaticTapeCreationPolicy"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget44Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DeleteAutomaticTapeCreationPolicyError,
      },
      options,
    );
  }

  /**
   * Delete Bandwidth Rate Limit
   *
   * @remarks
   * Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download
   * bandwidth rate limit, or you can delete both. If you delete only one of the limits, the other
   * limit remains unchanged. To specify which gateway to work with, use the Amazon Resource Name
   * (ARN) of the gateway in your request. This operation is supported only for the stored volume,
   * cached volume, and tape gateway types.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DeleteBandwidthRateLimitError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteBandwidthRateLimit(
    request: AwsStorageGateway.DeleteBandwidthRateLimitRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DeleteBandwidthRateLimitError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteBandwidthRateLimit"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget47Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DeleteBandwidthRateLimitError,
      },
      options,
    );
  }

  /**
   * Delete Chap Credentials
   *
   * @remarks
   * Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI
   * target and initiator pair. This operation is supported in volume and tape gateway types.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DeleteChapCredentialsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteChapCredentials(
    request: AwsStorageGateway.DeleteChapCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DeleteChapCredentialsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteChapCredentials"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget50Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DeleteChapCredentialsError,
      },
      options,
    );
  }

  /**
   * Delete File Share
   *
   * @remarks
   * Deletes a file share from an S3 File Gateway. This operation is only supported for S3 File
   * Gateways.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DeleteFileShareError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteFileShare(
    request: AwsStorageGateway.DeleteFileShareRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DeleteFileShareError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteFileShare"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget53Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DeleteFileShareError,
      },
      options,
    );
  }

  /**
   * Delete Gateway
   *
   * @remarks
   * Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of
   * the gateway in your request. The operation deletes the gateway; however, it does not delete the
   * gateway virtual machine (VM) from your host computer. After you delete a gateway, you cannot
   * reactivate it. Completed snapshots of the gateway volumes are not deleted upon deleting the
   * gateway, however, pending snapshots will not complete. After you delete a gateway, your next
   * step is to remove it from your environment. You no longer pay software charges after the
   * gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue
   * to be billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots
   * by canceling your Amazon EC2 subscription. If you prefer not to cancel your Amazon EC2
   * subscription, you can delete your snapshots using the Amazon EC2 console. For more information,
   * see the Storage Gateway detail page.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DeleteGatewayError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteGateway(
    request: AwsStorageGateway.DeleteGatewayRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DeleteGatewayError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteGateway"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget55Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DeleteGatewayError,
      },
      options,
    );
  }

  /**
   * Delete Snapshot Schedule
   *
   * @remarks
   * Deletes a snapshot of a volume. You can take snapshots of your gateway volumes on a scheduled
   * or ad hoc basis. This API action enables you to delete a snapshot schedule for a volume. For
   * more information, see Backing up your volumes. In the DeleteSnapshotSchedule request, you
   * identify the volume by providing its Amazon Resource Name (ARN). This operation is only
   * supported for cached volume gateway types. To list or delete a snapshot, you must use the
   * Amazon EC2 API. For more information, go to DescribeSnapshots in the Amazon Elastic Compute
   * Cloud API Reference.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DeleteSnapshotScheduleError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteSnapshotSchedule(
    request: AwsStorageGateway.DeleteSnapshotScheduleRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DeleteSnapshotScheduleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteSnapshotSchedule"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget58Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DeleteSnapshotScheduleError,
      },
      options,
    );
  }

  /**
   * Delete Tape
   *
   * @remarks
   * Deletes the specified virtual tape. This operation is only supported in the tape gateway type.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DeleteTapeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteTape(
    request: AwsStorageGateway.DeleteTapeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DeleteTapeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteTape"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget41Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DeleteTapeError,
      },
      options,
    );
  }

  /**
   * Delete Tape Archive
   *
   * @remarks
   * Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only
   * supported in the tape gateway type.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DeleteTapeArchiveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteTapeArchive(
    request: AwsStorageGateway.DeleteTapeArchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DeleteTapeArchiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteTapeArchive"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget61Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DeleteTapeArchiveError,
      },
      options,
    );
  }

  /**
   * Delete Tape Pool
   *
   * @remarks
   * Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes in the
   * pool and if there are no automatic tape creation policies that reference the custom tape pool.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DeleteTapePoolError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteTapePool(
    request: AwsStorageGateway.DeleteTapePoolRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DeleteTapePoolError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteTapePool"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget37Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DeleteTapePoolError,
      },
      options,
    );
  }

  /**
   * Delete Volume
   *
   * @remarks
   * Deletes the specified storage volume that you previously created using the
   * CreateCachediSCSIVolume or CreateStorediSCSIVolume API. This operation is only supported in the
   * cached volume and stored volume types. For stored volume gateways, the local disk that was
   * configured as the storage volume is not deleted. You can reuse the local disk to create another
   * storage volume. Before you delete a volume, make sure there are no iSCSI connections to the
   * volume you are deleting. You should also make sure there is no snapshot in progress. You can
   * use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are
   * deleting and check the snapshot status. For more information, go to DescribeSnapshots in the
   * Amazon Elastic Compute Cloud API Reference. In the request, you must provide the Amazon
   * Resource Name (ARN) of the storage volume you want to delete.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DeleteVolumeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteVolume(
    request: AwsStorageGateway.DeleteVolumeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DeleteVolumeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteVolume"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget21Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DeleteVolumeError,
      },
      options,
    );
  }

  /**
   * Describe Availability Monitor Test
   *
   * @remarks
   * Returns information about the most recent high availability monitoring test that was performed
   * on the host in a cluster. If a test isn't performed, the status and start time in the response
   * would be null.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeAvailabilityMonitorTestError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeAvailabilityMonitorTest(
    request: AwsStorageGateway.DescribeAvailabilityMonitorTestRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeAvailabilityMonitorTestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeAvailabilityMonitorTest"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget63Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeAvailabilityMonitorTestError,
      },
      options,
    );
  }

  /**
   * Describe Bandwidth Rate Limit
   *
   * @remarks
   * Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which
   * means no bandwidth rate limiting is in effect. This operation is supported only for the stored
   * volume, cached volume, and tape gateway types. To describe bandwidth rate limits for S3 file
   * gateways, use DescribeBandwidthRateLimitSchedule. This operation returns a value for a
   * bandwidth rate limit only if the limit is set. If no limits are set for the gateway, then this
   * operation returns only the gateway ARN in the response body. To specify which gateway to
   * describe, use the Amazon Resource Name (ARN) of the gateway in your request.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeBandwidthRateLimitError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeBandwidthRateLimit(
    request: AwsStorageGateway.DescribeBandwidthRateLimitRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeBandwidthRateLimitError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeBandwidthRateLimit"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget48Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeBandwidthRateLimitError,
      },
      options,
    );
  }

  /**
   * Describe Bandwidth Rate Limit Schedule
   *
   * @remarks
   * Returns information about the bandwidth rate limit schedule of a gateway. By default, gateways
   * do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in
   * effect. This operation is supported only for volume, tape and S3 file gateways. FSx file
   * gateways do not support bandwidth rate limits. This operation returns information about a
   * gateway's bandwidth rate limit schedule. A bandwidth rate limit schedule consists of one or
   * more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time
   * on one or more days of the week, during which bandwidth rate limits are specified for
   * uploading, downloading, or both. A bandwidth rate limit interval consists of one or more days
   * of the week, a start hour and minute, an ending hour and minute, and bandwidth rate limits for
   * uploading and downloading If no bandwidth rate limit schedule intervals are set for the
   * gateway, this operation returns an empty response. To specify which gateway to describe, use
   * the Amazon Resource Name (ARN) of the gateway in your request.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeBandwidthRateLimitScheduleError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeBandwidthRateLimitSchedule(
    request: AwsStorageGateway.DescribeBandwidthRateLimitScheduleRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeBandwidthRateLimitScheduleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeBandwidthRateLimitSchedule"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget65Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeBandwidthRateLimitScheduleError,
      },
      options,
    );
  }

  /**
   * Describe Cache
   *
   * @remarks
   * Returns information about the cache of a gateway. This operation is only supported in the
   * cached volume, tape, and file gateway types. The response includes disk IDs that are configured
   * as cache, and it includes the amount of cache allocated and used.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeCacheError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeCache(
    request: AwsStorageGateway.DescribeCacheRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeCacheError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeCache"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget9Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeCacheError,
      },
      options,
    );
  }

  /**
   * Describe Cachedi SCSIVolumes
   *
   * @remarks
   * Returns a description of the gateway volumes specified in the request. This operation is only
   * supported in the cached volume gateway types. The list of gateway volumes in the request must
   * be from one gateway. In the response, Storage Gateway returns volume information sorted by
   * volume Amazon Resource Name (ARN).
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeCachediScsiVolumesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeCachediScsiVolumes(
    request: AwsStorageGateway.DescribeCachediScsiVolumesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeCachediScsiVolumesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeCachediSCSIVolumes"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget26Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeCachediScsiVolumesError,
      },
      options,
    );
  }

  /**
   * Describe Chap Credentials
   *
   * @remarks
   * Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information
   * for a specified iSCSI target, one for each target-initiator pair. This operation is supported
   * in the volume and tape gateway types.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeChapCredentialsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeChapCredentials(
    request: AwsStorageGateway.DescribeChapCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeChapCredentialsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeChapCredentials"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget51Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeChapCredentialsError,
      },
      options,
    );
  }

  /**
   * Describe File System Associations
   *
   * @remarks
   * Gets the file system association information. This operation is only supported for FSx File
   * Gateways.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeFileSystemAssociationsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeFileSystemAssociations(
    request: AwsStorageGateway.DescribeFileSystemAssociationsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeFileSystemAssociationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeFileSystemAssociations"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget67Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeFileSystemAssociationsError,
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
   * @throws {@link AwsStorageGateway.DescribeGatewayInformation2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeGatewayInformation2(
    request: AwsStorageGateway.DescribeGatewayInformation2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeGatewayInformation2Error> {
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
        errorFactory: AwsStorageGateway.DescribeGatewayInformation2Error,
      },
      options,
    );
  }

  /**
   * Describe Maintenance Start Time
   *
   * @remarks
   * Returns your gateway's maintenance window schedule information, with values for monthly or
   * weekly cadence, specific day and time to begin maintenance, and which types of updates to
   * apply. Time values returned are for the gateway's time zone.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeMaintenanceStartTimeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeMaintenanceStartTime(
    request: AwsStorageGateway.DescribeMaintenanceStartTimeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeMaintenanceStartTimeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeMaintenanceStartTime"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget71Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeMaintenanceStartTimeError,
      },
      options,
    );
  }

  /**
   * Describe NFSFile Shares
   *
   * @remarks
   * Gets a description for one or more Network File System (NFS) file shares from an S3 File
   * Gateway. This operation is only supported for S3 File Gateways.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeNfsFileSharesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeNfsFileShares(
    request: AwsStorageGateway.DescribeNfsFileSharesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeNfsFileSharesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeNFSFileShares"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget27Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeNfsFileSharesError,
      },
      options,
    );
  }

  /**
   * Describe SMBFile Shares
   *
   * @remarks
   * Gets a description for one or more Server Message Block (SMB) file shares from a S3 File
   * Gateway. This operation is only supported for S3 File Gateways.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeSmbFileSharesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeSmbFileShares(
    request: AwsStorageGateway.DescribeSmbFileSharesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeSmbFileSharesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeSMBFileShares"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget30Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeSmbFileSharesError,
      },
      options,
    );
  }

  /**
   * Describe SMBSettings
   *
   * @remarks
   * Gets a description of a Server Message Block (SMB) file share settings from a file gateway.
   * This operation is only supported for file gateways.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeSmbSettingsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeSmbSettings(
    request: AwsStorageGateway.DescribeSmbSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeSmbSettingsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeSMBSettings"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget73Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeSmbSettingsError,
      },
      options,
    );
  }

  /**
   * Describe Snapshot Schedule
   *
   * @remarks
   * Describes the snapshot schedule for the specified gateway volume. The snapshot schedule
   * information includes intervals at which snapshots are automatically initiated on the volume.
   * This operation is only supported in the cached volume and stored volume types.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeSnapshotScheduleError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeSnapshotSchedule(
    request: AwsStorageGateway.DescribeSnapshotScheduleRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeSnapshotScheduleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeSnapshotSchedule"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget59Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeSnapshotScheduleError,
      },
      options,
    );
  }

  /**
   * Describe Storedi SCSIVolumes
   *
   * @remarks
   * Returns the description of the gateway volumes specified in the request. The list of gateway
   * volumes in the request must be from one gateway. In the response, Storage Gateway returns
   * volume information sorted by volume ARNs. This operation is only supported in stored volume
   * gateway type.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeStorediScsiVolumesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeStorediScsiVolumes(
    request: AwsStorageGateway.DescribeStorediScsiVolumesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeStorediScsiVolumesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeStorediSCSIVolumes"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget35Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeStorediScsiVolumesError,
      },
      options,
    );
  }

  /**
   * Describe Tape Archives
   *
   * @remarks
   * Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This
   * operation is only supported in the tape gateway type. If a specific TapeARN is not specified,
   * Storage Gateway returns a description of all virtual tapes found in the VTS associated with
   * your account.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeTapeArchivesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeTapeArchives(
    request: AwsStorageGateway.DescribeTapeArchivesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeTapeArchivesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeTapeArchives"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget62Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeTapeArchivesError,
      },
      options,
    );
  }

  /**
   * Describe Tape Recovery Points
   *
   * @remarks
   * Returns a list of virtual tape recovery points that are available for the specified tape
   * gateway. A recovery point is a point-in-time view of a virtual tape at which all the data on
   * the virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery
   * points can be recovered to a new gateway. This operation is only supported in the tape gateway
   * type.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeTapeRecoveryPointsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeTapeRecoveryPoints(
    request: AwsStorageGateway.DescribeTapeRecoveryPointsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeTapeRecoveryPointsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeTapeRecoveryPoints"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget74Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeTapeRecoveryPointsError,
      },
      options,
    );
  }

  /**
   * Describe Tapes
   *
   * @remarks
   * Returns a description of virtual tapes that correspond to the specified Amazon Resource Names
   * (ARNs). If TapeARN is not specified, returns a description of the virtual tapes associated with
   * the specified gateway. This operation is only supported for the tape gateway type. The
   * operation supports pagination. By default, the operation returns a maximum of up to 100 tapes.
   * You can optionally specify the Limit field in the body to limit the number of tapes in the
   * response. If the number of tapes returned in the response is truncated, the response includes a
   * Marker field. You can use this Marker value in your subsequent request to retrieve the next set
   * of tapes.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeTapesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeTapes(
    request: AwsStorageGateway.DescribeTapesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeTapesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeTapes"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget42Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeTapesError,
      },
      options,
    );
  }

  /**
   * Describe Upload Buffer
   *
   * @remarks
   * Returns information about the upload buffer of a gateway. This operation is supported for the
   * stored volume, cached volume, and tape gateway types. The response includes disk IDs that are
   * configured as upload buffer space, and it includes the amount of upload buffer space allocated
   * and used.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeUploadBufferError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeUploadBuffer(
    request: AwsStorageGateway.DescribeUploadBufferRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeUploadBufferError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeUploadBuffer"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget15Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeUploadBufferError,
      },
      options,
    );
  }

  /**
   * Describe VTLDevices
   *
   * @remarks
   * Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In
   * the response, Storage Gateway returns VTL device information. This operation is only supported
   * in the tape gateway type.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeVtlDevicesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeVtlDevices(
    request: AwsStorageGateway.DescribeVtlDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeVtlDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeVTLDevices"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget75Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeVtlDevicesError,
      },
      options,
    );
  }

  /**
   * Describe Working Storage
   *
   * @remarks
   * Returns information about the working storage of a gateway. This operation is only supported in
   * the stored volumes gateway type. This operation is deprecated in cached volumes API version
   * (20120630). Use DescribeUploadBuffer instead. Working storage is also referred to as upload
   * buffer. You can also use the DescribeUploadBuffer operation to add upload buffer to a stored
   * volume gateway. The response includes disk IDs that are configured as working storage, and it
   * includes the amount of working storage allocated and used.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DescribeWorkingStorageError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeWorkingStorage(
    request: AwsStorageGateway.DescribeWorkingStorageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DescribeWorkingStorageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeWorkingStorage"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget17Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DescribeWorkingStorageError,
      },
      options,
    );
  }

  /**
   * Detach Volume
   *
   * @remarks
   * Disconnects a volume from an iSCSI connection and then detaches the volume from the specified
   * gateway. Detaching and attaching a volume enables you to recover your data from one gateway to
   * a different gateway without creating a snapshot. It also makes it easier to move your volumes
   * from an on-premises gateway to a gateway hosted on an Amazon EC2 instance. This operation is
   * only supported in the volume gateway type.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DetachVolumeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detachVolume(
    request: AwsStorageGateway.DetachVolumeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DetachVolumeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetachVolume"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget22Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DetachVolumeError,
      },
      options,
    );
  }

  /**
   * Disable Gateway
   *
   * @remarks
   * Disables a tape gateway when the gateway is no longer functioning. For example, if your gateway
   * VM is damaged, you can disable the gateway so you can recover virtual tapes. Use this operation
   * for a tape gateway that is not reachable or not functioning. This operation is only supported
   * in the tape gateway type. After a gateway is disabled, it cannot be enabled.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DisableGatewayError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  disableGateway(
    request: AwsStorageGateway.DisableGatewayRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DisableGatewayError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DisableGateway"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget56Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DisableGatewayError,
      },
      options,
    );
  }

  /**
   * Disassociate File System
   *
   * @remarks
   * Disassociates an Amazon FSx file system from the specified gateway. After the disassociation
   * process finishes, the gateway can no longer access the Amazon FSx file system. This operation
   * is only supported in the FSx File Gateway type.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.DisassociateFileSystemError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  disassociateFileSystem(
    request: AwsStorageGateway.DisassociateFileSystemRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.DisassociateFileSystemError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DisassociateFileSystem"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget19Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.DisassociateFileSystemError,
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
   * @throws {@link AwsStorageGateway.JoinDomainError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  joinDomain(
    request: AwsStorageGateway.JoinDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.JoinDomainError> {
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
            schema: xAmzTarget2AwsStorageGatewayAwsStorageGatewayApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.JoinDomainError,
      },
      options,
    );
  }

  /**
   * List Automatic Tape Creation Policies
   *
   * @remarks
   * Lists the automatic tape creation policies for a gateway. If there are no automatic tape
   * creation policies for the gateway, it returns an empty list. This operation is only supported
   * for tape gateways.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.ListAutomaticTapeCreationPoliciesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listAutomaticTapeCreationPolicies(
    request: AwsStorageGateway.ListAutomaticTapeCreationPoliciesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.ListAutomaticTapeCreationPoliciesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListAutomaticTapeCreationPolicies"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget45Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.ListAutomaticTapeCreationPoliciesError,
      },
      options,
    );
  }

  /**
   * List File Shares
   *
   * @remarks
   * Gets a list of the file shares for a specific S3 File Gateway, or the list of file shares that
   * belong to the calling Amazon Web Services account. This operation is only supported for S3 File
   * Gateways.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.ListFileSharesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listFileShares(
    request: AwsStorageGateway.ListFileSharesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.ListFileSharesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListFileShares"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget54Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.ListFileSharesError,
      },
      options,
    );
  }

  /**
   * List File System Associations
   *
   * @remarks
   * Gets a list of FileSystemAssociationSummary objects. Each object contains a summary of a file
   * system association. This operation is only supported for FSx File Gateways.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.ListFileSystemAssociationsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listFileSystemAssociations(
    request: AwsStorageGateway.ListFileSystemAssociationsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.ListFileSystemAssociationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListFileSystemAssociations"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget68Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.ListFileSystemAssociationsError,
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
   * @throws {@link AwsStorageGateway.ListGateways2Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listGateways2(
    request: AwsStorageGateway.ListGateways2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.ListGateways2Error> {
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
        errorFactory: AwsStorageGateway.ListGateways2Error,
      },
      options,
    );
  }

  /**
   * List Local Disks
   *
   * @remarks
   * Returns a list of the gateway's local disks. To specify which gateway to describe, you use the
   * Amazon Resource Name (ARN) of the gateway in the body of the request. The request returns a
   * list of all disks, specifying which are configured as working storage, cache storage, or stored
   * volume or not configured at all. The response includes a DiskStatus field. This field can have
   * a value of present (the disk is available to use), missing (the disk is no longer connected to
   * the gateway), or mismatch (the disk node is occupied by a disk that has incorrect metadata or
   * the disk content is corrupted).
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.ListLocalDisksError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listLocalDisks(
    request: AwsStorageGateway.ListLocalDisksRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.ListLocalDisksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListLocalDisks"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget76Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.ListLocalDisksError,
      },
      options,
    );
  }

  /**
   * List Tags For Resource
   *
   * @remarks
   * Lists the tags that have been added to the specified resource. This operation is supported in
   * storage gateways of all types.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.ListTagsForResourceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listTagsForResource(
    request: AwsStorageGateway.ListTagsForResourceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.ListTagsForResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListTagsForResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget12Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.ListTagsForResourceError,
      },
      options,
    );
  }

  /**
   * List Tape Pools
   *
   * @remarks
   * Lists custom tape pools. You specify custom tape pools to list by specifying one or more custom
   * tape pool Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN, the
   * operation lists all custom tape pools. This operation supports pagination. You can optionally
   * specify the Limit parameter in the body to limit the number of tape pools in the response. If
   * the number of tape pools returned in the response is truncated, the response includes a Marker
   * element that you can use in your subsequent request to retrieve the next set of tape pools.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.ListTapePoolsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listTapePools(
    request: AwsStorageGateway.ListTapePoolsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.ListTapePoolsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListTapePools"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget38Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.ListTapePoolsError,
      },
      options,
    );
  }

  /**
   * List Tapes
   *
   * @remarks
   * Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You
   * specify the tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you
   * don't specify a tape ARN, the operation lists all virtual tapes in both your VTL and VTS. This
   * operation supports pagination. By default, the operation returns a maximum of up to 100 tapes.
   * You can optionally specify the Limit parameter in the body to limit the number of tapes in the
   * response. If the number of tapes returned in the response is truncated, the response includes a
   * Marker element that you can use in your subsequent request to retrieve the next set of tapes.
   * This operation is only supported in the tape gateway type.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.ListTapesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listTapes(
    request: AwsStorageGateway.ListTapesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.ListTapesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListTapes"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget43Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.ListTapesError,
      },
      options,
    );
  }

  /**
   * List Volume Initiators
   *
   * @remarks
   * Lists iSCSI initiators that are connected to a volume. You can use this operation to determine
   * whether a volume is being used or not. This operation is only supported in the cached volume
   * and stored volume gateway types.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.ListVolumeInitiatorsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listVolumeInitiators(
    request: AwsStorageGateway.ListVolumeInitiatorsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.ListVolumeInitiatorsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListVolumeInitiators"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget77Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.ListVolumeInitiatorsError,
      },
      options,
    );
  }

  /**
   * List Volume Recovery Points
   *
   * @remarks
   * Lists the recovery points for a specified gateway. This operation is only supported in the
   * cached volume gateway type. Each cache volume has one recovery point. A volume recovery point
   * is a point in time at which all data of the volume is consistent and from which you can create
   * a snapshot or clone a new cached volume from a source volume. To create a snapshot from a
   * volume recovery point use the CreateSnapshotFromVolumeRecoveryPoint operation.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.ListVolumeRecoveryPointsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listVolumeRecoveryPoints(
    request: AwsStorageGateway.ListVolumeRecoveryPointsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.ListVolumeRecoveryPointsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListVolumeRecoveryPoints"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget78Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.ListVolumeRecoveryPointsError,
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
   * @throws {@link AwsStorageGateway.ListVolumes2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listVolumes2(
    request: AwsStorageGateway.ListVolumes2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.ListVolumes2Error> {
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
        errorFactory: AwsStorageGateway.ListVolumes2Error,
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
   * @throws {@link AwsStorageGateway.NotifyWhenUploadedError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  notifyWhenUploaded(
    request: AwsStorageGateway.NotifyWhenUploadedRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.NotifyWhenUploadedError> {
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
            schema: xAmzTarget3AwsStorageGatewayAwsStorageGatewayApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.NotifyWhenUploadedError,
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
   * @throws {@link AwsStorageGateway.RefreshCacheError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  refreshCache(
    request: AwsStorageGateway.RefreshCacheRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.RefreshCacheError> {
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
            schema: xAmzTarget4AwsStorageGatewayAwsStorageGatewayApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.RefreshCacheError,
      },
      options,
    );
  }

  /**
   * Remove Tags From Resource
   *
   * @remarks
   * Removes one or more tags from the specified resource. This operation is supported in storage
   * gateways of all types.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.RemoveTagsFromResourceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  removeTagsFromResource(
    request: AwsStorageGateway.RemoveTagsFromResourceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.RemoveTagsFromResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RemoveTagsFromResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget13Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.RemoveTagsFromResourceError,
      },
      options,
    );
  }

  /**
   * Reset Cache
   *
   * @remarks
   * Resets all cache disks that have encountered an error and makes the disks available for
   * reconfiguration as cache storage. If your cache disk encounters an error, the gateway prevents
   * read and write operations on virtual tapes in the gateway. For example, an error can occur when
   * a disk is corrupted or removed from the gateway. When a cache is reset, the gateway loses its
   * cache storage. At this point, you can reconfigure the disks as cache disks. This operation is
   * only supported in the cached volume and tape types. If the cache disk you are resetting
   * contains data that has not been uploaded to Amazon S3 yet, that data can be lost. After you
   * reset cache disks, there will be no configured cache disks left in the gateway, so you must
   * configure at least one new cache disk for your gateway to function properly.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.ResetCacheError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  resetCache(
    request: AwsStorageGateway.ResetCacheRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.ResetCacheError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ResetCache"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget10Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.ResetCacheError,
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
   * @throws {@link AwsStorageGateway.RetrieveTapeArchiveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  retrieveTapeArchive(
    request: AwsStorageGateway.RetrieveTapeArchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.RetrieveTapeArchiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RetrieveTapeArchive"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget5Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.RetrieveTapeArchiveError,
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
   * @throws {@link AwsStorageGateway.RetrieveTapeRecoveryPointError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  retrieveTapeRecoveryPoint(
    request: AwsStorageGateway.RetrieveTapeRecoveryPointRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.RetrieveTapeRecoveryPointError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RetrieveTapeRecoveryPoint"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget6Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.RetrieveTapeRecoveryPointError,
      },
      options,
    );
  }

  /**
   * Set Local Console Password
   *
   * @remarks
   * Sets the password for your VM local console. When you log in to the local console for the first
   * time, you log in to the VM with the default credentials. We recommend that you set a new
   * password. You don't need to know the default password to set a new password.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.SetLocalConsolePasswordError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  setLocalConsolePassword(
    request: AwsStorageGateway.SetLocalConsolePasswordRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.SetLocalConsolePasswordError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#SetLocalConsolePassword"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget79Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.SetLocalConsolePasswordError,
      },
      options,
    );
  }

  /**
   * Set SMBGuest Password
   *
   * @remarks
   * Sets the password for the guest user smbguest. The smbguest user is the user when the
   * authentication method for the file share is set to GuestAccess. This operation only supported
   * for S3 File Gateways
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.SetSmbGuestPasswordError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  setSmbGuestPassword(
    request: AwsStorageGateway.SetSmbGuestPasswordRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.SetSmbGuestPasswordError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#SetSMBGuestPassword"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget80Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.SetSmbGuestPasswordError,
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
   * @throws {@link AwsStorageGateway.ShutdownGatewayError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  shutdownGateway(
    request: AwsStorageGateway.ShutdownGatewayRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.ShutdownGatewayError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ShutdownGateway"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget7Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.ShutdownGatewayError,
      },
      options,
    );
  }

  /**
   * Start Availability Monitor Test
   *
   * @remarks
   * Start a test that verifies that the specified gateway is configured for High Availability
   * monitoring in your host environment. This request only initiates the test and that a successful
   * response only indicates that the test was started. It doesn't indicate that the test passed.
   * For the status of the test, invoke the DescribeAvailabilityMonitorTest API. Starting this test
   * will cause your gateway to go offline for a brief period.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.StartAvailabilityMonitorTestError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startAvailabilityMonitorTest(
    request: AwsStorageGateway.StartAvailabilityMonitorTestRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.StartAvailabilityMonitorTestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartAvailabilityMonitorTest"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget64Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.StartAvailabilityMonitorTestError,
      },
      options,
    );
  }

  /**
   * Start Gateway
   *
   * @remarks
   * Starts a gateway that you previously shut down (see ShutdownGateway). After the gateway starts,
   * you can then make other API calls, your applications can read from or write to the gateway's
   * storage volumes and you will be able to take snapshot backups. When you make a request, you
   * will get a 200 OK success response immediately. However, it might take some time for the
   * gateway to be ready. You should call DescribeGatewayInformation and check the status before
   * making any additional API calls. For more information, see ActivateGateway. To specify which
   * gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.StartGatewayError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startGateway(
    request: AwsStorageGateway.StartGatewayRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.StartGatewayError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartGateway"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget57Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.StartGatewayError,
      },
      options,
    );
  }

  /**
   * Update Automatic Tape Creation Policy
   *
   * @remarks
   * Updates the automatic tape creation policy of a gateway. Use this to update the policy with a
   * new set of automatic tape creation rules. This is only supported for tape gateways. By default,
   * there is no automatic tape creation policy. A gateway can have only one automatic tape creation
   * policy.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.UpdateAutomaticTapeCreationPolicyError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateAutomaticTapeCreationPolicy(
    request: AwsStorageGateway.UpdateAutomaticTapeCreationPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.UpdateAutomaticTapeCreationPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateAutomaticTapeCreationPolicy"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget46Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.UpdateAutomaticTapeCreationPolicyError,
      },
      options,
    );
  }

  /**
   * Update Bandwidth Rate Limit
   *
   * @remarks
   * Updates the bandwidth rate limits of a gateway. You can update both the upload and download
   * bandwidth rate limit or specify only one of the two. If you don't set a bandwidth rate limit,
   * the existing rate limit remains. This operation is supported only for the stored volume, cached
   * volume, and tape gateway types. To update bandwidth rate limits for S3 file gateways, use
   * UpdateBandwidthRateLimitSchedule. By default, a gateway's bandwidth rate limits are not set. If
   * you don't set any limit, the gateway does not have any limitations on its bandwidth usage and
   * could potentially use the maximum available bandwidth. To specify which gateway to update, use
   * the Amazon Resource Name (ARN) of the gateway in your request.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.UpdateBandwidthRateLimitError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateBandwidthRateLimit(
    request: AwsStorageGateway.UpdateBandwidthRateLimitRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.UpdateBandwidthRateLimitError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateBandwidthRateLimit"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget49Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.UpdateBandwidthRateLimitError,
      },
      options,
    );
  }

  /**
   * Update Bandwidth Rate Limit Schedule
   *
   * @remarks
   * Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways do not
   * have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use
   * this to initiate or update a gateway's bandwidth rate limit schedule. This operation is
   * supported for volume, tape, and S3 file gateways. S3 file gateways support bandwidth rate
   * limits for upload only. FSx file gateways do not support bandwidth rate limits.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.UpdateBandwidthRateLimitScheduleError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateBandwidthRateLimitSchedule(
    request: AwsStorageGateway.UpdateBandwidthRateLimitScheduleRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.UpdateBandwidthRateLimitScheduleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateBandwidthRateLimitSchedule"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget66Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.UpdateBandwidthRateLimitScheduleError,
      },
      options,
    );
  }

  /**
   * Update Chap Credentials
   *
   * @remarks
   * Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified
   * iSCSI target. By default, a gateway does not have CHAP enabled; however, for added security,
   * you might use it. This operation is supported in the volume and tape gateway types. When you
   * update CHAP credentials, all existing connections on the target are closed and initiators must
   * reconnect with the new credentials.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.UpdateChapCredentialsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateChapCredentials(
    request: AwsStorageGateway.UpdateChapCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.UpdateChapCredentialsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateChapCredentials"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget52Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.UpdateChapCredentialsError,
      },
      options,
    );
  }

  /**
   * Update File System Association
   *
   * @remarks
   * Updates a file system association. This operation is only supported in the FSx File Gateways.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.UpdateFileSystemAssociationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateFileSystemAssociation(
    request: AwsStorageGateway.UpdateFileSystemAssociationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.UpdateFileSystemAssociationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateFileSystemAssociation"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget69Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.UpdateFileSystemAssociationError,
      },
      options,
    );
  }

  /**
   * Update Gateway Information
   *
   * @remarks
   * Updates a gateway's metadata, which includes the gateway's name, time zone, and metadata cache
   * size. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in
   * your request. For gateways activated after September 2, 2015, the gateway's ARN contains the
   * gateway ID rather than the gateway name. However, changing the name of the gateway has no
   * effect on the gateway's ARN.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.UpdateGatewayInformationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateGatewayInformation(
    request: AwsStorageGateway.UpdateGatewayInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.UpdateGatewayInformationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateGatewayInformation"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget70Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.UpdateGatewayInformationError,
      },
      options,
    );
  }

  /**
   * Update Gateway Software Now
   *
   * @remarks
   * Updates the gateway virtual machine (VM) software. The request immediately triggers the
   * software update. When you make this request, you get a 200 OK success response immediately.
   * However, it might take some time for the update to complete. You can call
   * DescribeGatewayInformation to verify the gateway is in the STATE_RUNNING state. A software
   * update forces a system restart of your gateway. You can minimize the chance of any disruption
   * to your applications by increasing your iSCSI Initiators' timeouts. For more information about
   * increasing iSCSI Initiator timeouts for Windows and Linux, see Customizing your Windows iSCSI
   * settings and Customizing your Linux iSCSI settings, respectively.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.UpdateGatewaySoftwareNowError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateGatewaySoftwareNow(
    request: AwsStorageGateway.UpdateGatewaySoftwareNowRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.UpdateGatewaySoftwareNowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateGatewaySoftwareNow"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget81Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.UpdateGatewaySoftwareNowError,
      },
      options,
    );
  }

  /**
   * Update Maintenance Start Time
   *
   * @remarks
   * Updates a gateway's maintenance window schedule, with settings for monthly or weekly cadence,
   * specific day and time to begin maintenance, and which types of updates to apply. Time
   * configuration uses the gateway's time zone. You can pass values for a complete maintenance
   * schedule, or update policy, or both. Previous values will persist for whichever setting you
   * choose not to modify. If an incomplete or invalid maintenance schedule is passed, the entire
   * request will be rejected with an error and no changes will occur. A complete maintenance
   * schedule must include values for both MinuteOfHour and HourOfDay, and either DayOfMonth or
   * DayOfWeek. We recommend keeping maintenance updates turned on, except in specific use cases
   * where the brief disruptions caused by updating the gateway could critically impact your
   * deployment.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.UpdateMaintenanceStartTimeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateMaintenanceStartTime(
    request: AwsStorageGateway.UpdateMaintenanceStartTimeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.UpdateMaintenanceStartTimeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateMaintenanceStartTime"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget72Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.UpdateMaintenanceStartTimeError,
      },
      options,
    );
  }

  /**
   * Update NFSFile Share
   *
   * @remarks
   * Updates a Network File System (NFS) file share. This operation is only supported in S3 File
   * Gateways. To leave a file share field unchanged, set the corresponding input field to null.
   * Updates the following file share settings: Default storage class for your S3 bucket Metadata
   * defaults for your S3 bucket Allowed NFS clients for your file share Squash settings Write
   * status of your file share
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.UpdateNfsFileShareError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateNfsFileShare(
    request: AwsStorageGateway.UpdateNfsFileShareRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.UpdateNfsFileShareError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateNFSFileShare"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget28Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.UpdateNfsFileShareError,
      },
      options,
    );
  }

  /**
   * Update SMBFile Share
   *
   * @remarks
   * Updates a Server Message Block (SMB) file share. This operation is only supported for S3 File
   * Gateways. To leave a file share field unchanged, set the corresponding input field to null.
   * File gateways require Security Token Service (Amazon Web Services STS) to be activated to
   * enable you to create a file share. Make sure that Amazon Web Services STS is activated in the
   * Amazon Web Services Region you are creating your file gateway in. If Amazon Web Services STS is
   * not activated in this Amazon Web Services Region, activate it. For information about how to
   * activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an
   * Amazon Web Services Region in the Identity and Access Management User Guide. File gateways
   * don't support creating hard or symbolic links on a file share.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.UpdateSmbFileShareError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateSmbFileShare(
    request: AwsStorageGateway.UpdateSmbFileShareRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.UpdateSmbFileShareError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateSMBFileShare"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget31Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.UpdateSmbFileShareError,
      },
      options,
    );
  }

  /**
   * Update SMBFile Share Visibility
   *
   * @remarks
   * Controls whether the shares on an S3 File Gateway are visible in a net view or browse list. The
   * operation is only supported for S3 File Gateways.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.UpdateSmbFileShareVisibilityError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateSmbFileShareVisibility(
    request: AwsStorageGateway.UpdateSmbFileShareVisibilityRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.UpdateSmbFileShareVisibilityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateSMBFileShareVisibility"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget82Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.UpdateSmbFileShareVisibilityError,
      },
      options,
    );
  }

  /**
   * Update SMBLocal Groups
   *
   * @remarks
   * Updates the list of Active Directory users and groups that have special permissions for SMB
   * file shares on the gateway.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.UpdateSmbLocalGroupsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateSmbLocalGroups(
    request: AwsStorageGateway.UpdateSmbLocalGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.UpdateSmbLocalGroupsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateSMBLocalGroups"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget83Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.UpdateSmbLocalGroupsError,
      },
      options,
    );
  }

  /**
   * Update SMBSecurity Strategy
   *
   * @remarks
   * Updates the SMB security strategy level for an Amazon S3 file gateway. This action is only
   * supported for Amazon S3 file gateways. For information about configuring this setting using the
   * Amazon Web Services console, see Setting a security level for your gateway in the Amazon S3
   * File Gateway User Guide. A higher security strategy level can affect performance of the
   * gateway.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.UpdateSmbSecurityStrategyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateSmbSecurityStrategy(
    request: AwsStorageGateway.UpdateSmbSecurityStrategyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.UpdateSmbSecurityStrategyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateSMBSecurityStrategy"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget84Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.UpdateSmbSecurityStrategyError,
      },
      options,
    );
  }

  /**
   * Update Snapshot Schedule
   *
   * @remarks
   * Updates a snapshot schedule configured for a gateway volume. This operation is only supported
   * in the cached volume and stored volume gateway types. The default snapshot schedule for volume
   * is once every 24 hours, starting at the creation time of the volume. You can use this API to
   * change the snapshot schedule configured for the volume. In the request you must identify the
   * gateway volume whose snapshot schedule you want to update, and the schedule information,
   * including when you want the snapshot to begin on a day and the frequency (in hours) of
   * snapshots.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.UpdateSnapshotScheduleError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateSnapshotSchedule(
    request: AwsStorageGateway.UpdateSnapshotScheduleRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.UpdateSnapshotScheduleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateSnapshotSchedule"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget60Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.UpdateSnapshotScheduleError,
      },
      options,
    );
  }

  /**
   * Update VTLDevice Type
   *
   * @remarks
   * Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you
   * select a medium changer type for the tape gateway. This operation enables you to select a
   * different type of medium changer after a tape gateway is activated. This operation is only
   * supported in the tape gateway type.
   *
   * @returns Success
   *
   * @throws {@link AwsStorageGateway.UpdateVtlDeviceTypeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateVtlDeviceType(
    request: AwsStorageGateway.UpdateVtlDeviceTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStorageGateway.UpdateVtlDeviceTypeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateVTLDeviceType"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget85Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStorageGateway.UpdateVtlDeviceTypeError,
      },
      options,
    );
  }
}

export namespace AwsStorageGateway {
  export type ActivateGateway2Request = {
    xAmzTarget: XAmzTarget;
  };

  export class ActivateGateway2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ActivateGateway2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type AddCacheRequest = {
    xAmzTarget: XAmzTarget8;
  };

  export class AddCacheError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AddCacheError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type AddTagsToResourceRequest = {
    xAmzTarget: XAmzTarget11;
  };

  export class AddTagsToResourceError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AddTagsToResourceError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type AddUploadBufferRequest = {
    xAmzTarget: XAmzTarget14;
  };

  export class AddUploadBufferError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AddUploadBufferError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type AddWorkingStorageRequest = {
    xAmzTarget: XAmzTarget16;
  };

  export class AddWorkingStorageError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AddWorkingStorageError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type AssignTapePoolRequest = {
    xAmzTarget: XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi;
  };

  export class AssignTapePoolError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AssignTapePoolError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type AssociateFileSystemRequest = {
    xAmzTarget: XAmzTarget18;
  };

  export class AssociateFileSystemError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AssociateFileSystemError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type AttachVolumeRequest = {
    xAmzTarget: XAmzTarget20;
  };

  export class AttachVolumeError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AttachVolumeError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CancelArchivalRequest = {
    xAmzTarget: XAmzTarget23;
  };

  export class CancelArchivalError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CancelArchivalError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CancelRetrievalRequest = {
    xAmzTarget: XAmzTarget24;
  };

  export class CancelRetrievalError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CancelRetrievalError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CreateCachediScsiVolumeRequest = {
    xAmzTarget: XAmzTarget25;
  };

  export class CreateCachediScsiVolumeError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateCachediScsiVolumeError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CreateNfsFileShare2Request = {
    xAmzTarget: XAmzTarget2;
  };

  export class CreateNfsFileShare2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateNfsFileShare2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CreateSmbFileShareRequest = {
    xAmzTarget: XAmzTarget29;
  };

  export class CreateSmbFileShareError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateSmbFileShareError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CreateSnapshotRequest = {
    xAmzTarget: XAmzTarget32;
  };

  export class CreateSnapshotError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSnapshotError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type CreateSnapshotFromVolumeRecoveryPointRequest = {
    xAmzTarget: XAmzTarget33;
  };

  export class CreateSnapshotFromVolumeRecoveryPointError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSnapshotFromVolumeRecoveryPointError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type CreateStorediScsiVolumeRequest = {
    xAmzTarget: XAmzTarget34;
  };

  export class CreateStorediScsiVolumeError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateStorediScsiVolumeError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CreateTapePoolRequest = {
    xAmzTarget: XAmzTarget36;
  };

  export class CreateTapePoolError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateTapePoolError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CreateTapeWithBarcodeRequest = {
    xAmzTarget: XAmzTarget40;
  };

  export class CreateTapeWithBarcodeError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateTapeWithBarcodeError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CreateTapesRequest = {
    xAmzTarget: XAmzTarget39;
  };

  export class CreateTapesError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateTapesError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteAutomaticTapeCreationPolicyRequest = {
    xAmzTarget: XAmzTarget44;
  };

  export class DeleteAutomaticTapeCreationPolicyError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAutomaticTapeCreationPolicyError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteBandwidthRateLimitRequest = {
    xAmzTarget: XAmzTarget47;
  };

  export class DeleteBandwidthRateLimitError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBandwidthRateLimitError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteChapCredentialsRequest = {
    xAmzTarget: XAmzTarget50;
  };

  export class DeleteChapCredentialsError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteChapCredentialsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteFileShareRequest = {
    xAmzTarget: XAmzTarget53;
  };

  export class DeleteFileShareError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteFileShareError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteGatewayRequest = {
    xAmzTarget: XAmzTarget55;
  };

  export class DeleteGatewayError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteGatewayError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteSnapshotScheduleRequest = {
    xAmzTarget: XAmzTarget58;
  };

  export class DeleteSnapshotScheduleError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSnapshotScheduleError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteTapeRequest = {
    xAmzTarget: XAmzTarget41;
  };

  export class DeleteTapeError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteTapeError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteTapeArchiveRequest = {
    xAmzTarget: XAmzTarget61;
  };

  export class DeleteTapeArchiveError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteTapeArchiveError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteTapePoolRequest = {
    xAmzTarget: XAmzTarget37;
  };

  export class DeleteTapePoolError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteTapePoolError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteVolumeRequest = {
    xAmzTarget: XAmzTarget21;
  };

  export class DeleteVolumeError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteVolumeError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeAvailabilityMonitorTestRequest = {
    xAmzTarget: XAmzTarget63;
  };

  export class DescribeAvailabilityMonitorTestError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeAvailabilityMonitorTestError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeBandwidthRateLimitRequest = {
    xAmzTarget: XAmzTarget48;
  };

  export class DescribeBandwidthRateLimitError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeBandwidthRateLimitError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeBandwidthRateLimitScheduleRequest = {
    xAmzTarget: XAmzTarget65;
  };

  export class DescribeBandwidthRateLimitScheduleError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeBandwidthRateLimitScheduleError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeCacheRequest = {
    xAmzTarget: XAmzTarget9;
  };

  export class DescribeCacheError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeCacheError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeCachediScsiVolumesRequest = {
    xAmzTarget: XAmzTarget26;
  };

  export class DescribeCachediScsiVolumesError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeCachediScsiVolumesError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeChapCredentialsRequest = {
    xAmzTarget: XAmzTarget51;
  };

  export class DescribeChapCredentialsError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeChapCredentialsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeFileSystemAssociationsRequest = {
    xAmzTarget: XAmzTarget67;
  };

  export class DescribeFileSystemAssociationsError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeFileSystemAssociationsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeGatewayInformation2Request = {
    xAmzTarget: XAmzTarget4;
  };

  export class DescribeGatewayInformation2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeGatewayInformation2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeMaintenanceStartTimeRequest = {
    xAmzTarget: XAmzTarget71;
  };

  export class DescribeMaintenanceStartTimeError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeMaintenanceStartTimeError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeNfsFileSharesRequest = {
    xAmzTarget: XAmzTarget27;
  };

  export class DescribeNfsFileSharesError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeNfsFileSharesError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeSmbFileSharesRequest = {
    xAmzTarget: XAmzTarget30;
  };

  export class DescribeSmbFileSharesError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeSmbFileSharesError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeSmbSettingsRequest = {
    xAmzTarget: XAmzTarget73;
  };

  export class DescribeSmbSettingsError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeSmbSettingsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeSnapshotScheduleRequest = {
    xAmzTarget: XAmzTarget59;
  };

  export class DescribeSnapshotScheduleError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeSnapshotScheduleError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeStorediScsiVolumesRequest = {
    xAmzTarget: XAmzTarget35;
  };

  export class DescribeStorediScsiVolumesError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeStorediScsiVolumesError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeTapeArchivesRequest = {
    xAmzTarget: XAmzTarget62;
  };

  export class DescribeTapeArchivesError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeTapeArchivesError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeTapeRecoveryPointsRequest = {
    xAmzTarget: XAmzTarget74;
  };

  export class DescribeTapeRecoveryPointsError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeTapeRecoveryPointsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeTapesRequest = {
    xAmzTarget: XAmzTarget42;
  };

  export class DescribeTapesError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeTapesError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeUploadBufferRequest = {
    xAmzTarget: XAmzTarget15;
  };

  export class DescribeUploadBufferError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeUploadBufferError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeVtlDevicesRequest = {
    xAmzTarget: XAmzTarget75;
  };

  export class DescribeVtlDevicesError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeVtlDevicesError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeWorkingStorageRequest = {
    xAmzTarget: XAmzTarget17;
  };

  export class DescribeWorkingStorageError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeWorkingStorageError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DetachVolumeRequest = {
    xAmzTarget: XAmzTarget22;
  };

  export class DetachVolumeError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetachVolumeError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DisableGatewayRequest = {
    xAmzTarget: XAmzTarget56;
  };

  export class DisableGatewayError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DisableGatewayError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DisassociateFileSystemRequest = {
    xAmzTarget: XAmzTarget19;
  };

  export class DisassociateFileSystemError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DisassociateFileSystemError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type JoinDomainRequest = {
    xAmzTarget: XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi;
  };

  export class JoinDomainError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<JoinDomainError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListAutomaticTapeCreationPoliciesRequest = {
    xAmzTarget: XAmzTarget45;
  };

  export class ListAutomaticTapeCreationPoliciesError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListAutomaticTapeCreationPoliciesError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListFileSharesRequest = {
    xAmzTarget: XAmzTarget54;
  };

  export class ListFileSharesError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListFileSharesError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListFileSystemAssociationsRequest = {
    xAmzTarget: XAmzTarget68;
  };

  export class ListFileSystemAssociationsError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListFileSystemAssociationsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListGateways2Request = {
    xAmzTarget: XAmzTarget3;
  };

  export class ListGateways2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListGateways2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListLocalDisksRequest = {
    xAmzTarget: XAmzTarget76;
  };

  export class ListLocalDisksError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListLocalDisksError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListTagsForResourceRequest = {
    xAmzTarget: XAmzTarget12;
  };

  export class ListTagsForResourceError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListTagsForResourceError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListTapePoolsRequest = {
    xAmzTarget: XAmzTarget38;
  };

  export class ListTapePoolsError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListTapePoolsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListTapesRequest = {
    xAmzTarget: XAmzTarget43;
  };

  export class ListTapesError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListTapesError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListVolumeInitiatorsRequest = {
    xAmzTarget: XAmzTarget77;
  };

  export class ListVolumeInitiatorsError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListVolumeInitiatorsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListVolumeRecoveryPointsRequest = {
    xAmzTarget: XAmzTarget78;
  };

  export class ListVolumeRecoveryPointsError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListVolumeRecoveryPointsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListVolumes2Request = {
    xAmzTarget: XAmzTarget1;
  };

  export class ListVolumes2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListVolumes2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type NotifyWhenUploadedRequest = {
    xAmzTarget: XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi;
  };

  export class NotifyWhenUploadedError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<NotifyWhenUploadedError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RefreshCacheRequest = {
    xAmzTarget: XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi;
  };

  export class RefreshCacheError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RefreshCacheError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RemoveTagsFromResourceRequest = {
    xAmzTarget: XAmzTarget13;
  };

  export class RemoveTagsFromResourceError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RemoveTagsFromResourceError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ResetCacheRequest = {
    xAmzTarget: XAmzTarget10;
  };

  export class ResetCacheError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ResetCacheError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RetrieveTapeArchiveRequest = {
    xAmzTarget: XAmzTarget5;
  };

  export class RetrieveTapeArchiveError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RetrieveTapeArchiveError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RetrieveTapeRecoveryPointRequest = {
    xAmzTarget: XAmzTarget6;
  };

  export class RetrieveTapeRecoveryPointError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RetrieveTapeRecoveryPointError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type SetLocalConsolePasswordRequest = {
    xAmzTarget: XAmzTarget79;
  };

  export class SetLocalConsolePasswordError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SetLocalConsolePasswordError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type SetSmbGuestPasswordRequest = {
    xAmzTarget: XAmzTarget80;
  };

  export class SetSmbGuestPasswordError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SetSmbGuestPasswordError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ShutdownGatewayRequest = {
    xAmzTarget: XAmzTarget7;
  };

  export class ShutdownGatewayError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ShutdownGatewayError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type StartAvailabilityMonitorTestRequest = {
    xAmzTarget: XAmzTarget64;
  };

  export class StartAvailabilityMonitorTestError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartAvailabilityMonitorTestError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type StartGatewayRequest = {
    xAmzTarget: XAmzTarget57;
  };

  export class StartGatewayError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartGatewayError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateAutomaticTapeCreationPolicyRequest = {
    xAmzTarget: XAmzTarget46;
  };

  export class UpdateAutomaticTapeCreationPolicyError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAutomaticTapeCreationPolicyError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateBandwidthRateLimitRequest = {
    xAmzTarget: XAmzTarget49;
  };

  export class UpdateBandwidthRateLimitError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBandwidthRateLimitError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateBandwidthRateLimitScheduleRequest = {
    xAmzTarget: XAmzTarget66;
  };

  export class UpdateBandwidthRateLimitScheduleError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBandwidthRateLimitScheduleError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateChapCredentialsRequest = {
    xAmzTarget: XAmzTarget52;
  };

  export class UpdateChapCredentialsError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateChapCredentialsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateFileSystemAssociationRequest = {
    xAmzTarget: XAmzTarget69;
  };

  export class UpdateFileSystemAssociationError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateFileSystemAssociationError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateGatewayInformationRequest = {
    xAmzTarget: XAmzTarget70;
  };

  export class UpdateGatewayInformationError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateGatewayInformationError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateGatewaySoftwareNowRequest = {
    xAmzTarget: XAmzTarget81;
  };

  export class UpdateGatewaySoftwareNowError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateGatewaySoftwareNowError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateMaintenanceStartTimeRequest = {
    xAmzTarget: XAmzTarget72;
  };

  export class UpdateMaintenanceStartTimeError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateMaintenanceStartTimeError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateNfsFileShareRequest = {
    xAmzTarget: XAmzTarget28;
  };

  export class UpdateNfsFileShareError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateNfsFileShareError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateSmbFileShareRequest = {
    xAmzTarget: XAmzTarget31;
  };

  export class UpdateSmbFileShareError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSmbFileShareError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateSmbFileShareVisibilityRequest = {
    xAmzTarget: XAmzTarget82;
  };

  export class UpdateSmbFileShareVisibilityError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSmbFileShareVisibilityError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateSmbLocalGroupsRequest = {
    xAmzTarget: XAmzTarget83;
  };

  export class UpdateSmbLocalGroupsError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSmbLocalGroupsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateSmbSecurityStrategyRequest = {
    xAmzTarget: XAmzTarget84;
  };

  export class UpdateSmbSecurityStrategyError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSmbSecurityStrategyError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateSnapshotScheduleRequest = {
    xAmzTarget: XAmzTarget60;
  };

  export class UpdateSnapshotScheduleError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSnapshotScheduleError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateVtlDeviceTypeRequest = {
    xAmzTarget: XAmzTarget85;
  };

  export class UpdateVtlDeviceTypeError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateVtlDeviceTypeError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
