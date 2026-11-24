using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Apigee.Core;
using Apigee.Core.Authentication;
using Apigee.Core.Exceptions;
using Apigee.Core.Models;
using Apigee.Core.Request;
using Apigee.Core.Response;
using Apigee.Errors;
using Apigee.Models;
using Apigee.Requests.Organizations;

namespace Apigee.Api;

public sealed class Organizations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Organizations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create datastores
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Datastore"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAnalyticsDatastoresCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a Datastore for an org
    /// </remarks>
    public Task<GoogleCloudApigeeV1Datastore> ApigeeOrganizationsAnalyticsDatastoresCreate(ApigeeOrganizationsAnalyticsDatastoresCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/analytics/datastores"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Datastore>(),
            ApigeeOrganizationsAnalyticsDatastoresCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete datastores
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAnalyticsDatastoresDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a Datastore from an org.
    /// </remarks>
    public Task<object> ApigeeOrganizationsAnalyticsDatastoresDelete(ApigeeOrganizationsAnalyticsDatastoresDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/analytics/datastores/{datastoresId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("datastoresId", request.DatastoresId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApigeeOrganizationsAnalyticsDatastoresDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get datastores
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Datastore"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAnalyticsDatastoresGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a Datastore
    /// </remarks>
    public Task<GoogleCloudApigeeV1Datastore> ApigeeOrganizationsAnalyticsDatastoresGet(ApigeeOrganizationsAnalyticsDatastoresGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/analytics/datastores/{datastoresId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("datastoresId", request.DatastoresId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Datastore>(),
            ApigeeOrganizationsAnalyticsDatastoresGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List datastores
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListDatastoresResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAnalyticsDatastoresListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List Datastores
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListDatastoresResponse> ApigeeOrganizationsAnalyticsDatastoresList(ApigeeOrganizationsAnalyticsDatastoresListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/analytics/datastores"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("targetType", request.TargetType)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListDatastoresResponse>(),
            ApigeeOrganizationsAnalyticsDatastoresListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test datastores
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1TestDatastoreResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAnalyticsDatastoresTestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Test if Datastore configuration is correct. This includes checking if credentials provided by customer have required permissions in target destination storage
    /// </remarks>
    public Task<GoogleCloudApigeeV1TestDatastoreResponse> ApigeeOrganizationsAnalyticsDatastoresTest(ApigeeOrganizationsAnalyticsDatastoresTestRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/analytics/datastores:test"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1TestDatastoreResponse>(),
            ApigeeOrganizationsAnalyticsDatastoresTestError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update datastores
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Datastore"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAnalyticsDatastoresUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a Datastore
    /// </remarks>
    public Task<GoogleCloudApigeeV1Datastore> ApigeeOrganizationsAnalyticsDatastoresUpdate(ApigeeOrganizationsAnalyticsDatastoresUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/analytics/datastores/{datastoresId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("datastoresId", request.DatastoresId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Datastore>(),
            ApigeeOrganizationsAnalyticsDatastoresUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create apimServiceExtensions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApimServiceExtensionsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an APIM ServiceExtension in an organization.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsApimServiceExtensionsCreate(ApigeeOrganizationsApimServiceExtensionsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apimServiceExtensions"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("apimServiceExtensionId", request.ApimServiceExtensionId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsApimServiceExtensionsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete apimServiceExtensions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApimServiceExtensionsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes APIM service extension from an organization.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsApimServiceExtensionsDelete(ApigeeOrganizationsApimServiceExtensionsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apimServiceExtensions/{apimServiceExtensionsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apimServiceExtensionsId", request.ApimServiceExtensionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsApimServiceExtensionsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get apimServiceExtensions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApimServiceExtension"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApimServiceExtensionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets APIM service extension details.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApimServiceExtension> ApigeeOrganizationsApimServiceExtensionsGet(ApigeeOrganizationsApimServiceExtensionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apimServiceExtensions/{apimServiceExtensionsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apimServiceExtensionsId", request.ApimServiceExtensionsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ApimServiceExtension>(),
            ApigeeOrganizationsApimServiceExtensionsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List apimServiceExtensions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListApimServiceExtensionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApimServiceExtensionsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all APIM service extensions in an organization.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListApimServiceExtensionsResponse> ApigeeOrganizationsApimServiceExtensionsList(ApigeeOrganizationsApimServiceExtensionsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apimServiceExtensions"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListApimServiceExtensionsResponse>(),
            ApigeeOrganizationsApimServiceExtensionsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch apimServiceExtensions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApimServiceExtensionsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an APIM service extension in an organization.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsApimServiceExtensionsPatch(ApigeeOrganizationsApimServiceExtensionsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apimServiceExtensions/{apimServiceExtensionsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apimServiceExtensionsId", request.ApimServiceExtensionsId),
            ],
            [new Param("allowMissing", request.AllowMissing), new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsApimServiceExtensionsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Attributes apiproducts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Attributes"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApiproductsAttributesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates or creates API product attributes. This API <b>replaces</b> the current list of attributes with the attributes specified in the request body. In this way, you can update existing attributes, add new attributes, or delete existing attributes by omitting them from the request body. <b>Note</b>: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with entities also get cached for at least 180 seconds after entity is accessed during runtime. In this case, the <c>ExpiresIn</c> element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Attributes> ApigeeOrganizationsApiproductsAttributes(ApigeeOrganizationsApiproductsAttributesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/attributes"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apiproductsId", request.ApiproductsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Attributes>(),
            ApigeeOrganizationsApiproductsAttributesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Attribute"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApiproductsAttributesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an API product attribute.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Attribute> ApigeeOrganizationsApiproductsAttributesDelete(ApigeeOrganizationsApiproductsAttributesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/attributes/{attributesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apiproductsId", request.ApiproductsId),
                new TemplateParam("attributesId", request.AttributesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Attribute>(),
            ApigeeOrganizationsApiproductsAttributesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Attribute"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApiproductsAttributesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the value of an API product attribute.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Attribute> ApigeeOrganizationsApiproductsAttributesGet(ApigeeOrganizationsApiproductsAttributesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/attributes/{attributesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apiproductsId", request.ApiproductsId),
                new TemplateParam("attributesId", request.AttributesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Attribute>(),
            ApigeeOrganizationsApiproductsAttributesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Attributes"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApiproductsAttributesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all API product attributes.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Attributes> ApigeeOrganizationsApiproductsAttributesList(ApigeeOrganizationsApiproductsAttributesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/attributes"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apiproductsId", request.ApiproductsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Attributes>(),
            ApigeeOrganizationsApiproductsAttributesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update api product attribute attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Attribute"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the value of an API product attribute. <b>Note</b>: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with entities also get cached for at least 180 seconds after entity is accessed during runtime. In this case, the <c>ExpiresIn</c> element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Attribute> ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttribute(ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/attributes/{attributesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apiproductsId", request.ApiproductsId),
                new TemplateParam("attributesId", request.AttributesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Attribute>(),
            ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create apiproducts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiProduct"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApiproductsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an API product in an organization. You create API products after you have proxied backend services using API proxies. An API product is a collection of API resources combined with quota settings and metadata that you can use to deliver customized and productized API bundles to your developer community. This metadata can include: - Scope - Environments - API proxies - Extensible profile API products enable you repackage APIs on the fly, without having to do any additional coding or configuration. Apigee recommends that you start with a simple API product including only required elements. You then provision credentials to apps to enable them to start testing your APIs. After you have authentication and authorization working against a simple API product, you can iterate to create finer-grained API products, defining different sets of API resources for each API product. <b>WARNING:</b> - If you don't specify an API proxy in the request body, *any* app associated with the product can make calls to *any* API in your entire organization. - If you don't specify an environment in the request body, the product allows access to all environments. For more information, see What is an API product?
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiProduct> ApigeeOrganizationsApiproductsCreate(ApigeeOrganizationsApiproductsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apiproducts"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1ApiProduct>(),
            ApigeeOrganizationsApiproductsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete apiproducts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiProduct"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApiproductsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an API product from an organization. Deleting an API product causes app requests to the resource URIs defined in the API product to fail. Ensure that you create a new API product to serve existing apps, unless your intention is to disable access to the resources defined in the API product. The API product name required in the request URL is the internal name of the product, not the display name. While they may be the same, it depends on whether the API product was created via the UI or the API. View the list of API products to verify the internal name.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiProduct> ApigeeOrganizationsApiproductsDelete(ApigeeOrganizationsApiproductsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apiproducts/{apiproductsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apiproductsId", request.ApiproductsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ApiProduct>(),
            ApigeeOrganizationsApiproductsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get apiproducts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiProduct"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApiproductsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets configuration details for an API product. The API product name required in the request URL is the internal name of the product, not the display name. While they may be the same, it depends on whether the API product was created via the UI or the API. View the list of API products to verify the internal name.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiProduct> ApigeeOrganizationsApiproductsGet(ApigeeOrganizationsApiproductsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apiproducts/{apiproductsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apiproductsId", request.ApiproductsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ApiProduct>(),
            ApigeeOrganizationsApiproductsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List apiproducts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListApiProductsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApiproductsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all API product names for an organization. Filter the list by passing an <c>attributename</c> and <c>attibutevalue</c>. The maximum number of API products returned is 1000. You can paginate the list of API products returned using the <c>startKey</c> and <c>count</c> query parameters. If the resource has the <c>space</c> attribute set, the response may not return all resources. To learn more, read the Apigee Spaces Overview.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListApiProductsResponse> ApigeeOrganizationsApiproductsList(ApigeeOrganizationsApiproductsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apiproducts"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [
                new Param("attributename", request.Attributename),
                new Param("attributevalue", request.Attributevalue),
                new Param("count", request.Count),
                new Param("expand", request.Expand),
                new Param("space", request.Space),
                new Param("startKey", request.StartKey),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListApiProductsResponse>(),
            ApigeeOrganizationsApiproductsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Move apiproducts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiProduct"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApiproductsMoveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Moves an API product to a different space.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiProduct> ApigeeOrganizationsApiproductsMove(ApigeeOrganizationsApiproductsMoveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apiproducts/{apiproductsId}:move"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apiproductsId", request.ApiproductsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1ApiProduct>(),
            ApigeeOrganizationsApiproductsMoveError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create rateplans
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1RatePlan"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApiproductsRateplansCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a rate plan that is associated with an API product in an organization. Using rate plans, API product owners can monetize their API products by configuring one or more of the following: - Billing frequency - Initial setup fees for using an API product - Payment funding model (postpaid only) - Fixed recurring or consumption-based charges for using an API product - Revenue sharing with developer partners An API product can have multiple rate plans associated with it but *only one* rate plan can be active at any point of time. **Note: From the developer's perspective, they purchase API products not rate plans.
    /// </remarks>
    public Task<GoogleCloudApigeeV1RatePlan> ApigeeOrganizationsApiproductsRateplansCreate(ApigeeOrganizationsApiproductsRateplansCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/rateplans"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apiproductsId", request.ApiproductsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1RatePlan>(),
            ApigeeOrganizationsApiproductsRateplansCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete rateplans
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1RatePlan"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApiproductsRateplansDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a rate plan.
    /// </remarks>
    public Task<GoogleCloudApigeeV1RatePlan> ApigeeOrganizationsApiproductsRateplansDelete(ApigeeOrganizationsApiproductsRateplansDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/rateplans/{rateplansId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apiproductsId", request.ApiproductsId),
                new TemplateParam("rateplansId", request.RateplansId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1RatePlan>(),
            ApigeeOrganizationsApiproductsRateplansDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get rateplans
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1RatePlan"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApiproductsRateplansGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the details of a rate plan.
    /// </remarks>
    public Task<GoogleCloudApigeeV1RatePlan> ApigeeOrganizationsApiproductsRateplansGet(ApigeeOrganizationsApiproductsRateplansGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/rateplans/{rateplansId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apiproductsId", request.ApiproductsId),
                new TemplateParam("rateplansId", request.RateplansId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1RatePlan>(),
            ApigeeOrganizationsApiproductsRateplansGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List rateplans
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListRatePlansResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApiproductsRateplansListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all the rate plans for an API product.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListRatePlansResponse> ApigeeOrganizationsApiproductsRateplansList(ApigeeOrganizationsApiproductsRateplansListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/rateplans"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apiproductsId", request.ApiproductsId),
            ],
            [
                new Param("count", request.Count),
                new Param("expand", request.Expand),
                new Param("orderBy", request.OrderBy),
                new Param("startKey", request.StartKey),
                new Param("state", request.State),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListRatePlansResponse>(),
            ApigeeOrganizationsApiproductsRateplansListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update rateplans
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1RatePlan"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApiproductsRateplansUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing rate plan.
    /// </remarks>
    public Task<GoogleCloudApigeeV1RatePlan> ApigeeOrganizationsApiproductsRateplansUpdate(ApigeeOrganizationsApiproductsRateplansUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/rateplans/{rateplansId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apiproductsId", request.ApiproductsId),
                new TemplateParam("rateplansId", request.RateplansId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1RatePlan>(),
            ApigeeOrganizationsApiproductsRateplansUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update apiproducts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiProduct"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApiproductsUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing API product. You must include all required values, whether or not you are updating them, as well as any optional values that you are updating. The API product name required in the request URL is the internal name of the product, not the display name. While they may be the same, it depends on whether the API product was created via UI or API. View the list of API products to identify their internal names. <b>Note:</b> We recommend that you avoid making concurrent update requests for the same resource. Near-simultaneous writes to the same entity can result in conflicts and unexpected behavior. Ensure operations are sequential when modifying a single resource.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiProduct> ApigeeOrganizationsApiproductsUpdate(ApigeeOrganizationsApiproductsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apiproducts/{apiproductsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apiproductsId", request.ApiproductsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1ApiProduct>(),
            ApigeeOrganizationsApiproductsUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiProxyRevision"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an API proxy. The API proxy created will not be accessible at runtime until it is deployed to an environment. Create a new API proxy by setting the <c>name</c> query parameter to the name of the API proxy. Import an API proxy configuration bundle stored in zip format on your local machine to your organization by doing the following: * Set the <c>name</c> query parameter to the name of the API proxy. * Set the <c>action</c> query parameter to <c>import</c>. * Set the <c>Content-Type</c> header to <c>multipart/form-data</c>. * Pass as a file the name of API proxy configuration bundle stored in zip format on your local machine using the <c>file</c> form field. <b>Note</b>: To validate the API proxy configuration bundle only without importing it, set the <c>action</c> query parameter to <c>validate</c>. When importing an API proxy configuration bundle, if the API proxy does not exist, it will be created. If the API proxy exists, then a new revision is created. Invalid API proxy configurations are rejected, and a list of validation errors is returned to the client.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiProxyRevision> ApigeeOrganizationsApisCreate(ApigeeOrganizationsApisCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apis"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [
                new Param("action", request.Action),
                new Param("name", request.Name),
                new Param("space", request.Space),
                new Param("validate", request.Validate),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1ApiProxyRevision>(),
            ApigeeOrganizationsApisCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List debugsessions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListApiDebugSessionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisDebugsessionsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists debug sessions that are currently active in the given API Proxy.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListApiDebugSessionsResponse> ApigeeOrganizationsApisDebugsessionsList(ApigeeOrganizationsApisDebugsessionsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apis/{apisId}/debugsessions"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListApiDebugSessionsResponse>(),
            ApigeeOrganizationsApisDebugsessionsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiProxy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an API proxy and all associated endpoints, policies, resources, and revisions. The API proxy must be undeployed before you can delete it.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiProxy> ApigeeOrganizationsApisDelete(ApigeeOrganizationsApisDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apis/{apisId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ApiProxy>(),
            ApigeeOrganizationsApisDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListDeploymentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisDeploymentsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all deployments of an API proxy.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListDeploymentsResponse> ApigeeOrganizationsApisDeploymentsList(ApigeeOrganizationsApisDeploymentsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apis/{apisId}/deployments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListDeploymentsResponse>(),
            ApigeeOrganizationsApisDeploymentsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiProxy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets an API proxy including a list of existing revisions.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiProxy> ApigeeOrganizationsApisGet(ApigeeOrganizationsApisGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apis/{apisId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ApiProxy>(),
            ApigeeOrganizationsApisGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create keyvaluemaps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueMap"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisKeyvaluemapsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a key value map in an API proxy.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueMap> ApigeeOrganizationsApisKeyvaluemapsCreate(ApigeeOrganizationsApisKeyvaluemapsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueMap>(),
            ApigeeOrganizationsApisKeyvaluemapsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete keyvaluemaps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueMap"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisKeyvaluemapsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a key value map from an API proxy.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueMap> ApigeeOrganizationsApisKeyvaluemapsDelete(ApigeeOrganizationsApisKeyvaluemapsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueMap>(),
            ApigeeOrganizationsApisKeyvaluemapsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisKeyvaluemapsEntriesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates key value entries in a key value map scoped to an organization, environment, or API proxy. <b>Note</b>: Supported for Apigee hybrid 1.8.x and higher.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueEntry> ApigeeOrganizationsApisKeyvaluemapsEntriesCreate(ApigeeOrganizationsApisKeyvaluemapsEntriesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}/entries"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueEntry>(),
            ApigeeOrganizationsApisKeyvaluemapsEntriesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a key value entry from a key value map scoped to an organization, environment, or API proxy. <b>Notes:</b> * After you delete the key value entry, the policy consuming the entry will continue to function with its cached values for a few minutes. This is expected behavior. * Supported for Apigee hybrid 1.8.x and higher.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueEntry> ApigeeOrganizationsApisKeyvaluemapsEntriesDelete(ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
                new TemplateParam("entriesId", request.EntriesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueEntry>(),
            ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisKeyvaluemapsEntriesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the key value entry value for a key value map scoped to an organization, environment, or API proxy. <b>Note</b>: Supported for Apigee hybrid 1.8.x and higher.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueEntry> ApigeeOrganizationsApisKeyvaluemapsEntriesGet(ApigeeOrganizationsApisKeyvaluemapsEntriesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
                new TemplateParam("entriesId", request.EntriesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueEntry>(),
            ApigeeOrganizationsApisKeyvaluemapsEntriesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListKeyValueEntriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisKeyvaluemapsEntriesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists key value entries for key values maps scoped to an organization, environment, or API proxy. <b>Note</b>: Supported for Apigee hybrid 1.8.x and higher.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListKeyValueEntriesResponse> ApigeeOrganizationsApisKeyvaluemapsEntriesList(ApigeeOrganizationsApisKeyvaluemapsEntriesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}/entries"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListKeyValueEntriesResponse>(),
            ApigeeOrganizationsApisKeyvaluemapsEntriesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update key value entry scoped to an organization, environment, or API proxy for an existing key.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueEntry> ApigeeOrganizationsApisKeyvaluemapsEntriesUpdate(ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
                new TemplateParam("entriesId", request.EntriesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueEntry>(),
            ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get keyvaluemaps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueMap"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisKeyvaluemapsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the key value map scoped to an organization, environment, or API proxy.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueMap> ApigeeOrganizationsApisKeyvaluemapsGet(ApigeeOrganizationsApisKeyvaluemapsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueMap>(),
            ApigeeOrganizationsApisKeyvaluemapsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update keyvaluemaps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueMap"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisKeyvaluemapsUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the key value map scoped to an organization, environment, or API proxy.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueMap> ApigeeOrganizationsApisKeyvaluemapsUpdate(ApigeeOrganizationsApisKeyvaluemapsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueMap>(),
            ApigeeOrganizationsApisKeyvaluemapsUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListApiProxiesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the names of all API proxies in an organization. The names returned correspond to the names defined in the configuration files for each API proxy. If the resource has the <c>space</c> attribute set, the response may not return all resources. To learn more, read the Apigee Spaces Overview.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListApiProxiesResponse> ApigeeOrganizationsApisList(ApigeeOrganizationsApisListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apis"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [
                new Param("includeMetaData", request.IncludeMetaData),
                new Param("includeRevisions", request.IncludeRevisions),
                new Param("space", request.Space),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListApiProxiesResponse>(),
            ApigeeOrganizationsApisListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Move apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiProxy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisMoveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Moves an API proxy to a different space.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiProxy> ApigeeOrganizationsApisMove(ApigeeOrganizationsApisMoveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apis/{apisId}:move"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1ApiProxy>(),
            ApigeeOrganizationsApisMoveError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiProxy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing API proxy.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiProxy> ApigeeOrganizationsApisPatch(ApigeeOrganizationsApisPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apis/{apisId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1ApiProxy>(),
            ApigeeOrganizationsApisPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete revisions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiProxyRevision"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisRevisionsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an API proxy revision and all policies, resources, endpoints, and revisions associated with it. The API proxy revision must be undeployed before you can delete it.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiProxyRevision> ApigeeOrganizationsApisRevisionsDelete(ApigeeOrganizationsApisRevisionsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apis/{apisId}/revisions/{revisionsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("revisionsId", request.RevisionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ApiProxyRevision>(),
            ApigeeOrganizationsApisRevisionsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListDeploymentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisRevisionsDeploymentsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all deployments of an API proxy revision.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListDeploymentsResponse> ApigeeOrganizationsApisRevisionsDeploymentsList(ApigeeOrganizationsApisRevisionsDeploymentsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apis/{apisId}/revisions/{revisionsId}/deployments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("revisionsId", request.RevisionsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListDeploymentsResponse>(),
            ApigeeOrganizationsApisRevisionsDeploymentsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get revisions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleApiHttpBody"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisRevisionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets an API proxy revision. To download the API proxy configuration bundle for the specified revision as a zip file, set the <c>format</c> query parameter to <c>bundle</c>. If you are using curl, specify <c>-o filename.zip</c> to save the output to a file; otherwise, it displays to <c>stdout</c>. Then, develop the API proxy configuration locally and upload the updated API proxy configuration revision, as described in updateApiProxyRevision.
    /// </remarks>
    public Task<GoogleApiHttpBody> ApigeeOrganizationsApisRevisionsGet(ApigeeOrganizationsApisRevisionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apis/{apisId}/revisions/{revisionsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("revisionsId", request.RevisionsId),
            ],
            [new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleApiHttpBody>(),
            ApigeeOrganizationsApisRevisionsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update api proxy revision revisions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiProxyRevision"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing API proxy revision by uploading the API proxy configuration bundle as a zip file from your local machine. You can update only API proxy revisions that have never been deployed. After deployment, an API proxy revision becomes immutable, even if it is undeployed. Set the <c>Content-Type</c> header to either <c>multipart/form-data</c> or <c>application/octet-stream</c>.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiProxyRevision> ApigeeOrganizationsApisRevisionsUpdateApiProxyRevision(ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apis/{apisId}/revisions/{revisionsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("revisionsId", request.RevisionsId),
            ],
            [new Param("validate", request.Validate)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1ApiProxyRevision>(),
            ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create apps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroupApp"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsAppsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an app and associates it with an AppGroup. This API associates the AppGroup app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The <c>name</c> is the unique ID of the app that you can use in API calls.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroupApp> ApigeeOrganizationsAppgroupsAppsCreate(ApigeeOrganizationsAppgroupsAppsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1AppGroupApp>(),
            ApigeeOrganizationsAppgroupsAppsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete apps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroupApp"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsAppsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an AppGroup app. <b>Note</b>: The delete operation is asynchronous. The AppGroup app is deleted immediately, but its associated resources, such as app keys or access tokens, may take anywhere from a few seconds to a few minutes to be deleted.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroupApp> ApigeeOrganizationsAppgroupsAppsDelete(ApigeeOrganizationsAppgroupsAppsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
                new TemplateParam("appsId", request.AppsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1AppGroupApp>(),
            ApigeeOrganizationsAppgroupsAppsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get apps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroupApp"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsAppsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the details for an AppGroup app.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroupApp> ApigeeOrganizationsAppgroupsAppsGet(ApigeeOrganizationsAppgroupsAppsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
                new TemplateParam("appsId", request.AppsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1AppGroupApp>(),
            ApigeeOrganizationsAppgroupsAppsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete apiproducts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroupAppKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes an API product from an app's consumer key. After the API product is removed, the app cannot access the API resources defined in that API product. <b>Note</b>: The consumer key is not removed, only its association with the API product.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroupAppKey> ApigeeOrganizationsAppgroupsAppsKeysApiproductsDelete(ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys/{keysId}/apiproducts/{apiproductsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
                new TemplateParam("appsId", request.AppsId),
                new TemplateParam("keysId", request.KeysId),
                new TemplateParam("apiproductsId", request.ApiproductsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1AppGroupAppKey>(),
            ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update app group app key api product apiproducts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Approves or revokes the consumer key for an API product. After a consumer key is approved, the app can use it to access APIs. A consumer key that is revoked or pending cannot be used to access an API. Any access tokens associated with a revoked consumer key will remain active. However, Apigee checks the status of the consumer key and if set to <c>revoked</c> will not allow access to the API.
    /// </remarks>
    public Task<object> ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProduct(ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys/{keysId}/apiproducts/{apiproductsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
                new TemplateParam("appsId", request.AppsId),
                new TemplateParam("keysId", request.KeysId),
                new TemplateParam("apiproductsId", request.ApiproductsId),
            ],
            [new Param("action", request.Action)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create keys
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroupAppKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsAppsKeysCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a custom consumer key and secret for a AppGroup app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. <b>Note</b>: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateAppGroupAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteAppGroupAppKey API.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroupAppKey> ApigeeOrganizationsAppgroupsAppsKeysCreate(ApigeeOrganizationsAppgroupsAppsKeysCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
                new TemplateParam("appsId", request.AppsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1AppGroupAppKey>(),
            ApigeeOrganizationsAppgroupsAppsKeysCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete keys
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroupAppKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsAppsKeysDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an app's consumer key and removes all API products associated with the app. After the consumer key is deleted, it cannot be used to access any APIs.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroupAppKey> ApigeeOrganizationsAppgroupsAppsKeysDelete(ApigeeOrganizationsAppgroupsAppsKeysDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys/{keysId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
                new TemplateParam("appsId", request.AppsId),
                new TemplateParam("keysId", request.KeysId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1AppGroupAppKey>(),
            ApigeeOrganizationsAppgroupsAppsKeysDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get keys
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroupAppKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsAppsKeysGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets details for a consumer key for a AppGroup app, including the key and secret value, associated API products, and other information.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroupAppKey> ApigeeOrganizationsAppgroupsAppsKeysGet(ApigeeOrganizationsAppgroupsAppsKeysGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys/{keysId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
                new TemplateParam("appsId", request.AppsId),
                new TemplateParam("keysId", request.KeysId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1AppGroupAppKey>(),
            ApigeeOrganizationsAppgroupsAppsKeysGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update app group app key keys
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroupAppKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds an API product to an AppGroupAppKey, enabling the app that holds the key to access the API resources bundled in the API product. In addition, you can add attributes and scopes to the AppGroupAppKey. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively. You can use the same key to access all API products associated with the app.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroupAppKey> ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKey(ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys/{keysId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
                new TemplateParam("appsId", request.AppsId),
                new TemplateParam("keysId", request.KeysId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1AppGroupAppKey>(),
            ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List apps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListAppGroupAppsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsAppsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all apps created by an AppGroup in an Apigee organization. Optionally, you can request an expanded view of the AppGroup apps. Lists all AppGroupApps in an AppGroup. A maximum of 1000 AppGroup apps are returned in the response if PageSize is not specified, or if the PageSize is greater than 1000.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListAppGroupAppsResponse> ApigeeOrganizationsAppgroupsAppsList(ApigeeOrganizationsAppgroupsAppsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListAppGroupAppsResponse>(),
            ApigeeOrganizationsAppgroupsAppsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update apps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroupApp"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsAppsUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the details for an AppGroup app. In addition, you can add an API product to an AppGroup app and automatically generate an API key for the app to use when calling APIs in the API product. If you want to use an existing API key for the API product, add the API product to the API key using the UpdateAppGroupAppKey API. Using this API, you cannot update the app name, as it is the primary key used to identify the app and cannot be changed. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively. <b>Note:</b> We recommend that you avoid making concurrent update requests for the same resource. Near-simultaneous writes to the same entity can result in conflicts and unexpected behavior. Ensure operations are sequential when modifying a single resource.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroupApp> ApigeeOrganizationsAppgroupsAppsUpdate(ApigeeOrganizationsAppgroupsAppsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
                new TemplateParam("appsId", request.AppsId),
            ],
            [new Param("action", request.Action)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1AppGroupApp>(),
            ApigeeOrganizationsAppgroupsAppsUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Adjust balance
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroupBalance"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsBalanceAdjustError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adjust the prepaid balance for the AppGroup. This API will be used in scenarios where the AppGroup has been under-charged or over-charged.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroupBalance> ApigeeOrganizationsAppgroupsBalanceAdjust(ApigeeOrganizationsAppgroupsBalanceAdjustRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/balance:adjust"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1AppGroupBalance>(),
            ApigeeOrganizationsAppgroupsBalanceAdjustError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Credit balance
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroupBalance"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsBalanceCreditError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Credits the account balance for the AppGroup.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroupBalance> ApigeeOrganizationsAppgroupsBalanceCredit(ApigeeOrganizationsAppgroupsBalanceCreditRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/balance:credit"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1AppGroupBalance>(),
            ApigeeOrganizationsAppgroupsBalanceCreditError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create appgroups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an AppGroup. Once created, user can register apps under the AppGroup to obtain secret key and password. At creation time, the AppGroup's state is set as <c>active</c>.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroup> ApigeeOrganizationsAppgroupsCreate(ApigeeOrganizationsAppgroupsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1AppGroup>(),
            ApigeeOrganizationsAppgroupsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete appgroups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an AppGroup. All app and API keys associations with the AppGroup are also removed. <b>Warning</b>: This API will permanently delete the AppGroup and related artifacts. <b>Note</b>: The delete operation is asynchronous. The AppGroup is deleted immediately, but its associated resources, such as apps and API keys, may take anywhere from a few seconds to a few minutes to be deleted.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroup> ApigeeOrganizationsAppgroupsDelete(ApigeeOrganizationsAppgroupsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1AppGroup>(),
            ApigeeOrganizationsAppgroupsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get appgroups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the AppGroup details for the provided AppGroup name in the request URI.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroup> ApigeeOrganizationsAppgroupsGet(ApigeeOrganizationsAppgroupsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1AppGroup>(),
            ApigeeOrganizationsAppgroupsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get balance appgroups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroupBalance"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsGetBalanceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the account balance for the AppGroup.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroupBalance> ApigeeOrganizationsAppgroupsGetBalance(ApigeeOrganizationsAppgroupsGetBalanceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/balance"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1AppGroupBalance>(),
            ApigeeOrganizationsAppgroupsGetBalanceError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get monetization config appgroups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroupMonetizationConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsGetMonetizationConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the monetization configuration for the AppGroup.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroupMonetizationConfig> ApigeeOrganizationsAppgroupsGetMonetizationConfig(ApigeeOrganizationsAppgroupsGetMonetizationConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/monetizationConfig"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1AppGroupMonetizationConfig>(),
            ApigeeOrganizationsAppgroupsGetMonetizationConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List appgroups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListAppGroupsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all AppGroups in an organization. A maximum of 1000 AppGroups are returned in the response if PageSize is not specified, or if the PageSize is greater than 1000.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListAppGroupsResponse> ApigeeOrganizationsAppgroupsList(ApigeeOrganizationsAppgroupsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListAppGroupsResponse>(),
            ApigeeOrganizationsAppgroupsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create subscriptions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroupSubscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsSubscriptionsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a subscription to an API product.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroupSubscription> ApigeeOrganizationsAppgroupsSubscriptionsCreate(ApigeeOrganizationsAppgroupsSubscriptionsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/subscriptions"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1AppGroupSubscription>(),
            ApigeeOrganizationsAppgroupsSubscriptionsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Expire subscriptions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroupSubscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsSubscriptionsExpireError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Expires an API product subscription immediately.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroupSubscription> ApigeeOrganizationsAppgroupsSubscriptionsExpire(ApigeeOrganizationsAppgroupsSubscriptionsExpireRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/subscriptions/{subscriptionsId}:expire"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
                new TemplateParam("subscriptionsId", request.SubscriptionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1AppGroupSubscription>(),
            ApigeeOrganizationsAppgroupsSubscriptionsExpireError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get subscriptions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroupSubscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsSubscriptionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get an api product subscription for an appgroup.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroupSubscription> ApigeeOrganizationsAppgroupsSubscriptionsGet(ApigeeOrganizationsAppgroupsSubscriptionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/subscriptions/{subscriptionsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
                new TemplateParam("subscriptionsId", request.SubscriptionsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1AppGroupSubscription>(),
            ApigeeOrganizationsAppgroupsSubscriptionsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List subscriptions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsSubscriptionsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all api product subscriptions for an appgroup.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse> ApigeeOrganizationsAppgroupsSubscriptionsList(ApigeeOrganizationsAppgroupsSubscriptionsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/subscriptions"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse>(),
            ApigeeOrganizationsAppgroupsSubscriptionsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update appgroups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an AppGroup. This API replaces the existing AppGroup details with those specified in the request. Include or exclude any existing details that you want to retain or delete, respectively. Note that the state of the AppGroup should be updated using <c>action</c>, and not via AppGroup. <b>Note:</b> We recommend that you avoid making concurrent update requests for the same resource. Near-simultaneous writes to the same entity can result in conflicts and unexpected behavior. Ensure operations are sequential when modifying a single resource.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroup> ApigeeOrganizationsAppgroupsUpdate(ApigeeOrganizationsAppgroupsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
            ],
            [new Param("action", request.Action)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1AppGroup>(),
            ApigeeOrganizationsAppgroupsUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update monetization config appgroups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AppGroupMonetizationConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppgroupsUpdateMonetizationConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the monetization configuration for the AppGroup. <b>Note:</b> We recommend that you avoid making concurrent update requests for the same resource. Near-simultaneous writes to the same entity can result in conflicts and unexpected behavior. Ensure operations are sequential when modifying a single resource.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AppGroupMonetizationConfig> ApigeeOrganizationsAppgroupsUpdateMonetizationConfig(ApigeeOrganizationsAppgroupsUpdateMonetizationConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/monetizationConfig"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appgroupsId", request.AppgroupsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1AppGroupMonetizationConfig>(),
            ApigeeOrganizationsAppgroupsUpdateMonetizationConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get apps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1App"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the app profile for the specified app ID.
    /// </remarks>
    public Task<GoogleCloudApigeeV1App> ApigeeOrganizationsAppsGet(ApigeeOrganizationsAppsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apps/{appsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("appsId", request.AppsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1App>(),
            ApigeeOrganizationsAppsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List apps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListAppsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsAppsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists IDs of apps within an organization that have the specified app status (approved or revoked) or are of the specified app type (developer or company).
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListAppsResponse> ApigeeOrganizationsAppsList(ApigeeOrganizationsAppsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/apps"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [
                new Param("apiProduct", request.ApiProduct),
                new Param("apptype", request.Apptype),
                new Param("expand", request.Expand),
                new Param("filter", request.Filter),
                new Param("ids", request.Ids),
                new Param("includeCred", request.IncludeCred),
                new Param("keyStatus", request.KeyStatus),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("rows", request.Rows),
                new Param("startKey", request.StartKey),
                new Param("status", request.Status),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListAppsResponse>(),
            ApigeeOrganizationsAppsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an Apigee organization. See Create an Apigee organization.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsCreate(ApigeeOrganizationsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations"),
            [],
            [new Param("parent", request.Parent)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create datacollectors
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DataCollector"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDatacollectorsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new data collector.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DataCollector> ApigeeOrganizationsDatacollectorsCreate(ApigeeOrganizationsDatacollectorsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/datacollectors"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("dataCollectorId", request.DataCollectorId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1DataCollector>(),
            ApigeeOrganizationsDatacollectorsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete datacollectors
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDatacollectorsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a data collector.
    /// </remarks>
    public Task<object> ApigeeOrganizationsDatacollectorsDelete(ApigeeOrganizationsDatacollectorsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/datacollectors/{datacollectorsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("datacollectorsId", request.DatacollectorsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApigeeOrganizationsDatacollectorsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get datacollectors
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DataCollector"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDatacollectorsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a data collector.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DataCollector> ApigeeOrganizationsDatacollectorsGet(ApigeeOrganizationsDatacollectorsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/datacollectors/{datacollectorsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("datacollectorsId", request.DatacollectorsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1DataCollector>(),
            ApigeeOrganizationsDatacollectorsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List datacollectors
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListDataCollectorsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDatacollectorsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all data collectors.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListDataCollectorsResponse> ApigeeOrganizationsDatacollectorsList(ApigeeOrganizationsDatacollectorsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/datacollectors"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListDataCollectorsResponse>(),
            ApigeeOrganizationsDatacollectorsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch datacollectors
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DataCollector"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDatacollectorsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a data collector.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DataCollector> ApigeeOrganizationsDatacollectorsPatch(ApigeeOrganizationsDatacollectorsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/datacollectors/{datacollectorsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("datacollectorsId", request.DatacollectorsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1DataCollector>(),
            ApigeeOrganizationsDatacollectorsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an Apigee organization. For organizations with BillingType EVALUATION, an immediate deletion is performed. For paid organizations (Subscription or Pay-as-you-go), a soft-deletion is performed by default. The organization can be restored within the soft-deletion period, which is specified using the <c>retention</c> field in the request or by filing a support ticket with Apigee. During the data retention period specified in the request, the Apigee organization cannot be recreated in the same Google Cloud project. <b>IMPORTANT: The default data retention setting for this operation is 7 days. To permanently delete the organization in 24 hours, set the retention parameter to <c>MINIMUM</c>.</b>
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsDelete(ApigeeOrganizationsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("retention", request.Retention)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListDeploymentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDeploymentsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all deployments of API proxies or shared flows.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListDeploymentsResponse> ApigeeOrganizationsDeploymentsList(ApigeeOrganizationsDeploymentsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/deployments"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("sharedFlows", request.SharedFlows)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListDeploymentsResponse>(),
            ApigeeOrganizationsDeploymentsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Attributes apps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Attributes"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsAttributesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates attributes for a developer app. This API replaces the current attributes with those specified in the request.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Attributes> ApigeeOrganizationsDevelopersAppsAttributes(ApigeeOrganizationsDevelopersAppsAttributesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/attributes"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("appsId", request.AppsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Attributes>(),
            ApigeeOrganizationsDevelopersAppsAttributesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Attribute"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsAttributesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a developer app attribute.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Attribute> ApigeeOrganizationsDevelopersAppsAttributesDelete(ApigeeOrganizationsDevelopersAppsAttributesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/attributes/{attributesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("appsId", request.AppsId),
                new TemplateParam("attributesId", request.AttributesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Attribute>(),
            ApigeeOrganizationsDevelopersAppsAttributesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Attribute"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsAttributesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a developer app attribute.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Attribute> ApigeeOrganizationsDevelopersAppsAttributesGet(ApigeeOrganizationsDevelopersAppsAttributesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/attributes/{attributesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("appsId", request.AppsId),
                new TemplateParam("attributesId", request.AttributesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Attribute>(),
            ApigeeOrganizationsDevelopersAppsAttributesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Attributes"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsAttributesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all developer app attributes.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Attributes> ApigeeOrganizationsDevelopersAppsAttributesList(ApigeeOrganizationsDevelopersAppsAttributesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/attributes"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("appsId", request.AppsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Attributes>(),
            ApigeeOrganizationsDevelopersAppsAttributesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update developer app attribute attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Attribute"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a developer app attribute. <b>Note</b>: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an <c>ExpiresIn</c> element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Attribute> ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttribute(ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/attributes/{attributesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("appsId", request.AppsId),
                new TemplateParam("attributesId", request.AttributesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Attribute>(),
            ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create apps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperApp"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an app associated with a developer. This API associates the developer app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The <c>name</c> is the unique ID of the app that you can use in API calls. The <c>DisplayName</c> (set as an attribute) appears in the UI. If you don't set the <c>DisplayName</c> attribute, the <c>name</c> appears in the UI.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperApp> ApigeeOrganizationsDevelopersAppsCreate(ApigeeOrganizationsDevelopersAppsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/apps"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperApp>(),
            ApigeeOrganizationsDevelopersAppsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete apps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperApp"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a developer app. <b>Note</b>: The delete operation is asynchronous. The developer app is deleted immediately, but its associated resources, such as app keys or access tokens, may take anywhere from a few seconds to a few minutes to be deleted.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperApp> ApigeeOrganizationsDevelopersAppsDelete(ApigeeOrganizationsDevelopersAppsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("appsId", request.AppsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperApp>(),
            ApigeeOrganizationsDevelopersAppsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Generate key pair or update developer app status apps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperApp"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Manages access to a developer app by enabling you to: * Approve or revoke a developer app * Generate a new consumer key and secret for a developer app To approve or revoke a developer app, set the <c>action</c> query parameter to <c>approve</c> or <c>revoke</c>, respectively, and the <c>Content-Type</c> header to <c>application/octet-stream</c>. If a developer app is revoked, none of its API keys are valid for API calls even though the keys are still approved. If successful, the API call returns the following HTTP status code: <c>204 No Content</c> To generate a new consumer key and secret for a developer app, pass the new key/secret details. Rather than replace an existing key, this API generates a new key. In this case, multiple key pairs may be associated with a single developer app. Each key pair has an independent status (<c>approve</c> or <c>revoke</c>) and expiration time. Any approved, non-expired key can be used in an API call. For example, if you're using API key rotation, you can generate new keys with expiration times that overlap keys that are going to expire. You might also generate a new consumer key/secret if the security of the original key/secret is compromised. The <c>keyExpiresIn</c> property defines the expiration time for the API key in milliseconds. If you don't set this property or set it to <c>-1</c>, the API key never expires. <b>Notes</b>: * When generating a new key/secret, this API replaces the existing attributes, notes, and callback URLs with those specified in the request. Include or exclude any existing information that you want to retain or delete, respectively. * To migrate existing consumer keys and secrets to hybrid from another system, see the CreateDeveloperAppKey API.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperApp> ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatus(ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("appsId", request.AppsId),
            ],
            [new Param("action", request.Action)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperApp>(),
            ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get apps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperApp"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the details for a developer app.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperApp> ApigeeOrganizationsDevelopersAppsGet(ApigeeOrganizationsDevelopersAppsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("appsId", request.AppsId),
            ],
            [new Param("entity", request.Entity), new Param("query", request.Query)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperApp>(),
            ApigeeOrganizationsDevelopersAppsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete apiproducts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperAppKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes an API product from an app's consumer key. After the API product is removed, the app cannot access the API resources defined in that API product. <b>Note</b>: The consumer key is not removed, only its association with the API product.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperAppKey> ApigeeOrganizationsDevelopersAppsKeysApiproductsDelete(ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}/apiproducts/{apiproductsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("appsId", request.AppsId),
                new TemplateParam("keysId", request.KeysId),
                new TemplateParam("apiproductsId", request.ApiproductsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperAppKey>(),
            ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update developer app key api product apiproducts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Approves or revokes the consumer key for an API product. After a consumer key is approved, the app can use it to access APIs. A consumer key that is revoked or pending cannot be used to access an API. Any access tokens associated with a revoked consumer key will remain active. However, Apigee checks the status of the consumer key and if set to <c>revoked</c> will not allow access to the API.
    /// </remarks>
    public Task<object> ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProduct(ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}/apiproducts/{apiproductsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("appsId", request.AppsId),
                new TemplateParam("keysId", request.KeysId),
                new TemplateParam("apiproductsId", request.ApiproductsId),
            ],
            [new Param("action", request.Action)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create keys
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperAppKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsKeysCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. <b>Note</b>: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API. <b>Note</b>: All keys start out with status=approved, even if status=revoked is passed when the key is created. To revoke a key, use the UpdateDeveloperAppKey API.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperAppKey> ApigeeOrganizationsDevelopersAppsKeysCreate(ApigeeOrganizationsDevelopersAppsKeysCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("appsId", request.AppsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperAppKey>(),
            ApigeeOrganizationsDevelopersAppsKeysCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create create
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperAppKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsKeysCreateCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. <b>Note</b>: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API. <b>Note</b>: All keys start out with status=approved, even if status=revoked is passed when the key is created. To revoke a key, use the UpdateDeveloperAppKey API.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperAppKey> ApigeeOrganizationsDevelopersAppsKeysCreateCreate(ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/create"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("appsId", request.AppsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperAppKey>(),
            ApigeeOrganizationsDevelopersAppsKeysCreateCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete keys
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperAppKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsKeysDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an app's consumer key and removes all API products associated with the app. After the consumer key is deleted, it cannot be used to access any APIs. <b>Note</b>: After you delete a consumer key, you may want to: 1. Create a new consumer key and secret for the developer app using the CreateDeveloperAppKey API, and subsequently add an API product to the key using the UpdateDeveloperAppKey API. 2. Delete the developer app, if it is no longer required.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperAppKey> ApigeeOrganizationsDevelopersAppsKeysDelete(ApigeeOrganizationsDevelopersAppsKeysDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("appsId", request.AppsId),
                new TemplateParam("keysId", request.KeysId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperAppKey>(),
            ApigeeOrganizationsDevelopersAppsKeysDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get keys
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperAppKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsKeysGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets details for a consumer key for a developer app, including the key and secret value, associated API products, and other information.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperAppKey> ApigeeOrganizationsDevelopersAppsKeysGet(ApigeeOrganizationsDevelopersAppsKeysGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("appsId", request.AppsId),
                new TemplateParam("keysId", request.KeysId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperAppKey>(),
            ApigeeOrganizationsDevelopersAppsKeysGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace developer app key keys
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperAppKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the scope of an app. This API replaces the existing scopes with those specified in the request. Include or exclude any existing scopes that you want to retain or delete, respectively. The specified scopes must already be defined for the API products associated with the app. This API sets the <c>scopes</c> element under the <c>apiProducts</c> element in the attributes of the app.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperAppKey> ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKey(ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("appsId", request.AppsId),
                new TemplateParam("keysId", request.KeysId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperAppKey>(),
            ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update developer app key keys
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperAppKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds an API product to a developer app key, enabling the app that holds the key to access the API resources bundled in the API product. In addition, you can add attributes and scopes associated with the API product to the developer app key. The status of the key can be updated via "action" Query Parameter. None of the other fields can be updated via this API. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively. None of the other fields can be updated. You can use the same key to access all API products associated with the app.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperAppKey> ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKey(ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("appsId", request.AppsId),
                new TemplateParam("keysId", request.KeysId),
            ],
            [new Param("action", request.Action)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperAppKey>(),
            ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List apps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListDeveloperAppsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all apps created by a developer in an Apigee organization. Optionally, you can request an expanded view of the developer apps. A maximum of 100 developer apps are returned per API call. You can paginate the list of deveoper apps returned using the <c>startKey</c> and <c>count</c> query parameters.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListDeveloperAppsResponse> ApigeeOrganizationsDevelopersAppsList(ApigeeOrganizationsDevelopersAppsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/apps"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
            ],
            [
                new Param("count", request.Count),
                new Param("expand", request.Expand),
                new Param("shallowExpand", request.ShallowExpand),
                new Param("startKey", request.StartKey),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListDeveloperAppsResponse>(),
            ApigeeOrganizationsDevelopersAppsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update apps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperApp"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAppsUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the details for a developer app. In addition, you can add an API product to a developer app and automatically generate an API key for the app to use when calling APIs in the API product. If you want to use an existing API key for the API product, add the API product to the API key using the UpdateDeveloperAppKey API. Using this API, you cannot update the following: * App name as it is the primary key used to identify the app and cannot be changed. * Scopes associated with the app. Instead, use the ReplaceDeveloperAppKey API. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively. <b>Note:</b> We recommend that you avoid making concurrent update requests for the same resource. Near-simultaneous writes to the same entity can result in conflicts and unexpected behavior. Ensure operations are sequential when modifying a single resource.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperApp> ApigeeOrganizationsDevelopersAppsUpdate(ApigeeOrganizationsDevelopersAppsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("appsId", request.AppsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperApp>(),
            ApigeeOrganizationsDevelopersAppsUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Attributes developers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Attributes"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAttributesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates developer attributes. This API replaces the existing attributes with those specified in the request. Add new attributes, and include or exclude any existing attributes that you want to retain or remove, respectively. The custom attribute limit is 18. <b>Note</b>: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an <c>ExpiresIn</c> element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Attributes> ApigeeOrganizationsDevelopersAttributes(ApigeeOrganizationsDevelopersAttributesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/attributes"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Attributes>(),
            ApigeeOrganizationsDevelopersAttributesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Attribute"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAttributesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a developer attribute.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Attribute> ApigeeOrganizationsDevelopersAttributesDelete(ApigeeOrganizationsDevelopersAttributesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/attributes/{attributesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("attributesId", request.AttributesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Attribute>(),
            ApigeeOrganizationsDevelopersAttributesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Attribute"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAttributesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the value of the specified developer attribute.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Attribute> ApigeeOrganizationsDevelopersAttributesGet(ApigeeOrganizationsDevelopersAttributesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/attributes/{attributesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("attributesId", request.AttributesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Attribute>(),
            ApigeeOrganizationsDevelopersAttributesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Attributes"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAttributesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all developer attributes.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Attributes> ApigeeOrganizationsDevelopersAttributesList(ApigeeOrganizationsDevelopersAttributesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/attributes"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Attributes>(),
            ApigeeOrganizationsDevelopersAttributesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update developer attribute attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Attribute"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a developer attribute. <b>Note</b>: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an <c>ExpiresIn</c> element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Attribute> ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttribute(ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/attributes/{attributesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("attributesId", request.AttributesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Attribute>(),
            ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Adjust balance
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperBalance"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersBalanceAdjustError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adjust the prepaid balance for the developer. This API will be used in scenarios where the developer has been under-charged or over-charged.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperBalance> ApigeeOrganizationsDevelopersBalanceAdjust(ApigeeOrganizationsDevelopersBalanceAdjustRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/balance:adjust"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperBalance>(),
            ApigeeOrganizationsDevelopersBalanceAdjustError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Credit balance
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperBalance"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersBalanceCreditError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Credits the account balance for the developer.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperBalance> ApigeeOrganizationsDevelopersBalanceCredit(ApigeeOrganizationsDevelopersBalanceCreditRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/balance:credit"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperBalance>(),
            ApigeeOrganizationsDevelopersBalanceCreditError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create developers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Developer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a developer. Once created, the developer can register an app and obtain an API key. At creation time, a developer is set as <c>active</c>. To change the developer status, use the SetDeveloperStatus API.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Developer> ApigeeOrganizationsDevelopersCreate(ApigeeOrganizationsDevelopersCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Developer>(),
            ApigeeOrganizationsDevelopersCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete developers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Developer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a developer. All apps and API keys associated with the developer are also removed. <b>Warning</b>: This API will permanently delete the developer and related artifacts. To avoid permanently deleting developers and their artifacts, set the developer status to <c>inactive</c> using the SetDeveloperStatus API. <b>Note</b>: The delete operation is asynchronous. The developer is deleted immediately, but its associated resources, such as apps and API keys, may take anywhere from a few seconds to a few minutes to be deleted.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Developer> ApigeeOrganizationsDevelopersDelete(ApigeeOrganizationsDevelopersDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Developer>(),
            ApigeeOrganizationsDevelopersDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get developers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Developer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the developer details, including the developer's name, email address, apps, and other information. <b>Note</b>: The response includes only the first 100 developer apps.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Developer> ApigeeOrganizationsDevelopersGet(ApigeeOrganizationsDevelopersGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
            ],
            [new Param("action", request.Action)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Developer>(),
            ApigeeOrganizationsDevelopersGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get balance developers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperBalance"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersGetBalanceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the account balance for the developer.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperBalance> ApigeeOrganizationsDevelopersGetBalance(ApigeeOrganizationsDevelopersGetBalanceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/balance"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperBalance>(),
            ApigeeOrganizationsDevelopersGetBalanceError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get monetization config developers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperMonetizationConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersGetMonetizationConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the monetization configuration for the developer.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperMonetizationConfig> ApigeeOrganizationsDevelopersGetMonetizationConfig(ApigeeOrganizationsDevelopersGetMonetizationConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/monetizationConfig"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperMonetizationConfig>(),
            ApigeeOrganizationsDevelopersGetMonetizationConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List developers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListOfDevelopersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all developers in an organization by email address. By default, the response does not include company developers. Set the <c>includeCompany</c> query parameter to <c>true</c> to include company developers. <b>Note</b>: A maximum of 1000 developers are returned in the response. You paginate the list of developers returned using the <c>startKey</c> and <c>count</c> query parameters.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListOfDevelopersResponse> ApigeeOrganizationsDevelopersList(ApigeeOrganizationsDevelopersListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [
                new Param("app", request.App),
                new Param("count", request.Count),
                new Param("expand", request.Expand),
                new Param("ids", request.Ids),
                new Param("includeCompany", request.IncludeCompany),
                new Param("startKey", request.StartKey),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListOfDevelopersResponse>(),
            ApigeeOrganizationsDevelopersListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set developer status developers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersSetDeveloperStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the status of a developer. A developer is <c>active</c> by default. If you set a developer's status to <c>inactive</c>, the API keys assigned to the developer apps are no longer valid even though the API keys are set to <c>approved</c>. Inactive developers can still sign in to the developer portal and create apps; however, any new API keys generated during app creation won't work. To set the status of a developer, set the <c>action</c> query parameter to <c>active</c> or <c>inactive</c>, and the <c>Content-Type</c> header to <c>application/octet-stream</c>. If successful, the API call returns the following HTTP status code: <c>204 No Content</c>
    /// </remarks>
    public Task<object> ApigeeOrganizationsDevelopersSetDeveloperStatus(ApigeeOrganizationsDevelopersSetDeveloperStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
            ],
            [new Param("action", request.Action)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApigeeOrganizationsDevelopersSetDeveloperStatusError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create subscriptions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperSubscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersSubscriptionsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a subscription to an API product.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperSubscription> ApigeeOrganizationsDevelopersSubscriptionsCreate(ApigeeOrganizationsDevelopersSubscriptionsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/subscriptions"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperSubscription>(),
            ApigeeOrganizationsDevelopersSubscriptionsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Expire subscriptions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperSubscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersSubscriptionsExpireError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Expires an API product subscription immediately.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperSubscription> ApigeeOrganizationsDevelopersSubscriptionsExpire(ApigeeOrganizationsDevelopersSubscriptionsExpireRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/developers/{developersId}/subscriptions/{subscriptionsId}:expire"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("subscriptionsId", request.SubscriptionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperSubscription>(),
            ApigeeOrganizationsDevelopersSubscriptionsExpireError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get subscriptions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperSubscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersSubscriptionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets details for an API product subscription.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperSubscription> ApigeeOrganizationsDevelopersSubscriptionsGet(ApigeeOrganizationsDevelopersSubscriptionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/developers/{developersId}/subscriptions/{subscriptionsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
                new TemplateParam("subscriptionsId", request.SubscriptionsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperSubscription>(),
            ApigeeOrganizationsDevelopersSubscriptionsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List subscriptions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersSubscriptionsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all API product subscriptions for a developer.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse> ApigeeOrganizationsDevelopersSubscriptionsList(ApigeeOrganizationsDevelopersSubscriptionsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/subscriptions"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
            ],
            [new Param("count", request.Count), new Param("startKey", request.StartKey)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse>(),
            ApigeeOrganizationsDevelopersSubscriptionsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update developers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Developer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a developer. This API replaces the existing developer details with those specified in the request. Include or exclude any existing details that you want to retain or delete, respectively. The custom attribute limit is 18. <b>Note</b>: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an <c>ExpiresIn</c> element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds. <b>Note:</b> We recommend that you avoid making concurrent update requests for the same resource. Near-simultaneous writes to the same entity can result in conflicts and unexpected behavior. Ensure operations are sequential when modifying a single resource.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Developer> ApigeeOrganizationsDevelopersUpdate(ApigeeOrganizationsDevelopersUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Developer>(),
            ApigeeOrganizationsDevelopersUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update monetization config developers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeveloperMonetizationConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDevelopersUpdateMonetizationConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the monetization configuration for the developer.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeveloperMonetizationConfig> ApigeeOrganizationsDevelopersUpdateMonetizationConfig(ApigeeOrganizationsDevelopersUpdateMonetizationConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/developers/{developersId}/monetizationConfig"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("developersId", request.DevelopersId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1DeveloperMonetizationConfig>(),
            ApigeeOrganizationsDevelopersUpdateMonetizationConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create dnsZones
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDnsZonesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new DNS zone.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsDnsZonesCreate(ApigeeOrganizationsDnsZonesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/dnsZones"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("dnsZoneId", request.DnsZoneId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsDnsZonesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete dnsZones
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDnsZonesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a previously created DNS zone.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsDnsZonesDelete(ApigeeOrganizationsDnsZonesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/dnsZones/{dnsZonesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("dnsZonesId", request.DnsZonesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsDnsZonesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get dnsZones
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DnsZone"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDnsZonesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches the representation of an existing DNS zone.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DnsZone> ApigeeOrganizationsDnsZonesGet(ApigeeOrganizationsDnsZonesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/dnsZones/{dnsZonesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("dnsZonesId", request.DnsZonesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1DnsZone>(),
            ApigeeOrganizationsDnsZonesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List dnsZones
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListDnsZonesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsDnsZonesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enumerates DNS zones that have been created but not yet deleted.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListDnsZonesResponse> ApigeeOrganizationsDnsZonesList(ApigeeOrganizationsDnsZonesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/dnsZones"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListDnsZonesResponse>(),
            ApigeeOrganizationsDnsZonesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create endpointAttachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEndpointAttachmentsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an endpoint attachment. <b>Note:</b> Not supported for Apigee hybrid.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsEndpointAttachmentsCreate(ApigeeOrganizationsEndpointAttachmentsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/endpointAttachments"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("endpointAttachmentId", request.EndpointAttachmentId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsEndpointAttachmentsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete endpointAttachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEndpointAttachmentsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an endpoint attachment.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsEndpointAttachmentsDelete(ApigeeOrganizationsEndpointAttachmentsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/endpointAttachments/{endpointAttachmentsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("endpointAttachmentsId", request.EndpointAttachmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsEndpointAttachmentsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get endpointAttachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1EndpointAttachment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEndpointAttachmentsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the endpoint attachment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1EndpointAttachment> ApigeeOrganizationsEndpointAttachmentsGet(ApigeeOrganizationsEndpointAttachmentsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/endpointAttachments/{endpointAttachmentsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("endpointAttachmentsId", request.EndpointAttachmentsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1EndpointAttachment>(),
            ApigeeOrganizationsEndpointAttachmentsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List endpointAttachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListEndpointAttachmentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEndpointAttachmentsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the endpoint attachments in an organization.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListEndpointAttachmentsResponse> ApigeeOrganizationsEndpointAttachmentsList(ApigeeOrganizationsEndpointAttachmentsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/endpointAttachments"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListEndpointAttachmentsResponse>(),
            ApigeeOrganizationsEndpointAttachmentsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create attachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvgroupsAttachmentsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new attachment of an environment to an environment group.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsEnvgroupsAttachmentsCreate(ApigeeOrganizationsEnvgroupsAttachmentsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/envgroups/{envgroupsId}/attachments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("envgroupsId", request.EnvgroupsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsEnvgroupsAttachmentsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete attachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvgroupsAttachmentsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an environment group attachment.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsEnvgroupsAttachmentsDelete(ApigeeOrganizationsEnvgroupsAttachmentsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/envgroups/{envgroupsId}/attachments/{attachmentsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("envgroupsId", request.EnvgroupsId),
                new TemplateParam("attachmentsId", request.AttachmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsEnvgroupsAttachmentsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get attachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1EnvironmentGroupAttachment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvgroupsAttachmentsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets an environment group attachment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1EnvironmentGroupAttachment> ApigeeOrganizationsEnvgroupsAttachmentsGet(ApigeeOrganizationsEnvgroupsAttachmentsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/envgroups/{envgroupsId}/attachments/{attachmentsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("envgroupsId", request.EnvgroupsId),
                new TemplateParam("attachmentsId", request.AttachmentsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1EnvironmentGroupAttachment>(),
            ApigeeOrganizationsEnvgroupsAttachmentsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List attachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvgroupsAttachmentsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all attachments of an environment group.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse> ApigeeOrganizationsEnvgroupsAttachmentsList(ApigeeOrganizationsEnvgroupsAttachmentsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/envgroups/{envgroupsId}/attachments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("envgroupsId", request.EnvgroupsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse>(),
            ApigeeOrganizationsEnvgroupsAttachmentsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create envgroups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvgroupsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new environment group.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsEnvgroupsCreate(ApigeeOrganizationsEnvgroupsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/envgroups"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("name", request.Name)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsEnvgroupsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete envgroups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvgroupsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an environment group.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsEnvgroupsDelete(ApigeeOrganizationsEnvgroupsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/envgroups/{envgroupsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("envgroupsId", request.EnvgroupsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsEnvgroupsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get envgroups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1EnvironmentGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvgroupsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets an environment group.
    /// </remarks>
    public Task<GoogleCloudApigeeV1EnvironmentGroup> ApigeeOrganizationsEnvgroupsGet(ApigeeOrganizationsEnvgroupsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/envgroups/{envgroupsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("envgroupsId", request.EnvgroupsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1EnvironmentGroup>(),
            ApigeeOrganizationsEnvgroupsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get deployed ingress config envgroups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1EnvironmentGroupConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the deployed ingress configuration for an environment group.
    /// </remarks>
    public Task<GoogleCloudApigeeV1EnvironmentGroupConfig> ApigeeOrganizationsEnvgroupsGetDeployedIngressConfig(ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/envgroups/{envgroupsId}/deployedIngressConfig"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("envgroupsId", request.EnvgroupsId),
            ],
            [new Param("view", request.View)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1EnvironmentGroupConfig>(),
            ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List envgroups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListEnvironmentGroupsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvgroupsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all environment groups.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListEnvironmentGroupsResponse> ApigeeOrganizationsEnvgroupsList(ApigeeOrganizationsEnvgroupsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/envgroups"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListEnvironmentGroupsResponse>(),
            ApigeeOrganizationsEnvgroupsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch envgroups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvgroupsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an environment group.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsEnvgroupsPatch(ApigeeOrganizationsEnvgroupsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/envgroups/{envgroupsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("envgroupsId", request.EnvgroupsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsEnvgroupsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set addon enablement addonsConfig
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an add-on enablement status of an environment.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablement(ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/addonsConfig:setAddonEnablement"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get schemav2 admin
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Schema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of metrics and dimensions that can be used to create analytics queries and reports. Each schema element contains the name of the field, its associated type, and a flag indicating whether it is a standard or custom field.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Schema> ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2(ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/analytics/admin/schemav2"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [new Param("disableCache", request.DisableCache), new Param("type", request.Type)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Schema>(),
            ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create exports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Export"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submit a data export job to be processed in the background. If the request is successful, the API returns a 201 status, a URI that can be used to retrieve the status of the export job, and the <c>state</c> value of "enqueued".
    /// </remarks>
    public Task<GoogleCloudApigeeV1Export> ApigeeOrganizationsEnvironmentsAnalyticsExportsCreate(ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/analytics/exports"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Export>(),
            ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get exports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Export"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsAnalyticsExportsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the details and status of an analytics export job. If the export job is still in progress, its <c>state</c> is set to "running". After the export job has completed successfully, its <c>state</c> is set to "completed". If the export job fails, its <c>state</c> is set to <c>failed</c>.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Export> ApigeeOrganizationsEnvironmentsAnalyticsExportsGet(ApigeeOrganizationsEnvironmentsAnalyticsExportsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/analytics/exports/{exportsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("exportsId", request.ExportsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Export>(),
            ApigeeOrganizationsEnvironmentsAnalyticsExportsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List exports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListExportsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsAnalyticsExportsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the details and status of all analytics export jobs belonging to the parent organization and environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListExportsResponse> ApigeeOrganizationsEnvironmentsAnalyticsExportsList(ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/analytics/exports"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListExportsResponse>(),
            ApigeeOrganizationsEnvironmentsAnalyticsExportsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListDeploymentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsApisDeploymentsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all deployments of an API proxy in an environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListDeploymentsResponse> ApigeeOrganizationsEnvironmentsApisDeploymentsList(ApigeeOrganizationsEnvironmentsApisDeploymentsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/deployments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListDeploymentsResponse>(),
            ApigeeOrganizationsEnvironmentsApisDeploymentsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create debugsessions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DebugSession"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a debug session for a deployed API Proxy revision.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DebugSession> ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreate(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/debugsessions"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("revisionsId", request.RevisionsId),
            ],
            [new Param("timeout", request.Timeout)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1DebugSession>(),
            ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DebugSessionTransaction"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the debug data from a transaction.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DebugSessionTransaction> ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGet(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/debugsessions/{debugsessionsId}/data/{dataId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("revisionsId", request.RevisionsId),
                new TemplateParam("debugsessionsId", request.DebugsessionsId),
                new TemplateParam("dataId", request.DataId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1DebugSessionTransaction>(),
            ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete data debugsessions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the data from a debug session. This does not cancel the debug session or prevent further data from being collected if the session is still active in runtime pods.
    /// </remarks>
    public Task<object> ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteData(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/debugsessions/{debugsessionsId}/data"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("revisionsId", request.RevisionsId),
                new TemplateParam("debugsessionsId", request.DebugsessionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get debugsessions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DebugSession"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a debug session.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DebugSession> ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGet(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/debugsessions/{debugsessionsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("revisionsId", request.RevisionsId),
                new TemplateParam("debugsessionsId", request.DebugsessionsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1DebugSession>(),
            ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List debugsessions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListDebugSessionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists debug sessions that are currently active in the given API Proxy revision.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListDebugSessionsResponse> ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsList(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/debugsessions"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("revisionsId", request.RevisionsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListDebugSessionsResponse>(),
            ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Deploy revisions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Deployment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsApisRevisionsDeployError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deploys a revision of an API proxy. If another revision of the same API proxy revision is currently deployed, set the <c>override</c> parameter to <c>true</c> to have this revision replace the currently deployed revision. You cannot invoke an API proxy until it has been deployed to an environment. After you deploy an API proxy revision, you cannot edit it. To edit the API proxy, you must create and deploy a new revision. For a request path <c>organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments</c>, two permissions are required: * <c>apigee.deployments.create</c> on the resource <c>organizations/{org}/environments/{env}</c> * <c>apigee.proxyrevisions.deploy</c> on the resource <c>organizations/{org}/apis/{api}/revisions/{rev}</c> All successful API proxy deployments to Apigee are zero-downtime deployments. Apigee hybrid validates the dependencies between shared flows and API proxies at deployment time. For example, if the Flow Callout policy in an API proxy references a shared flow that either doesn't exist or isn't deployed, the API proxy deployment fails.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Deployment> ApigeeOrganizationsEnvironmentsApisRevisionsDeploy(ApigeeOrganizationsEnvironmentsApisRevisionsDeployRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/deployments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("revisionsId", request.RevisionsId),
            ],
            [
                new Param("override", request.Override),
                new Param("sequencedRollout", request.SequencedRollout),
                new Param("serviceAccount", request.ServiceAccount),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Deployment>(),
            ApigeeOrganizationsEnvironmentsApisRevisionsDeployError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Generate deploy change report deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeploymentChangeReport"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generates a report for a dry run analysis of a DeployApiProxy request without committing the deployment. In addition to the standard validations performed when adding deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being created. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run DeployApiProxy request. For a request path <c>organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateDeployChangeReport</c>, two permissions are required: * <c>apigee.deployments.create</c> on the resource <c>organizations/{org}/environments/{env}</c> * <c>apigee.proxyrevisions.deploy</c> on the resource <c>organizations/{org}/apis/{api}/revisions/{rev}</c>
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeploymentChangeReport> ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReport(ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/deployments:generateDeployChangeReport"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("revisionsId", request.RevisionsId),
            ],
            [new Param("override", request.Override)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1DeploymentChangeReport>(),
            ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Generate undeploy change report deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeploymentChangeReport"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generates a report for a dry run analysis of an UndeployApiProxy request without committing the undeploy. In addition to the standard validations performed when removing deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being removed. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run UndeployApiProxy request. For a request path <c>organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateUndeployChangeReport</c>, two permissions are required: * <c>apigee.deployments.delete</c> on the resource <c>organizations/{org}/environments/{env}</c> * <c>apigee.proxyrevisions.undeploy</c> on the resource <c>organizations/{org}/apis/{api}/revisions/{rev}</c>
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeploymentChangeReport> ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReport(ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/deployments:generateUndeployChangeReport"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("revisionsId", request.RevisionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1DeploymentChangeReport>(),
            ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get deployments revisions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Deployment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the deployment of an API proxy revision and actual state reported by runtime pods.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Deployment> ApigeeOrganizationsEnvironmentsApisRevisionsGetDeployments(ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/deployments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("revisionsId", request.RevisionsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Deployment>(),
            ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Undeploy revisions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsApisRevisionsUndeployError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Undeploys an API proxy revision from an environment. For a request path <c>organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments</c>, two permissions are required: * <c>apigee.deployments.delete</c> on the resource <c>organizations/{org}/environments/{env}</c> * <c>apigee.proxyrevisions.undeploy</c> on the resource <c>organizations/{org}/apis/{api}/revisions/{rev}</c>
    /// </remarks>
    public Task<object> ApigeeOrganizationsEnvironmentsApisRevisionsUndeploy(ApigeeOrganizationsEnvironmentsApisRevisionsUndeployRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/deployments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("revisionsId", request.RevisionsId),
            ],
            [new Param("sequencedRollout", request.SequencedRollout)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApigeeOrganizationsEnvironmentsApisRevisionsUndeployError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create archiveDeployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new ArchiveDeployment.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreate(ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete archiveDeployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an archive deployment.
    /// </remarks>
    public Task<object> ApigeeOrganizationsEnvironmentsArchiveDeploymentsDelete(ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments/{archiveDeploymentsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("archiveDeploymentsId", request.ArchiveDeploymentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Generate download url archiveDeployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1GenerateDownloadUrlResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generates a signed URL for downloading the original zip file used to create an Archive Deployment. The URL is only valid for a limited period and should be used within minutes after generation. Each call returns a new upload URL.
    /// </remarks>
    public Task<GoogleCloudApigeeV1GenerateDownloadUrlResponse> ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrl(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments/{archiveDeploymentsId}:generateDownloadUrl"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("archiveDeploymentsId", request.ArchiveDeploymentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1GenerateDownloadUrlResponse>(),
            ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Generate upload url archiveDeployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1GenerateUploadUrlResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generates a signed URL for uploading an Archive zip file to Google Cloud Storage. Once the upload is complete, the signed URL should be passed to CreateArchiveDeployment. When uploading to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * Source file size should not exceed 1GB limit. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * <c>content-type: application/zip</c> * <c>x-goog-content-length-range: 0,1073741824</c> And this header SHOULD NOT be specified: * <c>Authorization: Bearer YOUR_TOKEN</c>
    /// </remarks>
    public Task<GoogleCloudApigeeV1GenerateUploadUrlResponse> ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrl(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments:generateUploadUrl"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1GenerateUploadUrlResponse>(),
            ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get archiveDeployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ArchiveDeployment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the specified ArchiveDeployment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ArchiveDeployment> ApigeeOrganizationsEnvironmentsArchiveDeploymentsGet(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments/{archiveDeploymentsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("archiveDeploymentsId", request.ArchiveDeploymentsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ArchiveDeployment>(),
            ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List archiveDeployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListArchiveDeploymentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsArchiveDeploymentsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the ArchiveDeployments in the specified Environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListArchiveDeploymentsResponse> ApigeeOrganizationsEnvironmentsArchiveDeploymentsList(ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListArchiveDeploymentsResponse>(),
            ApigeeOrganizationsEnvironmentsArchiveDeploymentsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch archiveDeployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ArchiveDeployment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing ArchiveDeployment. Labels can modified but most of the other fields are not modifiable.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ArchiveDeployment> ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatch(ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments/{archiveDeploymentsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("archiveDeploymentsId", request.ArchiveDeploymentsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1ArchiveDeployment>(),
            ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete caches
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsCachesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a cache.
    /// </remarks>
    public Task<object> ApigeeOrganizationsEnvironmentsCachesDelete(ApigeeOrganizationsEnvironmentsCachesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/caches/{cachesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("cachesId", request.CachesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApigeeOrganizationsEnvironmentsCachesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an environment in an organization.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsEnvironmentsCreate(ApigeeOrganizationsEnvironmentsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("name", request.Name)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsEnvironmentsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an environment from an organization. <b>Warning: You must delete all key value maps and key value entries before you delete an environment.</b> Otherwise, if you re-create the environment the key value map entry operations will encounter encryption/decryption discrepancies.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsEnvironmentsDelete(ApigeeOrganizationsEnvironmentsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsEnvironmentsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Deployment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsDeploymentsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a particular deployment of Api proxy or a shared flow in an environment
    /// </remarks>
    public Task<GoogleCloudApigeeV1Deployment> ApigeeOrganizationsEnvironmentsDeploymentsGet(ApigeeOrganizationsEnvironmentsDeploymentsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/deployments/{deploymentsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("deploymentsId", request.DeploymentsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Deployment>(),
            ApigeeOrganizationsEnvironmentsDeploymentsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleIamV1Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the IAM policy on a deployment. For more information, see Manage users, roles, and permissions using the API. You must have the <c>apigee.deployments.getIamPolicy</c> permission to call this API.
    /// </remarks>
    public Task<GoogleIamV1Policy> ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicy(ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/deployments/{deploymentsId}:getIamPolicy"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("deploymentsId", request.DeploymentsId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleIamV1Policy>(),
            ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListDeploymentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsDeploymentsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all deployments of API proxies or shared flows in an environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListDeploymentsResponse> ApigeeOrganizationsEnvironmentsDeploymentsList(ApigeeOrganizationsEnvironmentsDeploymentsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/deployments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [new Param("sharedFlows", request.SharedFlows)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListDeploymentsResponse>(),
            ApigeeOrganizationsEnvironmentsDeploymentsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleIamV1Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the IAM policy on a deployment, if the policy already exists it will be replaced. For more information, see Manage users, roles, and permissions using the API. You must have the <c>apigee.deployments.setIamPolicy</c> permission to call this API.
    /// </remarks>
    public Task<GoogleIamV1Policy> ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicy(ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/deployments/{deploymentsId}:setIamPolicy"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("deploymentsId", request.DeploymentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleIamV1Policy>(),
            ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleIamV1TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Tests the permissions of a user on a deployment, and returns a subset of permissions that the user has on the deployment. If the deployment does not exist, an empty permission set is returned (a NOT_FOUND error is not returned).
    /// </remarks>
    public Task<GoogleIamV1TestIamPermissionsResponse> ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissions(ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/deployments/{deploymentsId}:testIamPermissions"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("deploymentsId", request.DeploymentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleIamV1TestIamPermissionsResponse>(),
            ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Attach shared flow to flow hook flowhooks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1FlowHook"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Attaches a shared flow to a flow hook.
    /// </remarks>
    public Task<GoogleCloudApigeeV1FlowHook> ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHook(ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/flowhooks/{flowhooksId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("flowhooksId", request.FlowhooksId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1FlowHook>(),
            ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Detach shared flow from flow hook flowhooks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1FlowHook"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Detaches a shared flow from a flow hook.
    /// </remarks>
    public Task<GoogleCloudApigeeV1FlowHook> ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHook(ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/flowhooks/{flowhooksId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("flowhooksId", request.FlowhooksId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1FlowHook>(),
            ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get flowhooks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1FlowHook"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsFlowhooksGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the name of the shared flow attached to the specified flow hook. If there's no shared flow attached to the flow hook, the API does not return an error; it simply does not return a name in the response.
    /// </remarks>
    public Task<GoogleCloudApigeeV1FlowHook> ApigeeOrganizationsEnvironmentsFlowhooksGet(ApigeeOrganizationsEnvironmentsFlowhooksGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/flowhooks/{flowhooksId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("flowhooksId", request.FlowhooksId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1FlowHook>(),
            ApigeeOrganizationsEnvironmentsFlowhooksGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Environment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets environment details.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Environment> ApigeeOrganizationsEnvironmentsGet(ApigeeOrganizationsEnvironmentsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Environment>(),
            ApigeeOrganizationsEnvironmentsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get addons config environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AddonsConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsGetAddonsConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the add-ons config of an environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AddonsConfig> ApigeeOrganizationsEnvironmentsGetAddonsConfig(ApigeeOrganizationsEnvironmentsGetAddonsConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/addonsConfig"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1AddonsConfig>(),
            ApigeeOrganizationsEnvironmentsGetAddonsConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get api security runtime config environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiSecurityRuntimeConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the API Security runtime configuration for an environment. This named ApiSecurityRuntimeConfig to prevent conflicts with ApiSecurityConfig from addon config.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiSecurityRuntimeConfig> ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfig(ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/apiSecurityRuntimeConfig"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ApiSecurityRuntimeConfig>(),
            ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get debugmask environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DebugMask"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsGetDebugmaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the debug mask singleton resource for an environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DebugMask> ApigeeOrganizationsEnvironmentsGetDebugmask(ApigeeOrganizationsEnvironmentsGetDebugmaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/debugmask"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1DebugMask>(),
            ApigeeOrganizationsEnvironmentsGetDebugmaskError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get deployed config environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1EnvironmentConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsGetDeployedConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the deployed configuration for an environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1EnvironmentConfig> ApigeeOrganizationsEnvironmentsGetDeployedConfig(ApigeeOrganizationsEnvironmentsGetDeployedConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/deployedConfig"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1EnvironmentConfig>(),
            ApigeeOrganizationsEnvironmentsGetDeployedConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleIamV1Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the IAM policy on an environment. For more information, see Manage users, roles, and permissions using the API. You must have the <c>apigee.environments.getIamPolicy</c> permission to call this API.
    /// </remarks>
    public Task<GoogleIamV1Policy> ApigeeOrganizationsEnvironmentsGetIamPolicy(ApigeeOrganizationsEnvironmentsGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}:getIamPolicy"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleIamV1Policy>(),
            ApigeeOrganizationsEnvironmentsGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get security actions config environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityActionsConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// GetSecurityActionConfig returns the current SecurityActions configuration.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityActionsConfig> ApigeeOrganizationsEnvironmentsGetSecurityActionsConfig(ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/securityActionsConfig"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1SecurityActionsConfig>(),
            ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get trace config environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1TraceConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsGetTraceConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get distributed trace configuration in an environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1TraceConfig> ApigeeOrganizationsEnvironmentsGetTraceConfig(ApigeeOrganizationsEnvironmentsGetTraceConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1TraceConfig>(),
            ApigeeOrganizationsEnvironmentsGetTraceConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create aliases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Alias"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an alias from a key/certificate pair. The structure of the request is controlled by the <c>format</c> query parameter: - <c>keycertfile</c> - Separate PEM-encoded key and certificate files are uploaded. Set <c>Content-Type: multipart/form-data</c> and include the <c>keyFile</c>, <c>certFile</c>, and <c>password</c> (if keys are encrypted) fields in the request body. If uploading to a truststore, omit <c>keyFile</c>. - <c>pkcs12</c> - A PKCS12 file is uploaded. Set <c>Content-Type: multipart/form-data</c>, provide the file in the <c>file</c> field, and include the <c>password</c> field if the file is encrypted in the request body. - <c>selfsignedcert</c> - A new private key and certificate are generated. Set <c>Content-Type: application/json</c> and include CertificateGenerationSpec in the request body.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Alias> ApigeeOrganizationsEnvironmentsKeystoresAliasesCreate(ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("keystoresId", request.KeystoresId),
            ],
            [
                new Param("_password", request.Password),
                new Param("alias", request.Alias),
                new Param("format", request.Format),
                new Param("ignoreExpiryValidation", request.IgnoreExpiryValidation),
                new Param("ignoreNewlineValidation", request.IgnoreNewlineValidation),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Alias>(),
            ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Csr aliases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleApiHttpBody"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generates a PKCS #10 Certificate Signing Request for the private key in an alias.
    /// </remarks>
    public Task<GoogleApiHttpBody> ApigeeOrganizationsEnvironmentsKeystoresAliasesCsr(ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases/{aliasesId}/csr"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("keystoresId", request.KeystoresId),
                new TemplateParam("aliasesId", request.AliasesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleApiHttpBody>(),
            ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete aliases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Alias"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an alias.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Alias> ApigeeOrganizationsEnvironmentsKeystoresAliasesDelete(ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases/{aliasesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("keystoresId", request.KeystoresId),
                new TemplateParam("aliasesId", request.AliasesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Alias>(),
            ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get aliases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Alias"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsKeystoresAliasesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets an alias.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Alias> ApigeeOrganizationsEnvironmentsKeystoresAliasesGet(ApigeeOrganizationsEnvironmentsKeystoresAliasesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases/{aliasesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("keystoresId", request.KeystoresId),
                new TemplateParam("aliasesId", request.AliasesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Alias>(),
            ApigeeOrganizationsEnvironmentsKeystoresAliasesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get certificate aliases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleApiHttpBody"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the certificate from an alias in PEM-encoded form.
    /// </remarks>
    public Task<GoogleApiHttpBody> ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificate(ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases/{aliasesId}/certificate"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("keystoresId", request.KeystoresId),
                new TemplateParam("aliasesId", request.AliasesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleApiHttpBody>(),
            ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update aliases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Alias"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the certificate in an alias. The updated certificate must be in PEM- or DER-encoded X.509 format.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Alias> ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdate(ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases/{aliasesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("keystoresId", request.KeystoresId),
                new TemplateParam("aliasesId", request.AliasesId),
            ],
            [
                new Param("ignoreExpiryValidation", request.IgnoreExpiryValidation),
                new Param("ignoreNewlineValidation", request.IgnoreNewlineValidation),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Alias>(),
            ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create keystores
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Keystore"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsKeystoresCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a keystore or truststore. - Keystore: Contains certificates and their associated keys. - Truststore: Contains trusted certificates used to validate a server's certificate. These certificates are typically self-signed certificates or certificates that are not signed by a trusted CA.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Keystore> ApigeeOrganizationsEnvironmentsKeystoresCreate(ApigeeOrganizationsEnvironmentsKeystoresCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/keystores"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [new Param("name", request.Name)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Keystore>(),
            ApigeeOrganizationsEnvironmentsKeystoresCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete keystores
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Keystore"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsKeystoresDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a keystore or truststore.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Keystore> ApigeeOrganizationsEnvironmentsKeystoresDelete(ApigeeOrganizationsEnvironmentsKeystoresDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("keystoresId", request.KeystoresId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Keystore>(),
            ApigeeOrganizationsEnvironmentsKeystoresDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get keystores
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Keystore"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsKeystoresGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a keystore or truststore.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Keystore> ApigeeOrganizationsEnvironmentsKeystoresGet(ApigeeOrganizationsEnvironmentsKeystoresGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("keystoresId", request.KeystoresId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Keystore>(),
            ApigeeOrganizationsEnvironmentsKeystoresGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create keyvaluemaps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueMap"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a key value map in an environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueMap> ApigeeOrganizationsEnvironmentsKeyvaluemapsCreate(ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueMap>(),
            ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete keyvaluemaps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueMap"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a key value map from an environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueMap> ApigeeOrganizationsEnvironmentsKeyvaluemapsDelete(ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueMap>(),
            ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates key value entries in a key value map scoped to an organization, environment, or API proxy. <b>Note</b>: Supported for Apigee hybrid 1.8.x and higher.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueEntry> ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreate(ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}/entries"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueEntry>(),
            ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a key value entry from a key value map scoped to an organization, environment, or API proxy. <b>Notes:</b> * After you delete the key value entry, the policy consuming the entry will continue to function with its cached values for a few minutes. This is expected behavior. * Supported for Apigee hybrid 1.8.x and higher.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueEntry> ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDelete(ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
                new TemplateParam("entriesId", request.EntriesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueEntry>(),
            ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the key value entry value for a key value map scoped to an organization, environment, or API proxy. <b>Note</b>: Supported for Apigee hybrid 1.8.x and higher.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueEntry> ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGet(ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
                new TemplateParam("entriesId", request.EntriesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueEntry>(),
            ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListKeyValueEntriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists key value entries for key values maps scoped to an organization, environment, or API proxy. <b>Note</b>: Supported for Apigee hybrid 1.8.x and higher.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListKeyValueEntriesResponse> ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesList(ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}/entries"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListKeyValueEntriesResponse>(),
            ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update key value entry scoped to an organization, environment, or API proxy for an existing key.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueEntry> ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdate(ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
                new TemplateParam("entriesId", request.EntriesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueEntry>(),
            ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get keyvaluemaps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueMap"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsKeyvaluemapsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the key value map scoped to an organization, environment, or API proxy.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueMap> ApigeeOrganizationsEnvironmentsKeyvaluemapsGet(ApigeeOrganizationsEnvironmentsKeyvaluemapsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueMap>(),
            ApigeeOrganizationsEnvironmentsKeyvaluemapsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update keyvaluemaps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueMap"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the key value map scoped to an organization, environment, or API proxy.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueMap> ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdate(ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueMap>(),
            ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Modify environment environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsModifyEnvironmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates properties for an Apigee environment with patch semantics using a field mask. <b>Note:</b> Not supported for Apigee hybrid.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsEnvironmentsModifyEnvironment(ApigeeOrganizationsEnvironmentsModifyEnvironmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsEnvironmentsModifyEnvironmentError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get optimizedStats
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1OptimizedStats"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsOptimizedStatsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Similar to GetStats except that the response is less verbose.
    /// </remarks>
    public Task<GoogleCloudApigeeV1OptimizedStats> ApigeeOrganizationsEnvironmentsOptimizedStatsGet(ApigeeOrganizationsEnvironmentsOptimizedStatsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/optimizedStats/{optimizedStatsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("optimizedStatsId", request.OptimizedStatsId),
            ],
            [
                new Param("accuracy", request.Accuracy),
                new Param("aggTable", request.AggTable),
                new Param("filter", request.Filter),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("realtime", request.Realtime),
                new Param("select", request.Select),
                new Param("sonar", request.Sonar),
                new Param("sort", request.Sort),
                new Param("sortby", request.Sortby),
                new Param("timeRange", request.TimeRange),
                new Param("timeUnit", request.TimeUnit),
                new Param("topk", request.Topk),
                new Param("tsAscending", request.TsAscending),
                new Param("tzo", request.Tzo),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1OptimizedStats>(),
            ApigeeOrganizationsEnvironmentsOptimizedStatsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create queries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AsyncQuery"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsQueriesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submit a query to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the <c>state</c> of "enqueued" means that the request succeeded.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AsyncQuery> ApigeeOrganizationsEnvironmentsQueriesCreate(ApigeeOrganizationsEnvironmentsQueriesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/queries"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1AsyncQuery>(),
            ApigeeOrganizationsEnvironmentsQueriesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get queries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AsyncQuery"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsQueriesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get query status If the query is still in progress, the <c>state</c> is set to "running" After the query has completed successfully, <c>state</c> is set to "completed"
    /// </remarks>
    public Task<GoogleCloudApigeeV1AsyncQuery> ApigeeOrganizationsEnvironmentsQueriesGet(ApigeeOrganizationsEnvironmentsQueriesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/queries/{queriesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("queriesId", request.QueriesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1AsyncQuery>(),
            ApigeeOrganizationsEnvironmentsQueriesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get result queries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleApiHttpBody"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsQueriesGetResultError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// After the query is completed, use this API to retrieve the results. If the request succeeds, and there is a non-zero result set, the result is downloaded to the client as a zipped JSON file. The name of the downloaded file will be: OfflineQueryResult-.zip Example: <c>OfflineQueryResult-9cfc0d85-0f30-46d6-ae6f-318d0cb961bd.zip</c>
    /// </remarks>
    public Task<GoogleApiHttpBody> ApigeeOrganizationsEnvironmentsQueriesGetResult(ApigeeOrganizationsEnvironmentsQueriesGetResultRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/queries/{queriesId}/result"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("queriesId", request.QueriesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleApiHttpBody>(),
            ApigeeOrganizationsEnvironmentsQueriesGetResultError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get resulturl queries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsQueriesGetResulturlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// After the query is completed, use this API to retrieve the results. If the request succeeds, and there is a non-zero result set, the result is sent to the client as a list of urls to JSON files.
    /// </remarks>
    public Task<GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse> ApigeeOrganizationsEnvironmentsQueriesGetResulturl(ApigeeOrganizationsEnvironmentsQueriesGetResulturlRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/queries/{queriesId}/resulturl"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("queriesId", request.QueriesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse>(),
            ApigeeOrganizationsEnvironmentsQueriesGetResulturlError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List queries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListAsyncQueriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsQueriesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return a list of Asynchronous Queries
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListAsyncQueriesResponse> ApigeeOrganizationsEnvironmentsQueriesList(ApigeeOrganizationsEnvironmentsQueriesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/queries"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [
                new Param("dataset", request.Dataset),
                new Param("from", request.From),
                new Param("inclQueriesWithoutReport", request.InclQueriesWithoutReport),
                new Param("status", request.Status),
                new Param("submittedBy", request.SubmittedBy),
                new Param("to", request.To),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListAsyncQueriesResponse>(),
            ApigeeOrganizationsEnvironmentsQueriesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create references
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Reference"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsReferencesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a Reference in the specified environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Reference> ApigeeOrganizationsEnvironmentsReferencesCreate(ApigeeOrganizationsEnvironmentsReferencesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/references"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Reference>(),
            ApigeeOrganizationsEnvironmentsReferencesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete references
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Reference"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsReferencesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a Reference from an environment. Returns the deleted Reference resource.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Reference> ApigeeOrganizationsEnvironmentsReferencesDelete(ApigeeOrganizationsEnvironmentsReferencesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/references/{referencesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("referencesId", request.ReferencesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Reference>(),
            ApigeeOrganizationsEnvironmentsReferencesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get references
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Reference"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsReferencesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a Reference resource.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Reference> ApigeeOrganizationsEnvironmentsReferencesGet(ApigeeOrganizationsEnvironmentsReferencesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/references/{referencesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("referencesId", request.ReferencesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Reference>(),
            ApigeeOrganizationsEnvironmentsReferencesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update references
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Reference"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsReferencesUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing Reference. Note that this operation has PUT semantics; it will replace the entirety of the existing Reference with the resource in the request body.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Reference> ApigeeOrganizationsEnvironmentsReferencesUpdate(ApigeeOrganizationsEnvironmentsReferencesUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/references/{referencesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("referencesId", request.ReferencesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Reference>(),
            ApigeeOrganizationsEnvironmentsReferencesUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create resourcefiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ResourceFile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsResourcefilesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a resource file. Specify the <c>Content-Type</c> as <c>application/octet-stream</c> or <c>multipart/form-data</c>. For more information about resource files, see Resource files.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ResourceFile> ApigeeOrganizationsEnvironmentsResourcefilesCreate(ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [new Param("name", request.Name), new Param("type", request.Type)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1ResourceFile>(),
            ApigeeOrganizationsEnvironmentsResourcefilesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete resourcefiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ResourceFile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsResourcefilesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a resource file. For more information about resource files, see Resource files.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ResourceFile> ApigeeOrganizationsEnvironmentsResourcefilesDelete(ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles/{type}/{name}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("type", request.Type),
                new TemplateParam("name", request.Name),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ResourceFile>(),
            ApigeeOrganizationsEnvironmentsResourcefilesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get resourcefiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleApiHttpBody"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsResourcefilesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the contents of a resource file. For more information about resource files, see Resource files.
    /// </remarks>
    public Task<GoogleApiHttpBody> ApigeeOrganizationsEnvironmentsResourcefilesGet(ApigeeOrganizationsEnvironmentsResourcefilesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles/{type}/{name}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("type", request.Type),
                new TemplateParam("name", request.Name),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleApiHttpBody>(),
            ApigeeOrganizationsEnvironmentsResourcefilesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List resourcefiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListEnvironmentResourcesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsResourcefilesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all resource files, optionally filtering by type. For more information about resource files, see Resource files.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListEnvironmentResourcesResponse> ApigeeOrganizationsEnvironmentsResourcefilesList(ApigeeOrganizationsEnvironmentsResourcefilesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [new Param("type", request.Type)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListEnvironmentResourcesResponse>(),
            ApigeeOrganizationsEnvironmentsResourcefilesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List environment resources resourcefiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListEnvironmentResourcesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all resource files, optionally filtering by type. For more information about resource files, see Resource files.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListEnvironmentResourcesResponse> ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResources(ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles/{type}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("type", request.Type),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListEnvironmentResourcesResponse>(),
            ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update resourcefiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ResourceFile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsResourcefilesUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a resource file. Specify the <c>Content-Type</c> as <c>application/octet-stream</c> or <c>multipart/form-data</c>. For more information about resource files, see Resource files.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ResourceFile> ApigeeOrganizationsEnvironmentsResourcefilesUpdate(ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles/{type}/{name}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("type", request.Type),
                new TemplateParam("name", request.Name),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1ResourceFile>(),
            ApigeeOrganizationsEnvironmentsResourcefilesUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create securityActions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityAction"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSecurityActionsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// CreateSecurityAction creates a SecurityAction.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityAction> ApigeeOrganizationsEnvironmentsSecurityActionsCreate(ApigeeOrganizationsEnvironmentsSecurityActionsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [new Param("securityActionId", request.SecurityActionId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SecurityAction>(),
            ApigeeOrganizationsEnvironmentsSecurityActionsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete securityActions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSecurityActionsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a SecurityAction.
    /// </remarks>
    public Task<object> ApigeeOrganizationsEnvironmentsSecurityActionsDelete(ApigeeOrganizationsEnvironmentsSecurityActionsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions/{securityActionsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("securityActionsId", request.SecurityActionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApigeeOrganizationsEnvironmentsSecurityActionsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Disable securityActions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityAction"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSecurityActionsDisableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Disable a SecurityAction. The <c>state</c> of the SecurityAction after disabling is <c>DISABLED</c>. <c>DisableSecurityAction</c> can be called on SecurityActions in the state <c>ENABLED</c>; SecurityActions in a different state (including <c>DISABLED</c>) return an error.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityAction> ApigeeOrganizationsEnvironmentsSecurityActionsDisable(ApigeeOrganizationsEnvironmentsSecurityActionsDisableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions/{securityActionsId}:disable"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("securityActionsId", request.SecurityActionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SecurityAction>(),
            ApigeeOrganizationsEnvironmentsSecurityActionsDisableError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Enable securityActions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityAction"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSecurityActionsEnableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enable a SecurityAction. The <c>state</c> of the SecurityAction after enabling is <c>ENABLED</c>. <c>EnableSecurityAction</c> can be called on SecurityActions in the state <c>DISABLED</c>; SecurityActions in a different state (including `ENABLED) return an error.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityAction> ApigeeOrganizationsEnvironmentsSecurityActionsEnable(ApigeeOrganizationsEnvironmentsSecurityActionsEnableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions/{securityActionsId}:enable"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("securityActionsId", request.SecurityActionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SecurityAction>(),
            ApigeeOrganizationsEnvironmentsSecurityActionsEnableError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get securityActions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityAction"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSecurityActionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a SecurityAction by name.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityAction> ApigeeOrganizationsEnvironmentsSecurityActionsGet(ApigeeOrganizationsEnvironmentsSecurityActionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions/{securityActionsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("securityActionsId", request.SecurityActionsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1SecurityAction>(),
            ApigeeOrganizationsEnvironmentsSecurityActionsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List securityActions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListSecurityActionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSecurityActionsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of SecurityActions. This returns both enabled and disabled actions.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListSecurityActionsResponse> ApigeeOrganizationsEnvironmentsSecurityActionsList(ApigeeOrganizationsEnvironmentsSecurityActionsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListSecurityActionsResponse>(),
            ApigeeOrganizationsEnvironmentsSecurityActionsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch securityActions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityAction"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSecurityActionsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a SecurityAction.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityAction> ApigeeOrganizationsEnvironmentsSecurityActionsPatch(ApigeeOrganizationsEnvironmentsSecurityActionsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions/{securityActionsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("securityActionsId", request.SecurityActionsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SecurityAction>(),
            ApigeeOrganizationsEnvironmentsSecurityActionsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch update securityIncidents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// BatchUpdateSecurityIncident updates multiple existing security incidents.
    /// </remarks>
    public Task<GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse> ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdate(ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/securityIncidents:batchUpdate"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse>(),
            ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get securityIncidents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityIncident"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSecurityIncidentsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// GetSecurityIncident gets the specified security incident. Returns NOT_FOUND if security incident is not present for the specified organization and environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityIncident> ApigeeOrganizationsEnvironmentsSecurityIncidentsGet(ApigeeOrganizationsEnvironmentsSecurityIncidentsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/securityIncidents/{securityIncidentsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("securityIncidentsId", request.SecurityIncidentsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1SecurityIncident>(),
            ApigeeOrganizationsEnvironmentsSecurityIncidentsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List securityIncidents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListSecurityIncidentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSecurityIncidentsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ListSecurityIncidents lists all the security incident associated with the environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListSecurityIncidentsResponse> ApigeeOrganizationsEnvironmentsSecurityIncidentsList(ApigeeOrganizationsEnvironmentsSecurityIncidentsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/securityIncidents"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListSecurityIncidentsResponse>(),
            ApigeeOrganizationsEnvironmentsSecurityIncidentsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch securityIncidents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityIncident"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// UpdateSecurityIncidents updates an existing security incident.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityIncident> ApigeeOrganizationsEnvironmentsSecurityIncidentsPatch(ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/securityIncidents/{securityIncidentsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("securityIncidentsId", request.SecurityIncidentsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SecurityIncident>(),
            ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create securityReports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityReport"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSecurityReportsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submit a report request to be processed in the background. If the submission succeeds, the API returns a 200 status and an ID that refer to the report request. In addition to the HTTP status 200, the <c>state</c> of "enqueued" means that the request succeeded.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityReport> ApigeeOrganizationsEnvironmentsSecurityReportsCreate(ApigeeOrganizationsEnvironmentsSecurityReportsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/securityReports"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SecurityReport>(),
            ApigeeOrganizationsEnvironmentsSecurityReportsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get securityReports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityReport"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSecurityReportsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get security report status If the query is still in progress, the <c>state</c> is set to "running" After the query has completed successfully, <c>state</c> is set to "completed"
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityReport> ApigeeOrganizationsEnvironmentsSecurityReportsGet(ApigeeOrganizationsEnvironmentsSecurityReportsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/securityReports/{securityReportsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("securityReportsId", request.SecurityReportsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1SecurityReport>(),
            ApigeeOrganizationsEnvironmentsSecurityReportsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get result securityReports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleApiHttpBody"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSecurityReportsGetResultError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// After the query is completed, use this API to retrieve the results as file. If the request succeeds, and there is a non-zero result set, the result is downloaded to the client as a zipped JSON file. The name of the downloaded file will be: OfflineQueryResult-.zip Example: <c>OfflineQueryResult-9cfc0d85-0f30-46d6-ae6f-318d0cb961bd.zip</c>
    /// </remarks>
    public Task<GoogleApiHttpBody> ApigeeOrganizationsEnvironmentsSecurityReportsGetResult(ApigeeOrganizationsEnvironmentsSecurityReportsGetResultRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/securityReports/{securityReportsId}/result"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("securityReportsId", request.SecurityReportsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleApiHttpBody>(),
            ApigeeOrganizationsEnvironmentsSecurityReportsGetResultError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get result view securityReports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityReportResultView"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// After the query is completed, use this API to view the query result when result size is small.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityReportResultView> ApigeeOrganizationsEnvironmentsSecurityReportsGetResultView(ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/securityReports/{securityReportsId}/resultView"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("securityReportsId", request.SecurityReportsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1SecurityReportResultView>(),
            ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List securityReports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListSecurityReportsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSecurityReportsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return a list of Security Reports
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListSecurityReportsResponse> ApigeeOrganizationsEnvironmentsSecurityReportsList(ApigeeOrganizationsEnvironmentsSecurityReportsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/securityReports"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [
                new Param("dataset", request.Dataset),
                new Param("from", request.From),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("status", request.Status),
                new Param("submittedBy", request.SubmittedBy),
                new Param("to", request.To),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListSecurityReportsResponse>(),
            ApigeeOrganizationsEnvironmentsSecurityReportsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Query tabular stats securityStats
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1QueryTabularStatsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve security statistics as tabular rows.
    /// </remarks>
    public Task<GoogleCloudApigeeV1QueryTabularStatsResponse> ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStats(ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/securityStats:queryTabularStats"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1QueryTabularStatsResponse>(),
            ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Query time series stats securityStats
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1QueryTimeSeriesStatsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve security statistics as a collection of time series.
    /// </remarks>
    public Task<GoogleCloudApigeeV1QueryTimeSeriesStatsResponse> ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStats(ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/securityStats:queryTimeSeriesStats"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1QueryTimeSeriesStatsResponse>(),
            ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleIamV1Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the IAM policy on an environment, if the policy already exists it will be replaced. For more information, see Manage users, roles, and permissions using the API. You must have the <c>apigee.environments.setIamPolicy</c> permission to call this API.
    /// </remarks>
    public Task<GoogleIamV1Policy> ApigeeOrganizationsEnvironmentsSetIamPolicy(ApigeeOrganizationsEnvironmentsSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}:setIamPolicy"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleIamV1Policy>(),
            ApigeeOrganizationsEnvironmentsSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListDeploymentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all deployments of a shared flow in an environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListDeploymentsResponse> ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsList(ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/sharedflows/{sharedflowsId}/deployments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("sharedflowsId", request.SharedflowsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListDeploymentsResponse>(),
            ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Deploy revisions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Deployment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deploys a revision of a shared flow. If another revision of the same shared flow is currently deployed, set the <c>override</c> parameter to <c>true</c> to have this revision replace the currently deployed revision. You cannot use a shared flow until it has been deployed to an environment. For a request path <c>organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments</c>, two permissions are required: * <c>apigee.deployments.create</c> on the resource <c>organizations/{org}/environments/{env}</c> * <c>apigee.sharedflowrevisions.deploy</c> on the resource <c>organizations/{org}/sharedflows/{sf}/revisions/{rev}</c>
    /// </remarks>
    public Task<GoogleCloudApigeeV1Deployment> ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploy(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}/deployments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("sharedflowsId", request.SharedflowsId),
                new TemplateParam("revisionsId", request.RevisionsId),
            ],
            [new Param("override", request.Override), new Param("serviceAccount", request.ServiceAccount)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Deployment>(),
            ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get deployments revisions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Deployment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the deployment of a shared flow revision and actual state reported by runtime pods.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Deployment> ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeployments(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}/deployments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("sharedflowsId", request.SharedflowsId),
                new TemplateParam("revisionsId", request.RevisionsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Deployment>(),
            ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Undeploy revisions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Undeploys a shared flow revision from an environment. For a request path <c>organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments</c>, two permissions are required: * <c>apigee.deployments.delete</c> on the resource <c>organizations/{org}/environments/{env}</c> * <c>apigee.sharedflowrevisions.undeploy</c> on the resource <c>organizations/{org}/sharedflows/{sf}/revisions/{rev}</c>
    /// </remarks>
    public Task<object> ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploy(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}/deployments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("sharedflowsId", request.SharedflowsId),
                new TemplateParam("revisionsId", request.RevisionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get stats
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Stats"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsStatsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve metrics grouped by dimensions. The types of metrics you can retrieve include traffic, message counts, API call latency, response size, and cache hits and counts. Dimensions let you view metrics in meaningful groups. You can optionally pass dimensions as path parameters to the <c>stats</c> API. If dimensions are not specified, the metrics are computed on the entire set of data for the given time range.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Stats> ApigeeOrganizationsEnvironmentsStatsGet(ApigeeOrganizationsEnvironmentsStatsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/stats/{statsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("statsId", request.StatsId),
            ],
            [
                new Param("accuracy", request.Accuracy),
                new Param("aggTable", request.AggTable),
                new Param("filter", request.Filter),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("realtime", request.Realtime),
                new Param("select", request.Select),
                new Param("sonar", request.Sonar),
                new Param("sort", request.Sort),
                new Param("sortby", request.Sortby),
                new Param("timeRange", request.TimeRange),
                new Param("timeUnit", request.TimeUnit),
                new Param("topk", request.Topk),
                new Param("tsAscending", request.TsAscending),
                new Param("tzo", request.Tzo),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Stats>(),
            ApigeeOrganizationsEnvironmentsStatsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Subscribe environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Subscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsSubscribeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a subscription for the environment's Pub/Sub topic. The server will assign a random name for this subscription. The "name" and "push_config" must *not* be specified.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Subscription> ApigeeOrganizationsEnvironmentsSubscribe(ApigeeOrganizationsEnvironmentsSubscribeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}:subscribe"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Subscription>(),
            ApigeeOrganizationsEnvironmentsSubscribeError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create targetservers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1TargetServer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsTargetserversCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a TargetServer in the specified environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1TargetServer> ApigeeOrganizationsEnvironmentsTargetserversCreate(ApigeeOrganizationsEnvironmentsTargetserversCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/targetservers"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [new Param("name", request.Name)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1TargetServer>(),
            ApigeeOrganizationsEnvironmentsTargetserversCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete targetservers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1TargetServer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsTargetserversDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a TargetServer from an environment. Returns the deleted TargetServer resource.
    /// </remarks>
    public Task<GoogleCloudApigeeV1TargetServer> ApigeeOrganizationsEnvironmentsTargetserversDelete(ApigeeOrganizationsEnvironmentsTargetserversDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/targetservers/{targetserversId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("targetserversId", request.TargetserversId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1TargetServer>(),
            ApigeeOrganizationsEnvironmentsTargetserversDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get targetservers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1TargetServer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsTargetserversGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a TargetServer resource.
    /// </remarks>
    public Task<GoogleCloudApigeeV1TargetServer> ApigeeOrganizationsEnvironmentsTargetserversGet(ApigeeOrganizationsEnvironmentsTargetserversGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/targetservers/{targetserversId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("targetserversId", request.TargetserversId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1TargetServer>(),
            ApigeeOrganizationsEnvironmentsTargetserversGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update targetservers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1TargetServer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsTargetserversUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing TargetServer. Note that this operation has PUT semantics; it will replace the entirety of the existing TargetServer with the resource in the request body.
    /// </remarks>
    public Task<GoogleCloudApigeeV1TargetServer> ApigeeOrganizationsEnvironmentsTargetserversUpdate(ApigeeOrganizationsEnvironmentsTargetserversUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/targetservers/{targetserversId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("targetserversId", request.TargetserversId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1TargetServer>(),
            ApigeeOrganizationsEnvironmentsTargetserversUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleIamV1TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Tests the permissions of a user on an environment, and returns a subset of permissions that the user has on the environment. If the environment does not exist, an empty permission set is returned (a NOT_FOUND error is not returned).
    /// </remarks>
    public Task<GoogleIamV1TestIamPermissionsResponse> ApigeeOrganizationsEnvironmentsTestIamPermissions(ApigeeOrganizationsEnvironmentsTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}:testIamPermissions"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleIamV1TestIamPermissionsResponse>(),
            ApigeeOrganizationsEnvironmentsTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create overrides
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1TraceConfigOverride"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a trace configuration override. The response contains a system-generated UUID, that can be used to view, update, or delete the configuration override. Use the List API to view the existing trace configuration overrides.
    /// </remarks>
    public Task<GoogleCloudApigeeV1TraceConfigOverride> ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreate(ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig/overrides"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1TraceConfigOverride>(),
            ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete overrides
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a distributed trace configuration override.
    /// </remarks>
    public Task<object> ApigeeOrganizationsEnvironmentsTraceConfigOverridesDelete(ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig/overrides/{overridesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("overridesId", request.OverridesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get overrides
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1TraceConfigOverride"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a trace configuration override.
    /// </remarks>
    public Task<GoogleCloudApigeeV1TraceConfigOverride> ApigeeOrganizationsEnvironmentsTraceConfigOverridesGet(ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig/overrides/{overridesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("overridesId", request.OverridesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1TraceConfigOverride>(),
            ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List overrides
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListTraceConfigOverridesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsTraceConfigOverridesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all of the distributed trace configuration overrides in an environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListTraceConfigOverridesResponse> ApigeeOrganizationsEnvironmentsTraceConfigOverridesList(ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig/overrides"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListTraceConfigOverridesResponse>(),
            ApigeeOrganizationsEnvironmentsTraceConfigOverridesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch overrides
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1TraceConfigOverride"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a distributed trace configuration override. Note that the repeated fields have replace semantics when included in the field mask and that they will be overwritten by the value of the fields in the request body.
    /// </remarks>
    public Task<GoogleCloudApigeeV1TraceConfigOverride> ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatch(ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig/overrides/{overridesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
                new TemplateParam("overridesId", request.OverridesId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1TraceConfigOverride>(),
            ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unsubscribe environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsUnsubscribeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a subscription for the environment's Pub/Sub topic.
    /// </remarks>
    public Task<object> ApigeeOrganizationsEnvironmentsUnsubscribe(ApigeeOrganizationsEnvironmentsUnsubscribeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}:unsubscribe"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            ApigeeOrganizationsEnvironmentsUnsubscribeError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Environment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing environment. When updating properties, you must pass all existing properties to the API, even if they are not being changed. If you omit properties from the payload, the properties are removed. To get the current list of properties for the environment, use the Get Environment API. <b>Note</b>: Both <c>PUT</c> and <c>POST</c> methods are supported for updating an existing environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Environment> ApigeeOrganizationsEnvironmentsUpdate(ApigeeOrganizationsEnvironmentsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Environment>(),
            ApigeeOrganizationsEnvironmentsUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update debugmask environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DebugMask"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsUpdateDebugmaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the debug mask singleton resource for an environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DebugMask> ApigeeOrganizationsEnvironmentsUpdateDebugmask(ApigeeOrganizationsEnvironmentsUpdateDebugmaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/debugmask"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [
                new Param("replaceRepeatedFields", request.ReplaceRepeatedFields),
                new Param("updateMask", request.UpdateMask),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1DebugMask>(),
            ApigeeOrganizationsEnvironmentsUpdateDebugmaskError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update environment environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Environment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsUpdateEnvironmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing environment. When updating properties, you must pass all existing properties to the API, even if they are not being changed. If you omit properties from the payload, the properties are removed. To get the current list of properties for the environment, use the Get Environment API. <b>Note</b>: Both <c>PUT</c> and <c>POST</c> methods are supported for updating an existing environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Environment> ApigeeOrganizationsEnvironmentsUpdateEnvironment(ApigeeOrganizationsEnvironmentsUpdateEnvironmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Environment>(),
            ApigeeOrganizationsEnvironmentsUpdateEnvironmentError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update security actions config environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityActionsConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// UpdateSecurityActionConfig updates the current SecurityActions configuration. This method is used to enable/disable the feature at the environment level.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityActionsConfig> ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfig(ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/securityActionsConfig"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SecurityActionsConfig>(),
            ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update trace config environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1TraceConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsEnvironmentsUpdateTraceConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the trace configurations in an environment. Note that the repeated fields have replace semantics when included in the field mask and that they will be overwritten by the value of the fields in the request body.
    /// </remarks>
    public Task<GoogleCloudApigeeV1TraceConfig> ApigeeOrganizationsEnvironmentsUpdateTraceConfig(ApigeeOrganizationsEnvironmentsUpdateTraceConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1TraceConfig>(),
            ApigeeOrganizationsEnvironmentsUpdateTraceConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Organization"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the profile for an Apigee organization. See Understanding organizations.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Organization> ApigeeOrganizationsGet(ApigeeOrganizationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Organization>(),
            ApigeeOrganizationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get control plane access organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ControlPlaneAccess"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsGetControlPlaneAccessError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the service accounts allowed to access Apigee control plane directly for limited functionality. <b>Note</b>: Available to Apigee hybrid only.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ControlPlaneAccess> ApigeeOrganizationsGetControlPlaneAccess(ApigeeOrganizationsGetControlPlaneAccessRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/controlPlaneAccess"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ControlPlaneAccess>(),
            ApigeeOrganizationsGetControlPlaneAccessError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get deployed ingress config organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1IngressConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsGetDeployedIngressConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the deployed ingress configuration for an organization.
    /// </remarks>
    public Task<GoogleCloudApigeeV1IngressConfig> ApigeeOrganizationsGetDeployedIngressConfig(ApigeeOrganizationsGetDeployedIngressConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/deployedIngressConfig"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("view", request.View)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1IngressConfig>(),
            ApigeeOrganizationsGetDeployedIngressConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get mcp server config organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1McpServerConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsGetMcpServerConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the deployed MCP server configuration for an organization. McpServerConfig is an org-scoped singleton (one per organization). The returned configuration may be up to 30 seconds out of date by default.
    /// </remarks>
    public Task<GoogleCloudApigeeV1McpServerConfig> ApigeeOrganizationsGetMcpServerConfig(ApigeeOrganizationsGetMcpServerConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/mcpServerConfig"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1McpServerConfig>(),
            ApigeeOrganizationsGetMcpServerConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get project mapping organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1OrganizationProjectMapping"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsGetProjectMappingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the project ID and region for an Apigee organization.
    /// </remarks>
    public Task<GoogleCloudApigeeV1OrganizationProjectMapping> ApigeeOrganizationsGetProjectMapping(ApigeeOrganizationsGetProjectMappingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}:getProjectMapping"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1OrganizationProjectMapping>(),
            ApigeeOrganizationsGetProjectMappingError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get runtime config organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1RuntimeConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsGetRuntimeConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get runtime config for an organization.
    /// </remarks>
    public Task<GoogleCloudApigeeV1RuntimeConfig> ApigeeOrganizationsGetRuntimeConfig(ApigeeOrganizationsGetRuntimeConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/runtimeConfig"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1RuntimeConfig>(),
            ApigeeOrganizationsGetRuntimeConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get security settings organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecuritySettings"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsGetSecuritySettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// GetSecuritySettings gets the security settings for API Security.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecuritySettings> ApigeeOrganizationsGetSecuritySettings(ApigeeOrganizationsGetSecuritySettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securitySettings"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1SecuritySettings>(),
            ApigeeOrganizationsGetSecuritySettingsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get sync authorization organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SyncAuthorization"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsGetSyncAuthorizationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the service accounts with the permissions required to allow the Synchronizer to download environment data from the control plane. An ETag is returned in the response to <c>getSyncAuthorization</c>. Pass that ETag when calling setSyncAuthorization to ensure that you are updating the correct version. If you don't pass the ETag in the call to <c>setSyncAuthorization</c>, then the existing authorization is overwritten indiscriminately. For more information, see Configure the Synchronizer. <b>Note</b>: Available to Apigee hybrid only.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SyncAuthorization> ApigeeOrganizationsGetSyncAuthorization(ApigeeOrganizationsGetSyncAuthorizationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}:getSyncAuthorization"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SyncAuthorization>(),
            ApigeeOrganizationsGetSyncAuthorizationError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create hostQueries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AsyncQuery"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsHostQueriesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the <c>state</c> of "enqueued" means that the request succeeded.
    /// </remarks>
    public Task<GoogleCloudApigeeV1AsyncQuery> ApigeeOrganizationsHostQueriesCreate(ApigeeOrganizationsHostQueriesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/hostQueries"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1AsyncQuery>(),
            ApigeeOrganizationsHostQueriesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get hostQueries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AsyncQuery"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsHostQueriesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get status of a query submitted at host level. If the query is still in progress, the <c>state</c> is set to "running" After the query has completed successfully, <c>state</c> is set to "completed"
    /// </remarks>
    public Task<GoogleCloudApigeeV1AsyncQuery> ApigeeOrganizationsHostQueriesGet(ApigeeOrganizationsHostQueriesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/hostQueries/{hostQueriesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("hostQueriesId", request.HostQueriesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1AsyncQuery>(),
            ApigeeOrganizationsHostQueriesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get result hostQueries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleApiHttpBody"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsHostQueriesGetResultError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// After the query is completed, use this API to retrieve the results. If the request succeeds, and there is a non-zero result set, the result is downloaded to the client as a zipped JSON file. The name of the downloaded file will be: OfflineQueryResult-.zip Example: <c>OfflineQueryResult-9cfc0d85-0f30-46d6-ae6f-318d0cb961bd.zip</c>
    /// </remarks>
    public Task<GoogleApiHttpBody> ApigeeOrganizationsHostQueriesGetResult(ApigeeOrganizationsHostQueriesGetResultRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/hostQueries/{hostQueriesId}/result"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("hostQueriesId", request.HostQueriesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleApiHttpBody>(),
            ApigeeOrganizationsHostQueriesGetResultError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get result view hostQueries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1AsyncQueryResultView"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsHostQueriesGetResultViewError"/> when the server returns an error response.</exception>
    public Task<GoogleCloudApigeeV1AsyncQueryResultView> ApigeeOrganizationsHostQueriesGetResultView(ApigeeOrganizationsHostQueriesGetResultViewRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/hostQueries/{hostQueriesId}/resultView"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("hostQueriesId", request.HostQueriesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1AsyncQueryResultView>(),
            ApigeeOrganizationsHostQueriesGetResultViewError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List hostQueries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListAsyncQueriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsHostQueriesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return a list of Asynchronous Queries at host level.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListAsyncQueriesResponse> ApigeeOrganizationsHostQueriesList(ApigeeOrganizationsHostQueriesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/hostQueries"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [
                new Param("dataset", request.Dataset),
                new Param("envgroupHostname", request.EnvgroupHostname),
                new Param("from", request.From),
                new Param("inclQueriesWithoutReport", request.InclQueriesWithoutReport),
                new Param("status", request.Status),
                new Param("submittedBy", request.SubmittedBy),
                new Param("to", request.To),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListAsyncQueriesResponse>(),
            ApigeeOrganizationsHostQueriesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create hostSecurityReports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityReport"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsHostSecurityReportsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the <c>state</c> of "enqueued" means that the request succeeded.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityReport> ApigeeOrganizationsHostSecurityReportsCreate(ApigeeOrganizationsHostSecurityReportsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/hostSecurityReports"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SecurityReport>(),
            ApigeeOrganizationsHostSecurityReportsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get hostSecurityReports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityReport"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsHostSecurityReportsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get status of a query submitted at host level. If the query is still in progress, the <c>state</c> is set to "running" After the query has completed successfully, <c>state</c> is set to "completed"
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityReport> ApigeeOrganizationsHostSecurityReportsGet(ApigeeOrganizationsHostSecurityReportsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/hostSecurityReports/{hostSecurityReportsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("hostSecurityReportsId", request.HostSecurityReportsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1SecurityReport>(),
            ApigeeOrganizationsHostSecurityReportsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get result hostSecurityReports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleApiHttpBody"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsHostSecurityReportsGetResultError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// After the query is completed, use this API to retrieve the results. If the request succeeds, and there is a non-zero result set, the result is downloaded to the client as a zipped JSON file. The name of the downloaded file will be: OfflineQueryResult-.zip Example: <c>OfflineQueryResult-9cfc0d85-0f30-46d6-ae6f-318d0cb961bd.zip</c>
    /// </remarks>
    public Task<GoogleApiHttpBody> ApigeeOrganizationsHostSecurityReportsGetResult(ApigeeOrganizationsHostSecurityReportsGetResultRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/hostSecurityReports/{hostSecurityReportsId}/result"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("hostSecurityReportsId", request.HostSecurityReportsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleApiHttpBody>(),
            ApigeeOrganizationsHostSecurityReportsGetResultError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get result view hostSecurityReports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityReportResultView"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsHostSecurityReportsGetResultViewError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// After the query is completed, use this API to view the query result when result size is small.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityReportResultView> ApigeeOrganizationsHostSecurityReportsGetResultView(ApigeeOrganizationsHostSecurityReportsGetResultViewRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/hostSecurityReports/{hostSecurityReportsId}/resultView"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("hostSecurityReportsId", request.HostSecurityReportsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1SecurityReportResultView>(),
            ApigeeOrganizationsHostSecurityReportsGetResultViewError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List hostSecurityReports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListSecurityReportsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsHostSecurityReportsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return a list of Security Reports at host level.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListSecurityReportsResponse> ApigeeOrganizationsHostSecurityReportsList(ApigeeOrganizationsHostSecurityReportsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/hostSecurityReports"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [
                new Param("dataset", request.Dataset),
                new Param("envgroupHostname", request.EnvgroupHostname),
                new Param("from", request.From),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("status", request.Status),
                new Param("submittedBy", request.SubmittedBy),
                new Param("to", request.To),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListSecurityReportsResponse>(),
            ApigeeOrganizationsHostSecurityReportsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get hostStats
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Stats"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsHostStatsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve metrics grouped by dimensions in host level. The types of metrics you can retrieve include traffic, message counts, API call latency, response size, and cache hits and counts. Dimensions let you view metrics in meaningful groups. You can optionally pass dimensions as path parameters to the <c>stats</c> API. If dimensions are not specified, the metrics are computed on the entire set of data for the given time range.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Stats> ApigeeOrganizationsHostStatsGet(ApigeeOrganizationsHostStatsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/hostStats/{hostStatsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("hostStatsId", request.HostStatsId),
            ],
            [
                new Param("accuracy", request.Accuracy),
                new Param("envgroupHostname", request.EnvgroupHostname),
                new Param("filter", request.Filter),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("realtime", request.Realtime),
                new Param("select", request.Select),
                new Param("sort", request.Sort),
                new Param("sortby", request.Sortby),
                new Param("timeRange", request.TimeRange),
                new Param("timeUnit", request.TimeUnit),
                new Param("topk", request.Topk),
                new Param("tsAscending", request.TsAscending),
                new Param("tzo", request.Tzo),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Stats>(),
            ApigeeOrganizationsHostStatsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create attachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsInstancesAttachmentsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new attachment of an environment to an instance. <b>Note:</b> Not supported for Apigee hybrid.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsInstancesAttachmentsCreate(ApigeeOrganizationsInstancesAttachmentsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/instances/{instancesId}/attachments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("instancesId", request.InstancesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsInstancesAttachmentsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete attachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsInstancesAttachmentsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an attachment. <b>Note:</b> Not supported for Apigee hybrid.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsInstancesAttachmentsDelete(ApigeeOrganizationsInstancesAttachmentsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/instances/{instancesId}/attachments/{attachmentsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("instancesId", request.InstancesId),
                new TemplateParam("attachmentsId", request.AttachmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsInstancesAttachmentsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get attachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1InstanceAttachment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsInstancesAttachmentsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets an attachment. <b>Note:</b> Not supported for Apigee hybrid.
    /// </remarks>
    public Task<GoogleCloudApigeeV1InstanceAttachment> ApigeeOrganizationsInstancesAttachmentsGet(ApigeeOrganizationsInstancesAttachmentsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/instances/{instancesId}/attachments/{attachmentsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("instancesId", request.InstancesId),
                new TemplateParam("attachmentsId", request.AttachmentsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1InstanceAttachment>(),
            ApigeeOrganizationsInstancesAttachmentsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List attachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListInstanceAttachmentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsInstancesAttachmentsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all attachments to an instance. <b>Note:</b> Not supported for Apigee hybrid.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListInstanceAttachmentsResponse> ApigeeOrganizationsInstancesAttachmentsList(ApigeeOrganizationsInstancesAttachmentsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/instances/{instancesId}/attachments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("instancesId", request.InstancesId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListInstanceAttachmentsResponse>(),
            ApigeeOrganizationsInstancesAttachmentsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create canaryevaluations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsInstancesCanaryevaluationsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new canary evaluation for an organization.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsInstancesCanaryevaluationsCreate(ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/instances/{instancesId}/canaryevaluations"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("instancesId", request.InstancesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsInstancesCanaryevaluationsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get canaryevaluations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1CanaryEvaluation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsInstancesCanaryevaluationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a CanaryEvaluation for an organization.
    /// </remarks>
    public Task<GoogleCloudApigeeV1CanaryEvaluation> ApigeeOrganizationsInstancesCanaryevaluationsGet(ApigeeOrganizationsInstancesCanaryevaluationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/instances/{instancesId}/canaryevaluations/{canaryevaluationsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("instancesId", request.InstancesId),
                new TemplateParam("canaryevaluationsId", request.CanaryevaluationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1CanaryEvaluation>(),
            ApigeeOrganizationsInstancesCanaryevaluationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create instances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsInstancesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an Apigee runtime instance. The instance is accessible from the authorized network configured on the organization. <b>Note:</b> Not supported for Apigee hybrid.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsInstancesCreate(ApigeeOrganizationsInstancesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/instances"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsInstancesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete instances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsInstancesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an Apigee runtime instance. The instance stops serving requests and the runtime data is deleted. <b>Note:</b> Not supported for Apigee hybrid.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsInstancesDelete(ApigeeOrganizationsInstancesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/instances/{instancesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("instancesId", request.InstancesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsInstancesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get instances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Instance"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsInstancesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the details for an Apigee runtime instance. <b>Note:</b> Not supported for Apigee hybrid.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Instance> ApigeeOrganizationsInstancesGet(ApigeeOrganizationsInstancesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/instances/{instancesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("instancesId", request.InstancesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Instance>(),
            ApigeeOrganizationsInstancesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List instances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListInstancesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsInstancesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all Apigee runtime instances for the organization. <b>Note:</b> Not supported for Apigee hybrid.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListInstancesResponse> ApigeeOrganizationsInstancesList(ApigeeOrganizationsInstancesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/instances"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListInstancesResponse>(),
            ApigeeOrganizationsInstancesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Activate natAddresses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsInstancesNatAddressesActivateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Activates the NAT address. The Apigee instance can now use this for Internet egress traffic. <b>Note:</b> Not supported for Apigee hybrid.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsInstancesNatAddressesActivate(ApigeeOrganizationsInstancesNatAddressesActivateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/instances/{instancesId}/natAddresses/{natAddressesId}:activate"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("instancesId", request.InstancesId),
                new TemplateParam("natAddressesId", request.NatAddressesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsInstancesNatAddressesActivateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create natAddresses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsInstancesNatAddressesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a NAT address. The address is created in the RESERVED state and a static external IP address will be provisioned. At this time, the instance will not use this IP address for Internet egress traffic. The address can be activated for use once any required firewall IP whitelisting has been completed. <b>Note:</b> Not supported for Apigee hybrid.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsInstancesNatAddressesCreate(ApigeeOrganizationsInstancesNatAddressesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/instances/{instancesId}/natAddresses"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("instancesId", request.InstancesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsInstancesNatAddressesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete natAddresses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsInstancesNatAddressesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the NAT address. Connections that are actively using the address are drained before it is removed. <b>Note:</b> Not supported for Apigee hybrid.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsInstancesNatAddressesDelete(ApigeeOrganizationsInstancesNatAddressesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/instances/{instancesId}/natAddresses/{natAddressesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("instancesId", request.InstancesId),
                new TemplateParam("natAddressesId", request.NatAddressesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsInstancesNatAddressesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get natAddresses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1NatAddress"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsInstancesNatAddressesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the details of a NAT address. <b>Note:</b> Not supported for Apigee hybrid.
    /// </remarks>
    public Task<GoogleCloudApigeeV1NatAddress> ApigeeOrganizationsInstancesNatAddressesGet(ApigeeOrganizationsInstancesNatAddressesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/instances/{instancesId}/natAddresses/{natAddressesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("instancesId", request.InstancesId),
                new TemplateParam("natAddressesId", request.NatAddressesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1NatAddress>(),
            ApigeeOrganizationsInstancesNatAddressesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List natAddresses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListNatAddressesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsInstancesNatAddressesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the NAT addresses for an Apigee instance. <b>Note:</b> Not supported for Apigee hybrid.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListNatAddressesResponse> ApigeeOrganizationsInstancesNatAddressesList(ApigeeOrganizationsInstancesNatAddressesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/instances/{instancesId}/natAddresses"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("instancesId", request.InstancesId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListNatAddressesResponse>(),
            ApigeeOrganizationsInstancesNatAddressesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch instances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsInstancesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an Apigee runtime instance. You can update the fields described in NodeConfig. No other fields will be updated. <b>Note:</b> Not supported for Apigee hybrid.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsInstancesPatch(ApigeeOrganizationsInstancesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/instances/{instancesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("instancesId", request.InstancesId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsInstancesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Report status instances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsInstancesReportStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Reports the latest status for a runtime instance.
    /// </remarks>
    public Task<object> ApigeeOrganizationsInstancesReportStatus(ApigeeOrganizationsInstancesReportStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/instances/{instancesId}:reportStatus"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("instancesId", request.InstancesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            ApigeeOrganizationsInstancesReportStatusError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create keyvaluemaps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueMap"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsKeyvaluemapsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a key value map in an organization.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueMap> ApigeeOrganizationsKeyvaluemapsCreate(ApigeeOrganizationsKeyvaluemapsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/keyvaluemaps"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueMap>(),
            ApigeeOrganizationsKeyvaluemapsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete keyvaluemaps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueMap"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsKeyvaluemapsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a key value map from an organization.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueMap> ApigeeOrganizationsKeyvaluemapsDelete(ApigeeOrganizationsKeyvaluemapsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueMap>(),
            ApigeeOrganizationsKeyvaluemapsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsKeyvaluemapsEntriesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates key value entries in a key value map scoped to an organization, environment, or API proxy. <b>Note</b>: Supported for Apigee hybrid 1.8.x and higher.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueEntry> ApigeeOrganizationsKeyvaluemapsEntriesCreate(ApigeeOrganizationsKeyvaluemapsEntriesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}/entries"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueEntry>(),
            ApigeeOrganizationsKeyvaluemapsEntriesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsKeyvaluemapsEntriesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a key value entry from a key value map scoped to an organization, environment, or API proxy. <b>Notes:</b> * After you delete the key value entry, the policy consuming the entry will continue to function with its cached values for a few minutes. This is expected behavior. * Supported for Apigee hybrid 1.8.x and higher.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueEntry> ApigeeOrganizationsKeyvaluemapsEntriesDelete(ApigeeOrganizationsKeyvaluemapsEntriesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
                new TemplateParam("entriesId", request.EntriesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueEntry>(),
            ApigeeOrganizationsKeyvaluemapsEntriesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsKeyvaluemapsEntriesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the key value entry value for a key value map scoped to an organization, environment, or API proxy. <b>Note</b>: Supported for Apigee hybrid 1.8.x and higher.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueEntry> ApigeeOrganizationsKeyvaluemapsEntriesGet(ApigeeOrganizationsKeyvaluemapsEntriesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
                new TemplateParam("entriesId", request.EntriesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueEntry>(),
            ApigeeOrganizationsKeyvaluemapsEntriesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListKeyValueEntriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsKeyvaluemapsEntriesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists key value entries for key values maps scoped to an organization, environment, or API proxy. <b>Note</b>: Supported for Apigee hybrid 1.8.x and higher.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListKeyValueEntriesResponse> ApigeeOrganizationsKeyvaluemapsEntriesList(ApigeeOrganizationsKeyvaluemapsEntriesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}/entries"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListKeyValueEntriesResponse>(),
            ApigeeOrganizationsKeyvaluemapsEntriesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsKeyvaluemapsEntriesUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update key value entry scoped to an organization, environment, or API proxy for an existing key.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueEntry> ApigeeOrganizationsKeyvaluemapsEntriesUpdate(ApigeeOrganizationsKeyvaluemapsEntriesUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
                new TemplateParam("entriesId", request.EntriesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueEntry>(),
            ApigeeOrganizationsKeyvaluemapsEntriesUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get keyvaluemaps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueMap"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsKeyvaluemapsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the key value map scoped to an organization, environment, or API proxy.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueMap> ApigeeOrganizationsKeyvaluemapsGet(ApigeeOrganizationsKeyvaluemapsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueMap>(),
            ApigeeOrganizationsKeyvaluemapsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update keyvaluemaps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1KeyValueMap"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsKeyvaluemapsUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the key value map scoped to an organization, environment, or API proxy.
    /// </remarks>
    public Task<GoogleCloudApigeeV1KeyValueMap> ApigeeOrganizationsKeyvaluemapsUpdate(ApigeeOrganizationsKeyvaluemapsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("keyvaluemapsId", request.KeyvaluemapsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1KeyValueMap>(),
            ApigeeOrganizationsKeyvaluemapsUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List organizations
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListOrganizationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the Apigee organizations and associated Google Cloud projects that you have permission to access. See Understanding organizations.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListOrganizationsResponse> ApigeeOrganizationsList(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListOrganizationsResponse>(),
            ApigeeOrganizationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsOperationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsOperationsGet(ApigeeOrganizationsOperationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/operations/{operationsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsOperationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningListOperationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsOperationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns <c>UNIMPLEMENTED</c>.
    /// </remarks>
    public Task<GoogleLongrunningListOperationsResponse> ApigeeOrganizationsOperationsList(ApigeeOrganizationsOperationsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/operations"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("returnPartialSuccess", request.ReturnPartialSuccess),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningListOperationsResponse>(),
            ApigeeOrganizationsOperationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get optimizedHostStats
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1OptimizedStats"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsOptimizedHostStatsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Similar to GetHostStats except that the response is less verbose.
    /// </remarks>
    public Task<GoogleCloudApigeeV1OptimizedStats> ApigeeOrganizationsOptimizedHostStatsGet(ApigeeOrganizationsOptimizedHostStatsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/optimizedHostStats/{optimizedHostStatsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("optimizedHostStatsId", request.OptimizedHostStatsId),
            ],
            [
                new Param("accuracy", request.Accuracy),
                new Param("envgroupHostname", request.EnvgroupHostname),
                new Param("filter", request.Filter),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("realtime", request.Realtime),
                new Param("select", request.Select),
                new Param("sort", request.Sort),
                new Param("sortby", request.Sortby),
                new Param("timeRange", request.TimeRange),
                new Param("timeUnit", request.TimeUnit),
                new Param("topk", request.Topk),
                new Param("tsAscending", request.TsAscending),
                new Param("tzo", request.Tzo),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1OptimizedStats>(),
            ApigeeOrganizationsOptimizedHostStatsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create reports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1CustomReport"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsReportsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a Custom Report for an Organization. A Custom Report provides Apigee Customers to create custom dashboards in addition to the standard dashboards which are provided. The Custom Report in its simplest form contains specifications about metrics, dimensions and filters. It is important to note that the custom report by itself does not provide an executable entity. The Edge UI converts the custom report definition into an analytics query and displays the result in a chart.
    /// </remarks>
    public Task<GoogleCloudApigeeV1CustomReport> ApigeeOrganizationsReportsCreate(ApigeeOrganizationsReportsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/reports"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1CustomReport>(),
            ApigeeOrganizationsReportsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete reports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeleteCustomReportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsReportsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an existing custom report definition
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeleteCustomReportResponse> ApigeeOrganizationsReportsDelete(ApigeeOrganizationsReportsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/reports/{reportsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("reportsId", request.ReportsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1DeleteCustomReportResponse>(),
            ApigeeOrganizationsReportsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get reports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1CustomReport"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsReportsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a custom report definition.
    /// </remarks>
    public Task<GoogleCloudApigeeV1CustomReport> ApigeeOrganizationsReportsGet(ApigeeOrganizationsReportsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/reports/{reportsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("reportsId", request.ReportsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1CustomReport>(),
            ApigeeOrganizationsReportsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List reports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListCustomReportsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsReportsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return a list of Custom Reports
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListCustomReportsResponse> ApigeeOrganizationsReportsList(ApigeeOrganizationsReportsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/reports"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("expand", request.Expand)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListCustomReportsResponse>(),
            ApigeeOrganizationsReportsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update reports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1CustomReport"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsReportsUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing custom report definition
    /// </remarks>
    public Task<GoogleCloudApigeeV1CustomReport> ApigeeOrganizationsReportsUpdate(ApigeeOrganizationsReportsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/reports/{reportsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("reportsId", request.ReportsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1CustomReport>(),
            ApigeeOrganizationsReportsUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch compute securityAssessmentResults
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityAssessmentResultsBatchComputeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Compute RAV2 security scores for a set of resources.
    /// </remarks>
    public Task<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse> ApigeeOrganizationsSecurityAssessmentResultsBatchCompute(ApigeeOrganizationsSecurityAssessmentResultsBatchComputeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityAssessmentResults:batchCompute"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse>(),
            ApigeeOrganizationsSecurityAssessmentResultsBatchComputeError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create securityFeedback
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityFeedback"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityFeedbackCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new report containing customer feedback.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityFeedback> ApigeeOrganizationsSecurityFeedbackCreate(ApigeeOrganizationsSecurityFeedbackCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityFeedback"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("securityFeedbackId", request.SecurityFeedbackId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SecurityFeedback>(),
            ApigeeOrganizationsSecurityFeedbackCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete securityFeedback
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityFeedbackDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a specific feedback report. Used for "undo" of a feedback submission.
    /// </remarks>
    public Task<object> ApigeeOrganizationsSecurityFeedbackDelete(ApigeeOrganizationsSecurityFeedbackDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityFeedback/{securityFeedbackId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("securityFeedbackId", request.SecurityFeedbackId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApigeeOrganizationsSecurityFeedbackDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get securityFeedback
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityFeedback"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityFeedbackGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a specific customer feedback report.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityFeedback> ApigeeOrganizationsSecurityFeedbackGet(ApigeeOrganizationsSecurityFeedbackGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityFeedback/{securityFeedbackId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("securityFeedbackId", request.SecurityFeedbackId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1SecurityFeedback>(),
            ApigeeOrganizationsSecurityFeedbackGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List securityFeedback
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListSecurityFeedbackResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityFeedbackListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all feedback reports which have already been submitted.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListSecurityFeedbackResponse> ApigeeOrganizationsSecurityFeedbackList(ApigeeOrganizationsSecurityFeedbackListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityFeedback"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListSecurityFeedbackResponse>(),
            ApigeeOrganizationsSecurityFeedbackListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch securityFeedback
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityFeedback"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityFeedbackPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a specific feedback report.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityFeedback> ApigeeOrganizationsSecurityFeedbackPatch(ApigeeOrganizationsSecurityFeedbackPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityFeedback/{securityFeedbackId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("securityFeedbackId", request.SecurityFeedbackId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SecurityFeedback>(),
            ApigeeOrganizationsSecurityFeedbackPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create securityMonitoringConditions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityMonitoringCondition"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityMonitoringConditionsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a security monitoring condition.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityMonitoringCondition> ApigeeOrganizationsSecurityMonitoringConditionsCreate(ApigeeOrganizationsSecurityMonitoringConditionsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityMonitoringConditions"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("securityMonitoringConditionId", request.SecurityMonitoringConditionId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SecurityMonitoringCondition>(),
            ApigeeOrganizationsSecurityMonitoringConditionsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete securityMonitoringConditions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityMonitoringConditionsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a security monitoring condition.
    /// </remarks>
    public Task<object> ApigeeOrganizationsSecurityMonitoringConditionsDelete(ApigeeOrganizationsSecurityMonitoringConditionsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/securityMonitoringConditions/{securityMonitoringConditionsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("securityMonitoringConditionsId", request.SecurityMonitoringConditionsId),
            ],
            [new Param("riskAssessmentType", request.RiskAssessmentType)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApigeeOrganizationsSecurityMonitoringConditionsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get securityMonitoringConditions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityMonitoringCondition"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityMonitoringConditionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a security monitoring condition.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityMonitoringCondition> ApigeeOrganizationsSecurityMonitoringConditionsGet(ApigeeOrganizationsSecurityMonitoringConditionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/securityMonitoringConditions/{securityMonitoringConditionsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("securityMonitoringConditionsId", request.SecurityMonitoringConditionsId),
            ],
            [new Param("riskAssessmentType", request.RiskAssessmentType)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1SecurityMonitoringCondition>(),
            ApigeeOrganizationsSecurityMonitoringConditionsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List securityMonitoringConditions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityMonitoringConditionsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List security monitoring conditions.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse> ApigeeOrganizationsSecurityMonitoringConditionsList(ApigeeOrganizationsSecurityMonitoringConditionsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityMonitoringConditions"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("riskAssessmentType", request.RiskAssessmentType),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse>(),
            ApigeeOrganizationsSecurityMonitoringConditionsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch securityMonitoringConditions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityMonitoringCondition"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityMonitoringConditionsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a security monitoring condition.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityMonitoringCondition> ApigeeOrganizationsSecurityMonitoringConditionsPatch(ApigeeOrganizationsSecurityMonitoringConditionsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/securityMonitoringConditions/{securityMonitoringConditionsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("securityMonitoringConditionsId", request.SecurityMonitoringConditionsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SecurityMonitoringCondition>(),
            ApigeeOrganizationsSecurityMonitoringConditionsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create securityProfiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityProfile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityProfilesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// CreateSecurityProfile create a new custom security profile.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityProfile> ApigeeOrganizationsSecurityProfilesCreate(ApigeeOrganizationsSecurityProfilesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityProfiles"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("securityProfileId", request.SecurityProfileId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SecurityProfile>(),
            ApigeeOrganizationsSecurityProfilesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete securityProfiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityProfilesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// DeleteSecurityProfile delete a profile with all its revisions.
    /// </remarks>
    public Task<object> ApigeeOrganizationsSecurityProfilesDelete(ApigeeOrganizationsSecurityProfilesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("securityProfilesId", request.SecurityProfilesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApigeeOrganizationsSecurityProfilesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Compute environment scores environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ComputeEnvironmentScoresResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ComputeEnvironmentScores calculates scores for requested time range for the specified security profile and environment.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ComputeEnvironmentScoresResponse> ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScores(ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}/environments/{environmentsId}:computeEnvironmentScores"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("securityProfilesId", request.SecurityProfilesId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1ComputeEnvironmentScoresResponse>(),
            ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityProfilesEnvironmentsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// CreateSecurityProfileEnvironmentAssociation creates profile environment association i.e. attaches environment to security profile.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation> ApigeeOrganizationsSecurityProfilesEnvironmentsCreate(ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}/environments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("securityProfilesId", request.SecurityProfilesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation>(),
            ApigeeOrganizationsSecurityProfilesEnvironmentsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// DeleteSecurityProfileEnvironmentAssociation removes profile environment association i.e. detaches environment from security profile.
    /// </remarks>
    public Task<object> ApigeeOrganizationsSecurityProfilesEnvironmentsDelete(ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}/environments/{environmentsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("securityProfilesId", request.SecurityProfilesId),
                new TemplateParam("environmentsId", request.EnvironmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get securityProfiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityProfile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityProfilesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// GetSecurityProfile gets the specified security profile. Returns NOT_FOUND if security profile is not present for the specified organization.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityProfile> ApigeeOrganizationsSecurityProfilesGet(ApigeeOrganizationsSecurityProfilesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("securityProfilesId", request.SecurityProfilesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1SecurityProfile>(),
            ApigeeOrganizationsSecurityProfilesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List securityProfiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListSecurityProfilesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityProfilesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ListSecurityProfiles lists all the security profiles associated with the org including attached and unattached profiles.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListSecurityProfilesResponse> ApigeeOrganizationsSecurityProfilesList(ApigeeOrganizationsSecurityProfilesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityProfiles"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListSecurityProfilesResponse>(),
            ApigeeOrganizationsSecurityProfilesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List revisions securityProfiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityProfilesListRevisionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ListSecurityProfileRevisions lists all the revisions of the security profile.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse> ApigeeOrganizationsSecurityProfilesListRevisions(ApigeeOrganizationsSecurityProfilesListRevisionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}:listRevisions"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("securityProfilesId", request.SecurityProfilesId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse>(),
            ApigeeOrganizationsSecurityProfilesListRevisionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch securityProfiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityProfile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityProfilesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// UpdateSecurityProfile update the metadata of security profile.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityProfile> ApigeeOrganizationsSecurityProfilesPatch(ApigeeOrganizationsSecurityProfilesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("securityProfilesId", request.SecurityProfilesId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SecurityProfile>(),
            ApigeeOrganizationsSecurityProfilesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create securityProfilesV2
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityProfileV2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityProfilesV2CreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a security profile v2.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityProfileV2> ApigeeOrganizationsSecurityProfilesV2Create(ApigeeOrganizationsSecurityProfilesV2CreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityProfilesV2"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("securityProfileV2Id", request.SecurityProfileV2Id)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SecurityProfileV2>(),
            ApigeeOrganizationsSecurityProfilesV2CreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete securityProfilesV2
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityProfilesV2DeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a security profile v2.
    /// </remarks>
    public Task<object> ApigeeOrganizationsSecurityProfilesV2Delete(ApigeeOrganizationsSecurityProfilesV2DeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityProfilesV2/{securityProfilesV2Id}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("securityProfilesV2Id", request.SecurityProfilesV2Id),
            ],
            [new Param("riskAssessmentType", request.RiskAssessmentType)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApigeeOrganizationsSecurityProfilesV2DeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get securityProfilesV2
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityProfileV2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityProfilesV2GetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a security profile v2.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityProfileV2> ApigeeOrganizationsSecurityProfilesV2Get(ApigeeOrganizationsSecurityProfilesV2GetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityProfilesV2/{securityProfilesV2Id}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("securityProfilesV2Id", request.SecurityProfilesV2Id),
            ],
            [new Param("riskAssessmentType", request.RiskAssessmentType)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1SecurityProfileV2>(),
            ApigeeOrganizationsSecurityProfilesV2GetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List securityProfilesV2
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListSecurityProfilesV2Response"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityProfilesV2ListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List security profiles v2.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListSecurityProfilesV2Response> ApigeeOrganizationsSecurityProfilesV2List(ApigeeOrganizationsSecurityProfilesV2ListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityProfilesV2"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("riskAssessmentType", request.RiskAssessmentType),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListSecurityProfilesV2Response>(),
            ApigeeOrganizationsSecurityProfilesV2ListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch securityProfilesV2
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecurityProfileV2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSecurityProfilesV2PatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a security profile V2.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecurityProfileV2> ApigeeOrganizationsSecurityProfilesV2Patch(ApigeeOrganizationsSecurityProfilesV2PatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securityProfilesV2/{securityProfilesV2Id}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("securityProfilesV2Id", request.SecurityProfilesV2Id),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SecurityProfileV2>(),
            ApigeeOrganizationsSecurityProfilesV2PatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set addons organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSetAddonsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Configures the add-ons for the Apigee organization. The existing add-on configuration will be fully replaced.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsSetAddons(ApigeeOrganizationsSetAddonsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}:setAddons"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsSetAddonsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set sync authorization organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SyncAuthorization"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSetSyncAuthorizationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the permissions required to allow the Synchronizer to download environment data from the control plane. You must call this API to enable proper functioning of hybrid. Pass the ETag when calling <c>setSyncAuthorization</c> to ensure that you are updating the correct version. To get an ETag, call getSyncAuthorization. If you don't pass the ETag in the call to <c>setSyncAuthorization</c>, then the existing authorization is overwritten indiscriminately. For more information, see Configure the Synchronizer. <b>Note</b>: Available to Apigee hybrid only.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SyncAuthorization> ApigeeOrganizationsSetSyncAuthorization(ApigeeOrganizationsSetSyncAuthorizationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}:setSyncAuthorization"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SyncAuthorization>(),
            ApigeeOrganizationsSetSyncAuthorizationError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create sharedflows
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SharedFlowRevision"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSharedflowsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Uploads a ZIP-formatted shared flow configuration bundle to an organization. If the shared flow already exists, this creates a new revision of it. If the shared flow does not exist, this creates it. Once imported, the shared flow revision must be deployed before it can be accessed at runtime. The size limit of a shared flow bundle is 15 MB.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SharedFlowRevision> ApigeeOrganizationsSharedflowsCreate(ApigeeOrganizationsSharedflowsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sharedflows"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("action", request.Action), new Param("name", request.Name), new Param("space", request.Space)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SharedFlowRevision>(),
            ApigeeOrganizationsSharedflowsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete sharedflows
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SharedFlow"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSharedflowsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a shared flow and all it's revisions. The shared flow must be undeployed before you can delete it.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SharedFlow> ApigeeOrganizationsSharedflowsDelete(ApigeeOrganizationsSharedflowsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sharedflowsId", request.SharedflowsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1SharedFlow>(),
            ApigeeOrganizationsSharedflowsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListDeploymentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSharedflowsDeploymentsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all deployments of a shared flow.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListDeploymentsResponse> ApigeeOrganizationsSharedflowsDeploymentsList(ApigeeOrganizationsSharedflowsDeploymentsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}/deployments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sharedflowsId", request.SharedflowsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListDeploymentsResponse>(),
            ApigeeOrganizationsSharedflowsDeploymentsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get sharedflows
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SharedFlow"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSharedflowsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a shared flow by name, including a list of its revisions.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SharedFlow> ApigeeOrganizationsSharedflowsGet(ApigeeOrganizationsSharedflowsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sharedflowsId", request.SharedflowsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1SharedFlow>(),
            ApigeeOrganizationsSharedflowsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List sharedflows
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListSharedFlowsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSharedflowsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all shared flows in the organization. If the resource has the <c>space</c> attribute set, the response may not return all resources. To learn more, read the Apigee Spaces Overview.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListSharedFlowsResponse> ApigeeOrganizationsSharedflowsList(ApigeeOrganizationsSharedflowsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sharedflows"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [
                new Param("includeMetaData", request.IncludeMetaData),
                new Param("includeRevisions", request.IncludeRevisions),
                new Param("space", request.Space),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListSharedFlowsResponse>(),
            ApigeeOrganizationsSharedflowsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Move sharedflows
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SharedFlow"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSharedflowsMoveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Moves an shared flow to a different space.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SharedFlow> ApigeeOrganizationsSharedflowsMove(ApigeeOrganizationsSharedflowsMoveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}:move"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sharedflowsId", request.SharedflowsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SharedFlow>(),
            ApigeeOrganizationsSharedflowsMoveError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete revisions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SharedFlowRevision"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSharedflowsRevisionsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a shared flow and all associated policies, resources, and revisions. You must undeploy the shared flow before deleting it.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SharedFlowRevision> ApigeeOrganizationsSharedflowsRevisionsDelete(ApigeeOrganizationsSharedflowsRevisionsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sharedflowsId", request.SharedflowsId),
                new TemplateParam("revisionsId", request.RevisionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1SharedFlowRevision>(),
            ApigeeOrganizationsSharedflowsRevisionsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListDeploymentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSharedflowsRevisionsDeploymentsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all deployments of a shared flow revision.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListDeploymentsResponse> ApigeeOrganizationsSharedflowsRevisionsDeploymentsList(ApigeeOrganizationsSharedflowsRevisionsDeploymentsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}/deployments"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sharedflowsId", request.SharedflowsId),
                new TemplateParam("revisionsId", request.RevisionsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListDeploymentsResponse>(),
            ApigeeOrganizationsSharedflowsRevisionsDeploymentsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get revisions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleApiHttpBody"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSharedflowsRevisionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a revision of a shared flow. To download the shared flow configuration bundle for the specified revision as a zip file, set the <c>format</c> query parameter to <c>bundle</c>. If you are using curl, specify <c>-o filename.zip</c> to save the output to a file; otherwise, it displays to <c>stdout</c>. Then, develop the shared flow configuration locally and upload the updated sharedFlow configuration revision, as described in updateSharedFlowRevision.
    /// </remarks>
    public Task<GoogleApiHttpBody> ApigeeOrganizationsSharedflowsRevisionsGet(ApigeeOrganizationsSharedflowsRevisionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sharedflowsId", request.SharedflowsId),
                new TemplateParam("revisionsId", request.RevisionsId),
            ],
            [new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleApiHttpBody>(),
            ApigeeOrganizationsSharedflowsRevisionsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update shared flow revision revisions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SharedFlowRevision"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a shared flow revision. This operation is only allowed on revisions which have never been deployed. After deployment a revision becomes immutable, even if it becomes undeployed. The payload is a ZIP-formatted shared flow. Content type must be either multipart/form-data or application/octet-stream.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SharedFlowRevision> ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevision(ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sharedflowsId", request.SharedflowsId),
                new TemplateParam("revisionsId", request.RevisionsId),
            ],
            [new Param("validate", request.Validate)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SharedFlowRevision>(),
            ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create apicategories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiCategoryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSitesApicategoriesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new API category.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiCategoryResponse> ApigeeOrganizationsSitesApicategoriesCreate(ApigeeOrganizationsSitesApicategoriesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sites/{sitesId}/apicategories"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sitesId", request.SitesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1ApiCategoryResponse>(),
            ApigeeOrganizationsSitesApicategoriesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete apicategories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeleteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSitesApicategoriesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an API category.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeleteResponse> ApigeeOrganizationsSitesApicategoriesDelete(ApigeeOrganizationsSitesApicategoriesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sites/{sitesId}/apicategories/{apicategoriesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sitesId", request.SitesId),
                new TemplateParam("apicategoriesId", request.ApicategoriesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1DeleteResponse>(),
            ApigeeOrganizationsSitesApicategoriesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get apicategories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiCategoryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSitesApicategoriesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets an API category.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiCategoryResponse> ApigeeOrganizationsSitesApicategoriesGet(ApigeeOrganizationsSitesApicategoriesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sites/{sitesId}/apicategories/{apicategoriesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sitesId", request.SitesId),
                new TemplateParam("apicategoriesId", request.ApicategoriesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ApiCategoryResponse>(),
            ApigeeOrganizationsSitesApicategoriesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List apicategories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListApiCategoriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSitesApicategoriesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the API categories associated with a portal.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListApiCategoriesResponse> ApigeeOrganizationsSitesApicategoriesList(ApigeeOrganizationsSitesApicategoriesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sites/{sitesId}/apicategories"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sitesId", request.SitesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListApiCategoriesResponse>(),
            ApigeeOrganizationsSitesApicategoriesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch apicategories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiCategoryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSitesApicategoriesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an API category.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiCategoryResponse> ApigeeOrganizationsSitesApicategoriesPatch(ApigeeOrganizationsSitesApicategoriesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sites/{sitesId}/apicategories/{apicategoriesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sitesId", request.SitesId),
                new TemplateParam("apicategoriesId", request.ApicategoriesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1ApiCategoryResponse>(),
            ApigeeOrganizationsSitesApicategoriesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create apidocs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiDocResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSitesApidocsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new catalog item.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiDocResponse> ApigeeOrganizationsSitesApidocsCreate(ApigeeOrganizationsSitesApidocsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sites/{sitesId}/apidocs"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sitesId", request.SitesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1ApiDocResponse>(),
            ApigeeOrganizationsSitesApidocsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete apidocs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1DeleteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSitesApidocsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a catalog item.
    /// </remarks>
    public Task<GoogleCloudApigeeV1DeleteResponse> ApigeeOrganizationsSitesApidocsDelete(ApigeeOrganizationsSitesApidocsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sites/{sitesId}/apidocs/{apidocsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sitesId", request.SitesId),
                new TemplateParam("apidocsId", request.ApidocsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1DeleteResponse>(),
            ApigeeOrganizationsSitesApidocsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get apidocs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiDocResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSitesApidocsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a catalog item.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiDocResponse> ApigeeOrganizationsSitesApidocsGet(ApigeeOrganizationsSitesApidocsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sites/{sitesId}/apidocs/{apidocsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sitesId", request.SitesId),
                new TemplateParam("apidocsId", request.ApidocsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ApiDocResponse>(),
            ApigeeOrganizationsSitesApidocsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get documentation apidocs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiDocDocumentationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSitesApidocsGetDocumentationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the documentation for the specified catalog item.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiDocDocumentationResponse> ApigeeOrganizationsSitesApidocsGetDocumentation(ApigeeOrganizationsSitesApidocsGetDocumentationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sites/{sitesId}/apidocs/{apidocsId}/documentation"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sitesId", request.SitesId),
                new TemplateParam("apidocsId", request.ApidocsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ApiDocDocumentationResponse>(),
            ApigeeOrganizationsSitesApidocsGetDocumentationError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List apidocs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListApiDocsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSitesApidocsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the catalog items associated with a portal.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListApiDocsResponse> ApigeeOrganizationsSitesApidocsList(ApigeeOrganizationsSitesApidocsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sites/{sitesId}/apidocs"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sitesId", request.SitesId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListApiDocsResponse>(),
            ApigeeOrganizationsSitesApidocsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update apidocs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiDocResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSitesApidocsUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a catalog item.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiDocResponse> ApigeeOrganizationsSitesApidocsUpdate(ApigeeOrganizationsSitesApidocsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sites/{sitesId}/apidocs/{apidocsId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sitesId", request.SitesId),
                new TemplateParam("apidocsId", request.ApidocsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1ApiDocResponse>(),
            ApigeeOrganizationsSitesApidocsUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update documentation apidocs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ApiDocDocumentationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSitesApidocsUpdateDocumentationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the documentation for the specified catalog item. Note that the documentation file contents will not be populated in the return message.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ApiDocDocumentationResponse> ApigeeOrganizationsSitesApidocsUpdateDocumentation(ApigeeOrganizationsSitesApidocsUpdateDocumentationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/sites/{sitesId}/apidocs/{apidocsId}/documentation"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("sitesId", request.SitesId),
                new TemplateParam("apidocsId", request.ApidocsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1ApiDocDocumentationResponse>(),
            ApigeeOrganizationsSitesApidocsUpdateDocumentationError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create spaces
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Space"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSpacesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a space under an organization.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Space> ApigeeOrganizationsSpacesCreate(ApigeeOrganizationsSpacesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/spaces"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("spaceId", request.SpaceId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Space>(),
            ApigeeOrganizationsSpacesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete spaces
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSpacesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an organization space.
    /// </remarks>
    public Task<object> ApigeeOrganizationsSpacesDelete(ApigeeOrganizationsSpacesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/spaces/{spacesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("spacesId", request.SpacesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApigeeOrganizationsSpacesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get spaces
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Space"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSpacesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a space under an Organization.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Space> ApigeeOrganizationsSpacesGet(ApigeeOrganizationsSpacesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/spaces/{spacesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("spacesId", request.SpacesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1Space>(),
            ApigeeOrganizationsSpacesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy spaces
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleIamV1Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSpacesGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Callers must have apigee.spaces.getIamPolicy.
    /// </remarks>
    public Task<GoogleIamV1Policy> ApigeeOrganizationsSpacesGetIamPolicy(ApigeeOrganizationsSpacesGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/spaces/{spacesId}:getIamPolicy"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("spacesId", request.SpacesId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleIamV1Policy>(),
            ApigeeOrganizationsSpacesGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List spaces
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListSpacesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSpacesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists spaces under an organization.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListSpacesResponse> ApigeeOrganizationsSpacesList(ApigeeOrganizationsSpacesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/spaces"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListSpacesResponse>(),
            ApigeeOrganizationsSpacesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch spaces
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Space"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSpacesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a space.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Space> ApigeeOrganizationsSpacesPatch(ApigeeOrganizationsSpacesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/spaces/{spacesId}"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("spacesId", request.SpacesId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Space>(),
            ApigeeOrganizationsSpacesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy spaces
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleIamV1Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSpacesSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// IAM META APIs Callers must have apigee.spaces.setIamPolicy.
    /// </remarks>
    public Task<GoogleIamV1Policy> ApigeeOrganizationsSpacesSetIamPolicy(ApigeeOrganizationsSpacesSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/spaces/{spacesId}:setIamPolicy"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("spacesId", request.SpacesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleIamV1Policy>(),
            ApigeeOrganizationsSpacesSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions spaces
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleIamV1TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsSpacesTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Callers don't need any permissions.
    /// </remarks>
    public Task<GoogleIamV1TestIamPermissionsResponse> ApigeeOrganizationsSpacesTestIamPermissions(ApigeeOrganizationsSpacesTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/spaces/{spacesId}:testIamPermissions"),
            [
                new TemplateParam("organizationsId", request.OrganizationsId),
                new TemplateParam("spacesId", request.SpacesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleIamV1TestIamPermissionsResponse>(),
            ApigeeOrganizationsSpacesTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1Organization"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the properties for an Apigee organization. No other fields in the organization profile will be updated.
    /// </remarks>
    public Task<GoogleCloudApigeeV1Organization> ApigeeOrganizationsUpdate(ApigeeOrganizationsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1Organization>(),
            ApigeeOrganizationsUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update control plane access organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsUpdateControlPlaneAccessError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the permissions required to allow Apigee runtime-plane components access to the control plane. Currently, the permissions required are to: 1. Allow runtime components to publish analytics data to the control plane. <b>Note</b>: Available to Apigee hybrid only.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeOrganizationsUpdateControlPlaneAccess(ApigeeOrganizationsUpdateControlPlaneAccessRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/controlPlaneAccess"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeOrganizationsUpdateControlPlaneAccessError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update security settings organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1SecuritySettings"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeOrganizationsUpdateSecuritySettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// UpdateSecuritySettings updates the current security settings for API Security.
    /// </remarks>
    public Task<GoogleCloudApigeeV1SecuritySettings> ApigeeOrganizationsUpdateSecuritySettings(ApigeeOrganizationsUpdateSecuritySettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/organizations/{organizationsId}/securitySettings"),
            [new TemplateParam("organizationsId", request.OrganizationsId)],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApigeeV1SecuritySettings>(),
            ApigeeOrganizationsUpdateSecuritySettingsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
