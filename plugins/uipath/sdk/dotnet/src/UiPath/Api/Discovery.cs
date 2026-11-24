using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using UiPath.Core;
using UiPath.Core.Exceptions;
using UiPath.Core.Models;
using UiPath.Core.Request;
using UiPath.Core.Response;
using UiPath.Errors;
using UiPath.Models;
using UiPath.Requests.Discovery;

namespace UiPath.Api;

/// <summary>
/// Discover available projects, classifiers, and extractors
/// </summary>
public sealed class Discovery
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Discovery(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath List Classifiers for a Project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsClassifiersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListClassifiersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all available classifier models configured within a specific Document Understanding project. Classifiers identify the document type of a digitized document. Specialized classifiers use machine learning models trained on specific document types; generative classifiers use large language models.
    /// </remarks>
    public Task<ProjectsClassifiersResponse> ListClassifiers(ListClassifiersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathDocumentUnderstandingClassificationApi("/projects/{projectId}/classifiers"),
            [new TemplateParam("projectId", request.ProjectId)],
            [new Param("api-version", request.ApiVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectsClassifiersResponse>(),
            ListClassifiersError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Extractors for a Project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsExtractorsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListExtractorsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all available extractor models configured within a specific Document Understanding project. Each extractor is associated with a document type and defines the fields it can extract. Use the extractor ID in extraction requests to invoke the correct model.
    /// </remarks>
    public Task<ProjectsExtractorsResponse> ListExtractors(ListExtractorsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathDocumentUnderstandingClassificationApi("/projects/{projectId}/extractors"),
            [new TemplateParam("projectId", request.ProjectId)],
            [new Param("api-version", request.ApiVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectsExtractorsResponse>(),
            ListExtractorsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Document Understanding Projects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListProjectsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all available Document Understanding projects accessible to the authenticated user. Each project contains configuration for classifiers and extractors and provides URLs for downstream discovery operations. Use project IDs to scope classification and extraction requests to a specific project's models.
    /// </remarks>
    public Task<ProjectsResponse> ListProjects(ListProjectsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathDocumentUnderstandingClassificationApi("/projects"),
            [],
            [new Param("api-version", request.ApiVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectsResponse>(),
            ListProjectsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
