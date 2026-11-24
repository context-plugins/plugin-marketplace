using System;
using System.Collections.Generic;
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
using Divvy.Requests.FundingAccounts;

namespace Divvy.Api;

public sealed class FundingAccounts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal FundingAccounts(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Archive a bank account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationBankAccountResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveBankAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing bank account. In the response, the <c>archived</c> field is set as <c>true</c>.
    /// <para>
    /// Archiving a bank account at BILL has a set of requirements.
    /// * <b>Bank account status</b>: The bank account <c>status</c> must be set as <c>VERIFIED</c>. You can verify the bank account with <c>POST /v3/funding-accounts/banks/{bankAccountId}/verify</c>.
    /// * <b>Bank account user status</b>: The bank account user <c>verificationStatus</c> must be set as <c>VERIFIED</c>. To begin the verification process, nominate a bank account user with <c>POST /v3/funding-accounts/banks/users</c>.
    /// </para>
    /// </remarks>
    public Task<OrganizationBankAccountResponseDto> ArchiveBankAccount(ArchiveBankAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/funding-accounts/banks/{bankAccountId}/archive"),
            [new TemplateParam("bankAccountId", request.BankAccountId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<OrganizationBankAccountResponseDto>(),
            ArchiveBankAccountError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive a bank account user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationBankAccountUserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveBankAccountUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing bank account user. In the response, the <c>archived</c> field is set as <c>true</c> and the bank account user <c>verificationStatus</c> is set as <c>UNVERIFIED</c>.
    /// </remarks>
    public Task<OrganizationBankAccountUserResponseDto> ArchiveBankAccountUser(ArchiveBankAccountUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/funding-accounts/banks/users/{bankAccountUserId}/archive"),
            [new TemplateParam("bankAccountUserId", request.BankAccountUserId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<OrganizationBankAccountUserResponseDto>(),
            ArchiveBankAccountUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a bank account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationBankAccountResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBankAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new bank account. The currently signed-in user must have the <c>ADMINISTRATOR</c> user role in the BILL organization to perform this operation. BILL sends an email notification for informing you about changes to your funding accounts.
    /// <para>
    /// When you create a bank account, BILL sends a test ACH payment to confirm whether the account details are accurate.
    /// </para>
    /// <para>
    /// In the response, three fields are set to their default values.
    /// * The bank account <c>status</c> is set as <c>PENDING</c>. You can verify the bank account with <c>POST /v3/funding-accounts/banks/{bankAccountId}/verify</c>.
    /// * The <c>payables</c> and <c>receivables</c> values are set as <c>false</c>. To update these values, update the bank account with <c>PATCH /v3/funding-accounts/banks/{bankAccountId}</c>.
    /// </para>
    /// <para>
    /// <b>Note</b>: Creating a bank account requires an MFA-trusted API session. See MFA setup for information about the BILL MFA process.
    /// </para>
    /// <para>
    /// See Bank account setup (v3 API) in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<OrganizationBankAccountResponseDto> CreateBankAccount(CreateBankAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/funding-accounts/banks"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OrganizationBankAccountResponseDto>(),
            CreateBankAccountError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get bank account details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationBankAccountResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBankAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing bank account.
    /// </remarks>
    public Task<OrganizationBankAccountResponseDto> GetBankAccount(GetBankAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/funding-accounts/banks/{bankAccountId}"),
            [new TemplateParam("bankAccountId", request.BankAccountId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OrganizationBankAccountResponseDto>(),
            GetBankAccountError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get card account details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CardAccountResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCardAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing card account.
    /// </remarks>
    public Task<CardAccountResponseDto> GetCardAccount(GetCardAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/funding-accounts/cards/{cardAccountId}"),
            [new TemplateParam("cardAccountId", request.CardAccountId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CardAccountResponseDto>(),
            GetCardAccountError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get funding account permissions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FundingAccountPermissionResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFundingAccountPermissionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the funding account permissions available for the current organization and current organization user.
    /// </remarks>
    public Task<FundingAccountPermissionResponseDto> GetFundingAccountPermission(GetFundingAccountPermissionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/funding-accounts/permissions"),
            [],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FundingAccountPermissionResponseDto>(),
            GetFundingAccountPermissionError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of bank account users
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoOrganizationBankAccountUserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBankAccountUsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of bank account user objects. In the response, if the bank account user <c>verificationStatus</c> is set as <c>NOMINATED</c>, user verification must be completed before the user can pay with the specified bank account.
    /// <para>
    /// By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoOrganizationBankAccountUserResponseDto> ListBankAccountUsers(ListBankAccountUsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/funding-accounts/banks/users"),
            [],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
                new Param("currentUser", request.CurrentUser),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoOrganizationBankAccountUserResponseDto>(),
            ListBankAccountUsersError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of bank accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoOrganizationBankAccountResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBankAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of bank account objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoOrganizationBankAccountResponseDto> ListBankAccounts(ListBankAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/funding-accounts/banks"),
            [],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoOrganizationBankAccountResponseDto>(),
            ListBankAccountsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of card account users
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoOrganizationCardAccountUserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCardAccountUsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of card account user objects. In the response, if the card account user <c>verificationStatus</c> is set as <c>NOMINATED</c>, user verification must be completed before the user can pay with the specified card account.
    /// <para>
    /// By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoOrganizationCardAccountUserResponseDto> ListCardAccountUsers(ListCardAccountUsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/funding-accounts/cards/users"),
            [],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
                new Param("currentUser", request.CurrentUser),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoOrganizationCardAccountUserResponseDto>(),
            ListCardAccountUsersError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get card funding purpose
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListCardFundingPurposesResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCardFundingPurposesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of card funding purpose values based on the vendor and card brand.
    /// <para>
    /// When you create a payment (<c>POST /v3/payments</c> or <c>POST /v3/payments/bulk</c>) with a <c>CARD_ACCOUNT</c> funding account <c>type</c>, BILL requires a vendor industry value for compliance. When BILL cannot identify the vendor industry, the <c>cardFundingPurpose</c> field must be set in your payment request.
    /// </para>
    /// <para>
    /// Use this endpoint to get the list of card funding purpose values you can set. If you get an empty 200 response, BILL has information about the vendor industry and setting the <c>cardFundingPurpose</c> field is not required in your payment request.
    /// </para>
    /// </remarks>
    public Task<ListCardFundingPurposesResponseDto> ListCardFundingPurposes(ListCardFundingPurposesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/funding-accounts/cards/funding-purposes"),
            [],
            [new Param("vendorId", request.VendorId), new Param("brand", request.Brand)],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListCardFundingPurposesResponseDto>(),
            ListCardFundingPurposesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of AP Cards
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ApCardResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPayableApCardsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of AP Card objects.
    /// <para>
    /// With the AP Card, you can earn rewards simply by paying your bills. The AP Card is a payment method that enables you to send fast payments with no transaction fees or annual fees. You can use the AP Card with any vendor who accepts virtual card payments.
    /// </para>
    /// <para>
    /// See AP Card Frequently Asked Questions (FAQs) in the BILL Help to learn more about AP Card.
    /// </para>
    /// </remarks>
    public Task<IReadOnlyList<ApCardResponseDto>> ListPayableApCards(ListPayableApCardsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/funding-accounts/ap-cards"),
            [],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<ApCardResponseDto>>(),
            ListPayableApCardsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of card accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListPayableCardAccountsResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPayableCardAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of card account objects.
    /// </remarks>
    public Task<ListPayableCardAccountsResponseDto> ListPayableCardAccounts(ListPayableCardAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/funding-accounts/cards"),
            [],
            [new Param("cardUserStatus", request.CardUserStatus)],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListPayableCardAccountsResponseDto>(),
            ListPayableCardAccountsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Nominate a bank account user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StatusDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NominateBankAccountUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Nominate a bank account user.
    /// <para>
    /// When you nominate a user, BILL performs a set of operations.
    /// * The bank account user <c>verificationStatus</c> is set as <c>NOMINATED</c>.
    /// * BILL sends the user an email asking them to sign in to the BILL web app and complete identity verification. See Verify your identity in the Guides section for test verification information you can enter in the sandbox environment.
    /// </para>
    /// <para>
    /// After user identity verification is successful, the bank account user <c>verificationStatus</c> is set as <c>VERIFIED</c> and the user can pay with the specified bank account.
    /// </para>
    /// <para>
    /// <b>Note</b>: The bank account <c>status</c> must be set as <c>VERIFIED</c> before you can nominate bank account users.
    /// </para>
    /// </remarks>
    public Task<StatusDto> NominateBankAccountUser(NominateBankAccountUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/funding-accounts/banks/users/nominate"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StatusDto>(),
            NominateBankAccountUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a bank account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationBankAccountResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateBankAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing bank account.
    /// <para>
    /// This operation follows a set of rules.
    /// * <b>Bank account <c>status</c> requirement</b>: The bank account <c>status</c> must be set as <c>VERIFIED</c> before you can update any details about the bank account. You can verify the bank account with <c>POST /v3/funding-accounts/banks/{bankAccountId}/verify</c>.
    /// * <b>Update field restrictions</b>: You cannot update the <c>routingNumber</c>, <c>accountNumber</c>, and account <c>type</c> values for a bank account. If you want to update any of these values, create a new bank account with <c>POST /v3/funding-accounts/banks</c>.
    /// </para>
    /// </remarks>
    public Task<OrganizationBankAccountResponseDto> UpdateBankAccount(UpdateBankAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/funding-accounts/banks/{bankAccountId}"),
            [new TemplateParam("bankAccountId", request.BankAccountId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OrganizationBankAccountResponseDto>(),
            UpdateBankAccountError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Verify a bank account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BankAccountVerifyResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VerifyBankAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Verify an existing bank account.
    /// <para>
    /// When you create a bank account, BILL sends a test ACH payment to the bank account to confirm whether the account details are accurate. Enter the test amount as the <c>depositAmount</c> value in your <c>POST /v3/funding-accounts/banks/{bankAccountId}/verify</c> request.
    /// </para>
    /// <para>
    /// <b>Note</b>: Bank account verification is required in the production environment before the account can be used for other BILL operations. In the sandbox environment, set <c>depositAmount</c> as <c>0.50</c> to complete bank account verification.
    /// </para>
    /// <para>
    /// The bank account <c>status</c> is set as <c>VERIFIED</c> when BILL is able to verify the <c>depositAmount</c> value. BILL sends an email notification for confirming a test transaction. When BILL cannot verify the bank account after three attempts, you cannot use the bank account. At this point, use another bank account or create a bank account with <c>POST /v3/funding-accounts/banks</c>.
    /// </para>
    /// <para>
    /// After your bank account verification is complete, ensure that the current bank account user <c>verificationStatus</c> is set as <c>VERIFIED</c> before you can use the bank account. To begin the verification process, nominate a bank account user with <c>POST /v3/funding-accounts/banks/users/nominate</c>.
    /// </para>
    /// <para>
    /// See Bank account setup (v3 API) in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<BankAccountVerifyResponseDto> VerifyBankAccount(VerifyBankAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/funding-accounts/banks/{bankAccountId}/verify"),
            [new TemplateParam("bankAccountId", request.BankAccountId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BankAccountVerifyResponseDto>(),
            VerifyBankAccountError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
