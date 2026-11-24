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
using AwsStorageGateway.Requests.AmazonStorageGatewayRestApi;

namespace AwsStorageGateway.Api;

public sealed class AmazonStorageGatewayRestApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AmazonStorageGatewayRestApi(RawClient rawClient, Server server, AuthSchemes auth)
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
    /// <exception cref="ApiException{TError}"> of <see cref="ActivateGatewayError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Activates the gateway you previously deployed on your host. In the activation process, you specify information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account. For more information, see UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.
    /// </remarks>
    public Task ActivateGateway(ActivateGatewayRequest request,
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
            ActivateGatewayError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="CreateNfsFileShareError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using an NFS interface. This operation is only supported for S3 File Gateways. S3 File gateway requires Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon Web Services STS is not activated in the Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region in the Identity and Access Management User Guide. S3 File Gateways do not support creating hard or symbolic links on a file share.
    /// </remarks>
    public Task CreateNfsFileShare(CreateNfsFileShareRequest request,
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
            CreateNfsFileShareError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeGatewayInformationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns metadata about a gateway such as its name, network interfaces, time zone, status, and software version. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.
    /// </remarks>
    public Task DescribeGatewayInformation(DescribeGatewayInformationRequest request,
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
            DescribeGatewayInformationError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="ListGatewaysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN). By default, the operation returns a maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of gateways returned in a response. If you have more gateways than are returned in a response (that is, the response returns only a truncated list of your gateways), the response contains a marker that you can specify in your next request to fetch the next page of gateways.
    /// </remarks>
    public Task ListGateways(ListGatewaysRequest request,
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
            ListGatewaysError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="ListVolumesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the volume ARNs. If you want additional volume information, use the DescribeStorediSCSIVolumes or the DescribeCachediSCSIVolumes API. The operation supports pagination. By default, the operation returns a maximum of up to 100 volumes. You can optionally specify the Limit field in the body to limit the number of volumes in the response. If the number of volumes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This operation is only supported in the cached volume and stored volume gateway types.
    /// </remarks>
    public Task ListVolumes(ListVolumesRequest request,
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
            ListVolumesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
