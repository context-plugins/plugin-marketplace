using System.Net.Http;
using Bitly.Api;
using Bitly.Core;
using Bitly.Core.Configuration;
using Bitly.Core.Logging;
using Bitly.Core.Models;

namespace Bitly;

/// <summary>
/// Bitlinks are shortened links. They could begin with the bit.ly domain or your own custom branded short domain (BSD).
/// <para>
/// <b>Related Operations:</b>
/// - POST /bitlinks - Create a new bitlink or add a custom keyword to an existing bitlink
/// - PATCH /bitlinks/{bitlink} - Redirect an existing bitlink, Branded short domains (BSDs) are the custom domains used to brand your links. A BSD can be added to a Bitly organization and may be assigned to one or more groups. They can contain up to 32 characters., Bitly Campaigns are used to build and organize links and metrics for marketing campaigns., These endpoints are for updating custom Bitlinks only. Custom Bitlinks have both a BSD and a customized back-half (e.g., yourcompany.com/yourcampaign). If a link begins with the bit.ly domain or ends with an auto-generated random string it is not a custom Bitlink., Groups are subdivisions within organizations. Every user will be in at least one group, and every shortened link will be in one group. Most actions on our API will be on behalf of a group. For example, when you shorten a link, it will be on behalf of a user and a group., Organizations are equivalent to a Bitly account. Every plan limit, group, and user is tied to an organization., QR codes can be created and customized with different dot patterns, corner shapes, colors, and more. They can contain bitlinks, links to microsites, or several kinds of static data., Some subscription plans allow multiple users. Only one user is used for authenticating a call, and these operations apply only to the authenticated user., Webhooks are a method of sending information from Bitly to an application outside of Bitly. It's a way to automate actions or updates between two different systems. These endpoints are for configuring your webhooks.
/// </para>
/// </summary>
public sealed class BitlyClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public BitlyClient(HttpClient httpClient, BitlyClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "BitlyClient/4.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("BITLY_LOG"),
            "BitlyClient",
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

    public Apps Apps => field ??= new Apps(_rawClient, _server, _auth);

    /// <summary>
    /// Branded short domains (BSDs) are the custom domains used to brand your links. A BSD can be added to a Bitly organization and may be assigned to one or more groups. They can contain up to 32 characters.
    /// </summary>
    public BsDs BsDs => field ??= new BsDs(_rawClient, _server, _auth);

    /// <summary>
    /// Bitlinks are shortened links. They could begin with the bit.ly domain or your own custom branded short domain (BSD).
    /// <para>
    /// <b>Related Operations:</b>
    /// - POST /bitlinks - Create a new bitlink or add a custom keyword to an existing bitlink
    /// - PATCH /bitlinks/{bitlink} - Redirect an existing bitlink
    /// </para>
    /// </summary>
    public BitlinksApi BitlinksApi => field ??= new BitlinksApi(_rawClient, _server, _auth);

    /// <summary>
    /// Bitly Campaigns are used to build and organize links and metrics for marketing campaigns.
    /// </summary>
    public CampaignsApi CampaignsApi => field ??= new CampaignsApi(_rawClient, _server, _auth);

    /// <summary>
    /// These endpoints are for updating custom Bitlinks only. Custom Bitlinks have both a BSD and a customized back-half (e.g., yourcompany.com/yourcampaign). If a link begins with the bit.ly domain or ends with an auto-generated random string it is not a custom Bitlink.
    /// </summary>
    public CustomBitlinks CustomBitlinks => field ??= new CustomBitlinks(_rawClient, _server, _auth);

    /// <summary>
    /// Groups are subdivisions within organizations. Every user will be in at least one group, and every shortened link will be in one group. Most actions on our API will be on behalf of a group. For example, when you shorten a link, it will be on behalf of a user and a group.
    /// </summary>
    public GroupsApi GroupsApi => field ??= new GroupsApi(_rawClient, _server, _auth);

    /// <summary>
    /// Organizations are equivalent to a Bitly account. Every plan limit, group, and user is tied to an organization.
    /// </summary>
    public OrganizationsApi OrganizationsApi => field ??= new OrganizationsApi(_rawClient, _server, _auth);

    /// <summary>
    /// QR codes can be created and customized with different dot patterns, corner shapes, colors, and more. They can contain bitlinks, links to microsites, or several kinds of static data.
    /// </summary>
    public QrCodes QrCodes => field ??= new QrCodes(_rawClient, _server, _auth);

    /// <summary>
    /// Some subscription plans allow multiple users. Only one user is used for authenticating a call, and these operations apply only to the authenticated user.
    /// </summary>
    public UserApi UserApi => field ??= new UserApi(_rawClient, _server, _auth);

    /// <summary>
    /// Webhooks are a method of sending information from Bitly to an application outside of Bitly. It's a way to automate actions or updates between two different systems. These endpoints are for configuring your webhooks.
    /// </summary>
    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server, _auth);
}
