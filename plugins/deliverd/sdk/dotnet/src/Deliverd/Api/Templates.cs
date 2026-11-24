using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Deliverd.Core;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Exceptions;
using Deliverd.Core.Request;
using Deliverd.Core.Response;
using Deliverd.Models;

namespace Deliverd.Api;

public sealed class Templates
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Templates(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List templates
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TemplatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Reports the organisation offers as starting points. Copy one with POST /reports/{idOrSlug}/copy.
    /// </remarks>
    public Task<ApiV1TemplatesResponse> GetApiV1Templates(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/templates"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1TemplatesResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
