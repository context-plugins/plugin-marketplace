using System.Net.Http;
using BundleSocial.Api;
using BundleSocial.Core;
using BundleSocial.Core.Configuration;
using BundleSocial.Core.Logging;
using BundleSocial.Core.Models;

namespace BundleSocial;

/// <summary>
/// Operations tagged analytics across 2 of this provider's published API definitions: bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged app across 2 of this provider's published API definitions: bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged automation across 2 of this provider's published API definitions: bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged comment across 2 of this provider's published API definitions: bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged conversation across 2 of this provider's published API definitions: bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged credit across 2 of this provider's published API definitions: bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged misc across 2 of this provider's published API definitions: bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged organization across 2 of this provider's published API definitions: bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged post across 2 of this provider's published API definitions: bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged postCSV across 2 of this provider's published API definitions: bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged postImport across 2 of this provider's published API definitions: bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged socialAccount across 2 of this provider's published API definitions: bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged team across 2 of this provider's published API definitions: bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged upload across 2 of this provider's published API definitions: bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class BundleSocialClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public BundleSocialClient(HttpClient httpClient, BundleSocialClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "BundleSocialClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("BUNDLE_SOCIAL_LOG"),
            "BundleSocialClient",
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

    public Analytics Analytics => field ??= new Analytics(_rawClient, _server, _auth);

    public App App => field ??= new App(_rawClient, _server, _auth);

    /// <summary>
    /// Build, publish and monitor automation flows that react to incoming messages and comments, plus the per-account provider settings they rely on.
    /// </summary>
    public Automation Automation => field ??= new Automation(_rawClient, _server, _auth);

    public CommentApi CommentApi => field ??= new CommentApi(_rawClient, _server, _auth);

    public Credit Credit => field ??= new Credit(_rawClient, _server, _auth);

    public Misc Misc => field ??= new Misc(_rawClient, _server, _auth);

    public OrganizationApi OrganizationApi => field ??= new OrganizationApi(_rawClient, _server, _auth);

    public PostApi PostApi => field ??= new PostApi(_rawClient, _server, _auth);

    public TeamApi TeamApi => field ??= new TeamApi(_rawClient, _server, _auth);

    public UploadApi UploadApi => field ??= new UploadApi(_rawClient, _server, _auth);

    /// <summary>
    /// Read and reply to Instagram and Facebook direct message conversations, react to messages, and send private replies to comments.
    /// </summary>
    public ConversationApi ConversationApi => field ??= new ConversationApi(_rawClient, _server, _auth);

    public PostCsv PostCsv => field ??= new PostCsv(_rawClient, _server, _auth);

    public PostImport PostImport => field ??= new PostImport(_rawClient, _server, _auth);

    public SocialAccountApi SocialAccountApi => field ??= new SocialAccountApi(_rawClient, _server, _auth);
}
