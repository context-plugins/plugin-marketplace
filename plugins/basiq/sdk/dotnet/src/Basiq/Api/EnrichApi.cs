using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Basiq.Core;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Exceptions;
using Basiq.Core.Models;
using Basiq.Core.Request;
using Basiq.Core.Response;
using Basiq.Errors;
using Basiq.Models;
using Basiq.Requests.EnrichApi;

namespace Basiq.Api;

public sealed class EnrichApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal EnrichApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Enrich
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnrichResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EnrichError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The Enrich resource enables you to retrieve details by passing in a search query containing a bank transaction description. The service enriches transaction data with multiple attributes, returning a transaction classification and three metadata components. The transaction classification will first determine if the transaction is of type payment, transfer, cash-withdrawal, bank-fee etc. The engine then derives merchant information, purchase location and prescribes an industry standard categorisation for each payment transaction.
    /// </remarks>
    public Task<EnrichResponse> Enrich(EnrichRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/enrich"),
            [],
            [
                new Param("q", request.Q),
                new Param("institution", request.Institution),
                new Param("country", request.Country),
                new Param("mcc", request.Mcc),
                new Param("accountType", request.AccountType),
                new Param("amount", request.Amount),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EnrichResponse>(),
            EnrichError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a merchant
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SingleMerchantResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMerchantByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a single merchant's details using its unique ID.
    /// </remarks>
    public Task<SingleMerchantResponse> GetMerchantById(GetMerchantByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/merchants/{merchantId}"),
            [new TemplateParam("merchantId", request.MerchantId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SingleMerchantResponse>(),
            GetMerchantByIdError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Merchants
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MerchantsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves merchant details. At least one of <c>abn</c> or <c>merchantName</c> is required for a successful search. Optional filters for suburb and entity type can also be applied.
    /// </remarks>
    public Task<MerchantsResponse> MerchantSearch(MerchantSearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/merchants"),
            [],
            [
                new Param("abn", request.Abn),
                new Param("merchantName", request.MerchantName),
                new Param("suburb", request.Suburb),
                new Param("entityType", request.EntityType),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MerchantsResponse>(),
            RawErrorResponse.Instance,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);
}
