using System.Net.Http;
using AmazonLex.Api;
using AmazonLex.Core;
using AmazonLex.Core.Configuration;
using AmazonLex.Core.Logging;
using AmazonLex.Core.Models;

namespace AmazonLex;

/// <summary>
/// Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 4 operation(s)., Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 89 operation(s)., Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 5 operation(s)., Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 3 operation(s)., Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 1 operation(s)., Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 6 operation(s)., Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 4 operation(s)., Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 3 operation(s)., Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 6 operation(s)., Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 6 operation(s)., Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 6 operation(s)., Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 5 operation(s)., Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 2 operation(s)., Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 2 operation(s)., Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 7 operation(s)., Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 15 operation(s).
/// </summary>
public sealed class AmazonLexClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AmazonLexClient(HttpClient httpClient, AmazonLexClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AmazonLexClient/2020-08-07 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2020-08-07"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AMAZON_LEX_LOG"),
            "AmazonLexClient",
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

    public Aliases Aliases => field ??= new Aliases(_rawClient, _server, _auth);

    public Bots Bots => field ??= new Bots(_rawClient, _server, _auth);

    public Builtins Builtins => field ??= new Builtins(_rawClient, _server, _auth);

    public Channels Channels => field ??= new Channels(_rawClient, _server, _auth);

    public Createuploadurl Createuploadurl => field ??= new Createuploadurl(_rawClient, _server, _auth);

    public Exports Exports => field ??= new Exports(_rawClient, _server, _auth);

    public Imports Imports => field ??= new Imports(_rawClient, _server, _auth);

    public Migrations Migrations => field ??= new Migrations(_rawClient, _server, _auth);

    public Operations Operations => field ??= new Operations(_rawClient, _server, _auth);

    public Policy Policy => field ??= new Policy(_rawClient, _server, _auth);

    public Tags Tags => field ??= new Tags(_rawClient, _server, _auth);

    public Testexecutions Testexecutions => field ??= new Testexecutions(_rawClient, _server, _auth);

    public Testsetdiscrepancy Testsetdiscrepancy => field ??= new Testsetdiscrepancy(_rawClient, _server, _auth);

    public Testsetgenerations Testsetgenerations => field ??= new Testsetgenerations(_rawClient, _server, _auth);

    public Testsets Testsets => field ??= new Testsets(_rawClient, _server, _auth);

    public Versions Versions => field ??= new Versions(_rawClient, _server, _auth);
}
