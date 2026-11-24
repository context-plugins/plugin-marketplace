using System.Net.Http;
using Cosmic.Api;
using Cosmic.Core;
using Cosmic.Core.Configuration;
using Cosmic.Core.Logging;
using Cosmic.Core.Models;

namespace Cosmic;

/// <summary>
/// The Cosmic v3 REST API for content operations against a single Bucket.
/// <para>
/// ## When to use this API
/// </para>
/// <para>
/// Reach for this API to model content (Object types and Metafields), create and query content (Objects), read version history (Revisions), and manage media metadata. A Bucket is the unit of isolation: every path below is scoped to one Bucket slug, and the access keys are per-Bucket.
/// </para>
/// <para>
/// ## Authentication
/// </para>
/// <para>
/// Reads use the Bucket read key as a <c>read_key</c> query parameter. Writes use the Bucket write key as an <c>Authorization: Bearer</c> header. Both keys are found under Bucket &gt; Settings &gt; API Access in the dashboard. There is no account-level credential: a key grants access to exactly one Bucket.
/// </para>
/// <para>
/// ## Scope of this document
/// </para>
/// <para>
/// This document describes only the endpoints served by <c>https://api.cosmicjs.com/v3</c>. Other documented parts of the Cosmic surface live on different hosts and are not yet specified here:
/// </para>
/// <list type="bullet">
///   <item><description>Agent signup, agent status, and user endpoints (<c>/v3/agents/*</c>, <c>/v3/users/*</c>) are served by <c>https://dapi.cosmicjs.com</c>. An agent with no prior Cosmic account should start at <c>POST https://dapi.cosmicjs.com/v3/agents/sign-up</c>.</description></item>
///   <item><description>Media upload (<c>POST /v3/buckets/{slug}/media</c>) is served by <c>https://workers.cosmicjs.com</c>. Media read, update, and delete are on this host and are specified below.</description></item>
///   <item><description>AI generation endpoints (<c>/v3/ai/*</c>) are served by <c>https://dapi.cosmicjs.com</c>.</description></item>
/// </list>
/// <para>
/// Be aware of one quirk when probing this host: an unrecognized path under <c>/v3</c> currently answers <c>200</c> with a body of <c>{"message":"Route not found", ...}</c> rather than a <c>404</c>. Treat that body, not the status line, as the signal that a path does not exist. The response names the host that serves the path you probably wanted.
/// </para>
/// </summary>
public sealed class CosmicClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public CosmicClient(HttpClient httpClient, CosmicClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "CosmicClient/3.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "3.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("COSMIC_LOG"),
            "CosmicClient",
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
    /// Content Blocks configured on the Bucket.
    /// </summary>
    public Blocks Blocks => field ??= new Blocks(_rawClient, _server, _auth);

    /// <summary>
    /// Media are the images, files, and documents in a Bucket. Upload is served by workers.cosmicjs.com and is not part of this document.
    /// </summary>
    public MediaApi MediaApi => field ??= new MediaApi(_rawClient, _server, _auth);

    /// <summary>
    /// Revisions are the version history of an Object. They can be created and read, but never edited or deleted.
    /// </summary>
    public ObjectRevisions ObjectRevisions => field ??= new ObjectRevisions(_rawClient, _server, _auth);

    /// <summary>
    /// Object types define the content model: the Metafields, localization settings, and display options shared by every Object in the type.
    /// </summary>
    public ObjectTypes ObjectTypes => field ??= new ObjectTypes(_rawClient, _server, _auth);

    /// <summary>
    /// Objects are the basic building blocks of content. Every Object belongs to an Object type and carries its field values under <c>metadata</c>.
    /// </summary>
    public Objects Objects => field ??= new Objects(_rawClient, _server, _auth);

    /// <summary>
    /// Service health.
    /// </summary>
    public StatusApi StatusApi => field ??= new StatusApi(_rawClient, _server);
}
