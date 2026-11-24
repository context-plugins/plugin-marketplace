using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.ServiceQuotas;

namespace DoiT.Api;

/// <summary>
/// Monitor cloud service quota usage across connected accounts and projects.
/// </summary>
public sealed class ServiceQuotas
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ServiceQuotas(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List service quotas
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ServiceQuotaList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListServiceQuotasError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the latest service quota usage snapshots collected by DoiT for the authenticated customer.
    /// Results include only quotas retained by DoiT's monitoring collectors and are not a complete or live inventory from the cloud providers.
    /// Results are sorted by utilization percentage in descending order.
    /// </remarks>
    public Task<ServiceQuotaList> ListServiceQuotas(ListServiceQuotasRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/core/v1/service-quotas"),
            [],
            [
                new Param("cloudProvider", request.CloudProvider),
                new Param("minUtilizationPercent", request.MinUtilizationPercent),
                new Param("maxResults", request.MaxResults),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ServiceQuotaList>(),
            ListServiceQuotasError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
