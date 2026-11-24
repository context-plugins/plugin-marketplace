using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DopeSecurity.Core;
using DopeSecurity.Core.Exceptions;
using DopeSecurity.Core.Models;
using DopeSecurity.Core.Request;
using DopeSecurity.Core.Response;
using DopeSecurity.Errors;
using DopeSecurity.Models;
using DopeSecurity.Requests.CustomCategoriesApi;

namespace DopeSecurity.Api;

/// <summary>
/// Everything about your Custom Categories
/// </summary>
public sealed class CustomCategoriesApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CustomCategoriesApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add URLs to a Custom Category
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddCustomCategoryUrlsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to add URLs to an existing custom category.
    /// <para>
    /// Specify the name of the custom category in the path parameter (<c>custom_category_name</c>)
    /// and provide a JSON array of URLs in the request body.
    /// </para>
    /// <para>
    /// Ensure that URLs are properly formatted and included in the array.
    /// </para>
    /// <para>
    /// Please check the docs at https://inflight.dope.security for guidelines on URL formatting.
    /// </para>
    /// <para>
    /// If any URL in the list is invalid, the entire request will be rejected.
    /// The 400 error response will include the list of invalid URLs in the error details.
    /// </para>
    /// </remarks>
    public Task<SuccessMessage> AddCustomCategoryUrls(AddCustomCategoryUrlsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_categories/{custom_category_name}/urls"),
            [new TemplateParam("custom_category_name", request.CustomCategoryName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessMessage>(),
            AddCustomCategoryUrlsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a Custom Category
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomCategoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to create a new custom category.
    /// <para>
    /// Specify the name of the custom category in the path parameter (<c>custom_category_name</c>).
    /// </para>
    /// <para>
    /// If the custom category already exists, a <c>400</c> error is returned.
    /// </para>
    /// <para>
    /// Validation rules for <c>custom_category_name</c>:
    /// - Must not be empty or whitespace-only
    /// - Must not contain leading or trailing whitespace
    /// - Maximum length of 32 characters
    /// - Must not contain any of the following characters: <c># ! @ $ % ^ * ? . / \</c>
    /// </para>
    /// </remarks>
    public Task<SuccessMessage> CreateCustomCategory(CreateCustomCategoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_categories/{custom_category_name}"),
            [new TemplateParam("custom_category_name", request.CustomCategoryName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<SuccessMessage>(),
            CreateCustomCategoryError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete All URLs from a Custom Category
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAllCustomCategoryUrlsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to delete all URLs from an existing custom category.
    /// <para>
    /// Specify the name of the custom category in the path parameter (<c>custom_category_name</c>).
    /// </para>
    /// <para>
    /// This action will remove all URLs associated with the specified custom category.
    /// </para>
    /// </remarks>
    public Task<SuccessMessage> DeleteAllCustomCategoryUrls(DeleteAllCustomCategoryUrlsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_categories/{custom_category_name}/urls"),
            [new TemplateParam("custom_category_name", request.CustomCategoryName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<SuccessMessage>(),
            DeleteAllCustomCategoryUrlsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Custom Category
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCustomCategoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to delete a single custom category by name.
    /// This action will remove the custom category and all of its associated data.
    /// </remarks>
    public Task<SuccessMessage> DeleteCustomCategory(DeleteCustomCategoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_categories/{custom_category_name}"),
            [new TemplateParam("custom_category_name", request.CustomCategoryName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<SuccessMessage>(),
            DeleteCustomCategoryError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a specific URL from a Custom Category
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCustomCategoryUrlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to delete a specific URL from an existing custom category.
    /// <para>
    /// Specify the name of the custom category in the path parameter (<c>custom_category_name</c>).
    /// </para>
    /// <para>
    /// Ensure that a given URL is encoded using URL encoding.
    /// </para>
    /// </remarks>
    public Task<SuccessMessage> DeleteCustomCategoryUrl(DeleteCustomCategoryUrlRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_categories/{custom_category_name}/url/{encoded_url}"),
            [
                new TemplateParam("custom_category_name", request.CustomCategoryName),
                new TemplateParam("encoded_url", request.EncodedUrl),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<SuccessMessage>(),
            DeleteCustomCategoryUrlError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Custom Categories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomCategoriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomCategoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to get a paginated list of all custom categories.
    /// <para>
    /// Results are returned in pages using cursor based pagination.
    /// </para>
    /// </remarks>
    public Task<CustomCategoriesResponse> ListCustomCategories(ListCustomCategoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_categories"),
            [],
            [new Param("first", request.First), new Param("after", request.After)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomCategoriesResponse>(),
            ListCustomCategoriesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all URLs of a Custom Category
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomCategoriesUrlsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomCategoryUrlsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to get all URLs of an existing custom category.
    /// </remarks>
    public Task<CustomCategoriesUrlsResponse> ListCustomCategoryUrls(ListCustomCategoryUrlsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_categories/{custom_category_name}/urls"),
            [new TemplateParam("custom_category_name", request.CustomCategoryName)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomCategoriesUrlsResponse>(),
            ListCustomCategoryUrlsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Overwrite all URLs of a Custom Category
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OverwriteCustomCategoryUrlsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to replace all existing URLs of a custom category with a new list of URLs.
    /// <para>
    /// Specify the name of the custom category in the path parameter (<c>custom_category_name</c>)
    /// and provide a JSON array of URLs in the request body. All existing URLs will be removed
    /// and replaced with the provided list.
    /// </para>
    /// <para>
    /// Please check the docs at https://inflight.dope.security for guidelines on URL formatting.
    /// </para>
    /// <para>
    /// If any URL in the list is invalid, the entire request will be rejected.
    /// The 400 error response will include the list of invalid URLs in the error details.
    /// </para>
    /// </remarks>
    public Task<SuccessMessage> OverwriteCustomCategoryUrls(OverwriteCustomCategoryUrlsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/custom_categories/{custom_category_name}/urls"),
            [new TemplateParam("custom_category_name", request.CustomCategoryName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessMessage>(),
            OverwriteCustomCategoryUrlsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
