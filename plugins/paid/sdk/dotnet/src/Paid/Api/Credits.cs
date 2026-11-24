using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Paid.Core;
using Paid.Core.Authentication;
using Paid.Core.Exceptions;
using Paid.Core.Models;
using Paid.Core.Request;
using Paid.Core.Response;
using Paid.Errors;
using Paid.Models;
using Paid.Requests.Credits;

namespace Paid.Api;

public sealed class Credits
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Credits(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create credit currency
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreditCurrency"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCreditCurrencyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a credit currency for the organization.
    /// </remarks>
    public Task<CreditCurrency> CreateCreditCurrency(CreateCreditCurrencyOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/credits/currencies"),
            [],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreditCurrency>(),
            CreateCreditCurrencyError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List credit currencies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreditCurrencyListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCreditCurrenciesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List credit currencies for the organization. Includes active and archived currencies by default; use the status query parameter to filter.
    /// </remarks>
    public Task<CreditCurrencyListResponse> ListCreditCurrencies(ListCreditCurrenciesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/credits/currencies"),
            [],
            [new Param("status", request.Status)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CreditCurrencyListResponse>(),
            ListCreditCurrenciesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update credit currency
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreditCurrency"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCreditCurrencyByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a credit currency description or set its active/archive status.
    /// </remarks>
    public Task<CreditCurrency> UpdateCreditCurrencyById(UpdateCreditCurrencyByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/credits/currencies/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreditCurrency>(),
            UpdateCreditCurrencyByIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
