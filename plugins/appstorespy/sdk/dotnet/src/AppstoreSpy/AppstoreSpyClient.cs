using System.Net.Http;
using AppstoreSpy.Api;
using AppstoreSpy.Core;
using AppstoreSpy.Core.Configuration;
using AppstoreSpy.Core.Logging;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy;

/// <summary>
/// # Authentication
/// <para>
/// The Appstorespy API uses API-KEY authentication.
/// </para>
/// <para>
/// If you do not have an API Key token, you can get it on your account page https://appstorespy.com/account.
/// </para>
/// <para>
/// An API Key is required to be sent as part of every request in request header.
/// </para>
/// <para>
/// <code>
/// </para>
/// <para>
/// -H 'accept: application/json'
/// </para>
/// <para>
/// -H 'API-KEY: '
/// </para>
/// <para>
/// <code>
/// </para>
/// <para>
/// # Agents and MCP
/// </para>
/// <para>
/// AI agents can call the same endpoints as MCP tools at https://api.appstorespy.com/mcp, with the same API-KEY header and the same credits per call.
/// </para>
/// <para>
/// https://api.appstorespy.com/agentic-access lists what each operation costs and whether it reads, queues or writes; https://api.appstorespy.com/skills/ holds one agent skill per capability; https://api.appstorespy.com/llms.txt links every agent document.
/// </para>
/// <para>
/// # Fields
/// </para>
/// <para>
/// Use the fields parameter to specify which fields should be returned.
/// </para>
/// <para>
/// Example:
/// </para>
/// <para>
/// <code>
/// </para>
/// <para>
/// Request: fields=name,developer_name,ipd,downloads,...
/// </para>
/// <para>
/// Response: {name: ..., developer_name: ..., ipd: ..., downloads: ..., ...}
/// </para>
/// <para>
/// <code>
/// </para>
/// <para>
/// Don`t use fields parameter if you need to get all fields.
/// </para>
/// <para>
/// # Sort
/// </para>
/// <para>
/// When you use search, you can add a sort parameter.
/// </para>
/// <para>
/// <code>
/// </para>
/// <para>
/// Request: sort=ratingCount
/// </para>
/// <para>
/// Response: [{name: app1, ratingCount: 4.2}, {name: app2, ratingCount: 4.4}, ...]
/// </para>
/// <para>
/// <code>
/// </para>
/// <para>
/// If you need DESC sorting add "-" before sort parametr.
/// </para>
/// <para>
/// <code>
/// </para>
/// <para>
/// Request: sort=-ratingCount
/// </para>
/// <para>
/// Response: [{name: app2, ratingCount: 4.4}, {name: app1, ratingCount: 4.2}, ...]
/// </para>
/// <para>
/// <code>
/// </para>
/// <para>
/// # County &amp; Language params
/// </para>
/// <para>
/// ...
/// </para>
/// <para>
/// # Status codes / Error codes
/// </para>
/// <list type="bullet">
///   <item><description>200 OK.</description></item>
/// </list>
/// <list type="bullet">
///   <item><description>202 Accepted - The app was not present in our databases and has been submitted for crawling. If the app is available anywhere, it will be available soon.</description></item>
/// </list>
/// <list type="bullet">
///   <item><description>204 No Content - No data for requested country.</description></item>
/// </list>
/// <list type="bullet">
///   <item><description>403 Forbidden - Your access token is not valid.</description></item>
/// </list>
/// <list type="bullet">
///   <item><description>429 Too Many Requests - Your request rate is over the limit.</description></item>
/// </list>
/// </summary>
public sealed class AppstoreSpyClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AppstoreSpyClient(HttpClient httpClient, AppstoreSpyClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AppstoreSpyClient/1.5.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.5.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("APPSTORE_SPY_LOG"),
            "AppstoreSpyClient",
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
    /// App Store apps and developers: lookup, search, reviews, rankings, similar apps, download and revenue estimates and reference data.
    /// </summary>
    public AppStore AppStore => field ??= new AppStore(_rawClient, _server, _auth);

    /// <summary>
    /// LiveOps events Google Play surfaces on an app listing: sales, tournaments, updates and new content.
    /// </summary>
    public Events Events => field ??= new Events(_rawClient, _server, _auth);

    /// <summary>
    /// Google Play apps and developers: lookup, search, reviews, rankings, similar apps, daily installs, download and revenue estimates, live store listings and reference data.
    /// </summary>
    public GooglePlay GooglePlay => field ??= new GooglePlay(_rawClient, _server, _auth);

    /// <summary>
    /// Asynchronous keyword crawl jobs: submit a term for a store and country, then poll for the results.
    /// </summary>
    public Jobs Jobs => field ??= new Jobs(_rawClient, _server, _auth);

    /// <summary>
    /// Structured filter search: a JSON filter body with field selection, paging and sorting.
    /// </summary>
    public SearchFilterV2 SearchFilterV2 => field ??= new SearchFilterV2(_rawClient, _server, _auth);

    /// <summary>
    /// Google Play search autocomplete suggestions for a term, country and language.
    /// </summary>
    public Suggestions Suggestions => field ??= new Suggestions(_rawClient, _server, _auth);
}
