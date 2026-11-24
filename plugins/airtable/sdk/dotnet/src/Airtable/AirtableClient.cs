using System.Net.Http;
using Airtable.Api;
using Airtable.Core;
using Airtable.Core.Configuration;
using Airtable.Core.Logging;
using Airtable.Core.Models;

namespace Airtable;

/// <summary>
/// The Airtable Metadata API provides access to base and schema management operations. You can list bases, retrieve base schemas with table and field definitions, create new bases, tables, and fields, and update table and field configurations programmatically. This API enables developers to introspect and modify the structure of their Airtable data., The Airtable API can be used to integrate your data in Airtable with any external system. The API closely follows REST semantics, uses JSON to encode objects, and relies on standard HTTP codes to signal operation outcomes. It provides full CRUD operations on records, comment management, and webhook subscriptions for real-time notifications., The Airtable Metadata API provides access to base and schema management operations. You can list bases, retrieve base schemas with table and field definitions, create new bases, tables, and fields, and update table and field configurations programmatically. This API enables developers to introspect and modify the structure of their Airtable data., The Airtable SCIM API supports the System for Cross-domain Identity Management (SCIM 2.0) specification for automated user and group provisioning. It enables identity providers like Okta and Microsoft Entra ID to manage user accounts and group memberships programmatically. SCIM is available for Enterprise License Agreement (ELA) and CLAIM enterprise accounts with SSO configured., The Airtable API can be used to integrate your data in Airtable with any external system. The API closely follows REST semantics, uses JSON to encode objects, and relies on standard HTTP codes to signal operation outcomes. It provides full CRUD operations on records, comment management, and webhook subscriptions for real-time notifications., The Airtable Metadata API provides access to base and schema management operations. You can list bases, retrieve base schemas with table and field definitions, create new bases, tables, and fields, and update table and field configurations programmatically. This API enables developers to introspect and modify the structure of their Airtable data., The Airtable SCIM API supports the System for Cross-domain Identity Management (SCIM 2.0) specification for automated user and group provisioning. It enables identity providers like Okta and Microsoft Entra ID to manage user accounts and group memberships programmatically. SCIM is available for Enterprise License Agreement (ELA) and CLAIM enterprise accounts with SSO configured., The Airtable API can be used to integrate your data in Airtable with any external system. The API closely follows REST semantics, uses JSON to encode objects, and relies on standard HTTP codes to signal operation outcomes. It provides full CRUD operations on records, comment management, and webhook subscriptions for real-time notifications.
/// </summary>
public sealed class AirtableClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AirtableClient(HttpClient httpClient, AirtableClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AirtableClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AIRTABLE_LOG"),
            "AirtableClient",
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
    /// List and create bases, retrieve base schemas
    /// </summary>
    public Bases Bases => field ??= new Bases(_rawClient, _server, _auth);

    /// <summary>
    /// Manage comments on individual records
    /// </summary>
    public Comments Comments => field ??= new Comments(_rawClient, _server, _auth);

    /// <summary>
    /// Create and update field definitions within a table
    /// </summary>
    public Fields Fields => field ??= new Fields(_rawClient, _server, _auth);

    /// <summary>
    /// SCIM group provisioning and management
    /// </summary>
    public Groups Groups => field ??= new Groups(_rawClient, _server, _auth);

    /// <summary>
    /// Create, read, update, and delete records in a table
    /// </summary>
    public Records Records => field ??= new Records(_rawClient, _server, _auth);

    /// <summary>
    /// Create and update table definitions within a base
    /// </summary>
    public Tables Tables => field ??= new Tables(_rawClient, _server, _auth);

    /// <summary>
    /// SCIM user provisioning and management
    /// </summary>
    public Users Users => field ??= new Users(_rawClient, _server, _auth);

    /// <summary>
    /// Subscribe to real-time change notifications on bases
    /// </summary>
    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server, _auth);
}
