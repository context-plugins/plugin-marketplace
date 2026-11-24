using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Curlec.Core;
using Curlec.Core.Authentication;
using Curlec.Core.Exceptions;
using Curlec.Core.Models;
using Curlec.Core.Request;
using Curlec.Core.Response;
using Curlec.Errors;
using Curlec.Models;
using Curlec.Requests.XAccountValidation;

namespace Curlec.Api;

/// <summary>
/// Penny drop and reverse penny drop bank/VPA validation
/// </summary>
public sealed class XAccountValidation
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal XAccountValidation(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Fetch a fund account validation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FundAccountValidation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchFundAccountValidationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch details of a specific fund account validation by its ID.
    /// </remarks>
    public Task<FundAccountValidation> FetchFundAccountValidation(FetchFundAccountValidationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/fund_accounts/validations/{validation_id}"),
            [new TemplateParam("validation_id", request.ValidationId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FundAccountValidation>(),
            FetchFundAccountValidationError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List fund account validations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FundAccountsValidationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFundAccountValidationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all fund account validation records, optionally filtered by date range.
    /// </remarks>
    public Task<FundAccountsValidationsResponse> ListFundAccountValidations(ListFundAccountValidationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/fund_accounts/validations"),
            [],
            [
                new Param("from", request.From),
                new Param("to", request.To),
                new Param("count", request.Count),
                new Param("skip", request.Skip),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FundAccountsValidationsResponse>(),
            ListFundAccountValidationsError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Validate a bank account or VPA
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FundAccountValidation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ValidateFundAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Three validation methods: (1) penny drop for bank accounts — sends Re.1 to verify; (2) penny drop for VPA — sends Re.1 to UPI address; (3) reverse penny drop — sends UPI intent URL to customer who initiates payment. Live-mode only, RazorpayX Lite account required. Composite validation (creates Contact + Fund Account inline) supported via validation_type field.
    /// </remarks>
    public Task<FundAccountValidation> ValidateFundAccount(ValidateFundAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/fund_accounts/validations"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FundAccountValidation>(),
            ValidateFundAccountError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
