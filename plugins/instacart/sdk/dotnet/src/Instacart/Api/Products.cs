using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Instacart.Core;
using Instacart.Core.Exceptions;
using Instacart.Core.Models;
using Instacart.Core.Request;
using Instacart.Core.Response;
using Instacart.Errors;
using Instacart.Models;
using Instacart.Requests.Products;

namespace Instacart.Api;

/// <summary>
/// Endpoints for creating and updating products in the retailer's catalog on Instacart. Products are the same across all of a retailer's stores.
/// </summary>
public sealed class Products
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Products(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a recipe page
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProductsLinkResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateRecipePageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a recipe page on Instacart Marketplace and returns a unique URL. The page displays recipe details including title, image, ingredients, and cooking instructions. Users can add recipe ingredients to their Instacart cart directly from the page.
    /// </remarks>
    public Task<ProductsLinkResponse> CreateRecipePage(CreateRecipePageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/idp/v1/products/recipe"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProductsLinkResponse>(),
            CreateRecipePageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a shopping list page
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProductsLinkResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateShoppingListPageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a shopping list page on Instacart Marketplace and returns a unique URL. The page displays a list of products that users can add to their Instacart cart. Each call generates a new page with a unique URL.
    /// </remarks>
    public Task<ProductsLinkResponse> CreateShoppingListPage(CreateShoppingListPageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/idp/v1/products/products_link"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProductsLinkResponse>(),
            CreateShoppingListPageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create or update products
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubmissionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SubmitProductsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates new products or updates existing products in the retailer's catalog on Instacart. When creating a new product, it takes 1-3 business days for the product to be displayed on the storefront. When updating a product, only the attributes included in the request body are modified and changes are displayed within a few hours.
    /// </remarks>
    public Task<SubmissionResponse> SubmitProducts(SubmitProductsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/data_ingestion/catalog/product/submission"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SubmissionResponse>(),
            SubmitProductsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
