using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hud.Core;
using Hud.Core.Authentication;
using Hud.Core.Exceptions;
using Hud.Core.Models;
using Hud.Core.Request;
using Hud.Core.Response;
using Hud.Errors;
using Hud.Models;
using Hud.Requests.RegistryApi;

namespace Hud.Api;

public sealed class RegistryApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal RegistryApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get Registry Source Url
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RegistrySourceUrlResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a presigned download URL for the registry's source archive.
    /// <para>
    /// Readers outside the owning team download only the latest build of a public environment
    /// whose owner published its source.
    /// </para>
    /// </remarks>
    public Task<RegistrySourceUrlResponse> GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGet(GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/registry/{registry_id}/source-url"),
            [new TemplateParam("registry_id", request.RegistryId)],
            [new Param("build_id", request.BuildId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RegistrySourceUrlResponse>(),
            GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Registry
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RegistryDetailResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRegistryV2RegistryRegistryIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a registry by id with its latest build details.
    /// </remarks>
    public Task<RegistryDetailResponse> GetRegistryV2RegistryRegistryIdGet(GetRegistryV2RegistryRegistryIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/registry/{registry_id}"),
            [new TemplateParam("registry_id", request.RegistryId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RegistryDetailResponse>(),
            GetRegistryV2RegistryRegistryIdGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Registries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedResponseRegistryDetailResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRegistriesV2RegistryGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List registries visible to the caller, with search, ownership, and sort filters.
    /// </remarks>
    public Task<PaginatedResponseRegistryDetailResponse> ListRegistriesV2RegistryGet(ListRegistriesV2RegistryGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/registry"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("search", request.Search),
                new Param("match_templates", request.MatchTemplates),
                new Param("include_latest_scenarios", request.IncludeLatestScenarios),
                new Param("public_only", request.PublicOnly),
                new Param("featured_only", request.FeaturedOnly),
                new Param("owner_only", request.OwnerOnly),
                new Param("project_id", request.ProjectId),
                new Param("sort_by", request.SortBy),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedResponseRegistryDetailResponse>(),
            ListRegistriesV2RegistryGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Registry Scenarios
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ScenarioResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRegistryScenariosV2RegistryRegistryIdScenariosGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List scenarios for a registry build (latest build by default).
    /// </remarks>
    public Task<IReadOnlyList<ScenarioResponse>> ListRegistryScenariosV2RegistryRegistryIdScenariosGet(ListRegistryScenariosV2RegistryRegistryIdScenariosGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/registry/{registry_id}/scenarios"),
            [new TemplateParam("registry_id", request.RegistryId)],
            [new Param("build_id", request.BuildId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<ScenarioResponse>>(),
            ListRegistryScenariosV2RegistryRegistryIdScenariosGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
