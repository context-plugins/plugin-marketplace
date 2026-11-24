using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ApiVerve.Core;
using ApiVerve.Core.Exceptions;
using ApiVerve.Core.Models;
using ApiVerve.Core.Request;
using ApiVerve.Core.Response;
using ApiVerve.Errors;
using ApiVerve.Models;
using ApiVerve.Requests.Food;

namespace ApiVerve.Api;

public sealed class Food
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Food(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cocktail Recipe
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CocktailResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CocktailError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the recipe for a cocktail based on the name or ingredient
    /// </remarks>
    public Task<V1CocktailResponse> Cocktail(CocktailRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/cocktail"),
            [],
            [new Param("name", request.Name)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CocktailResponse>(),
            CocktailError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Nutrition
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1NutritionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NutritionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the nutrition facts for a generic whole food by name. Optionally scale the panel to a serving weight in grams.
    /// </remarks>
    public Task<V1NutritionResponse> Nutrition(NutritionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/nutrition"),
            [],
            [new Param("food", request.Food), new Param("grams", request.Grams)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1NutritionResponse>(),
            NutritionError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Recipe Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RecipeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RecipeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Recipe Generator is an AI-powered tool for generating detailed recipes. It returns complete recipes with ingredients, instructions, prep time, cook time, and servings.
    /// </remarks>
    public Task<V1RecipeResponse> Recipe(RecipeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/recipe"),
            [],
            [new Param("name", request.Name)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RecipeResponse>(),
            RecipeError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
