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
using Apigee.Requests.Projects;

namespace Apigee.Api;

public sealed class Projects
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Projects(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Provision organization projects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeProjectsProvisionOrganizationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provisions a new Apigee organization with a functioning runtime. This is the standard way to create trial organizations for a free Apigee trial.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApigeeProjectsProvisionOrganization(ApigeeProjectsProvisionOrganizationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}:provisionOrganization"),
            [new TemplateParam("projectsId", request.ProjectsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApigeeProjectsProvisionOrganizationError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get addons
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Addon"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsAddonsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get an addon.
    /// </remarks>
    public Task<GoogleCloudApihubV1Addon> ApihubProjectsLocationsAddonsGet(ApihubProjectsLocationsAddonsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/addons/{addonsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("addonsId", request.AddonsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1Addon>(),
            ApihubProjectsLocationsAddonsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List addons
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ListAddonsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsAddonsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List addons.
    /// </remarks>
    public Task<GoogleCloudApihubV1ListAddonsResponse> ApihubProjectsLocationsAddonsList(ApihubProjectsLocationsAddonsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/addons"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ListAddonsResponse>(),
            ApihubProjectsLocationsAddonsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Manage config addons
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsAddonsManageConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Manage addon config. This RPC is used for managing the config of the addon. Calling this RPC moves the addon into an updating state until the long-running operation succeeds.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApihubProjectsLocationsAddonsManageConfig(ApihubProjectsLocationsAddonsManageConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/addons/{addonsId}:manageConfig"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("addonsId", request.AddonsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApihubProjectsLocationsAddonsManageConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create apiHubInstances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApiHubInstancesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provisions instance resources for the API Hub.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApihubProjectsLocationsApiHubInstancesCreate(ApihubProjectsLocationsApiHubInstancesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("apiHubInstanceId", request.ApiHubInstanceId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApihubProjectsLocationsApiHubInstancesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete apiHubInstances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApiHubInstancesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the API hub instance. Deleting the API hub instance will also result in the removal of all associated runtime project attachments and the host project registration.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApihubProjectsLocationsApiHubInstancesDelete(ApihubProjectsLocationsApiHubInstancesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances/{apiHubInstancesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apiHubInstancesId", request.ApiHubInstancesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApihubProjectsLocationsApiHubInstancesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get apiHubInstances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ApiHubInstance"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApiHubInstancesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets details of a single API Hub instance.
    /// </remarks>
    public Task<GoogleCloudApihubV1ApiHubInstance> ApihubProjectsLocationsApiHubInstancesGet(ApihubProjectsLocationsApiHubInstancesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances/{apiHubInstancesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apiHubInstancesId", request.ApiHubInstancesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ApiHubInstance>(),
            ApihubProjectsLocationsApiHubInstancesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Lookup apiHubInstances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1LookupApiHubInstanceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApiHubInstancesLookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Looks up an Api Hub instance in a given Google Cloud project. There will always be only one Api Hub instance for a Google Cloud project across all locations.
    /// </remarks>
    public Task<GoogleCloudApihubV1LookupApiHubInstanceResponse> ApihubProjectsLocationsApiHubInstancesLookup(ApihubProjectsLocationsApiHubInstancesLookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances:lookup"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1LookupApiHubInstanceResponse>(),
            ApihubProjectsLocationsApiHubInstancesLookupError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch apiHubInstances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApiHubInstancesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an Api Hub instance. The following fields in the ApiHubInstance can be updated: * disable_search * vertex_location * agent_registry_sync_config The update_mask should be used to specify the fields being updated.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApihubProjectsLocationsApiHubInstancesPatch(ApihubProjectsLocationsApiHubInstancesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances/{apiHubInstancesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apiHubInstancesId", request.ApiHubInstancesId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApihubProjectsLocationsApiHubInstancesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Api"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an API resource in the API hub. Once an API resource is created, versions can be added to it.
    /// </remarks>
    public Task<GoogleCloudApihubV1Api> ApihubProjectsLocationsApisCreate(ApihubProjectsLocationsApisCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("apiId", request.ApiId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1Api>(),
            ApihubProjectsLocationsApisCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an API resource in the API hub. API can only be deleted if all underlying versions are deleted.
    /// </remarks>
    public Task<object> ApihubProjectsLocationsApisDelete(ApihubProjectsLocationsApisDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [new Param("force", request.Force)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApihubProjectsLocationsApisDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Api"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get API resource details including the API versions contained in it.
    /// </remarks>
    public Task<GoogleCloudApihubV1Api> ApihubProjectsLocationsApisGet(ApihubProjectsLocationsApisGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1Api>(),
            ApihubProjectsLocationsApisGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ListApisResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List API resources in the API hub.
    /// </remarks>
    public Task<GoogleCloudApihubV1ListApisResponse> ApihubProjectsLocationsApisList(ApihubProjectsLocationsApisListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ListApisResponse>(),
            ApihubProjectsLocationsApisListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Api"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an API resource in the API hub. The following fields in the API can be updated: * display_name * description * owner * documentation * target_user * team * business_unit * maturity_level * api_style * attributes * fingerprint The update_mask should be used to specify the fields being updated. Updating the owner field requires complete owner message and updates both owner and email fields.
    /// </remarks>
    public Task<GoogleCloudApihubV1Api> ApihubProjectsLocationsApisPatch(ApihubProjectsLocationsApisPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1Api>(),
            ApihubProjectsLocationsApisPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create versions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Version"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an API version for an API resource in the API hub.
    /// </remarks>
    public Task<GoogleCloudApihubV1Version> ApihubProjectsLocationsApisVersionsCreate(ApihubProjectsLocationsApisVersionsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [new Param("versionId", request.VersionId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1Version>(),
            ApihubProjectsLocationsApisVersionsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get definitions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Definition"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsDefinitionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about a definition in an API version.
    /// </remarks>
    public Task<GoogleCloudApihubV1Definition> ApihubProjectsLocationsApisVersionsDefinitionsGet(ApihubProjectsLocationsApisVersionsDefinitionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/definitions/{definitionsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("versionsId", request.VersionsId),
                new TemplateParam("definitionsId", request.DefinitionsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1Definition>(),
            ApihubProjectsLocationsApisVersionsDefinitionsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete versions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an API version. Version can only be deleted if all underlying specs, operations, definitions and linked deployments are deleted.
    /// </remarks>
    public Task<object> ApihubProjectsLocationsApisVersionsDelete(ApihubProjectsLocationsApisVersionsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("versionsId", request.VersionsId),
            ],
            [new Param("force", request.Force)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApihubProjectsLocationsApisVersionsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get versions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Version"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about the API version of an API resource. This will include information about the specs and operations present in the API version as well as the deployments linked to it.
    /// </remarks>
    public Task<GoogleCloudApihubV1Version> ApihubProjectsLocationsApisVersionsGet(ApihubProjectsLocationsApisVersionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("versionsId", request.VersionsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1Version>(),
            ApihubProjectsLocationsApisVersionsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List versions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ListVersionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List API versions of an API resource in the API hub.
    /// </remarks>
    public Task<GoogleCloudApihubV1ListVersionsResponse> ApihubProjectsLocationsApisVersionsList(ApihubProjectsLocationsApisVersionsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ListVersionsResponse>(),
            ApihubProjectsLocationsApisVersionsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ApiOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsOperationsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an apiOperation in an API version. An apiOperation can be created only if the version has no apiOperations which were created by parsing a spec.
    /// </remarks>
    public Task<GoogleCloudApihubV1ApiOperation> ApihubProjectsLocationsApisVersionsOperationsCreate(ApihubProjectsLocationsApisVersionsOperationsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("versionsId", request.VersionsId),
            ],
            [new Param("apiOperationId", request.ApiOperationId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1ApiOperation>(),
            ApihubProjectsLocationsApisVersionsOperationsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsOperationsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an operation in an API version and we can delete only the operations created via create API. If the operation was created by parsing the spec, then it can be deleted by editing or deleting the spec. Deleting an operation will also remove any links between the operation and deployments.
    /// </remarks>
    public Task<object> ApihubProjectsLocationsApisVersionsOperationsDelete(ApihubProjectsLocationsApisVersionsOperationsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations/{operationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("versionsId", request.VersionsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApihubProjectsLocationsApisVersionsOperationsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ApiOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsOperationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about a particular operation in API version.
    /// </remarks>
    public Task<GoogleCloudApihubV1ApiOperation> ApihubProjectsLocationsApisVersionsOperationsGet(ApihubProjectsLocationsApisVersionsOperationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations/{operationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("versionsId", request.VersionsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ApiOperation>(),
            ApihubProjectsLocationsApisVersionsOperationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ListApiOperationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsOperationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List operations in an API version.
    /// </remarks>
    public Task<GoogleCloudApihubV1ListApiOperationsResponse> ApihubProjectsLocationsApisVersionsOperationsList(ApihubProjectsLocationsApisVersionsOperationsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("versionsId", request.VersionsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ListApiOperationsResponse>(),
            ApihubProjectsLocationsApisVersionsOperationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ApiOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsOperationsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an operation in an API version. The following fields in the ApiOperation resource can be updated: * details.description * details.documentation * details.http_operation.path * details.http_operation.method * details.deprecated * attributes * details.mcp_tool.title * details.mcp_tool.description * details.mcp_tool.input_schema * details.mcp_tool.output_schema * details.input_schema * details.output_schema * details.mcp_tool.annotations.title * details.mcp_tool.annotations.read_only_hint * details.mcp_tool.annotations.destructive_hint * details.mcp_tool.annotations.idempotent_hint * details.mcp_tool.annotations.open_world_hint * details.mcp_tool.annotations.additional_hints The update_mask should be used to specify the fields being updated. An operation can be updated only if the operation was created via CreateApiOperation API. If the operation was created by parsing the spec, then it can be edited by updating the spec.
    /// </remarks>
    public Task<GoogleCloudApihubV1ApiOperation> ApihubProjectsLocationsApisVersionsOperationsPatch(ApihubProjectsLocationsApisVersionsOperationsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations/{operationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("versionsId", request.VersionsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1ApiOperation>(),
            ApihubProjectsLocationsApisVersionsOperationsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch versions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Version"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update API version. The following fields in the version can be updated currently: * display_name * description * documentation * deployments * lifecycle * compliance * accreditation * attributes The update_mask should be used to specify the fields being updated.
    /// </remarks>
    public Task<GoogleCloudApihubV1Version> ApihubProjectsLocationsApisVersionsPatch(ApihubProjectsLocationsApisVersionsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("versionsId", request.VersionsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1Version>(),
            ApihubProjectsLocationsApisVersionsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create specs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Spec"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsSpecsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add a spec to an API version in the API hub. Multiple specs can be added to an API version. Note, while adding a spec, at least one of <c>contents</c> or <c>source_uri</c> must be provided. If <c>contents</c> is provided, then <c>spec_type</c> must also be provided. On adding a spec with contents to the version, the operations present in it will be added to the version.Note that the file contents in the spec should be of the same type as defined in the <c>projects/{project}/locations/{location}/attributes/system-spec-type</c> attribute associated with spec resource. Note that specs of various types can be uploaded, however parsing of details is supported for OpenAPI spec currently. In order to access the information parsed from the spec, use the GetSpec method. In order to access the raw contents for a particular spec, use the GetSpecContents method. In order to access the operations parsed from the spec, use the ListAPIOperations method.
    /// </remarks>
    public Task<GoogleCloudApihubV1Spec> ApihubProjectsLocationsApisVersionsSpecsCreate(ApihubProjectsLocationsApisVersionsSpecsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("versionsId", request.VersionsId),
            ],
            [new Param("specId", request.SpecId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1Spec>(),
            ApihubProjectsLocationsApisVersionsSpecsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete specs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsSpecsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a spec. Deleting a spec will also delete the associated operations from the version and remove any links between the spec and deployments.
    /// </remarks>
    public Task<object> ApihubProjectsLocationsApisVersionsSpecsDelete(ApihubProjectsLocationsApisVersionsSpecsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("versionsId", request.VersionsId),
                new TemplateParam("specsId", request.SpecsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApihubProjectsLocationsApisVersionsSpecsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch additional spec content specs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1FetchAdditionalSpecContentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch additional spec content.
    /// </remarks>
    public Task<GoogleCloudApihubV1FetchAdditionalSpecContentResponse> ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContent(ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}:fetchAdditionalSpecContent"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("versionsId", request.VersionsId),
                new TemplateParam("specsId", request.SpecsId),
            ],
            [new Param("specContentType", request.SpecContentType)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1FetchAdditionalSpecContentResponse>(),
            ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get specs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Spec"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsSpecsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about the information parsed from a spec. Note that this method does not return the raw spec contents. Use GetSpecContents method to retrieve the same.
    /// </remarks>
    public Task<GoogleCloudApihubV1Spec> ApihubProjectsLocationsApisVersionsSpecsGet(ApihubProjectsLocationsApisVersionsSpecsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("versionsId", request.VersionsId),
                new TemplateParam("specsId", request.SpecsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1Spec>(),
            ApihubProjectsLocationsApisVersionsSpecsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get contents specs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1SpecContents"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsSpecsGetContentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get spec contents.
    /// </remarks>
    public Task<GoogleCloudApihubV1SpecContents> ApihubProjectsLocationsApisVersionsSpecsGetContents(ApihubProjectsLocationsApisVersionsSpecsGetContentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}:contents"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("versionsId", request.VersionsId),
                new TemplateParam("specsId", request.SpecsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1SpecContents>(),
            ApihubProjectsLocationsApisVersionsSpecsGetContentsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Lint specs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsSpecsLintError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lints the requested spec and updates the corresponding API Spec with the lint response. This lint response will be available in all subsequent Get and List Spec calls to Core service.
    /// </remarks>
    public Task<object> ApihubProjectsLocationsApisVersionsSpecsLint(ApihubProjectsLocationsApisVersionsSpecsLintRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}:lint"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("versionsId", request.VersionsId),
                new TemplateParam("specsId", request.SpecsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            ApihubProjectsLocationsApisVersionsSpecsLintError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List specs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ListSpecsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsSpecsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List specs corresponding to a particular API resource.
    /// </remarks>
    public Task<GoogleCloudApihubV1ListSpecsResponse> ApihubProjectsLocationsApisVersionsSpecsList(ApihubProjectsLocationsApisVersionsSpecsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("versionsId", request.VersionsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ListSpecsResponse>(),
            ApihubProjectsLocationsApisVersionsSpecsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch specs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Spec"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsApisVersionsSpecsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update spec. The following fields in the spec can be updated: * display_name * source_uri * lint_response * attributes * contents * spec_type In case of an OAS spec, updating spec contents can lead to: 1. Creation, deletion and update of operations. 2. Creation, deletion and update of definitions. 3. Update of other info parsed out from the new spec. In case of contents or source_uri being present in update mask, spec_type must also be present. Also, spec_type can not be present in update mask if contents or source_uri is not present. The update_mask should be used to specify the fields being updated.
    /// </remarks>
    public Task<GoogleCloudApihubV1Spec> ApihubProjectsLocationsApisVersionsSpecsPatch(ApihubProjectsLocationsApisVersionsSpecsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("versionsId", request.VersionsId),
                new TemplateParam("specsId", request.SpecsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1Spec>(),
            ApihubProjectsLocationsApisVersionsSpecsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Attribute"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsAttributesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a user defined attribute. Certain pre defined attributes are already created by the API hub. These attributes will have type as <c>SYSTEM_DEFINED</c> and can be listed via ListAttributes method. Allowed values for the same can be updated via UpdateAttribute method.
    /// </remarks>
    public Task<GoogleCloudApihubV1Attribute> ApihubProjectsLocationsAttributesCreate(ApihubProjectsLocationsAttributesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/attributes"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("attributeId", request.AttributeId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1Attribute>(),
            ApihubProjectsLocationsAttributesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsAttributesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an attribute. Note: System defined attributes cannot be deleted. All associations of the attribute being deleted with any API hub resource will also get deleted.
    /// </remarks>
    public Task<object> ApihubProjectsLocationsAttributesDelete(ApihubProjectsLocationsAttributesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/attributes/{attributesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("attributesId", request.AttributesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApihubProjectsLocationsAttributesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Attribute"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsAttributesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about the attribute.
    /// </remarks>
    public Task<GoogleCloudApihubV1Attribute> ApihubProjectsLocationsAttributesGet(ApihubProjectsLocationsAttributesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/attributes/{attributesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("attributesId", request.AttributesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1Attribute>(),
            ApihubProjectsLocationsAttributesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ListAttributesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsAttributesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all attributes.
    /// </remarks>
    public Task<GoogleCloudApihubV1ListAttributesResponse> ApihubProjectsLocationsAttributesList(ApihubProjectsLocationsAttributesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/attributes"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ListAttributesResponse>(),
            ApihubProjectsLocationsAttributesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Attribute"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsAttributesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the attribute. The following fields in the Attribute resource can be updated: * display_name The display name can be updated for user defined attributes only. * description The description can be updated for user defined attributes only. * allowed_values To update the list of allowed values, clients need to use the fetched list of allowed values and add or remove values to or from the same list. The mutable allowed values can be updated for both user defined and System defined attributes. The immutable allowed values cannot be updated or deleted. The updated list of allowed values cannot be empty. If an allowed value that is already used by some resource's attribute is deleted, then the association between the resource and the attribute value will also be deleted. * cardinality The cardinality can be updated for user defined attributes only. Cardinality can only be increased during an update. The update_mask should be used to specify the fields being updated.
    /// </remarks>
    public Task<GoogleCloudApihubV1Attribute> ApihubProjectsLocationsAttributesPatch(ApihubProjectsLocationsAttributesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/attributes/{attributesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("attributesId", request.AttributesId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1Attribute>(),
            ApihubProjectsLocationsAttributesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Collect api data locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsCollectApiDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Collect API data from a source and push it to Hub's collect layer.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApihubProjectsLocationsCollectApiData(ApihubProjectsLocationsCollectApiDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}:collectApiData"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApihubProjectsLocationsCollectApiDataError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create curations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Curation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsCurationsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a curation resource in the API hub. Once a curation resource is created, plugin instances can start using it.
    /// </remarks>
    public Task<GoogleCloudApihubV1Curation> ApihubProjectsLocationsCurationsCreate(ApihubProjectsLocationsCurationsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/curations"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("curationId", request.CurationId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1Curation>(),
            ApihubProjectsLocationsCurationsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete curations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsCurationsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a curation resource in the API hub. A curation can only be deleted if it's not being used by any plugin instance.
    /// </remarks>
    public Task<object> ApihubProjectsLocationsCurationsDelete(ApihubProjectsLocationsCurationsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/curations/{curationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("curationsId", request.CurationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApihubProjectsLocationsCurationsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get curations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Curation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsCurationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get curation resource details.
    /// </remarks>
    public Task<GoogleCloudApihubV1Curation> ApihubProjectsLocationsCurationsGet(ApihubProjectsLocationsCurationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/curations/{curationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("curationsId", request.CurationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1Curation>(),
            ApihubProjectsLocationsCurationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List curations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ListCurationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsCurationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List curation resources in the API hub.
    /// </remarks>
    public Task<GoogleCloudApihubV1ListCurationsResponse> ApihubProjectsLocationsCurationsList(ApihubProjectsLocationsCurationsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/curations"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ListCurationsResponse>(),
            ApihubProjectsLocationsCurationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch curations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Curation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsCurationsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a curation resource in the API hub. The following fields in the curation can be updated: * display_name * description The update_mask should be used to specify the fields being updated.
    /// </remarks>
    public Task<GoogleCloudApihubV1Curation> ApihubProjectsLocationsCurationsPatch(ApihubProjectsLocationsCurationsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/curations/{curationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("curationsId", request.CurationsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1Curation>(),
            ApihubProjectsLocationsCurationsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create dependencies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Dependency"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsDependenciesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a dependency between two entities in the API hub.
    /// </remarks>
    public Task<GoogleCloudApihubV1Dependency> ApihubProjectsLocationsDependenciesCreate(ApihubProjectsLocationsDependenciesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/dependencies"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("dependencyId", request.DependencyId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1Dependency>(),
            ApihubProjectsLocationsDependenciesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete dependencies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsDependenciesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete the dependency resource.
    /// </remarks>
    public Task<object> ApihubProjectsLocationsDependenciesDelete(ApihubProjectsLocationsDependenciesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/dependencies/{dependenciesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("dependenciesId", request.DependenciesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApihubProjectsLocationsDependenciesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get dependencies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Dependency"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsDependenciesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about a dependency resource in the API hub.
    /// </remarks>
    public Task<GoogleCloudApihubV1Dependency> ApihubProjectsLocationsDependenciesGet(ApihubProjectsLocationsDependenciesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/dependencies/{dependenciesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("dependenciesId", request.DependenciesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1Dependency>(),
            ApihubProjectsLocationsDependenciesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List dependencies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ListDependenciesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsDependenciesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List dependencies based on the provided filter and pagination parameters.
    /// </remarks>
    public Task<GoogleCloudApihubV1ListDependenciesResponse> ApihubProjectsLocationsDependenciesList(ApihubProjectsLocationsDependenciesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/dependencies"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ListDependenciesResponse>(),
            ApihubProjectsLocationsDependenciesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch dependencies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Dependency"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsDependenciesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a dependency based on the update_mask provided in the request. The following fields in the dependency can be updated: * description
    /// </remarks>
    public Task<GoogleCloudApihubV1Dependency> ApihubProjectsLocationsDependenciesPatch(ApihubProjectsLocationsDependenciesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/dependencies/{dependenciesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("dependenciesId", request.DependenciesId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1Dependency>(),
            ApihubProjectsLocationsDependenciesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Deployment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsDeploymentsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a deployment resource in the API hub. Once a deployment resource is created, it can be associated with API versions.
    /// </remarks>
    public Task<GoogleCloudApihubV1Deployment> ApihubProjectsLocationsDeploymentsCreate(ApihubProjectsLocationsDeploymentsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/deployments"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("deploymentId", request.DeploymentId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1Deployment>(),
            ApihubProjectsLocationsDeploymentsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsDeploymentsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a deployment resource in the API hub. A deployment can only be deleted after its links to any versions, specs, and API operations have been removed.
    /// </remarks>
    public Task<object> ApihubProjectsLocationsDeploymentsDelete(ApihubProjectsLocationsDeploymentsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/deployments/{deploymentsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("deploymentsId", request.DeploymentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApihubProjectsLocationsDeploymentsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Deployment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsDeploymentsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about a deployment and the API versions linked to it.
    /// </remarks>
    public Task<GoogleCloudApihubV1Deployment> ApihubProjectsLocationsDeploymentsGet(ApihubProjectsLocationsDeploymentsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/deployments/{deploymentsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("deploymentsId", request.DeploymentsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1Deployment>(),
            ApihubProjectsLocationsDeploymentsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ListDeploymentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsDeploymentsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List deployment resources in the API hub.
    /// </remarks>
    public Task<GoogleCloudApihubV1ListDeploymentsResponse> ApihubProjectsLocationsDeploymentsList(ApihubProjectsLocationsDeploymentsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/deployments"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ListDeploymentsResponse>(),
            ApihubProjectsLocationsDeploymentsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Deployment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsDeploymentsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a deployment resource in the API hub. The following fields in the deployment resource can be updated: * display_name * description * documentation * deployment_type * resource_uri * endpoints * slo * environment * attributes * source_project * source_environment * management_url * source_uri The update_mask should be used to specify the fields being updated.
    /// </remarks>
    public Task<GoogleCloudApihubV1Deployment> ApihubProjectsLocationsDeploymentsPatch(ApihubProjectsLocationsDeploymentsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/deployments/{deploymentsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("deploymentsId", request.DeploymentsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1Deployment>(),
            ApihubProjectsLocationsDeploymentsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get discoveredApiOperations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1DiscoveredApiOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a DiscoveredAPIOperation in a given project, location, ApiObservation and ApiOperation.
    /// </remarks>
    public Task<GoogleCloudApihubV1DiscoveredApiOperation> ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGet(ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations/{discoveredApiObservationsId}/discoveredApiOperations/{discoveredApiOperationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("discoveredApiObservationsId", request.DiscoveredApiObservationsId),
                new TemplateParam("discoveredApiOperationsId", request.DiscoveredApiOperationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1DiscoveredApiOperation>(),
            ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List discoveredApiOperations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ListDiscoveredApiOperationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all the DiscoveredAPIOperations in a given project, location and ApiObservation.
    /// </remarks>
    public Task<GoogleCloudApihubV1ListDiscoveredApiOperationsResponse> ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsList(ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations/{discoveredApiObservationsId}/discoveredApiOperations"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("discoveredApiObservationsId", request.DiscoveredApiObservationsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ListDiscoveredApiOperationsResponse>(),
            ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get discoveredApiObservations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1DiscoveredApiObservation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsDiscoveredApiObservationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a DiscoveredAPIObservation in a given project, location and ApiObservation.
    /// </remarks>
    public Task<GoogleCloudApihubV1DiscoveredApiObservation> ApihubProjectsLocationsDiscoveredApiObservationsGet(ApihubProjectsLocationsDiscoveredApiObservationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations/{discoveredApiObservationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("discoveredApiObservationsId", request.DiscoveredApiObservationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1DiscoveredApiObservation>(),
            ApihubProjectsLocationsDiscoveredApiObservationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List discoveredApiObservations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ListDiscoveredApiObservationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsDiscoveredApiObservationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all the DiscoveredAPIObservations in a given project and location.
    /// </remarks>
    public Task<GoogleCloudApihubV1ListDiscoveredApiObservationsResponse> ApihubProjectsLocationsDiscoveredApiObservationsList(ApihubProjectsLocationsDiscoveredApiObservationsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ListDiscoveredApiObservationsResponse>(),
            ApihubProjectsLocationsDiscoveredApiObservationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create externalApis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ExternalApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsExternalApisCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an External API resource in the API hub.
    /// </remarks>
    public Task<GoogleCloudApihubV1ExternalApi> ApihubProjectsLocationsExternalApisCreate(ApihubProjectsLocationsExternalApisCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/externalApis"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("externalApiId", request.ExternalApiId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1ExternalApi>(),
            ApihubProjectsLocationsExternalApisCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete externalApis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsExternalApisDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an External API resource in the API hub.
    /// </remarks>
    public Task<object> ApihubProjectsLocationsExternalApisDelete(ApihubProjectsLocationsExternalApisDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/externalApis/{externalApisId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("externalApisId", request.ExternalApisId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApihubProjectsLocationsExternalApisDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get externalApis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ExternalApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsExternalApisGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an External API resource in the API hub.
    /// </remarks>
    public Task<GoogleCloudApihubV1ExternalApi> ApihubProjectsLocationsExternalApisGet(ApihubProjectsLocationsExternalApisGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/externalApis/{externalApisId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("externalApisId", request.ExternalApisId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ExternalApi>(),
            ApihubProjectsLocationsExternalApisGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List externalApis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ListExternalApisResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsExternalApisListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List External API resources in the API hub.
    /// </remarks>
    public Task<GoogleCloudApihubV1ListExternalApisResponse> ApihubProjectsLocationsExternalApisList(ApihubProjectsLocationsExternalApisListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/externalApis"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ListExternalApisResponse>(),
            ApihubProjectsLocationsExternalApisListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch externalApis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ExternalApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsExternalApisPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an External API resource in the API hub. The following fields can be updated: * display_name * description * documentation * endpoints * paths The update_mask should be used to specify the fields being updated.
    /// </remarks>
    public Task<GoogleCloudApihubV1ExternalApi> ApihubProjectsLocationsExternalApisPatch(ApihubProjectsLocationsExternalApisPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/externalApis/{externalApisId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("externalApisId", request.ExternalApisId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1ExternalApi>(),
            ApihubProjectsLocationsExternalApisPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Generate spec generatedSpecApis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1GenerateSpecResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsGeneratedSpecApisGenerateSpecError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Merges the per-day stored specs across the requested window and returns the merged OpenAPI document. Preview: this method is in Public Preview. Behavior and the API surface may change until the Spec Generation feature reaches General Availability.
    /// </remarks>
    public Task<GoogleCloudApihubV1GenerateSpecResponse> ApihubProjectsLocationsGeneratedSpecApisGenerateSpec(ApihubProjectsLocationsGeneratedSpecApisGenerateSpecRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/generatedSpecApis/{generatedSpecApisId}:generateSpec"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("generatedSpecApisId", request.GeneratedSpecApisId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1GenerateSpecResponse>(),
            ApihubProjectsLocationsGeneratedSpecApisGenerateSpecError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get generatedSpecApis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1GeneratedSpecApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsGeneratedSpecApisGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a single GeneratedSpecApi by resource name. Preview: this method is in Public Preview. Behavior and the API surface may change until the Spec Generation feature reaches General Availability.
    /// </remarks>
    public Task<GoogleCloudApihubV1GeneratedSpecApi> ApihubProjectsLocationsGeneratedSpecApisGet(ApihubProjectsLocationsGeneratedSpecApisGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/generatedSpecApis/{generatedSpecApisId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("generatedSpecApisId", request.GeneratedSpecApisId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1GeneratedSpecApi>(),
            ApihubProjectsLocationsGeneratedSpecApisGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List generatedSpecApis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ListGeneratedSpecApisResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsGeneratedSpecApisListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the APIs the pipeline is tracking, ordered by <c>update_time desc</c>. Preview: this method is in Public Preview. Behavior and the API surface may change until the Spec Generation feature reaches General Availability.
    /// </remarks>
    public Task<GoogleCloudApihubV1ListGeneratedSpecApisResponse> ApihubProjectsLocationsGeneratedSpecApisList(ApihubProjectsLocationsGeneratedSpecApisListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/generatedSpecApis"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ListGeneratedSpecApisResponse>(),
            ApihubProjectsLocationsGeneratedSpecApisListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudLocationLocation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets information about a location.
    /// </remarks>
    public Task<GoogleCloudLocationLocation> ApihubProjectsLocationsGet(ApihubProjectsLocationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudLocationLocation>(),
            ApihubProjectsLocationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create hostProjectRegistrations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1HostProjectRegistration"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsHostProjectRegistrationsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a host project registration. A Google cloud project can be registered as a host project if it is not attached as a runtime project to another host project. A project can have only one host project registration at a time. Subsequent register calls for the same project will fail until the existing registration is deleted.
    /// </remarks>
    public Task<GoogleCloudApihubV1HostProjectRegistration> ApihubProjectsLocationsHostProjectRegistrationsCreate(ApihubProjectsLocationsHostProjectRegistrationsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/hostProjectRegistrations"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("hostProjectRegistrationId", request.HostProjectRegistrationId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1HostProjectRegistration>(),
            ApihubProjectsLocationsHostProjectRegistrationsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get hostProjectRegistrations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1HostProjectRegistration"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsHostProjectRegistrationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a host project registration.
    /// </remarks>
    public Task<GoogleCloudApihubV1HostProjectRegistration> ApihubProjectsLocationsHostProjectRegistrationsGet(ApihubProjectsLocationsHostProjectRegistrationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/hostProjectRegistrations/{hostProjectRegistrationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("hostProjectRegistrationsId", request.HostProjectRegistrationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1HostProjectRegistration>(),
            ApihubProjectsLocationsHostProjectRegistrationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List hostProjectRegistrations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ListHostProjectRegistrationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsHostProjectRegistrationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists host project registrations.
    /// </remarks>
    public Task<GoogleCloudApihubV1ListHostProjectRegistrationsResponse> ApihubProjectsLocationsHostProjectRegistrationsList(ApihubProjectsLocationsHostProjectRegistrationsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/hostProjectRegistrations"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("orderBy", request.OrderBy),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ListHostProjectRegistrationsResponse>(),
            ApihubProjectsLocationsHostProjectRegistrationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudLocationListLocationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * <b>Global locations</b>: If <c>name</c> is empty, the method lists the public locations available to all projects. * <b>Project-specific locations</b>: If <c>name</c> follows the format <c>projects/{project}</c>, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the <c>name</c> field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.
    /// </remarks>
    public Task<GoogleCloudLocationListLocationsResponse> ApihubProjectsLocationsList(ApihubProjectsLocationsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations"),
            [new TemplateParam("projectsId", request.ProjectsId)],
            [
                new Param("extraLocationTypes", request.ExtraLocationTypes),
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudLocationListLocationsResponse>(),
            ApihubProjectsLocationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Lookup runtime project attachment locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsLookupRuntimeProjectAttachmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Look up a runtime project attachment. This API can be called in the context of any project.
    /// </remarks>
    public Task<GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse> ApihubProjectsLocationsLookupRuntimeProjectAttachment(ApihubProjectsLocationsLookupRuntimeProjectAttachmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}:lookupRuntimeProjectAttachment"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse>(),
            ApihubProjectsLocationsLookupRuntimeProjectAttachmentError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsOperationsCancelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns <c>google.rpc.Code.UNIMPLEMENTED</c>. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of <c>1</c>, corresponding to <c>Code.CANCELLED</c>.
    /// </remarks>
    public Task<object> ApihubProjectsLocationsOperationsCancel(ApihubProjectsLocationsOperationsCancelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            ApihubProjectsLocationsOperationsCancelError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsOperationsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns <c>google.rpc.Code.UNIMPLEMENTED</c>.
    /// </remarks>
    public Task<object> ApihubProjectsLocationsOperationsDelete(ApihubProjectsLocationsOperationsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApihubProjectsLocationsOperationsDeleteError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsOperationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApihubProjectsLocationsOperationsGet(ApihubProjectsLocationsOperationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApihubProjectsLocationsOperationsGetError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsOperationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns <c>UNIMPLEMENTED</c>.
    /// </remarks>
    public Task<GoogleLongrunningListOperationsResponse> ApihubProjectsLocationsOperationsList(ApihubProjectsLocationsOperationsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/operations"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
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
            ApihubProjectsLocationsOperationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create plugins
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Plugin"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsPluginsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an API Hub plugin resource in the API hub. Once a plugin is created, it can be used to create plugin instances.
    /// </remarks>
    public Task<GoogleCloudApihubV1Plugin> ApihubProjectsLocationsPluginsCreate(ApihubProjectsLocationsPluginsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/plugins"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("pluginId", request.PluginId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1Plugin>(),
            ApihubProjectsLocationsPluginsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete plugins
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsPluginsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a Plugin in API hub. Note, only user owned plugins can be deleted via this method.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApihubProjectsLocationsPluginsDelete(ApihubProjectsLocationsPluginsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pluginsId", request.PluginsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApihubProjectsLocationsPluginsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Disable plugins
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Plugin"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsPluginsDisableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Disables a plugin. The <c>state</c> of the plugin after disabling is <c>DISABLED</c>
    /// </remarks>
    public Task<GoogleCloudApihubV1Plugin> ApihubProjectsLocationsPluginsDisable(ApihubProjectsLocationsPluginsDisableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}:disable"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pluginsId", request.PluginsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1Plugin>(),
            ApihubProjectsLocationsPluginsDisableError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Enable plugins
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Plugin"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsPluginsEnableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enables a plugin. The <c>state</c> of the plugin after enabling is <c>ENABLED</c>
    /// </remarks>
    public Task<GoogleCloudApihubV1Plugin> ApihubProjectsLocationsPluginsEnable(ApihubProjectsLocationsPluginsEnableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}:enable"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pluginsId", request.PluginsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1Plugin>(),
            ApihubProjectsLocationsPluginsEnableError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get plugins
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1Plugin"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsPluginsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get an API Hub plugin.
    /// </remarks>
    public Task<GoogleCloudApihubV1Plugin> ApihubProjectsLocationsPluginsGet(ApihubProjectsLocationsPluginsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pluginsId", request.PluginsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1Plugin>(),
            ApihubProjectsLocationsPluginsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get style guide plugins
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1StyleGuide"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsPluginsGetStyleGuideError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the style guide being used for linting.
    /// </remarks>
    public Task<GoogleCloudApihubV1StyleGuide> ApihubProjectsLocationsPluginsGetStyleGuide(ApihubProjectsLocationsPluginsGetStyleGuideRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/styleGuide"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pluginsId", request.PluginsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1StyleGuide>(),
            ApihubProjectsLocationsPluginsGetStyleGuideError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsPluginsInstancesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a Plugin instance in the API hub.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApihubProjectsLocationsPluginsInstancesCreate(ApihubProjectsLocationsPluginsInstancesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pluginsId", request.PluginsId),
            ],
            [new Param("pluginInstanceId", request.PluginInstanceId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApihubProjectsLocationsPluginsInstancesCreateError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsPluginsInstancesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a plugin instance in the API hub.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApihubProjectsLocationsPluginsInstancesDelete(ApihubProjectsLocationsPluginsInstancesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pluginsId", request.PluginsId),
                new TemplateParam("instancesId", request.InstancesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApihubProjectsLocationsPluginsInstancesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Disable action instances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsPluginsInstancesDisableActionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Disables a plugin instance in the API hub.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApihubProjectsLocationsPluginsInstancesDisableAction(ApihubProjectsLocationsPluginsInstancesDisableActionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:disableAction"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pluginsId", request.PluginsId),
                new TemplateParam("instancesId", request.InstancesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApihubProjectsLocationsPluginsInstancesDisableActionError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Enable action instances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsPluginsInstancesEnableActionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enables a plugin instance in the API hub.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApihubProjectsLocationsPluginsInstancesEnableAction(ApihubProjectsLocationsPluginsInstancesEnableActionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:enableAction"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pluginsId", request.PluginsId),
                new TemplateParam("instancesId", request.InstancesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApihubProjectsLocationsPluginsInstancesEnableActionError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Execute action instances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsPluginsInstancesExecuteActionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Executes a plugin instance in the API hub.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApihubProjectsLocationsPluginsInstancesExecuteAction(ApihubProjectsLocationsPluginsInstancesExecuteActionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:executeAction"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pluginsId", request.PluginsId),
                new TemplateParam("instancesId", request.InstancesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApihubProjectsLocationsPluginsInstancesExecuteActionError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get instances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1PluginInstance"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsPluginsInstancesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get an API Hub plugin instance.
    /// </remarks>
    public Task<GoogleCloudApihubV1PluginInstance> ApihubProjectsLocationsPluginsInstancesGet(ApihubProjectsLocationsPluginsInstancesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pluginsId", request.PluginsId),
                new TemplateParam("instancesId", request.InstancesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1PluginInstance>(),
            ApihubProjectsLocationsPluginsInstancesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List instances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ListPluginInstancesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsPluginsInstancesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all the plugins in a given project and location. <c>-</c> can be used as wildcard value for {plugin_id}
    /// </remarks>
    public Task<GoogleCloudApihubV1ListPluginInstancesResponse> ApihubProjectsLocationsPluginsInstancesList(ApihubProjectsLocationsPluginsInstancesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pluginsId", request.PluginsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ListPluginInstancesResponse>(),
            ApihubProjectsLocationsPluginsInstancesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Manage source data instances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsPluginsInstancesManageSourceDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Manages data for a given plugin instance.
    /// </remarks>
    public Task<object> ApihubProjectsLocationsPluginsInstancesManageSourceData(ApihubProjectsLocationsPluginsInstancesManageSourceDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:manageSourceData"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pluginsId", request.PluginsId),
                new TemplateParam("instancesId", request.InstancesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            ApihubProjectsLocationsPluginsInstancesManageSourceDataError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch instances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1PluginInstance"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsPluginsInstancesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a plugin instance in the API hub. The following fields in the plugin_instance can be updated currently: * display_name * schedule_cron_expression The update_mask should be used to specify the fields being updated. To update the auth_config and additional_config of the plugin instance, use the ApplyPluginInstanceConfig method.
    /// </remarks>
    public Task<GoogleCloudApihubV1PluginInstance> ApihubProjectsLocationsPluginsInstancesPatch(ApihubProjectsLocationsPluginsInstancesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pluginsId", request.PluginsId),
                new TemplateParam("instancesId", request.InstancesId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1PluginInstance>(),
            ApihubProjectsLocationsPluginsInstancesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List plugins
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ListPluginsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsPluginsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all the plugins in a given project and location.
    /// </remarks>
    public Task<GoogleCloudApihubV1ListPluginsResponse> ApihubProjectsLocationsPluginsList(ApihubProjectsLocationsPluginsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/plugins"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ListPluginsResponse>(),
            ApihubProjectsLocationsPluginsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get contents styleGuide
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1StyleGuideContents"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsPluginsStyleGuideGetContentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the contents of the style guide.
    /// </remarks>
    public Task<GoogleCloudApihubV1StyleGuideContents> ApihubProjectsLocationsPluginsStyleGuideGetContents(ApihubProjectsLocationsPluginsStyleGuideGetContentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/styleGuide:contents"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pluginsId", request.PluginsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1StyleGuideContents>(),
            ApihubProjectsLocationsPluginsStyleGuideGetContentsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update style guide plugins
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1StyleGuide"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsPluginsUpdateStyleGuideError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the styleGuide to be used for liniting in by API hub.
    /// </remarks>
    public Task<GoogleCloudApihubV1StyleGuide> ApihubProjectsLocationsPluginsUpdateStyleGuide(ApihubProjectsLocationsPluginsUpdateStyleGuideRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/styleGuide"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pluginsId", request.PluginsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1StyleGuide>(),
            ApihubProjectsLocationsPluginsUpdateStyleGuideError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve api views locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1RetrieveApiViewsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsRetrieveApiViewsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve API views.
    /// </remarks>
    public Task<GoogleCloudApihubV1RetrieveApiViewsResponse> ApihubProjectsLocationsRetrieveApiViews(ApihubProjectsLocationsRetrieveApiViewsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}:retrieveApiViews"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("view", request.View),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1RetrieveApiViewsResponse>(),
            ApihubProjectsLocationsRetrieveApiViewsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create runtimeProjectAttachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1RuntimeProjectAttachment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsRuntimeProjectAttachmentsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Attaches a runtime project to the host project.
    /// </remarks>
    public Task<GoogleCloudApihubV1RuntimeProjectAttachment> ApihubProjectsLocationsRuntimeProjectAttachmentsCreate(ApihubProjectsLocationsRuntimeProjectAttachmentsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("runtimeProjectAttachmentId", request.RuntimeProjectAttachmentId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1RuntimeProjectAttachment>(),
            ApihubProjectsLocationsRuntimeProjectAttachmentsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete runtimeProjectAttachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a runtime project attachment in the API Hub. This call will detach the runtime project from the host project.
    /// </remarks>
    public Task<object> ApihubProjectsLocationsRuntimeProjectAttachmentsDelete(ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments/{runtimeProjectAttachmentsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("runtimeProjectAttachmentsId", request.RuntimeProjectAttachmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get runtimeProjectAttachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1RuntimeProjectAttachment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsRuntimeProjectAttachmentsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a runtime project attachment.
    /// </remarks>
    public Task<GoogleCloudApihubV1RuntimeProjectAttachment> ApihubProjectsLocationsRuntimeProjectAttachmentsGet(ApihubProjectsLocationsRuntimeProjectAttachmentsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments/{runtimeProjectAttachmentsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("runtimeProjectAttachmentsId", request.RuntimeProjectAttachmentsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1RuntimeProjectAttachment>(),
            ApihubProjectsLocationsRuntimeProjectAttachmentsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List runtimeProjectAttachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsRuntimeProjectAttachmentsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List runtime projects attached to the host project.
    /// </remarks>
    public Task<GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse> ApihubProjectsLocationsRuntimeProjectAttachmentsList(ApihubProjectsLocationsRuntimeProjectAttachmentsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("orderBy", request.OrderBy),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse>(),
            ApihubProjectsLocationsRuntimeProjectAttachmentsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search resources locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApihubV1SearchResourcesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsSearchResourcesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search across API-Hub resources.
    /// </remarks>
    public Task<GoogleCloudApihubV1SearchResourcesResponse> ApihubProjectsLocationsSearchResources(ApihubProjectsLocationsSearchResourcesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}:searchResources"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleCloudApihubV1SearchResourcesResponse>(),
            ApihubProjectsLocationsSearchResourcesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Configure and deploy server servers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApihubProjectsLocationsServersConfigureAndDeployServerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Configures and deploys a given server config for given target. Currently this API supports only deploying MCP server in Apigee X. For mcp server deployment in apigee X, if there is already a mcp proxy deployed, then this method will try to overwrite it by creating new revision i.e. all existing tools will be removed and new set of tools will be deployed.
    /// </remarks>
    public Task<GoogleLongrunningOperation> ApihubProjectsLocationsServersConfigureAndDeployServer(ApihubProjectsLocationsServersConfigureAndDeployServerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/servers:configureAndDeployServer"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            ApihubProjectsLocationsServersConfigureAndDeployServerError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
