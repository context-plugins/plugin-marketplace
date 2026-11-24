using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FirefliesAi.Core;
using FirefliesAi.Core.Configuration;
using FirefliesAi.Core.Exceptions;
using FirefliesAi.Core.Logging;
using FirefliesAi.Core.Models;
using FirefliesAi.Core.Request;
using FirefliesAi.Core.Response;
using FirefliesAi.Errors;
using FirefliesAi.Models;
using FirefliesAi.Requests;

namespace FirefliesAi;

/// <summary>
/// The Fireflies GraphQL API provides a single HTTP endpoint for querying and mutating all meeting data including transcripts, summaries, action items, speakers, and analytics. Developers can retrieve transcripts, manage live meetings, work with AskFred AI threads, handle bites (meeting clips), and access audit event logs via strongly-typed GraphQL queries and mutations. Authentication uses a Bearer API key passed in the Authorization header.
/// </summary>
public sealed class FirefliesAiClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public FirefliesAiClient(HttpClient httpClient, FirefliesAiClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "FirefliesAiClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("FIREFLIES_AI_LOG"),
            "FirefliesAiClient",
            options.TimeProvider);
        var responseContexts = new ResponseContextFactory(options.TimeProvider, options.StreamReadTimeout);
        _rawClient =
            new RawClient(
                httpClient,
                urlFactory,
                httpStatusPolicy,
                headersFactory,
                resiliencePipelineFactory,
                httpLogger,
                options.Hooks,
                responseContexts);
        _auth = new AuthSchemes(options);
    }

    /// <summary>
    /// Execute a GraphQL operation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GraphQlResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GraphqlOperationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// All Fireflies API operations are performed via GraphQL POST requests to this single endpoint. The body must contain a <c>query</c> string (GraphQL query or mutation) and optionally a <c>variables</c> object. See the Fireflies documentation for the full schema of available queries and mutations.
    /// </remarks>
    public Task<GraphQlResponse> GraphqlOperation(GraphqlOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GraphQlResponse>(),
            GraphqlOperationError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
