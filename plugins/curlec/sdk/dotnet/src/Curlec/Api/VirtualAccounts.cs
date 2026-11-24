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
using Curlec.Requests.VirtualAccounts;

namespace Curlec.Api;

/// <summary>
/// Virtual bank accounts and UPI VPAs that accept NEFT/RTGS/IMPS/UPI payments (Smart Collect). Each incoming payment creates a BankTransfer entity. Supports Third Party Validation (TPV) to restrict payers, and VPA receivers (Smart Collect 2.0). Auto-closes after 90 days of inactivity.
/// </summary>
public sealed class VirtualAccounts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal VirtualAccounts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add an allowed payer (TPV)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VirtualAccount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddAllowedPayerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Whitelist a specific payer bank account or VPA for a virtual account (Smart Collect with Third Party Validation). Only whitelisted payers can successfully pay into this virtual account.
    /// </remarks>
    public Task<VirtualAccount> AddAllowedPayer(AddAllowedPayerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/virtual_accounts/{va_id}/allowed_payers"),
            [new TemplateParam("va_id", request.VaId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VirtualAccount>(),
            AddAllowedPayerError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add a VPA receiver to a Virtual Account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VirtualAccount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddVpaReceiverError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add a UPI VPA receiver to an existing virtual account (Smart Collect 2.0). Requires the VPA receiver feature to be enabled on the merchant account.
    /// </remarks>
    public Task<VirtualAccount> AddVpaReceiver(AddVpaReceiverRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/virtual_accounts/{id}/receivers"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VirtualAccount>(),
            AddVpaReceiverError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Close a Virtual Account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VirtualAccount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloseVirtualAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Manually close an active virtual account so it no longer accepts payments.
    /// </remarks>
    public Task<VirtualAccount> CloseVirtualAccount(CloseVirtualAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/virtual_accounts/{id}/close"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VirtualAccount>(),
            CloseVirtualAccountError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a Virtual Account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VirtualAccount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateVirtualAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a virtual bank account (and optionally a VPA) for accepting NEFT/RTGS/IMPS/UPI payments. Set amount_expected=0 to accept any amount. Auto-closes after 90 days of inactivity. Maximum close_by timestamp: 2147483647.
    /// </remarks>
    public Task<VirtualAccount> CreateVirtualAccount(CreateVirtualAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/virtual_accounts"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VirtualAccount>(),
            CreateVirtualAccountError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an allowed payer (TPV)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAllowedPayerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove a payer from the whitelist of a virtual account (Smart Collect TPV). The payer will no longer be able to make payments to this virtual account.
    /// </remarks>
    public Task<object> DeleteAllowedPayer(DeleteAllowedPayerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/virtual_accounts/{va_id}/allowed_payers/{id}"),
            [new TemplateParam("va_id", request.VaId), new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteAllowedPayerError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch bank transfer details for a payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BankTransfer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchBankTransferError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the BankTransfer entity associated with a payment received via a Virtual Account. Contains the UTR number, payer bank account details, and transfer mode.
    /// </remarks>
    public Task<BankTransfer> FetchBankTransfer(FetchBankTransferRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payments/{id}/bank_transfer"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BankTransfer>(),
            FetchBankTransferError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a Virtual Account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VirtualAccount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchVirtualAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve details of a specific virtual account.
    /// </remarks>
    public Task<VirtualAccount> FetchVirtualAccount(FetchVirtualAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/virtual_accounts/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VirtualAccount>(),
            FetchVirtualAccountError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch payments for a Virtual Account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VirtualAccountsPaymentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchVirtualAccountPaymentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all payments received by a virtual account. Returns Payment objects.
    /// </remarks>
    public Task<VirtualAccountsPaymentsResponse> FetchVirtualAccountPayments(FetchVirtualAccountPaymentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/virtual_accounts/{id}/payments"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VirtualAccountsPaymentsResponse>(),
            FetchVirtualAccountPaymentsError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Virtual Accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VirtualAccountsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListVirtualAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a paginated list of virtual accounts with optional filters.
    /// </remarks>
    public Task<VirtualAccountsResponse> ListVirtualAccounts(ListVirtualAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/virtual_accounts"),
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
            JsonResponse.Create<VirtualAccountsResponse>(),
            ListVirtualAccountsError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Virtual Account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VirtualAccount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateVirtualAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the amount_expected or close_by timestamp on an active virtual account.
    /// </remarks>
    public Task<VirtualAccount> UpdateVirtualAccount(UpdateVirtualAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/virtual_accounts/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VirtualAccount>(),
            UpdateVirtualAccountError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
