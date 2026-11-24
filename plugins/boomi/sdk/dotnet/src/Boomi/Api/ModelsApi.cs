using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Boomi.Core;
using Boomi.Core.Authentication;
using Boomi.Core.Exceptions;
using Boomi.Core.Models;
using Boomi.Core.Request;
using Boomi.Core.Response;
using Boomi.Errors;
using Boomi.Models;
using Boomi.Requests.ModelsApi;

namespace Boomi.Api;

/// <summary>
/// Manage data models that define the schema and rules for master data domains.
/// </summary>
public sealed class ModelsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ModelsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Boomi Create a model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Model"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new data model within the repository that defines the schema for a master data domain.
    /// </remarks>
    public Task<Model> CreateModel(CreateModelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBoomiDataHubGoldenRecordsApi("/repositories/{repositoryId}/models"),
            [new TemplateParam("repositoryId", request.RepositoryId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Model>(),
            CreateModelError.Response,
            AuthScheme.Any(_auth.BasicAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Delete a model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes a data model from the repository.
    /// </remarks>
    public Task DeleteModel(DeleteModelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBoomiDataHubGoldenRecordsApi("/repositories/{repositoryId}/models/{modelId}"),
            [new TemplateParam("repositoryId", request.RepositoryId), new TemplateParam("modelId", request.ModelId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteModelError.Response,
            AuthScheme.Any(_auth.BasicAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Get a model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Model"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the details and schema of a specific data model.
    /// </remarks>
    public Task<Model> GetModel(GetModelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBoomiDataHubGoldenRecordsApi("/repositories/{repositoryId}/models/{modelId}"),
            [new TemplateParam("repositoryId", request.RepositoryId), new TemplateParam("modelId", request.ModelId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Model>(),
            GetModelError.Response,
            AuthScheme.Any(_auth.BasicAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi List models
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RepositoriesModelsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListModelsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all data models defined within a specific repository.
    /// </remarks>
    public Task<RepositoriesModelsResponse> ListModels(ListModelsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBoomiDataHubGoldenRecordsApi("/repositories/{repositoryId}/models"),
            [new TemplateParam("repositoryId", request.RepositoryId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RepositoriesModelsResponse>(),
            ListModelsError.Response,
            AuthScheme.Any(_auth.BasicAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Publish a model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Model"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PublishModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Publishes a data model, making it available for domain deployment and data ingestion.
    /// </remarks>
    public Task<Model> PublishModel(PublishModelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBoomiDataHubGoldenRecordsApi("/repositories/{repositoryId}/models/{modelId}/publish"),
            [new TemplateParam("repositoryId", request.RepositoryId), new TemplateParam("modelId", request.ModelId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<Model>(),
            PublishModelError.Response,
            AuthScheme.Any(_auth.BasicAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
