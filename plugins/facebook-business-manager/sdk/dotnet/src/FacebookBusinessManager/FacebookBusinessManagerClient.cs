using System.Net.Http;
using FacebookBusinessManager.Api;
using FacebookBusinessManager.Core;
using FacebookBusinessManager.Core.Configuration;
using FacebookBusinessManager.Core.Logging;
using FacebookBusinessManager.Core.Models;

namespace FacebookBusinessManager;

/// <summary>
/// Create and manage ad campaigns, analyze performance, and automate advertising workflows across Meta platforms. The Marketing API provides programmatic access to Facebook's advertising system, enabling businesses to create campaigns, ad sets, and ads, manage budgets and bidding strategies, define targeting audiences, and retrieve performance metrics., Manage Facebook Pages, publish and manage posts, moderate comments, and track engagement through the Graph API. The Pages API allows businesses to programmatically manage their Facebook presence, publish content, respond to comments and messages, and retrieve page-level analytics., Create and manage ad campaigns, analyze performance, and automate advertising workflows across Meta platforms. The Marketing API provides programmatic access to Facebook's advertising system, enabling businesses to create campaigns, ad sets, and ads, manage budgets and bidding strategies, define targeting audiences, and retrieve performance metrics., Create and manage ad campaigns, analyze performance, and automate advertising workflows across Meta platforms. The Marketing API provides programmatic access to Facebook's advertising system, enabling businesses to create campaigns, ad sets, and ads, manage budgets and bidding strategies, define targeting audiences, and retrieve performance metrics., Manage Facebook Pages, publish and manage posts, moderate comments, and track engagement through the Graph API. The Pages API allows businesses to programmatically manage their Facebook presence, publish content, respond to comments and messages, and retrieve page-level analytics., Manage Facebook Pages, publish and manage posts, moderate comments, and track engagement through the Graph API. The Pages API allows businesses to programmatically manage their Facebook presence, publish content, respond to comments and messages, and retrieve page-level analytics., Manage Facebook Pages, publish and manage posts, moderate comments, and track engagement through the Graph API. The Pages API allows businesses to programmatically manage their Facebook presence, publish content, respond to comments and messages, and retrieve page-level analytics., Manage Facebook Pages, publish and manage posts, moderate comments, and track engagement through the Graph API. The Pages API allows businesses to programmatically manage their Facebook presence, publish content, respond to comments and messages, and retrieve page-level analytics., Manage Facebook Pages, publish and manage posts, moderate comments, and track engagement through the Graph API. The Pages API allows businesses to programmatically manage their Facebook presence, publish content, respond to comments and messages, and retrieve page-level analytics.
/// </summary>
public sealed class FacebookBusinessManagerClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public FacebookBusinessManagerClient(HttpClient httpClient, FacebookBusinessManagerClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "FacebookBusinessManagerClient/25.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "25.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("FACEBOOK_BUSINESS_MANAGER_LOG"),
            "FacebookBusinessManagerClient",
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
    /// Manage advertising accounts including settings, spend limits, and account-level configurations.
    /// </summary>
    public AdAccounts AdAccounts => field ??= new AdAccounts(_rawClient, _server, _auth);

    /// <summary>
    /// Manage ad creative content including images, videos, copy, and call-to-action configurations.
    /// </summary>
    public AdCreatives AdCreatives => field ??= new AdCreatives(_rawClient, _server, _auth);

    /// <summary>
    /// Upload and manage images used in ad creatives.
    /// </summary>
    public AdImages AdImages => field ??= new AdImages(_rawClient, _server, _auth);

    /// <summary>
    /// Manage ad sets within campaigns, including targeting, budgets, scheduling, and optimization goals.
    /// </summary>
    public AdSets AdSets => field ??= new AdSets(_rawClient, _server, _auth);

    /// <summary>
    /// Manage individual ads within ad sets, including creative associations and status.
    /// </summary>
    public Ads Ads => field ??= new Ads(_rawClient, _server, _auth);

    /// <summary>
    /// Manage advertising campaigns including creation, updating, and status management.
    /// </summary>
    public Campaigns Campaigns => field ??= new Campaigns(_rawClient, _server, _auth);

    /// <summary>
    /// Manage comments on Page posts including reading, replying, and moderating.
    /// </summary>
    public CommentsApi CommentsApi => field ??= new CommentsApi(_rawClient, _server, _auth);

    /// <summary>
    /// Create and manage custom audiences for ad targeting based on customer data, website visitors, or app users.
    /// </summary>
    public CustomAudiences CustomAudiences => field ??= new CustomAudiences(_rawClient, _server, _auth);

    /// <summary>
    /// Retrieve performance metrics and analytics data for campaigns, ad sets, and ads.
    /// </summary>
    public Insights Insights => field ??= new Insights(_rawClient, _server, _auth);

    /// <summary>
    /// Retrieve analytics and engagement metrics for a Facebook Page.
    /// </summary>
    public PageInsights PageInsights => field ??= new PageInsights(_rawClient, _server, _auth);

    /// <summary>
    /// Retrieve and manage Facebook Page settings, information, and metadata.
    /// </summary>
    public Pages Pages => field ??= new Pages(_rawClient, _server, _auth);

    /// <summary>
    /// Upload and manage photos on a Facebook Page.
    /// </summary>
    public Photos Photos => field ??= new Photos(_rawClient, _server, _auth);

    /// <summary>
    /// Create, read, update, and delete posts on a Facebook Page feed.
    /// </summary>
    public Posts Posts => field ??= new Posts(_rawClient, _server, _auth);

    /// <summary>
    /// Upload and manage videos on a Facebook Page.
    /// </summary>
    public Videos Videos => field ??= new Videos(_rawClient, _server, _auth);
}
