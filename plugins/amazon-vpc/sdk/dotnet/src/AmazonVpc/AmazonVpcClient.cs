using System.Net.Http;
using AmazonVpc.Api;
using AmazonVpc.Core;
using AmazonVpc.Core.Configuration;
using AmazonVpc.Core.Logging;
using AmazonVpc.Core.Models;

namespace AmazonVpc;

/// <summary>
/// Amazon Virtual Private Cloud (VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. VPC operations are part of the Amazon EC2 API and use the EC2 query-based API pattern.
/// </summary>
public sealed class AmazonVpcClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AmazonVpcClient(HttpClient httpClient, AmazonVpcClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AmazonVpcClient/2016-11-15 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2016-11-15"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AMAZON_VPC_LOG"),
            "AmazonVpcClient",
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
    /// Operations for managing internet gateways that connect VPCs to the internet
    /// </summary>
    public InternetGateways InternetGateways => field ??= new InternetGateways(_rawClient, _server, _auth);

    /// <summary>
    /// Operations for managing NAT gateways for outbound internet access from private subnets
    /// </summary>
    public NatGateways NatGateways => field ??= new NatGateways(_rawClient, _server, _auth);

    /// <summary>
    /// Operations for managing network access control lists for subnet-level traffic filtering
    /// </summary>
    public NetworkAcLs NetworkAcLs => field ??= new NetworkAcLs(_rawClient, _server, _auth);

    /// <summary>
    /// Operations for managing route tables and routes within a VPC
    /// </summary>
    public RouteTables RouteTables => field ??= new RouteTables(_rawClient, _server, _auth);

    /// <summary>
    /// Operations for creating and managing subnets within a VPC
    /// </summary>
    public Subnets Subnets => field ??= new Subnets(_rawClient, _server, _auth);

    /// <summary>
    /// Operations for creating and managing Virtual Private Clouds
    /// </summary>
    public VpCs VpCs => field ??= new VpCs(_rawClient, _server, _auth);
}
