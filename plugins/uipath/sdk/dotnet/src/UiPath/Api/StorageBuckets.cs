using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using UiPath.Core;
using UiPath.Core.Exceptions;
using UiPath.Core.Models;
using UiPath.Core.Request;
using UiPath.Core.Response;
using UiPath.Errors;
using UiPath.Models;
using UiPath.Requests.StorageBuckets;

namespace UiPath.Api;

/// <summary>
/// Manage cloud storage buckets for storing automation artifacts
/// </summary>
public sealed class StorageBuckets
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal StorageBuckets(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath List Storage Buckets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ODataStorageBucketCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListStorageBucketsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of storage buckets defined in the current folder. Storage buckets provide file storage capabilities for automation processes, backed by providers such as Azure Blob, Amazon S3, or the UiPath internal storage.
    /// </remarks>
    public Task<ODataStorageBucketCollection> ListStorageBuckets(ListStorageBucketsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/StorageBuckets"),
            [],
            [new Param("$filter", request.Filter), new Param("$top", request.Top), new Param("$skip", request.Skip)],
            [new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ODataStorageBucketCollection>(),
            ListStorageBucketsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
