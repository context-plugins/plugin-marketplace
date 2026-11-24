using System.Net.Http;
using Archbee.Api;
using Archbee.Core;
using Archbee.Core.Configuration;
using Archbee.Core.Logging;
using Archbee.Core.Models;

namespace Archbee;

/// <summary>
/// The Archbee Public API manages documentation spaces, documents, space groups, File Manager files, reader suggestions, organization exports and imported OpenAPI references in an Archbee workspace. Authentication uses an HTTP Bearer token whose value is base64(docSpaceId~apiKey), or a team key beginning abteam_.
/// </summary>
public sealed class ArchbeeClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public ArchbeeClient(HttpClient httpClient, ArchbeeClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "ArchbeeClient/2026-09-04 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2026-09-04"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("ARCHBEE_LOG"),
            "ArchbeeClient",
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
    /// Sync and inspect an imported OpenAPI reference
    /// </summary>
    public ApiReference ApiReference => field ??= new ApiReference(_rawClient, _server, _auth);

    /// <summary>
    /// Magic-link access requests for gated portals
    /// </summary>
    public AccessControl AccessControl => field ??= new AccessControl(_rawClient, _server, _auth);

    /// <summary>
    /// Create, read, update, delete and search documents
    /// </summary>
    public Documents Documents => field ??= new Documents(_rawClient, _server, _auth);

    /// <summary>
    /// Upload, list, move, replace and delete File Manager files
    /// </summary>
    public FileManager FileManager => field ??= new FileManager(_rawClient, _server, _auth);

    /// <summary>
    /// Organization-level export and display rules
    /// </summary>
    public Organization Organization => field ??= new Organization(_rawClient, _server, _auth);

    /// <summary>
    /// Grouping of documentation spaces
    /// </summary>
    public SpaceGroups SpaceGroups => field ??= new SpaceGroups(_rawClient, _server, _auth);

    /// <summary>
    /// Reader-submitted suggested changes — merge or discard
    /// </summary>
    public Suggestions Suggestions => field ??= new Suggestions(_rawClient, _server, _auth);
}
