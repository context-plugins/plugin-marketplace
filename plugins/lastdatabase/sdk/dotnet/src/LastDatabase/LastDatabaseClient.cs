using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using LastDatabase.Core;
using LastDatabase.Core.Configuration;
using LastDatabase.Core.Exceptions;
using LastDatabase.Core.Logging;
using LastDatabase.Core.Models;
using LastDatabase.Core.Request;
using LastDatabase.Core.Response;
using LastDatabase.Errors;
using LastDatabase.Models;
using LastDatabase.Requests;

namespace LastDatabase;

/// <summary>
/// Official API specification for the LastDatabase Lead Search API.
/// <para>
/// Search supported email, phone, and fax lead inventory using
/// country, city, industry, keyword, and result-limit parameters.
/// </para>
/// <para>
/// Authentication uses an active LastDatabase API key supplied
/// as a Bearer token.
/// </para>
/// </summary>
public sealed class LastDatabaseClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public LastDatabaseClient(HttpClient httpClient, LastDatabaseClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "LastDatabaseClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("LAST_DATABASE_LOG"),
            "LastDatabaseClient",
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
    /// Search leads
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LeadSearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchLeadsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search email, phone, or fax lead inventory.
    /// <para>
    /// The default lead type is email.
    /// </para>
    /// <para>
    /// For phone searches, the public industry parameter maps
    /// to the phone category field.
    /// </para>
    /// <para>
    /// The current endpoint does not expose page, offset, or
    /// cursor pagination.
    /// </para>
    /// </remarks>
    public Task<LeadSearchResponse> SearchLeads(SearchLeadsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/leads/search"),
            [],
            [
                new Param("type", request.Type),
                new Param("country", request.Country),
                new Param("city", request.City),
                new Param("industry", request.Industry),
                new Param("keyword", request.Keyword),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<LeadSearchResponse>(),
            SearchLeadsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
