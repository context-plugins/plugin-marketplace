using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Justtrack.Core;
using Justtrack.Core.Exceptions;
using Justtrack.Core.Models;
using Justtrack.Core.Request;
using Justtrack.Core.Response;
using Justtrack.Errors;
using Justtrack.Models;
using Justtrack.Requests.Partners;

namespace Justtrack.Api;

public sealed class Partners
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Partners(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List partners
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListPartnersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostManagementV1PartnersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a paginated list of partners available to your organization.
    /// </remarks>
    public Task<ListPartnersResponse> PostManagementV1Partners(PostManagementV1PartnersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultManagementAppPartnerConnectionApi("/management/v1/partners"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListPartnersResponse>(),
            PostManagementV1PartnersError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
