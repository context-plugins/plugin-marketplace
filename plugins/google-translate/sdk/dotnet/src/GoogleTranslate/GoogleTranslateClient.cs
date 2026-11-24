using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleTranslate.Core;
using GoogleTranslate.Core.Authentication;
using GoogleTranslate.Core.Configuration;
using GoogleTranslate.Core.Exceptions;
using GoogleTranslate.Core.Logging;
using GoogleTranslate.Core.Models;
using GoogleTranslate.Core.Request;
using GoogleTranslate.Core.Response;
using GoogleTranslate.Errors;
using GoogleTranslate.Models;
using GoogleTranslate.Requests;

namespace GoogleTranslate;

/// <summary>
/// Generated from Google's published Discovery document for Cloud Translation API (translate v3, revision 20261106). 51 operation(s).
/// </summary>
public sealed class GoogleTranslateClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public GoogleTranslateClient(HttpClient httpClient, GoogleTranslateClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "GoogleTranslateClient/v3 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v3"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("GOOGLE_TRANSLATE_LOG"),
            "GoogleTranslateClient",
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
        _auth = new AuthSchemes(options, _server, _rawClient, urlFactory);
    }

    /// <summary>
    /// Detect language projects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DetectLanguageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsDetectLanguageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Detects the language of text within a request.
    /// </remarks>
    public Task<DetectLanguageResponse> TranslateProjectsDetectLanguage(TranslateProjectsDetectLanguageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}:detectLanguage"),
            [new TemplateParam("projectsId", request.ProjectsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DetectLanguageResponse>(),
            TranslateProjectsDetectLanguageError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get supported languages projects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SupportedLanguages"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsGetSupportedLanguagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of supported languages for translation.
    /// </remarks>
    public Task<SupportedLanguages> TranslateProjectsGetSupportedLanguages(TranslateProjectsGetSupportedLanguagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/supportedLanguages"),
            [new TemplateParam("projectsId", request.ProjectsId)],
            [new Param("displayLanguageCode", request.DisplayLanguageCode), new Param("model", request.Model)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SupportedLanguages>(),
            TranslateProjectsGetSupportedLanguagesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List adaptiveMtSentences
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListAdaptiveMtSentencesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all AdaptiveMtSentences under a given file/dataset.
    /// </remarks>
    public Task<ListAdaptiveMtSentencesResponse> TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesList(TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}/adaptiveMtSentences"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("adaptiveMtDatasetsId", request.AdaptiveMtDatasetsId),
                new TemplateParam("adaptiveMtFilesId", request.AdaptiveMtFilesId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListAdaptiveMtSentencesResponse>(),
            TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete adaptiveMtFiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an AdaptiveMtFile along with its sentences.
    /// </remarks>
    public Task<object> TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDelete(TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("adaptiveMtDatasetsId", request.AdaptiveMtDatasetsId),
                new TemplateParam("adaptiveMtFilesId", request.AdaptiveMtFilesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get adaptiveMtFiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AdaptiveMtFile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets and AdaptiveMtFile
    /// </remarks>
    public Task<AdaptiveMtFile> TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGet(TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("adaptiveMtDatasetsId", request.AdaptiveMtDatasetsId),
                new TemplateParam("adaptiveMtFilesId", request.AdaptiveMtFilesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AdaptiveMtFile>(),
            TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List adaptiveMtFiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListAdaptiveMtFilesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all AdaptiveMtFiles associated to an AdaptiveMtDataset.
    /// </remarks>
    public Task<ListAdaptiveMtFilesResponse> TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesList(TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("adaptiveMtDatasetsId", request.AdaptiveMtDatasetsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListAdaptiveMtFilesResponse>(),
            TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List adaptiveMtSentences
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListAdaptiveMtSentencesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all AdaptiveMtSentences under a given file/dataset.
    /// </remarks>
    public Task<ListAdaptiveMtSentencesResponse> TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesList(TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtSentences"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("adaptiveMtDatasetsId", request.AdaptiveMtDatasetsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListAdaptiveMtSentencesResponse>(),
            TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create adaptiveMtDatasets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AdaptiveMtDataset"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsAdaptiveMtDatasetsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an Adaptive MT dataset.
    /// </remarks>
    public Task<AdaptiveMtDataset> TranslateProjectsLocationsAdaptiveMtDatasetsCreate(TranslateProjectsLocationsAdaptiveMtDatasetsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AdaptiveMtDataset>(),
            TranslateProjectsLocationsAdaptiveMtDatasetsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete adaptiveMtDatasets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an Adaptive MT dataset, including all its entries and associated metadata.
    /// </remarks>
    public Task<object> TranslateProjectsLocationsAdaptiveMtDatasetsDelete(TranslateProjectsLocationsAdaptiveMtDatasetsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("adaptiveMtDatasetsId", request.AdaptiveMtDatasetsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get adaptiveMtDatasets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AdaptiveMtDataset"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsAdaptiveMtDatasetsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the Adaptive MT dataset.
    /// </remarks>
    public Task<AdaptiveMtDataset> TranslateProjectsLocationsAdaptiveMtDatasetsGet(TranslateProjectsLocationsAdaptiveMtDatasetsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("adaptiveMtDatasetsId", request.AdaptiveMtDatasetsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AdaptiveMtDataset>(),
            TranslateProjectsLocationsAdaptiveMtDatasetsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Import adaptive mt file adaptiveMtDatasets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ImportAdaptiveMtFileResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Imports an AdaptiveMtFile and adds all of its sentences into the AdaptiveMtDataset.
    /// </remarks>
    public Task<ImportAdaptiveMtFileResponse> TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFile(TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}:importAdaptiveMtFile"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("adaptiveMtDatasetsId", request.AdaptiveMtDatasetsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ImportAdaptiveMtFileResponse>(),
            TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List adaptiveMtDatasets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListAdaptiveMtDatasetsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsAdaptiveMtDatasetsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all Adaptive MT datasets for which the caller has read permission.
    /// </remarks>
    public Task<ListAdaptiveMtDatasetsResponse> TranslateProjectsLocationsAdaptiveMtDatasetsList(TranslateProjectsLocationsAdaptiveMtDatasetsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets"),
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
            JsonResponse.Create<ListAdaptiveMtDatasetsResponse>(),
            TranslateProjectsLocationsAdaptiveMtDatasetsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Adaptive mt translate locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AdaptiveMtTranslateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsAdaptiveMtTranslateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Translate text using Adaptive MT.
    /// </remarks>
    public Task<AdaptiveMtTranslateResponse> TranslateProjectsLocationsAdaptiveMtTranslate(TranslateProjectsLocationsAdaptiveMtTranslateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}:adaptiveMtTranslate"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AdaptiveMtTranslateResponse>(),
            TranslateProjectsLocationsAdaptiveMtTranslateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch translate document locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsBatchTranslateDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
    /// </remarks>
    public Task<Operation> TranslateProjectsLocationsBatchTranslateDocument(TranslateProjectsLocationsBatchTranslateDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}:batchTranslateDocument"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            TranslateProjectsLocationsBatchTranslateDocumentError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch translate text locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsBatchTranslateTextError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
    /// </remarks>
    public Task<Operation> TranslateProjectsLocationsBatchTranslateText(TranslateProjectsLocationsBatchTranslateTextRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}:batchTranslateText"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            TranslateProjectsLocationsBatchTranslateTextError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create datasets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsDatasetsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a Dataset.
    /// </remarks>
    public Task<Operation> TranslateProjectsLocationsDatasetsCreate(TranslateProjectsLocationsDatasetsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/datasets"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            TranslateProjectsLocationsDatasetsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete datasets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsDatasetsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a dataset and all of its contents.
    /// </remarks>
    public Task<Operation> TranslateProjectsLocationsDatasetsDelete(TranslateProjectsLocationsDatasetsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("datasetsId", request.DatasetsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            TranslateProjectsLocationsDatasetsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List examples
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListExamplesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsDatasetsExamplesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists sentence pairs in the dataset.
    /// </remarks>
    public Task<ListExamplesResponse> TranslateProjectsLocationsDatasetsExamplesList(TranslateProjectsLocationsDatasetsExamplesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/examples"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("datasetsId", request.DatasetsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListExamplesResponse>(),
            TranslateProjectsLocationsDatasetsExamplesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Export data datasets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsDatasetsExportDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Exports dataset's data to the provided output location.
    /// </remarks>
    public Task<Operation> TranslateProjectsLocationsDatasetsExportData(TranslateProjectsLocationsDatasetsExportDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:exportData"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("datasetsId", request.DatasetsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            TranslateProjectsLocationsDatasetsExportDataError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get datasets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Dataset"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsDatasetsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a Dataset.
    /// </remarks>
    public Task<Dataset> TranslateProjectsLocationsDatasetsGet(TranslateProjectsLocationsDatasetsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("datasetsId", request.DatasetsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Dataset>(),
            TranslateProjectsLocationsDatasetsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Import data datasets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsDatasetsImportDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Import sentence pairs into translation Dataset.
    /// </remarks>
    public Task<Operation> TranslateProjectsLocationsDatasetsImportData(TranslateProjectsLocationsDatasetsImportDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:importData"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("datasetsId", request.DatasetsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            TranslateProjectsLocationsDatasetsImportDataError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List datasets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListDatasetsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsDatasetsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists datasets.
    /// </remarks>
    public Task<ListDatasetsResponse> TranslateProjectsLocationsDatasetsList(TranslateProjectsLocationsDatasetsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/datasets"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListDatasetsResponse>(),
            TranslateProjectsLocationsDatasetsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Detect language locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DetectLanguageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsDetectLanguageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Detects the language of text within a request.
    /// </remarks>
    public Task<DetectLanguageResponse> TranslateProjectsLocationsDetectLanguage(TranslateProjectsLocationsDetectLanguageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}:detectLanguage"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DetectLanguageResponse>(),
            TranslateProjectsLocationsDetectLanguageError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Location"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets information about a location.
    /// </remarks>
    public Task<Location> TranslateProjectsLocationsGet(TranslateProjectsLocationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Location>(),
            TranslateProjectsLocationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get supported languages locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SupportedLanguages"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsGetSupportedLanguagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of supported languages for translation.
    /// </remarks>
    public Task<SupportedLanguages> TranslateProjectsLocationsGetSupportedLanguages(TranslateProjectsLocationsGetSupportedLanguagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/supportedLanguages"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("displayLanguageCode", request.DisplayLanguageCode), new Param("model", request.Model)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SupportedLanguages>(),
            TranslateProjectsLocationsGetSupportedLanguagesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create glossaries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsGlossariesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
    /// </remarks>
    public Task<Operation> TranslateProjectsLocationsGlossariesCreate(TranslateProjectsLocationsGlossariesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/glossaries"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            TranslateProjectsLocationsGlossariesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete glossaries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsGlossariesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT_FOUND, if the glossary doesn't exist.
    /// </remarks>
    public Task<Operation> TranslateProjectsLocationsGlossariesDelete(TranslateProjectsLocationsGlossariesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("glossariesId", request.GlossariesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            TranslateProjectsLocationsGlossariesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get glossaries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Glossary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsGlossariesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a glossary. Returns NOT_FOUND, if the glossary doesn't exist.
    /// </remarks>
    public Task<Glossary> TranslateProjectsLocationsGlossariesGet(TranslateProjectsLocationsGlossariesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("glossariesId", request.GlossariesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Glossary>(),
            TranslateProjectsLocationsGlossariesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create glossaryEntries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GlossaryEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a glossary entry.
    /// </remarks>
    public Task<GlossaryEntry> TranslateProjectsLocationsGlossariesGlossaryEntriesCreate(TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("glossariesId", request.GlossariesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GlossaryEntry>(),
            TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete glossaryEntries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a single entry from the glossary
    /// </remarks>
    public Task<object> TranslateProjectsLocationsGlossariesGlossaryEntriesDelete(TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("glossariesId", request.GlossariesId),
                new TemplateParam("glossaryEntriesId", request.GlossaryEntriesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get glossaryEntries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GlossaryEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsGlossariesGlossaryEntriesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a single glossary entry by the given id.
    /// </remarks>
    public Task<GlossaryEntry> TranslateProjectsLocationsGlossariesGlossaryEntriesGet(TranslateProjectsLocationsGlossariesGlossaryEntriesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("glossariesId", request.GlossariesId),
                new TemplateParam("glossaryEntriesId", request.GlossaryEntriesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GlossaryEntry>(),
            TranslateProjectsLocationsGlossariesGlossaryEntriesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List glossaryEntries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListGlossaryEntriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsGlossariesGlossaryEntriesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the entries for the glossary.
    /// </remarks>
    public Task<ListGlossaryEntriesResponse> TranslateProjectsLocationsGlossariesGlossaryEntriesList(TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("glossariesId", request.GlossariesId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListGlossaryEntriesResponse>(),
            TranslateProjectsLocationsGlossariesGlossaryEntriesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch glossaryEntries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GlossaryEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a glossary entry.
    /// </remarks>
    public Task<GlossaryEntry> TranslateProjectsLocationsGlossariesGlossaryEntriesPatch(TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("glossariesId", request.GlossariesId),
                new TemplateParam("glossaryEntriesId", request.GlossaryEntriesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GlossaryEntry>(),
            TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List glossaries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListGlossariesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsGlossariesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
    /// </remarks>
    public Task<ListGlossariesResponse> TranslateProjectsLocationsGlossariesList(TranslateProjectsLocationsGlossariesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/glossaries"),
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
            JsonResponse.Create<ListGlossariesResponse>(),
            TranslateProjectsLocationsGlossariesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch glossaries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsGlossariesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a glossary. A LRO is used since the update can be async if the glossary's entry file is updated.
    /// </remarks>
    public Task<Operation> TranslateProjectsLocationsGlossariesPatch(TranslateProjectsLocationsGlossariesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("glossariesId", request.GlossariesId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            TranslateProjectsLocationsGlossariesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListLocationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * <b>Global locations</b>: If <c>name</c> is empty, the method lists the public locations available to all projects. * <b>Project-specific locations</b>: If <c>name</c> follows the format <c>projects/{project}</c>, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the <c>name</c> field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.
    /// </remarks>
    public Task<ListLocationsResponse> TranslateProjectsLocationsList(TranslateProjectsLocationsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations"),
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
            JsonResponse.Create<ListLocationsResponse>(),
            TranslateProjectsLocationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create models
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsModelsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a Model.
    /// </remarks>
    public Task<Operation> TranslateProjectsLocationsModelsCreate(TranslateProjectsLocationsModelsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/models"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            TranslateProjectsLocationsModelsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete models
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsModelsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a model.
    /// </remarks>
    public Task<Operation> TranslateProjectsLocationsModelsDelete(TranslateProjectsLocationsModelsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/models/{modelsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("modelsId", request.ModelsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            TranslateProjectsLocationsModelsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get models
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Model"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsModelsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a model.
    /// </remarks>
    public Task<Model> TranslateProjectsLocationsModelsGet(TranslateProjectsLocationsModelsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/models/{modelsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("modelsId", request.ModelsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Model>(),
            TranslateProjectsLocationsModelsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List models
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListModelsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsModelsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists models.
    /// </remarks>
    public Task<ListModelsResponse> TranslateProjectsLocationsModelsList(TranslateProjectsLocationsModelsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/models"),
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
            JsonResponse.Create<ListModelsResponse>(),
            TranslateProjectsLocationsModelsListError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsOperationsCancelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns <c>google.rpc.Code.UNIMPLEMENTED</c>. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of <c>1</c>, corresponding to <c>Code.CANCELLED</c>.
    /// </remarks>
    public Task<object> TranslateProjectsLocationsOperationsCancel(TranslateProjectsLocationsOperationsCancelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel"),
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
            TranslateProjectsLocationsOperationsCancelError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsOperationsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns <c>google.rpc.Code.UNIMPLEMENTED</c>.
    /// </remarks>
    public Task<object> TranslateProjectsLocationsOperationsDelete(TranslateProjectsLocationsOperationsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}"),
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
            TranslateProjectsLocationsOperationsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsOperationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    /// </remarks>
    public Task<Operation> TranslateProjectsLocationsOperationsGet(TranslateProjectsLocationsOperationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            TranslateProjectsLocationsOperationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListOperationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsOperationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns <c>UNIMPLEMENTED</c>.
    /// </remarks>
    public Task<ListOperationsResponse> TranslateProjectsLocationsOperationsList(TranslateProjectsLocationsOperationsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/operations"),
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
            JsonResponse.Create<ListOperationsResponse>(),
            TranslateProjectsLocationsOperationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Wait operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsOperationsWaitError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns <c>google.rpc.Code.UNIMPLEMENTED</c>. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
    /// </remarks>
    public Task<Operation> TranslateProjectsLocationsOperationsWait(TranslateProjectsLocationsOperationsWaitRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:wait"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            TranslateProjectsLocationsOperationsWaitError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Refine text locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RefineTextResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsRefineTextError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Refines the input translated text to improve the quality.
    /// </remarks>
    public Task<RefineTextResponse> TranslateProjectsLocationsRefineText(TranslateProjectsLocationsRefineTextRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}:refineText"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RefineTextResponse>(),
            TranslateProjectsLocationsRefineTextError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Romanize text locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RomanizeTextResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsRomanizeTextError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Romanize input text written in non-Latin scripts to Latin text.
    /// </remarks>
    public Task<RomanizeTextResponse> TranslateProjectsLocationsRomanizeText(TranslateProjectsLocationsRomanizeTextRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}:romanizeText"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RomanizeTextResponse>(),
            TranslateProjectsLocationsRomanizeTextError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Translate document locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TranslateDocumentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsTranslateDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Translates documents in synchronous mode.
    /// </remarks>
    public Task<TranslateDocumentResponse> TranslateProjectsLocationsTranslateDocument(TranslateProjectsLocationsTranslateDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}:translateDocument"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TranslateDocumentResponse>(),
            TranslateProjectsLocationsTranslateDocumentError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Translate text locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TranslateTextResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsLocationsTranslateTextError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Translates input text and returns translated text.
    /// </remarks>
    public Task<TranslateTextResponse> TranslateProjectsLocationsTranslateText(TranslateProjectsLocationsTranslateTextRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}/locations/{locationsId}:translateText"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TranslateTextResponse>(),
            TranslateProjectsLocationsTranslateTextError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Romanize text projects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RomanizeTextResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsRomanizeTextError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Romanize input text written in non-Latin scripts to Latin text.
    /// </remarks>
    public Task<RomanizeTextResponse> TranslateProjectsRomanizeText(TranslateProjectsRomanizeTextRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}:romanizeText"),
            [new TemplateParam("projectsId", request.ProjectsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RomanizeTextResponse>(),
            TranslateProjectsRomanizeTextError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Translate text projects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TranslateTextResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranslateProjectsTranslateTextError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Translates input text and returns translated text.
    /// </remarks>
    public Task<TranslateTextResponse> TranslateProjectsTranslateText(TranslateProjectsTranslateTextRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/projects/{projectsId}:translateText"),
            [new TemplateParam("projectsId", request.ProjectsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TranslateTextResponse>(),
            TranslateProjectsTranslateTextError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
