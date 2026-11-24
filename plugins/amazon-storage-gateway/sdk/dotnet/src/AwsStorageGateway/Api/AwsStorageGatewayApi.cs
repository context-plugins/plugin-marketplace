using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AwsStorageGateway.Core;
using AwsStorageGateway.Core.Exceptions;
using AwsStorageGateway.Core.Models;
using AwsStorageGateway.Core.Request;
using AwsStorageGateway.Core.Response;
using AwsStorageGateway.Errors;
using AwsStorageGateway.Requests.AwsStorageGatewayApi;

namespace AwsStorageGateway.Api;

public sealed class AwsStorageGatewayApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AwsStorageGatewayApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Activate Gateway
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ActivateGateway2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Activates the gateway you previously deployed on your host. In the activation process, you specify information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account. For more information, see UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.
    /// </remarks>
    public Task ActivateGateway2(ActivateGateway2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ActivateGateway"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ActivateGateway2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add Cache
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddCacheError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Configures one or more gateway local disks as cache for a gateway. This operation is only supported in the cached volume, tape, and file gateway type (see How Storage Gateway works (architecture). In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add cache, and one or more disk IDs that you want to configure as cache.
    /// </remarks>
    public Task AddCache(AddCacheRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#AddCache"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AddCacheError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add Tags To Resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddTagsToResourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds one or more tags to the specified resource. You use tags to add metadata to resources, which you can use to categorize these resources. For example, you can categorize resources by purpose, owner, environment, or team. Each tag consists of a key and a value, which you define. You can add tags to the following Storage Gateway resources: Storage gateways of all types Storage volumes Virtual tapes NFS and SMB file shares File System associations You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes that are recovered to a new gateway maintain their tags.
    /// </remarks>
    public Task AddTagsToResource(AddTagsToResourceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#AddTagsToResource"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AddTagsToResourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add Upload Buffer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddUploadBufferError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Configures one or more gateway local disks as upload buffer for a specified gateway. This operation is supported for the stored volume, cached volume, and tape gateway types. In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add upload buffer, and one or more disk IDs that you want to configure as upload buffer.
    /// </remarks>
    public Task AddUploadBuffer(AddUploadBufferRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#AddUploadBuffer"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AddUploadBufferError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add Working Storage
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddWorkingStorageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Configures one or more gateway local disks as working storage for a gateway. This operation is only supported in the stored volume gateway type. This operation is deprecated in cached volume API version 20120630. Use AddUploadBuffer instead. Working storage is also referred to as upload buffer. You can also use the AddUploadBuffer operation to add upload buffer to a stored volume gateway. In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add working storage, and one or more disk IDs that you want to configure as working storage.
    /// </remarks>
    public Task AddWorkingStorage(AddWorkingStorageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#AddWorkingStorage"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AddWorkingStorageError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Assign Tape Pool
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssignTapePoolError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
    /// </remarks>
    public Task AssignTapePool(AssignTapePoolRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#AssignTapePool"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AssignTapePoolError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Associate File System
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssociateFileSystemError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Associate an Amazon FSx file system with the FSx File Gateway. After the association process is complete, the file shares on the Amazon FSx file system are available for access through the gateway. This operation only supports the FSx File Gateway type.
    /// </remarks>
    public Task AssociateFileSystem(AssociateFileSystemRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#AssociateFileSystem"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AssociateFileSystemError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Attach Volume
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AttachVolumeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Connects a volume to an iSCSI connection and then attaches the volume to the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.
    /// </remarks>
    public Task AttachVolume(AttachVolumeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#AttachVolume"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AttachVolumeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel Archival
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelArchivalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated. This operation is only supported in the tape gateway type.
    /// </remarks>
    public Task CancelArchival(CancelArchivalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CancelArchival"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CancelArchivalError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel Retrieval
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelRetrievalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated. The virtual tape is returned to the VTS. This operation is only supported in the tape gateway type.
    /// </remarks>
    public Task CancelRetrieval(CancelRetrievalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CancelRetrieval"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CancelRetrievalError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Cachedi SCSIVolume
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCachediScsiVolumeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a cached volume on a specified cached volume gateway. This operation is only supported in the cached volume gateway type. Cache storage must be allocated to the gateway before you can create a cached volume. Use the AddCache operation to add cache storage to a gateway. In the request, you must specify the gateway, size of the volume in bytes, the iSCSI target name, an IP address on which to expose the target, and a unique client token. In response, the gateway creates the volume and returns information about it. This information includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target. Optionally, you can provide the ARN for an existing volume as the SourceVolumeARN for this cached volume, which creates an exact copy of the existing volume’s latest recovery point. The VolumeSizeInBytes value must be equal to or larger than the size of the copied volume, in bytes.
    /// </remarks>
    public Task CreateCachediScsiVolume(CreateCachediScsiVolumeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateCachediSCSIVolume"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateCachediScsiVolumeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create NFSFile Share
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateNfsFileShare2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using an NFS interface. This operation is only supported for S3 File Gateways. S3 File gateway requires Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon Web Services STS is not activated in the Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region in the Identity and Access Management User Guide. S3 File Gateways do not support creating hard or symbolic links on a file share.
    /// </remarks>
    public Task CreateNfsFileShare2(CreateNfsFileShare2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateNFSFileShare"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateNfsFileShare2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create SMBFile Share
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSmbFileShareError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a Server Message Block (SMB) file share on an existing S3 File Gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using an SMB interface. This operation is only supported for S3 File Gateways. S3 File Gateways require Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region in the Identity and Access Management User Guide. File gateways don't support creating hard or symbolic links on a file share.
    /// </remarks>
    public Task CreateSmbFileShare(CreateSmbFileShareRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateSMBFileShare"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateSmbFileShareError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Snapshot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSnapshotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Initiates a snapshot of a volume. Storage Gateway provides the ability to back up point-in-time snapshots of your data to Amazon Simple Storage (Amazon S3) for durable off-site recovery, and also import the data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take snapshots of your gateway volume on a scheduled or ad hoc basis. This API enables you to take an ad hoc snapshot. For more information, see Editing a snapshot schedule. In the CreateSnapshot request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide description for the snapshot. When Storage Gateway takes the snapshot of specified volume, the snapshot and description appears in the Storage Gateway console. In response, Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot. This operation is only supported in stored and cached volume gateway type. To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see DescribeSnapshots or DeleteSnapshot in the Amazon Elastic Compute Cloud API Reference. Volume
    /// </remarks>
    public Task CreateSnapshot(CreateSnapshotRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateSnapshot"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateSnapshotError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Snapshot From Volume Recovery Point
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSnapshotFromVolumeRecoveryPointError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Initiates a snapshot of a gateway from a volume recovery point. This operation is only supported in the cached volume gateway type. A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot. To get a list of volume recovery point for cached volume gateway, use ListVolumeRecoveryPoints. In the CreateSnapshotFromVolumeRecoveryPoint request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide a description for the snapshot. When the gateway takes a snapshot of the specified volume, the snapshot and its description appear in the Storage Gateway console. In response, the gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot. To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see DescribeSnapshots or DeleteSnapshot in the Amazon Elastic Compute Cloud API Reference.
    /// </remarks>
    public Task CreateSnapshotFromVolumeRecoveryPoint(CreateSnapshotFromVolumeRecoveryPointRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateSnapshotFromVolumeRecoveryPoint"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateSnapshotFromVolumeRecoveryPointError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Storedi SCSIVolume
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateStorediScsiVolumeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a volume on a specified gateway. This operation is only supported in the stored volume gateway type. The size of the volume to create is inferred from the disk size. You can choose to preserve existing data on the disk, create volume from an existing snapshot, or create an empty volume. If you choose to create an empty gateway volume, then any existing data on the disk is erased. In the request, you must specify the gateway and the disk information on which you are creating the volume. In response, the gateway creates the volume and returns volume information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.
    /// </remarks>
    public Task CreateStorediScsiVolume(CreateStorediScsiVolumeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateStorediSCSIVolume"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateStorediScsiVolumeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Tape Pool
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTapePoolError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new custom tape pool. You can use custom tape pool to enable tape retention lock on tapes that are archived in the custom pool.
    /// </remarks>
    public Task CreateTapePool(CreateTapePoolRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateTapePool"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateTapePoolError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Tape With Barcode
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTapeWithBarcodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a virtual tape by using your own barcode. You write data to the virtual tape and then archive the tape. A barcode is unique and cannot be reused if it has already been used on a tape. This applies to barcodes used on deleted tapes. This operation is only supported in the tape gateway type. Cache storage must be allocated to the gateway before you can create a virtual tape. Use the AddCache operation to add cache storage to a gateway.
    /// </remarks>
    public Task CreateTapeWithBarcode(CreateTapeWithBarcodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateTapeWithBarcode"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateTapeWithBarcodeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Tapes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTapesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes. This operation is only supported in the tape gateway type. Cache storage must be allocated to the gateway before you can create virtual tapes. Use the AddCache operation to add cache storage to a gateway.
    /// </remarks>
    public Task CreateTapes(CreateTapesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateTapes"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateTapesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Automatic Tape Creation Policy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAutomaticTapeCreationPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the automatic tape creation policy of a gateway. If you delete this policy, new virtual tapes must be created manually. Use the Amazon Resource Name (ARN) of the gateway in your request to remove the policy.
    /// </remarks>
    public Task DeleteAutomaticTapeCreationPolicy(DeleteAutomaticTapeCreationPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteAutomaticTapeCreationPolicy"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteAutomaticTapeCreationPolicyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Bandwidth Rate Limit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBandwidthRateLimitError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download bandwidth rate limit, or you can delete both. If you delete only one of the limits, the other limit remains unchanged. To specify which gateway to work with, use the Amazon Resource Name (ARN) of the gateway in your request. This operation is supported only for the stored volume, cached volume, and tape gateway types.
    /// </remarks>
    public Task DeleteBandwidthRateLimit(DeleteBandwidthRateLimitRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteBandwidthRateLimit"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteBandwidthRateLimitError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Chap Credentials
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteChapCredentialsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair. This operation is supported in volume and tape gateway types.
    /// </remarks>
    public Task DeleteChapCredentials(DeleteChapCredentialsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteChapCredentials"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteChapCredentialsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete File Share
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteFileShareError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a file share from an S3 File Gateway. This operation is only supported for S3 File Gateways.
    /// </remarks>
    public Task DeleteFileShare(DeleteFileShareRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteFileShare"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteFileShareError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Gateway
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteGatewayError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of the gateway in your request. The operation deletes the gateway; however, it does not delete the gateway virtual machine (VM) from your host computer. After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will not complete. After you delete a gateway, your next step is to remove it from your environment. You no longer pay software charges after the gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue to be billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your Amazon EC2 subscription. If you prefer not to cancel your Amazon EC2 subscription, you can delete your snapshots using the Amazon EC2 console. For more information, see the Storage Gateway detail page.
    /// </remarks>
    public Task DeleteGateway(DeleteGatewayRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteGateway"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteGatewayError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Snapshot Schedule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSnapshotScheduleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a snapshot of a volume. You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API action enables you to delete a snapshot schedule for a volume. For more information, see Backing up your volumes. In the DeleteSnapshotSchedule request, you identify the volume by providing its Amazon Resource Name (ARN). This operation is only supported for cached volume gateway types. To list or delete a snapshot, you must use the Amazon EC2 API. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud API Reference.
    /// </remarks>
    public Task DeleteSnapshotSchedule(DeleteSnapshotScheduleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteSnapshotSchedule"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteSnapshotScheduleError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Tape
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteTapeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified virtual tape. This operation is only supported in the tape gateway type.
    /// </remarks>
    public Task DeleteTape(DeleteTapeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteTape"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteTapeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Tape Archive
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteTapeArchiveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.
    /// </remarks>
    public Task DeleteTapeArchive(DeleteTapeArchiveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteTapeArchive"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteTapeArchiveError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Tape Pool
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteTapePoolError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes in the pool and if there are no automatic tape creation policies that reference the custom tape pool.
    /// </remarks>
    public Task DeleteTapePool(DeleteTapePoolRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteTapePool"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteTapePoolError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Volume
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteVolumeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified storage volume that you previously created using the CreateCachediSCSIVolume or CreateStorediSCSIVolume API. This operation is only supported in the cached volume and stored volume types. For stored volume gateways, the local disk that was configured as the storage volume is not deleted. You can reuse the local disk to create another storage volume. Before you delete a volume, make sure there are no iSCSI connections to the volume you are deleting. You should also make sure there is no snapshot in progress. You can use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are deleting and check the snapshot status. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud API Reference. In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want to delete.
    /// </remarks>
    public Task DeleteVolume(DeleteVolumeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteVolume"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteVolumeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Availability Monitor Test
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeAvailabilityMonitorTestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about the most recent high availability monitoring test that was performed on the host in a cluster. If a test isn't performed, the status and start time in the response would be null.
    /// </remarks>
    public Task DescribeAvailabilityMonitorTest(DescribeAvailabilityMonitorTestRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeAvailabilityMonitorTest"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeAvailabilityMonitorTestError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Bandwidth Rate Limit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeBandwidthRateLimitError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which means no bandwidth rate limiting is in effect. This operation is supported only for the stored volume, cached volume, and tape gateway types. To describe bandwidth rate limits for S3 file gateways, use DescribeBandwidthRateLimitSchedule. This operation returns a value for a bandwidth rate limit only if the limit is set. If no limits are set for the gateway, then this operation returns only the gateway ARN in the response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.
    /// </remarks>
    public Task DescribeBandwidthRateLimit(DescribeBandwidthRateLimitRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeBandwidthRateLimit"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeBandwidthRateLimitError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Bandwidth Rate Limit Schedule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeBandwidthRateLimitScheduleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about the bandwidth rate limit schedule of a gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. This operation is supported only for volume, tape and S3 file gateways. FSx file gateways do not support bandwidth rate limits. This operation returns information about a gateway's bandwidth rate limit schedule. A bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or both. A bandwidth rate limit interval consists of one or more days of the week, a start hour and minute, an ending hour and minute, and bandwidth rate limits for uploading and downloading If no bandwidth rate limit schedule intervals are set for the gateway, this operation returns an empty response. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.
    /// </remarks>
    public Task DescribeBandwidthRateLimitSchedule(DescribeBandwidthRateLimitScheduleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeBandwidthRateLimitSchedule"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeBandwidthRateLimitScheduleError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Cache
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeCacheError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about the cache of a gateway. This operation is only supported in the cached volume, tape, and file gateway types. The response includes disk IDs that are configured as cache, and it includes the amount of cache allocated and used.
    /// </remarks>
    public Task DescribeCache(DescribeCacheRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeCache"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeCacheError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Cachedi SCSIVolumes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeCachediScsiVolumesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a description of the gateway volumes specified in the request. This operation is only supported in the cached volume gateway types. The list of gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume Amazon Resource Name (ARN).
    /// </remarks>
    public Task DescribeCachediScsiVolumes(DescribeCachediScsiVolumesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeCachediSCSIVolumes"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeCachediScsiVolumesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Chap Credentials
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeChapCredentialsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair. This operation is supported in the volume and tape gateway types.
    /// </remarks>
    public Task DescribeChapCredentials(DescribeChapCredentialsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeChapCredentials"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeChapCredentialsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe File System Associations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeFileSystemAssociationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the file system association information. This operation is only supported for FSx File Gateways.
    /// </remarks>
    public Task DescribeFileSystemAssociations(DescribeFileSystemAssociationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeFileSystemAssociations"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeFileSystemAssociationsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Gateway Information
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeGatewayInformation2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns metadata about a gateway such as its name, network interfaces, time zone, status, and software version. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.
    /// </remarks>
    public Task DescribeGatewayInformation2(DescribeGatewayInformation2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeGatewayInformation"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeGatewayInformation2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Maintenance Start Time
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeMaintenanceStartTimeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns your gateway's maintenance window schedule information, with values for monthly or weekly cadence, specific day and time to begin maintenance, and which types of updates to apply. Time values returned are for the gateway's time zone.
    /// </remarks>
    public Task DescribeMaintenanceStartTime(DescribeMaintenanceStartTimeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeMaintenanceStartTime"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeMaintenanceStartTimeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe NFSFile Shares
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeNfsFileSharesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a description for one or more Network File System (NFS) file shares from an S3 File Gateway. This operation is only supported for S3 File Gateways.
    /// </remarks>
    public Task DescribeNfsFileShares(DescribeNfsFileSharesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeNFSFileShares"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeNfsFileSharesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe SMBFile Shares
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeSmbFileSharesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a description for one or more Server Message Block (SMB) file shares from a S3 File Gateway. This operation is only supported for S3 File Gateways.
    /// </remarks>
    public Task DescribeSmbFileShares(DescribeSmbFileSharesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeSMBFileShares"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeSmbFileSharesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe SMBSettings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeSmbSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a description of a Server Message Block (SMB) file share settings from a file gateway. This operation is only supported for file gateways.
    /// </remarks>
    public Task DescribeSmbSettings(DescribeSmbSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeSMBSettings"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeSmbSettingsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Snapshot Schedule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeSnapshotScheduleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Describes the snapshot schedule for the specified gateway volume. The snapshot schedule information includes intervals at which snapshots are automatically initiated on the volume. This operation is only supported in the cached volume and stored volume types.
    /// </remarks>
    public Task DescribeSnapshotSchedule(DescribeSnapshotScheduleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeSnapshotSchedule"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeSnapshotScheduleError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Storedi SCSIVolumes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeStorediScsiVolumesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the description of the gateway volumes specified in the request. The list of gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume ARNs. This operation is only supported in stored volume gateway type.
    /// </remarks>
    public Task DescribeStorediScsiVolumes(DescribeStorediScsiVolumesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeStorediSCSIVolumes"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeStorediScsiVolumesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Tape Archives
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeTapeArchivesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This operation is only supported in the tape gateway type. If a specific TapeARN is not specified, Storage Gateway returns a description of all virtual tapes found in the VTS associated with your account.
    /// </remarks>
    public Task DescribeTapeArchives(DescribeTapeArchivesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeTapeArchives"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeTapeArchivesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Tape Recovery Points
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeTapeRecoveryPointsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of virtual tape recovery points that are available for the specified tape gateway. A recovery point is a point-in-time view of a virtual tape at which all the data on the virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. This operation is only supported in the tape gateway type.
    /// </remarks>
    public Task DescribeTapeRecoveryPoints(DescribeTapeRecoveryPointsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeTapeRecoveryPoints"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeTapeRecoveryPointsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Tapes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeTapesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a description of virtual tapes that correspond to the specified Amazon Resource Names (ARNs). If TapeARN is not specified, returns a description of the virtual tapes associated with the specified gateway. This operation is only supported for the tape gateway type. The operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the Limit field in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of tapes.
    /// </remarks>
    public Task DescribeTapes(DescribeTapesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeTapes"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeTapesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Upload Buffer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeUploadBufferError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about the upload buffer of a gateway. This operation is supported for the stored volume, cached volume, and tape gateway types. The response includes disk IDs that are configured as upload buffer space, and it includes the amount of upload buffer space allocated and used.
    /// </remarks>
    public Task DescribeUploadBuffer(DescribeUploadBufferRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeUploadBuffer"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeUploadBufferError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe VTLDevices
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeVtlDevicesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In the response, Storage Gateway returns VTL device information. This operation is only supported in the tape gateway type.
    /// </remarks>
    public Task DescribeVtlDevices(DescribeVtlDevicesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeVTLDevices"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeVtlDevicesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Working Storage
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeWorkingStorageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about the working storage of a gateway. This operation is only supported in the stored volumes gateway type. This operation is deprecated in cached volumes API version (20120630). Use DescribeUploadBuffer instead. Working storage is also referred to as upload buffer. You can also use the DescribeUploadBuffer operation to add upload buffer to a stored volume gateway. The response includes disk IDs that are configured as working storage, and it includes the amount of working storage allocated and used.
    /// </remarks>
    public Task DescribeWorkingStorage(DescribeWorkingStorageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeWorkingStorage"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeWorkingStorageError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Detach Volume
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DetachVolumeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Disconnects a volume from an iSCSI connection and then detaches the volume from the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance. This operation is only supported in the volume gateway type.
    /// </remarks>
    public Task DetachVolume(DetachVolumeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DetachVolume"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DetachVolumeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Disable Gateway
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DisableGatewayError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Disables a tape gateway when the gateway is no longer functioning. For example, if your gateway VM is damaged, you can disable the gateway so you can recover virtual tapes. Use this operation for a tape gateway that is not reachable or not functioning. This operation is only supported in the tape gateway type. After a gateway is disabled, it cannot be enabled.
    /// </remarks>
    public Task DisableGateway(DisableGatewayRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DisableGateway"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DisableGatewayError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Disassociate File System
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DisassociateFileSystemError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Disassociates an Amazon FSx file system from the specified gateway. After the disassociation process finishes, the gateway can no longer access the Amazon FSx file system. This operation is only supported in the FSx File Gateway type.
    /// </remarks>
    public Task DisassociateFileSystem(DisassociateFileSystemRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DisassociateFileSystem"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DisassociateFileSystemError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Join Domain
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JoinDomainError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that support the SMB file protocol. Joining a domain creates an Active Directory computer account in the default organizational unit, using the gateway's Gateway ID as the account name (for example, SGW-1234ADE). If your Active Directory environment requires that you pre-stage accounts to facilitate the join domain process, you will need to create this account ahead of time. To create the gateway's computer account in an organizational unit other than the default, you must specify the organizational unit when joining the domain.
    /// </remarks>
    public Task JoinDomain(JoinDomainRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#JoinDomain"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            JoinDomainError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Automatic Tape Creation Policies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAutomaticTapeCreationPoliciesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the automatic tape creation policies for a gateway. If there are no automatic tape creation policies for the gateway, it returns an empty list. This operation is only supported for tape gateways.
    /// </remarks>
    public Task ListAutomaticTapeCreationPolicies(ListAutomaticTapeCreationPoliciesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListAutomaticTapeCreationPolicies"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListAutomaticTapeCreationPoliciesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List File Shares
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFileSharesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of the file shares for a specific S3 File Gateway, or the list of file shares that belong to the calling Amazon Web Services account. This operation is only supported for S3 File Gateways.
    /// </remarks>
    public Task ListFileShares(ListFileSharesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListFileShares"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListFileSharesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List File System Associations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFileSystemAssociationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of FileSystemAssociationSummary objects. Each object contains a summary of a file system association. This operation is only supported for FSx File Gateways.
    /// </remarks>
    public Task ListFileSystemAssociations(ListFileSystemAssociationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListFileSystemAssociations"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListFileSystemAssociationsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Gateways
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListGateways2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN). By default, the operation returns a maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of gateways returned in a response. If you have more gateways than are returned in a response (that is, the response returns only a truncated list of your gateways), the response contains a marker that you can specify in your next request to fetch the next page of gateways.
    /// </remarks>
    public Task ListGateways2(ListGateways2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListGateways"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListGateways2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Local Disks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListLocalDisksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of the gateway's local disks. To specify which gateway to describe, you use the Amazon Resource Name (ARN) of the gateway in the body of the request. The request returns a list of all disks, specifying which are configured as working storage, cache storage, or stored volume or not configured at all. The response includes a DiskStatus field. This field can have a value of present (the disk is available to use), missing (the disk is no longer connected to the gateway), or mismatch (the disk node is occupied by a disk that has incorrect metadata or the disk content is corrupted).
    /// </remarks>
    public Task ListLocalDisks(ListLocalDisksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListLocalDisks"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListLocalDisksError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Tags For Resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTagsForResourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the tags that have been added to the specified resource. This operation is supported in storage gateways of all types.
    /// </remarks>
    public Task ListTagsForResource(ListTagsForResourceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListTagsForResource"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListTagsForResourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Tape Pools
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTapePoolsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists custom tape pools. You specify custom tape pools to list by specifying one or more custom tape pool Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN, the operation lists all custom tape pools. This operation supports pagination. You can optionally specify the Limit parameter in the body to limit the number of tape pools in the response. If the number of tape pools returned in the response is truncated, the response includes a Marker element that you can use in your subsequent request to retrieve the next set of tape pools.
    /// </remarks>
    public Task ListTapePools(ListTapePoolsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListTapePools"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListTapePoolsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Tapes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTapesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both your VTL and VTS. This operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the Limit parameter in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a Marker element that you can use in your subsequent request to retrieve the next set of tapes. This operation is only supported in the tape gateway type.
    /// </remarks>
    public Task ListTapes(ListTapesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListTapes"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListTapesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Volume Initiators
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListVolumeInitiatorsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists iSCSI initiators that are connected to a volume. You can use this operation to determine whether a volume is being used or not. This operation is only supported in the cached volume and stored volume gateway types.
    /// </remarks>
    public Task ListVolumeInitiators(ListVolumeInitiatorsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListVolumeInitiators"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListVolumeInitiatorsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Volume Recovery Points
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListVolumeRecoveryPointsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the recovery points for a specified gateway. This operation is only supported in the cached volume gateway type. Each cache volume has one recovery point. A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot or clone a new cached volume from a source volume. To create a snapshot from a volume recovery point use the CreateSnapshotFromVolumeRecoveryPoint operation.
    /// </remarks>
    public Task ListVolumeRecoveryPoints(ListVolumeRecoveryPointsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListVolumeRecoveryPoints"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListVolumeRecoveryPointsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Volumes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListVolumes2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the volume ARNs. If you want additional volume information, use the DescribeStorediSCSIVolumes or the DescribeCachediSCSIVolumes API. The operation supports pagination. By default, the operation returns a maximum of up to 100 volumes. You can optionally specify the Limit field in the body to limit the number of volumes in the response. If the number of volumes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This operation is only supported in the cached volume and stored volume gateway types.
    /// </remarks>
    public Task ListVolumes2(ListVolumes2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListVolumes"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListVolumes2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Notify When Uploaded
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NotifyWhenUploadedError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sends you notification through Amazon EventBridge when all files written to your file share have been uploaded to Amazon S3. Storage Gateway can send a notification through Amazon EventBridge when all files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the file share up to the time that you make a request for notification. When the upload is done, Storage Gateway sends you notification through EventBridge. You can configure EventBridge to send the notification through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File Gateways. For more information, see Getting file upload notification in the Amazon S3 File Gateway User Guide.
    /// </remarks>
    public Task NotifyWhenUploaded(NotifyWhenUploadedRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#NotifyWhenUploaded"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            NotifyWhenUploadedError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Refresh Cache
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RefreshCacheError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Refreshes the cached inventory of objects for the specified file share. This operation finds objects in the Amazon S3 bucket that were added, removed, or replaced since the gateway last listed the bucket's contents and cached the results. This operation does not import files into the S3 File Gateway cache storage. It only updates the cached inventory to reflect changes in the inventory of the objects in the S3 bucket. This operation is only supported in the S3 File Gateway types. You can subscribe to be notified through an Amazon CloudWatch event when your RefreshCache operation completes. For more information, see Getting notified about file operations in the Amazon S3 File Gateway User Guide. This operation is Only supported for S3 File Gateways. When this API is called, it only initiates the refresh operation. When the API call completes and returns a success code, it doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification to determine that the operation has completed before you check for new files on the gateway file share. You can subscribe to be notified through a CloudWatch event when your RefreshCache operation complete
    /// </remarks>
    public Task RefreshCache(RefreshCacheRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#RefreshCache"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RefreshCacheError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove Tags From Resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveTagsFromResourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes one or more tags from the specified resource. This operation is supported in storage gateways of all types.
    /// </remarks>
    public Task RemoveTagsFromResource(RemoveTagsFromResourceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#RemoveTagsFromResource"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RemoveTagsFromResourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reset Cache
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResetCacheError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resets all cache disks that have encountered an error and makes the disks available for reconfiguration as cache storage. If your cache disk encounters an error, the gateway prevents read and write operations on virtual tapes in the gateway. For example, an error can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the gateway loses its cache storage. At this point, you can reconfigure the disks as cache disks. This operation is only supported in the cached volume and tape types. If the cache disk you are resetting contains data that has not been uploaded to Amazon S3 yet, that data can be lost. After you reset cache disks, there will be no configured cache disks left in the gateway, so you must configure at least one new cache disk for your gateway to function properly.
    /// </remarks>
    public Task ResetCache(ResetCacheRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ResetCache"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ResetCacheError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Tape Archive
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RetrieveTapeArchiveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in the tape gateway type. Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation is only supported in the tape gateway type.
    /// </remarks>
    public Task RetrieveTapeArchive(RetrieveTapeArchiveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#RetrieveTapeArchive"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RetrieveTapeArchiveError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Tape Recovery Point
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RetrieveTapeRecoveryPointError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape gateway type. A recovery point is a point in time view of a virtual tape at which all the data on the tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge for retrieving recovery points.
    /// </remarks>
    public Task RetrieveTapeRecoveryPoint(RetrieveTapeRecoveryPointRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#RetrieveTapeRecoveryPoint"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RetrieveTapeRecoveryPointError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set Local Console Password
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetLocalConsolePasswordError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the password for your VM local console. When you log in to the local console for the first time, you log in to the VM with the default credentials. We recommend that you set a new password. You don't need to know the default password to set a new password.
    /// </remarks>
    public Task SetLocalConsolePassword(SetLocalConsolePasswordRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#SetLocalConsolePassword"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            SetLocalConsolePasswordError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set SMBGuest Password
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetSmbGuestPasswordError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the password for the guest user smbguest. The smbguest user is the user when the authentication method for the file share is set to GuestAccess. This operation only supported for S3 File Gateways
    /// </remarks>
    public Task SetSmbGuestPassword(SetSmbGuestPasswordRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#SetSMBGuestPassword"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            SetSmbGuestPasswordError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Shutdown Gateway
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ShutdownGatewayError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use the Amazon Resource Name (ARN) of the gateway in the body of your request. This API action cannot be used to shut down S3 File Gateway or FSx File Gateway. The operation shuts down the gateway service component running in the gateway's virtual machine (VM) and not the host VM. If you want to shut down the VM, it is recommended that you first shut down the gateway component in the VM to avoid unpredictable conditions. After the gateway is shutdown, you cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more information, see ActivateGateway. Your applications cannot read from or write to the gateway's storage volumes, and there are no snapshots taken. When you make a shutdown request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to shut down. You can call the DescribeGatewayInformation API to check the status. For more information, see ActivateGateway. If do not intend to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges associated with the
    /// </remarks>
    public Task ShutdownGateway(ShutdownGatewayRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ShutdownGateway"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ShutdownGatewayError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Availability Monitor Test
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartAvailabilityMonitorTestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Start a test that verifies that the specified gateway is configured for High Availability monitoring in your host environment. This request only initiates the test and that a successful response only indicates that the test was started. It doesn't indicate that the test passed. For the status of the test, invoke the DescribeAvailabilityMonitorTest API. Starting this test will cause your gateway to go offline for a brief period.
    /// </remarks>
    public Task StartAvailabilityMonitorTest(StartAvailabilityMonitorTestRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartAvailabilityMonitorTest"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartAvailabilityMonitorTestError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Gateway
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartGatewayError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts a gateway that you previously shut down (see ShutdownGateway). After the gateway starts, you can then make other API calls, your applications can read from or write to the gateway's storage volumes and you will be able to take snapshot backups. When you make a request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to be ready. You should call DescribeGatewayInformation and check the status before making any additional API calls. For more information, see ActivateGateway. To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.
    /// </remarks>
    public Task StartGateway(StartGatewayRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartGateway"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartGatewayError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Automatic Tape Creation Policy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateAutomaticTapeCreationPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the automatic tape creation policy of a gateway. Use this to update the policy with a new set of automatic tape creation rules. This is only supported for tape gateways. By default, there is no automatic tape creation policy. A gateway can have only one automatic tape creation policy.
    /// </remarks>
    public Task UpdateAutomaticTapeCreationPolicy(UpdateAutomaticTapeCreationPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateAutomaticTapeCreationPolicy"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateAutomaticTapeCreationPolicyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Bandwidth Rate Limit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateBandwidthRateLimitError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the bandwidth rate limits of a gateway. You can update both the upload and download bandwidth rate limit or specify only one of the two. If you don't set a bandwidth rate limit, the existing rate limit remains. This operation is supported only for the stored volume, cached volume, and tape gateway types. To update bandwidth rate limits for S3 file gateways, use UpdateBandwidthRateLimitSchedule. By default, a gateway's bandwidth rate limits are not set. If you don't set any limit, the gateway does not have any limitations on its bandwidth usage and could potentially use the maximum available bandwidth. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.
    /// </remarks>
    public Task UpdateBandwidthRateLimit(UpdateBandwidthRateLimitRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateBandwidthRateLimit"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateBandwidthRateLimitError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Bandwidth Rate Limit Schedule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateBandwidthRateLimitScheduleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to initiate or update a gateway's bandwidth rate limit schedule. This operation is supported for volume, tape, and S3 file gateways. S3 file gateways support bandwidth rate limits for upload only. FSx file gateways do not support bandwidth rate limits.
    /// </remarks>
    public Task UpdateBandwidthRateLimitSchedule(UpdateBandwidthRateLimitScheduleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateBandwidthRateLimitSchedule"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateBandwidthRateLimitScheduleError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Chap Credentials
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateChapCredentialsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for added security, you might use it. This operation is supported in the volume and tape gateway types. When you update CHAP credentials, all existing connections on the target are closed and initiators must reconnect with the new credentials.
    /// </remarks>
    public Task UpdateChapCredentials(UpdateChapCredentialsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateChapCredentials"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateChapCredentialsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update File System Association
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateFileSystemAssociationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a file system association. This operation is only supported in the FSx File Gateways.
    /// </remarks>
    public Task UpdateFileSystemAssociation(UpdateFileSystemAssociationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateFileSystemAssociation"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateFileSystemAssociationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Gateway Information
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateGatewayInformationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a gateway's metadata, which includes the gateway's name, time zone, and metadata cache size. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request. For gateways activated after September 2, 2015, the gateway's ARN contains the gateway ID rather than the gateway name. However, changing the name of the gateway has no effect on the gateway's ARN.
    /// </remarks>
    public Task UpdateGatewayInformation(UpdateGatewayInformationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateGatewayInformation"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateGatewayInformationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Gateway Software Now
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateGatewaySoftwareNowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the gateway virtual machine (VM) software. The request immediately triggers the software update. When you make this request, you get a 200 OK success response immediately. However, it might take some time for the update to complete. You can call DescribeGatewayInformation to verify the gateway is in the STATE_RUNNING state. A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your applications by increasing your iSCSI Initiators' timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and Linux, see Customizing your Windows iSCSI settings and Customizing your Linux iSCSI settings, respectively.
    /// </remarks>
    public Task UpdateGatewaySoftwareNow(UpdateGatewaySoftwareNowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateGatewaySoftwareNow"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateGatewaySoftwareNowError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Maintenance Start Time
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateMaintenanceStartTimeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a gateway's maintenance window schedule, with settings for monthly or weekly cadence, specific day and time to begin maintenance, and which types of updates to apply. Time configuration uses the gateway's time zone. You can pass values for a complete maintenance schedule, or update policy, or both. Previous values will persist for whichever setting you choose not to modify. If an incomplete or invalid maintenance schedule is passed, the entire request will be rejected with an error and no changes will occur. A complete maintenance schedule must include values for both MinuteOfHour and HourOfDay, and either DayOfMonth or DayOfWeek. We recommend keeping maintenance updates turned on, except in specific use cases where the brief disruptions caused by updating the gateway could critically impact your deployment.
    /// </remarks>
    public Task UpdateMaintenanceStartTime(UpdateMaintenanceStartTimeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateMaintenanceStartTime"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateMaintenanceStartTimeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update NFSFile Share
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateNfsFileShareError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a Network File System (NFS) file share. This operation is only supported in S3 File Gateways. To leave a file share field unchanged, set the corresponding input field to null. Updates the following file share settings: Default storage class for your S3 bucket Metadata defaults for your S3 bucket Allowed NFS clients for your file share Squash settings Write status of your file share
    /// </remarks>
    public Task UpdateNfsFileShare(UpdateNfsFileShareRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateNFSFileShare"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateNfsFileShareError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update SMBFile Share
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSmbFileShareError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a Server Message Block (SMB) file share. This operation is only supported for S3 File Gateways. To leave a file share field unchanged, set the corresponding input field to null. File gateways require Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your file gateway in. If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region in the Identity and Access Management User Guide. File gateways don't support creating hard or symbolic links on a file share.
    /// </remarks>
    public Task UpdateSmbFileShare(UpdateSmbFileShareRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateSMBFileShare"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateSmbFileShareError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update SMBFile Share Visibility
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSmbFileShareVisibilityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Controls whether the shares on an S3 File Gateway are visible in a net view or browse list. The operation is only supported for S3 File Gateways.
    /// </remarks>
    public Task UpdateSmbFileShareVisibility(UpdateSmbFileShareVisibilityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateSMBFileShareVisibility"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateSmbFileShareVisibilityError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update SMBLocal Groups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSmbLocalGroupsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the list of Active Directory users and groups that have special permissions for SMB file shares on the gateway.
    /// </remarks>
    public Task UpdateSmbLocalGroups(UpdateSmbLocalGroupsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateSMBLocalGroups"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateSmbLocalGroupsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update SMBSecurity Strategy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSmbSecurityStrategyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the SMB security strategy level for an Amazon S3 file gateway. This action is only supported for Amazon S3 file gateways. For information about configuring this setting using the Amazon Web Services console, see Setting a security level for your gateway in the Amazon S3 File Gateway User Guide. A higher security strategy level can affect performance of the gateway.
    /// </remarks>
    public Task UpdateSmbSecurityStrategy(UpdateSmbSecurityStrategyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateSMBSecurityStrategy"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateSmbSecurityStrategyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Snapshot Schedule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSnapshotScheduleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a snapshot schedule configured for a gateway volume. This operation is only supported in the cached volume and stored volume gateway types. The default snapshot schedule for volume is once every 24 hours, starting at the creation time of the volume. You can use this API to change the snapshot schedule configured for the volume. In the request you must identify the gateway volume whose snapshot schedule you want to update, and the schedule information, including when you want the snapshot to begin on a day and the frequency (in hours) of snapshots.
    /// </remarks>
    public Task UpdateSnapshotSchedule(UpdateSnapshotScheduleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateSnapshotSchedule"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateSnapshotScheduleError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update VTLDevice Type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateVtlDeviceTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you select a medium changer type for the tape gateway. This operation enables you to select a different type of medium changer after a tape gateway is activated. This operation is only supported in the tape gateway type.
    /// </remarks>
    public Task UpdateVtlDeviceType(UpdateVtlDeviceTypeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateVTLDeviceType"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateVtlDeviceTypeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
