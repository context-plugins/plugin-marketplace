using System.Net.Http;
using Instacart.Api;
using Instacart.Core;
using Instacart.Core.Configuration;
using Instacart.Core.Logging;
using Instacart.Core.Models;

namespace Instacart;

/// <summary>
/// The Instacart Connect Fulfillment API enables retailers to integrate Instacart fulfillment capabilities directly into their e-commerce sites., The Instacart Connect Post-Checkout API allows retailers to provide their customers with real-time order tracking and shopper interaction after an order has been placed., The Instacart Connect Fulfillment API enables retailers to integrate Instacart fulfillment capabilities directly into their e-commerce sites., The Instacart Catalog API enables retailers to programmatically manage their product catalogs on the Instacart platform., The Instacart Connect Fulfillment API enables retailers to integrate Instacart fulfillment capabilities directly into their e-commerce sites., The Instacart Connect Post-Checkout API allows retailers to provide their customers with real-time order tracking and shopper interaction after an order has been placed., The Instacart Connect Fulfillment API enables retailers to integrate Instacart fulfillment capabilities directly into their e-commerce sites., Operations tagged Products across 2 of this provider's published API definitions: instacart-catalog-api-openapi.yml, instacart-developer-platform-api-openapi.yml. Each path carries the servers of the definition it was published in., The Instacart Connect Post-Checkout API allows retailers to provide their customers with real-time order tracking and shopper interaction after an order has been placed., Order from your favorite local grocery stores.
/// </summary>
public sealed class InstacartClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public InstacartClient(HttpClient httpClient, InstacartClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "InstacartClient/2.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("INSTACART_LOG"),
            "InstacartClient",
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
    /// Endpoints for obtaining and managing OAuth 2.0 access tokens used to authenticate API requests.
    /// </summary>
    public AuthenticationApi AuthenticationApi => field ??= new AuthenticationApi(_rawClient, _server);

    /// <summary>
    /// Endpoints for shopper-customer communication including sending and retrieving chat messages.
    /// </summary>
    public Chat Chat => field ??= new Chat(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for finding delivery stores, previewing time slots, reserving time slots, and creating delivery orders.
    /// </summary>
    public Delivery Delivery => field ??= new Delivery(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for updating item-level attributes such as pricing and availability at specific store locations. Items contain information that can vary from one store to another.
    /// </summary>
    public Items Items => field ??= new Items(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for last mile delivery where items are pre-packed and only require delivery from the store to the customer.
    /// </summary>
    public LastMileDelivery LastMileDelivery => field ??= new LastMileDelivery(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for retrieving order status, handling details, and item information after checkout.
    /// </summary>
    public Orders Orders => field ??= new Orders(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for finding pickup stores, previewing time slots, reserving time slots, and creating pickup orders.
    /// </summary>
    public Pickup Pickup => field ??= new Pickup(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for creating and updating products in the retailer's catalog on Instacart. Products are the same across all of a retailer's stores.
    /// </summary>
    public Products Products => field ??= new Products(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for managing item replacements suggested by shoppers during order fulfillment.
    /// </summary>
    public Replacements Replacements => field ??= new Replacements(_rawClient, _server, _auth);

    public Rest Rest => field ??= new Rest(_rawClient, _server);
}
