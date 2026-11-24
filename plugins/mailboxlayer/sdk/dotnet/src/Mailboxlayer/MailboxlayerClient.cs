using System.Net.Http;
using Mailboxlayer.Api;
using Mailboxlayer.Core;
using Mailboxlayer.Core.Configuration;
using Mailboxlayer.Core.Logging;
using Mailboxlayer.Core.Models;

namespace Mailboxlayer;

/// <summary>
/// Mailboxlayer offers a simple REST-based JSON API enabling you to thoroughly check and verify email addresses right at the point of entry into your system.
/// </summary>
public sealed class MailboxlayerClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public MailboxlayerClient(HttpClient httpClient, MailboxlayerClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "MailboxlayerClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("MAILBOXLAYER_LOG"),
            "MailboxlayerClient",
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

    public BulkCheck BulkCheck => field ??= new BulkCheck(_rawClient, _server, _auth);

    public Check Check => field ??= new Check(_rawClient, _server, _auth);
}
