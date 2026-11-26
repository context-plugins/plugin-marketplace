using System.Net.Http;
using Justtrack.Api;
using Justtrack.Core;
using Justtrack.Core.Configuration;
using Justtrack.Core.Logging;
using Justtrack.Core.Models;

namespace Justtrack;

/// <summary>
/// API to send s2s app events to justtrack, Manage your apps, campaigns, partners, and more., Manage your apps, campaigns, partners, and more., Manage your apps, campaigns, partners, and more., Manage your apps, campaigns, partners, and more., Manage your apps, campaigns, partners, and more., Manage your apps, campaigns, partners, and more.
/// </summary>
public sealed class JusttrackClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public JusttrackClient(HttpClient httpClient, JusttrackClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "JusttrackClient/v1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("JUSTTRACK_LOG"),
            "JusttrackClient",
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

    public AppEvents AppEvents => field ??= new AppEvents(_rawClient, _server, _auth);

    /// <summary>
    /// With the App Partner Connection API, you can:
    /// <list type="bullet">
    ///   <item><description>View details about an app partner connection</description></item>
    ///   <item><description>Create a partner connection for an app (This is the API equivalent of connecting a partner in the dashboard)</description></item>
    ///   <item><description>Update details about an app partner connection</description></item>
    /// </list>
    /// <para>
    /// :::info
    /// </para>
    /// <para>
    /// Without an app partner connection, justtrack can't operate for most of its features, including campaign creation, tracking, and more.
    /// </para>
    /// <para>
    /// :::
    /// </para>
    /// </summary>
    public AppPartnerConnectionApi AppPartnerConnectionApi =>
        field ??= new AppPartnerConnectionApi(_rawClient, _server, _auth);

    /// <summary>
    /// With the App API, you can:
    /// <list type="bullet">
    ///   <item><description>View your list of apps</description></item>
    ///   <item><description>Create an app</description></item>
    /// </list>
    /// </summary>
    public Apps Apps => field ??= new Apps(_rawClient, _server, _auth);

    /// <summary>
    /// Bidding operates as a distributed transaction.
    /// </summary>
    public Bids Bids => field ??= new Bids(_rawClient, _server, _auth);

    public Campaigns Campaigns => field ??= new Campaigns(_rawClient, _server, _auth);

    /// <summary>
    /// In justtrack, you integrate your app with the advertising partners that run your campaigns.
    /// </summary>
    public PartnerConfigurations PartnerConfigurations =>
        field ??= new PartnerConfigurations(_rawClient, _server, _auth);

    public Partners Partners => field ??= new Partners(_rawClient, _server, _auth);
}
