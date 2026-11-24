using System.Net.Http;
using Contentstack.Api;
using Contentstack.Core;
using Contentstack.Core.Configuration;
using Contentstack.Core.Logging;
using Contentstack.Core.Models;

namespace Contentstack;

/// <summary>
/// The Contentstack Launch API allows developers to programmatically manage web application deployments within Contentstack Launch., The Contentstack Automate Management API allows developers to programmatically manage automation projects and workflows within a Contentstack organization., Operations tagged Assets across 2 of this provider's published API definitions: contentstack-content-delivery-api-openapi.yml, contentstack-content-management-api-openapi.yml. Each path carries the servers of the definition it was published in., The Contentstack Personalize Management API provides programmatic control over the resources in a Contentstack Personalize project, including Attributes, Audiences, Events, and Experiences., The Contentstack Personalize Management API provides programmatic control over the resources in a Contentstack Personalize project, including Attributes, Audiences, Events, and Experiences., The Contentstack Automate Management API allows developers to programmatically manage automation projects and workflows within a Contentstack organization., The Contentstack Automate Management API allows developers to programmatically manage automation projects and workflows within a Contentstack organization., The Contentstack Brand Kit Management API provides programmatic control over Brand Kit resources within a Contentstack organization., Operations tagged Content Types across 2 of this provider's published API definitions: contentstack-content-delivery-api-openapi.yml, contentstack-content-management-api-openapi.yml. Each path carries the servers of the definition it was published in., The Contentstack Launch API allows developers to programmatically manage web application deployments within Contentstack Launch., Operations tagged Entries across 2 of this provider's published API definitions: contentstack-content-delivery-api-openapi.yml, contentstack-content-management-api-openapi.yml. Each path carries the servers of the definition it was published in., The Contentstack Content Delivery API (CDA) allows developers to retrieve published content from their Contentstack stacks and deliver it to web or mobile applications., Operations tagged Environments across 2 of this provider's published API definitions: contentstack-content-management-api-openapi.yml, contentstack-launch-api-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Events across 2 of this provider's published API definitions: contentstack-personalize-edge-api-openapi.yml, contentstack-personalize-management-api-openapi.yml. Each path carries the servers of the definition it was published in., The Contentstack Automate Management API allows developers to programmatically manage automation projects and workflows within a Contentstack organization., The Contentstack Personalize Management API provides programmatic control over the resources in a Contentstack Personalize project, including Attributes, Audiences, Events, and Experiences., The Contentstack Launch API allows developers to programmatically manage web application deployments within Contentstack Launch., The Contentstack Personalize Management API provides programmatic control over the resources in a Contentstack Personalize project, including Attributes, Audiences, Events, and Experiences., The Contentstack Content Delivery API (CDA) allows developers to retrieve published content from their Contentstack stacks and deliver it to web or mobile applications., The Contentstack Brand Kit Management API provides programmatic control over Brand Kit resources within a Contentstack organization., The Contentstack Personalize Edge API enables real-time, dynamic personalization interactions using edge computing to deliver targeted content experiences., The Contentstack Content Management API (CMA) provides programmatic access to manage all aspects of a Contentstack stack, including content types, entries, assets, environments, workflows, and users., Operations tagged Projects across 2 of this provider's published API definitions: contentstack-automate-management-api-openapi.yml, contentstack-launch-api-openapi.yml. Each path carries the servers of the definition it was published in., The Contentstack SCIM API implements the System for Cross-domain Identity Management (SCIM 2.0) standard to enable automated user lifecycle management within a Contentstack organization., The Contentstack SCIM API implements the System for Cross-domain Identity Management (SCIM 2.0) standard to enable automated user lifecycle management within a Contentstack organization., The Contentstack SCIM API implements the System for Cross-domain Identity Management (SCIM 2.0) standard to enable automated user lifecycle management within a Contentstack organization., The Contentstack Content Management API (CMA) provides programmatic access to manage all aspects of a Contentstack stack, including content types, entries, assets, environments, workflows, and users., The Contentstack Content Delivery API (CDA) allows developers to retrieve published content from their Contentstack stacks and deliver it to web or mobile applications., The Contentstack Personalize Edge API enables real-time, dynamic personalization interactions using edge computing to deliver targeted content experiences., The Contentstack Content Management API (CMA) provides programmatic access to manage all aspects of a Contentstack stack, including content types, entries, assets, environments, workflows, and users., The Contentstack Content Management API (CMA) provides programmatic access to manage all aspects of a Contentstack stack, including content types, entries, assets, environments, workflows, and users., The Contentstack Automate Management API allows developers to programmatically manage automation projects and workflows within a Contentstack organization., The Contentstack Brand Kit Management API provides programmatic control over Brand Kit resources within a Contentstack organization.
/// </summary>
public sealed class ContentstackClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public ContentstackClient(HttpClient httpClient, ContentstackClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "ContentstackClient/v1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("CONTENTSTACK_LOG"),
            "ContentstackClient",
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
    /// SCIM user endpoints enable Identity Providers to provision, update, and deprovision user accounts within a Contentstack organization following the SCIM 2.0 User schema.
    /// </summary>
    public ScimUsers ScimUsers => field ??= new ScimUsers(_rawClient, _server, _auth);

    /// <summary>
    /// Accounts represent authenticated connections to external services and third-party platforms used by automations as action targets.
    /// </summary>
    public Accounts Accounts => field ??= new Accounts(_rawClient, _server, _auth);

    /// <summary>
    /// Analytics endpoints provide usage metrics for Launch projects such as cache revalidation quota consumption.
    /// </summary>
    public Analytics Analytics => field ??= new Analytics(_rawClient, _server, _auth);

    /// <summary>
    /// Assets are media files such as images, videos, and documents stored in the Contentstack asset library.
    /// </summary>
    public Assets Assets => field ??= new Assets(_rawClient, _server, _auth);

    /// <summary>
    /// Attributes represent individual user data characteristics such as age, location, or browsing history used to define audience segments.
    /// </summary>
    public AttributesApi AttributesApi => field ??= new AttributesApi(_rawClient, _server, _auth);

    /// <summary>
    /// Audiences are defined segments of users grouped by demographic, behavioral, or other attribute-based criteria for targeted content experiences.
    /// </summary>
    public Audiences Audiences => field ??= new Audiences(_rawClient, _server, _auth);

    /// <summary>
    /// Audit logs track all administrative actions taken within an automation project, providing a history of configuration changes.
    /// </summary>
    public AuditLogs AuditLogs => field ??= new AuditLogs(_rawClient, _server, _auth);

    /// <summary>
    /// Automations are individual workflow definitions that connect triggers (such as Contentstack content events) to actions (such as sending notifications or updating external systems).
    /// </summary>
    public Automations Automations => field ??= new Automations(_rawClient, _server, _auth);

    /// <summary>
    /// Brand Kits are centralized repositories for an organization's brand identity assets, guidelines, and AI configuration. They are used to ensure consistent brand voice and style across AI-generated content.
    /// </summary>
    public BrandKits BrandKits => field ??= new BrandKits(_rawClient, _server, _auth);

    /// <summary>
    /// Content types define the structure of content entries in a Contentstack stack. They specify the fields and their data types that entries must conform to.
    /// </summary>
    public ContentTypes ContentTypes => field ??= new ContentTypes(_rawClient, _server, _auth);

    /// <summary>
    /// Deployments represent individual build and publish operations to a Launch environment. Each deployment has associated build logs, server logs, and status tracking.
    /// </summary>
    public Deployments Deployments => field ??= new Deployments(_rawClient, _server, _auth);

    /// <summary>
    /// Entries are instances of content types that hold the actual content data. They can be filtered, sorted, paginated, and localized.
    /// </summary>
    public Entries Entries => field ??= new Entries(_rawClient, _server, _auth);

    /// <summary>
    /// Entry variants are customized versions of an entry created for personalization or A/B testing purposes.
    /// </summary>
    public EntryVariants EntryVariants => field ??= new EntryVariants(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for managing deployment environments (e.g., production, staging) within a stack.
    /// </summary>
    public Environments Environments => field ??= new Environments(_rawClient, _server, _auth);

    /// <summary>
    /// The events endpoint allows applications to track user actions and behavioral events for experience analytics and audience rule evaluation.
    /// </summary>
    public Events Events => field ??= new Events(_rawClient, _server);

    /// <summary>
    /// Execution logs record each time an automation runs, including the trigger context, steps executed, and success or failure status.
    /// </summary>
    public ExecutionLogs ExecutionLogs => field ??= new ExecutionLogs(_rawClient, _server, _auth);

    /// <summary>
    /// Experiences define personalized content variations delivered to specific audience segments, supporting both segmented and A/B test configurations.
    /// </summary>
    public Experiences Experiences => field ??= new Experiences(_rawClient, _server, _auth);

    /// <summary>
    /// File upload endpoints provide pre-signed URLs for securely uploading build artifacts to Contentstack Launch infrastructure before triggering a deployment.
    /// </summary>
    public FileUploads FileUploads => field ??= new FileUploads(_rawClient, _server, _auth);

    /// <summary>
    /// Geolocation endpoints provide geographic datasets including regions, countries, and cities for location-based audience targeting.
    /// </summary>
    public Geolocation Geolocation => field ??= new Geolocation(_rawClient, _server, _auth);

    /// <summary>
    /// Global fields are reusable field groups that can be referenced across multiple content types within a Contentstack stack.
    /// </summary>
    public GlobalFields GlobalFields => field ??= new GlobalFields(_rawClient, _server, _auth);

    /// <summary>
    /// LLM Configuration endpoints allow organizations to register custom API credentials for large language model providers, enabling content generation through their own LLM subscriptions.
    /// </summary>
    public LlmConfiguration LlmConfiguration => field ??= new LlmConfiguration(_rawClient, _server, _auth);

    /// <summary>
    /// The manifest endpoint returns a list of all active experiences and their corresponding variants that are activated for the current user based on their attributes and audience membership.
    /// </summary>
    public ManifestApi ManifestApi => field ??= new ManifestApi(_rawClient, _server);

    /// <summary>
    /// Endpoints for managing Contentstack organizations, including user invitations, roles, stacks, and audit logs at the organization level.
    /// </summary>
    public Organizations Organizations => field ??= new Organizations(_rawClient, _server, _auth);

    /// <summary>
    /// Automation projects are containers for automations within a Contentstack organization. Each project groups related automations and can have its own variables and account connections.
    /// </summary>
    public Projects Projects => field ??= new Projects(_rawClient, _server, _auth);

    /// <summary>
    /// SCIM group endpoints allow Identity Providers to manage group memberships in Contentstack, which map to role-based access control within the CMS.
    /// </summary>
    public ScimGroups ScimGroups => field ??= new ScimGroups(_rawClient, _server, _auth);

    /// <summary>
    /// Schema discovery endpoints implement the SCIM 2.0 service provider configuration, returning supported schemas and resource types for IdP compatibility validation.
    /// </summary>
    public ScimSchemaDiscovery ScimSchemaDiscovery => field ??= new ScimSchemaDiscovery(_rawClient, _server);

    /// <summary>
    /// Endpoints for creating and managing Contentstack stacks, including settings, users, sharing, and ownership transfer.
    /// </summary>
    public Stacks Stacks => field ??= new Stacks(_rawClient, _server, _auth);

    /// <summary>
    /// The synchronization endpoints allow developers to sync published content incrementally, enabling efficient local caching and offline-first patterns.
    /// </summary>
    public Synchronization Synchronization => field ??= new Synchronization(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for setting, updating, and merging user attribute data used to determine audience membership and personalized content targeting.
    /// </summary>
    public UserAttributes UserAttributes => field ??= new UserAttributes(_rawClient, _server);

    /// <summary>
    /// Endpoints for authenticating users and managing session tokens within Contentstack.
    /// </summary>
    public UserSessions UserSessions => field ??= new UserSessions(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for managing Contentstack user accounts including profile updates, password resets, and account activation.
    /// </summary>
    public Users Users => field ??= new Users(_rawClient, _server, _auth);

    /// <summary>
    /// Project variables are reusable key-value pairs that can be referenced across multiple automations within a project.
    /// </summary>
    public Variables Variables => field ??= new Variables(_rawClient, _server, _auth);

    /// <summary>
    /// Voice Profiles define the writing style, tone, and persona characteristics for AI content generation within a Brand Kit. Multiple voice profiles can be created to support different content contexts or audiences.
    /// </summary>
    public VoiceProfiles VoiceProfiles => field ??= new VoiceProfiles(_rawClient, _server, _auth);
}
