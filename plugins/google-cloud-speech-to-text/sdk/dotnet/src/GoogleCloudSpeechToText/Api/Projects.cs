using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleCloudSpeechToText.Core;
using GoogleCloudSpeechToText.Core.Authentication;
using GoogleCloudSpeechToText.Core.Exceptions;
using GoogleCloudSpeechToText.Core.Models;
using GoogleCloudSpeechToText.Core.Request;
using GoogleCloudSpeechToText.Core.Response;
using GoogleCloudSpeechToText.Errors;
using GoogleCloudSpeechToText.Models;
using GoogleCloudSpeechToText.Requests.Projects;

namespace GoogleCloudSpeechToText.Api;

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
    /// Create customClasses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomClass"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpeechProjectsLocationsCustomClassesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a custom class.
    /// </remarks>
    public Task<CustomClass> SpeechProjectsLocationsCustomClassesCreate(SpeechProjectsLocationsCustomClassesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/customClasses"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomClass>(),
            SpeechProjectsLocationsCustomClassesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete customClasses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpeechProjectsLocationsCustomClassesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a custom class.
    /// </remarks>
    public Task<object> SpeechProjectsLocationsCustomClassesDelete(SpeechProjectsLocationsCustomClassesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("customClassesId", request.CustomClassesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            SpeechProjectsLocationsCustomClassesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get customClasses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomClass"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpeechProjectsLocationsCustomClassesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a custom class.
    /// </remarks>
    public Task<CustomClass> SpeechProjectsLocationsCustomClassesGet(SpeechProjectsLocationsCustomClassesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("customClassesId", request.CustomClassesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomClass>(),
            SpeechProjectsLocationsCustomClassesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List customClasses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListCustomClassesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpeechProjectsLocationsCustomClassesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List custom classes.
    /// </remarks>
    public Task<ListCustomClassesResponse> SpeechProjectsLocationsCustomClassesList(SpeechProjectsLocationsCustomClassesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/customClasses"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListCustomClassesResponse>(),
            SpeechProjectsLocationsCustomClassesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch customClasses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomClass"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpeechProjectsLocationsCustomClassesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a custom class.
    /// </remarks>
    public Task<CustomClass> SpeechProjectsLocationsCustomClassesPatch(SpeechProjectsLocationsCustomClassesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("customClassesId", request.CustomClassesId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomClass>(),
            SpeechProjectsLocationsCustomClassesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create phraseSets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PhraseSet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpeechProjectsLocationsPhraseSetsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.
    /// </remarks>
    public Task<PhraseSet> SpeechProjectsLocationsPhraseSetsCreate(SpeechProjectsLocationsPhraseSetsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/phraseSets"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PhraseSet>(),
            SpeechProjectsLocationsPhraseSetsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete phraseSets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpeechProjectsLocationsPhraseSetsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a phrase set.
    /// </remarks>
    public Task<object> SpeechProjectsLocationsPhraseSetsDelete(SpeechProjectsLocationsPhraseSetsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("phraseSetsId", request.PhraseSetsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            SpeechProjectsLocationsPhraseSetsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get phraseSets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PhraseSet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpeechProjectsLocationsPhraseSetsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a phrase set.
    /// </remarks>
    public Task<PhraseSet> SpeechProjectsLocationsPhraseSetsGet(SpeechProjectsLocationsPhraseSetsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("phraseSetsId", request.PhraseSetsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PhraseSet>(),
            SpeechProjectsLocationsPhraseSetsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List phraseSets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListPhraseSetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpeechProjectsLocationsPhraseSetsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List phrase sets.
    /// </remarks>
    public Task<ListPhraseSetResponse> SpeechProjectsLocationsPhraseSetsList(SpeechProjectsLocationsPhraseSetsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/phraseSets"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListPhraseSetResponse>(),
            SpeechProjectsLocationsPhraseSetsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch phraseSets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PhraseSet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpeechProjectsLocationsPhraseSetsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a phrase set.
    /// </remarks>
    public Task<PhraseSet> SpeechProjectsLocationsPhraseSetsPatch(SpeechProjectsLocationsPhraseSetsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("phraseSetsId", request.PhraseSetsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PhraseSet>(),
            SpeechProjectsLocationsPhraseSetsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
