using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Shortcut.Core;
using Shortcut.Core.Exceptions;
using Shortcut.Core.Models;
using Shortcut.Core.Request;
using Shortcut.Core.Response;
using Shortcut.Errors;
using Shortcut.Models;
using Shortcut.Requests.Categories;

namespace Shortcut.Api;

public sealed class Categories
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Categories(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Category
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Category"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCategoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create Category allows you to create a new Category in Shortcut.
    /// </remarks>
    public Task<Category> CreateCategory(CreateCategoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/categories"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Category>(),
            CreateCategoryError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Category
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCategoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete Category can be used to delete any Category.
    /// </remarks>
    public Task DeleteCategory(DeleteCategoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/categories/{category-public-id}"),
            [new TemplateParam("category-public-id", request.CategoryPublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteCategoryError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Category
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Category"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCategoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Category returns information about the selected Category.
    /// </remarks>
    public Task<Category> GetCategory(GetCategoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/categories/{category-public-id}"),
            [new TemplateParam("category-public-id", request.CategoryPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Category>(),
            GetCategoryError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Categories
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Category"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCategoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List Categories returns a list of all Categories and their attributes.
    /// </remarks>
    public Task<IReadOnlyList<Category>> ListCategories(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/categories"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Category>>(),
            ListCategoriesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Category Milestones
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Milestone"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCategoryMilestonesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List Category Milestones returns a list of all Milestones with the Category.
    /// </remarks>
    public Task<IReadOnlyList<Milestone>> ListCategoryMilestones(ListCategoryMilestonesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/categories/{category-public-id}/milestones"),
            [new TemplateParam("category-public-id", request.CategoryPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Milestone>>(),
            ListCategoryMilestonesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Category Objectives
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Milestone"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCategoryObjectivesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all Objectives with the Category.
    /// </remarks>
    public Task<IReadOnlyList<Milestone>> ListCategoryObjectives(ListCategoryObjectivesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/categories/{category-public-id}/objectives"),
            [new TemplateParam("category-public-id", request.CategoryPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Milestone>>(),
            ListCategoryObjectivesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Category
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Category"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCategoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update Category allows you to replace a Category name with another name. If you try to name a Category something that already exists, you will receive a 422 response.
    /// </remarks>
    public Task<Category> UpdateCategory(UpdateCategoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/categories/{category-public-id}"),
            [new TemplateParam("category-public-id", request.CategoryPublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Category>(),
            UpdateCategoryError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
