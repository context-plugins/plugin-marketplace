using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Divvy.Core;
using Divvy.Core.Authentication;
using Divvy.Core.Exceptions;
using Divvy.Core.Models;
using Divvy.Core.Request;
using Divvy.Core.Response;
using Divvy.Errors;
using Divvy.Models;
using Divvy.Requests.Cards;

namespace Divvy.Api;

public sealed class Cards
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Cards(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create a vendor card
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CardResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBudgetCardError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new vendor card.
    /// <para>
    /// See Vendor cards in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<CardResponseDto> CreateBudgetCard(CreateBudgetCardRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/cards"),
            [],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CardResponseDto>(),
            CreateBudgetCardError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a vendor card
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCardError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an existing vendor card. A deleted card cannot be restored. The deleted card is not available in the list of cards.
    /// </remarks>
    public Task DeleteCard(DeleteCardRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/cards/{cardId}"),
            [new TemplateParam("cardId", request.CardId)],
            [new Param("reason", request.Reason)],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteCardError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Freeze a vendor card
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CardResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FreezeCardError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Freeze an existing vendor card.
    /// <para>
    /// You can freeze virtual cards and physical cards. A frozen card cannot be used for payments.
    /// </para>
    /// </remarks>
    public Task<CardResponseDto> FreezeCard(FreezeCardRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/cards/{cardId}/freeze"),
            [new TemplateParam("cardId", request.CardId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CardResponseDto>(),
            FreezeCardError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get vendor card details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CardResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCardError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing vendor card.
    /// </remarks>
    public Task<CardResponseDto> GetCard(GetCardRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/cards/{cardId}"),
            [new TemplateParam("cardId", request.CardId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CardResponseDto>(),
            GetCardError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a PAN JWT token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CardPanTokenResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPanJwtError"/> when the server returns an error response.</exception>
    public Task<CardPanTokenResponseDto> GetPanJwt(GetPanJwtRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/cards/{cardId}/pan-jwt"),
            [new TemplateParam("cardId", request.CardId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CardPanTokenResponseDto>(),
            GetPanJwtError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of cards
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginationResponseDtoCardResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCardsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of card objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// </remarks>
    public Task<PaginationResponseDtoCardResponseDto> ListCards(ListCardsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/cards"),
            [],
            [
                new Param("nextPage", request.NextPage),
                new Param("prevPage", request.PrevPage),
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
            ],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginationResponseDtoCardResponseDto>(),
            ListCardsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unfreeze a vendor card
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CardResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnfreezeCardError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Unfreeze an existing vendor card. You can unfreeze virtual cards and physical cards.
    /// </remarks>
    public Task<CardResponseDto> UnfreezeCard(UnfreezeCardRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/cards/{cardId}/unfreeze"),
            [new TemplateParam("cardId", request.CardId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CardResponseDto>(),
            UnfreezeCardError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a vendor card
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CardResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCardError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing vendor card.
    /// </remarks>
    public Task<CardResponseDto> UpdateCard(UpdateCardRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/cards/{cardId}"),
            [new TemplateParam("cardId", request.CardId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CardResponseDto>(),
            UpdateCardError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
