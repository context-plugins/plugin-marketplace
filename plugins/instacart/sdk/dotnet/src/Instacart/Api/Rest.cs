using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Instacart.Core;
using Instacart.Core.Authentication;
using Instacart.Core.Exceptions;
using Instacart.Core.Models;
using Instacart.Core.Request;
using Instacart.Core.Response;
using Instacart.Errors;
using Instacart.Requests.Rest;

namespace Instacart.Api;

public sealed class Rest
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Rest(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create an Instacart link to the shopping list of ingredients
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateError"/> when the server returns an error response.</exception>
    public Task Create(CreateOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultInstacartRestApi("/rest/llm_integration/openapi/v2_1/recipes"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            CreateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
