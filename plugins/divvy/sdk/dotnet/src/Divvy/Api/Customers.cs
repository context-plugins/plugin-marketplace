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
using Divvy.Requests.Customers;

namespace Divvy.Api;

public sealed class Customers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Customers(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Archive a customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveCustomerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing customer. In the response, the <c>archived</c> field is set as <c>true</c>.
    /// <para>
    /// You can restore an archived customer with <c>POST /v3/customers/{customerId}/restore</c>. There is no change when you archive an archived customer.
    /// </para>
    /// </remarks>
    public Task<CustomerResponseDto> ArchiveCustomer(ArchiveCustomerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/customers/{customerId}/archive"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerResponseDto>(),
            ArchiveCustomerError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive a customer bank account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerBankAccountResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveCustomerBankAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing customer bank account. In the response, the <c>archived</c> field is set as <c>true</c>. An archived customer bank account cannot be restored.
    /// </remarks>
    public Task<CustomerBankAccountResponseDto> ArchiveCustomerBankAccount(ArchiveCustomerBankAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/customers/{customerId}/bank-accounts/{bankAccountId}/archive"),
            [
                new TemplateParam("customerId", request.CustomerId),
                new TemplateParam("bankAccountId", request.BankAccountId),
            ],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerBankAccountResponseDto>(),
            ArchiveCustomerBankAccountError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive a customer contact
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerContactResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveCustomerContactError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing customer contact. In the response, the <c>archived</c> field is set as <c>true</c>.
    /// <para>
    /// You can restore an archived customer with <c>POST /v3/customers/{customerId}/contacts/{contactId}/restore</c>. There is no change when you archive an archived customer contact.
    /// </para>
    /// </remarks>
    public Task<CustomerContactResponseDto> ArchiveCustomerContact(ArchiveCustomerContactRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/customers/{customerId}/contacts/{contactId}/archive"),
            [new TemplateParam("customerId", request.CustomerId), new TemplateParam("contactId", request.ContactId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerContactResponseDto>(),
            ArchiveCustomerContactError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set charge customer authorization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ChargeAuthorizationResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AuthorizeToChargeCustomerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Authorize your organization to charge a customer for invoices.
    /// <para>
    /// By default, your organization is not authorized to charge a customer. The customer <c>authorizedToCharge</c> field must be set as <c>true</c> for you to charge the customer for invoices.
    /// </para>
    /// </remarks>
    public Task<ChargeAuthorizationResponseDto> AuthorizeToChargeCustomer(AuthorizeToChargeCustomerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/customers/{customerId}/charge-authorization"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ChargeAuthorizationResponseDto>(),
            AuthorizeToChargeCustomerError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new customer.
    /// <para>
    /// See Customers in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<CustomerResponseDto> CreateCustomer(CreateCustomerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/customers"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomerResponseDto>(),
            CreateCustomerError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a customer bank account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerBankAccountResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomerBankAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new customer bank account. When you add customer bank account information, you can charge the customer for invoices.
    /// <para>
    /// Creating a customer bank account follows a set of rules.
    /// * <b>Customer billing address</b>: The customer <c>billingAddress</c> information is required before you can create a customer bank account.
    /// * <b>Customer bank account verification</b>: If the customer bank account requires verification, BILL requires up to 2 business days to complete a one-time verification of the bank account.
    /// </para>
    /// <para>
    /// <b>Note</b>: When you add a customer bank account in the production environment, BILL validates the customer routing number before you can charge the customer. You will get an error message if the customer routing number is invalid in production.
    /// </para>
    /// </remarks>
    public Task<CustomerBankAccountResponseDto> CreateCustomerBankAccount(CreateCustomerBankAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/customers/{customerId}/bank-accounts"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomerBankAccountResponseDto>(),
            CreateCustomerBankAccountError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a customer contact
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerContactResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomerContactError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new customer contact.
    /// <para>
    /// When you create a customer contact, BILL enables the customer to sign in to the BILL web app with the <c>email</c> value and a random password. The signed-in customer can view invoices, make payments, and manage their account.
    /// </para>
    /// </remarks>
    public Task<CustomerContactResponseDto> CreateCustomerContact(CreateCustomerContactRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/customers/{customerId}/contacts"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomerContactResponseDto>(),
            CreateCustomerContactError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get customer details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing customer.
    /// </remarks>
    public Task<CustomerResponseDto> GetCustomer(GetCustomerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/customers/{customerId}"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerResponseDto>(),
            GetCustomerError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get customer bank account details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerBankAccountResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomerBankAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing customer bank account.
    /// </remarks>
    public Task<CustomerBankAccountResponseDto> GetCustomerBankAccount(GetCustomerBankAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/customers/{customerId}/bank-accounts/{bankAccountId}"),
            [
                new TemplateParam("customerId", request.CustomerId),
                new TemplateParam("bankAccountId", request.BankAccountId),
            ],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerBankAccountResponseDto>(),
            GetCustomerBankAccountError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get customer contact details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerContactResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomerContactError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing customer contact.
    /// </remarks>
    public Task<CustomerContactResponseDto> GetCustomerContact(GetCustomerContactRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/customers/{customerId}/contacts/{contactId}"),
            [new TemplateParam("customerId", request.CustomerId), new TemplateParam("contactId", request.ContactId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerContactResponseDto>(),
            GetCustomerContactError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of customer bank accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoCustomerBankAccountResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomerBankAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of customer bank account objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoCustomerBankAccountResponseDto> ListCustomerBankAccounts(ListCustomerBankAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/customers/{customerId}/bank-accounts"),
            [new TemplateParam("customerId", request.CustomerId)],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoCustomerBankAccountResponseDto>(),
            ListCustomerBankAccountsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of customer contacts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoCustomerContactResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomerContactsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of customer contact objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoCustomerContactResponseDto> ListCustomerContacts(ListCustomerContactsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/customers/{customerId}/contacts"),
            [new TemplateParam("customerId", request.CustomerId)],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoCustomerContactResponseDto>(),
            ListCustomerContactsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of customers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoCustomerResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of customer objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoCustomerResponseDto> ListCustomers(ListCustomersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/customers"),
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
            JsonResponse.Create<ListResponseDtoCustomerResponseDto>(),
            ListCustomersError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore an archived customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RestoreCustomerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore an archived customer. In the response, the <c>archived</c> field is set as <c>false</c>.
    /// <para>
    /// You can perform any valid BILL operation on restored customers. There is no change when you restore a restored customer.
    /// </para>
    /// </remarks>
    public Task<CustomerResponseDto> RestoreCustomer(RestoreCustomerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/customers/{customerId}/restore"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerResponseDto>(),
            RestoreCustomerError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore a customer contact
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerContactResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RestoreCustomerContactError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore an archived customer contact. In the response, the <c>archived</c> field is set as <c>false</c>.
    /// <para>
    /// You can perform any valid BILL operation on restored customer contacts. There is no change when you restore a restored customer contact.
    /// </para>
    /// </remarks>
    public Task<CustomerContactResponseDto> RestoreCustomerContact(RestoreCustomerContactRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/customers/{customerId}/contacts/{contactId}/restore"),
            [new TemplateParam("customerId", request.CustomerId), new TemplateParam("contactId", request.ContactId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerContactResponseDto>(),
            RestoreCustomerContactError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCustomerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing customer.
    /// </remarks>
    public Task<CustomerResponseDto> UpdateCustomer(UpdateCustomerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/customers/{customerId}"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomerResponseDto>(),
            UpdateCustomerError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a customer bank account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerBankAccountResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCustomerBankAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing customer bank account.
    /// <para>
    /// You can update only the <c>nickname</c> and <c>ownerType</c> fields for a customer bank account. If you want to update any of the other fields, create a new customer bank account with <c>POST /v3/customers/{customerId}/bank-accounts</c>.
    /// </para>
    /// </remarks>
    public Task<CustomerBankAccountResponseDto> UpdateCustomerBankAccount(UpdateCustomerBankAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/customers/{customerId}/bank-accounts/{bankAccountId}"),
            [
                new TemplateParam("customerId", request.CustomerId),
                new TemplateParam("bankAccountId", request.BankAccountId),
            ],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomerBankAccountResponseDto>(),
            UpdateCustomerBankAccountError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a customer contact
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerContactResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCustomerContactError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing customer contact.
    /// </remarks>
    public Task<CustomerContactResponseDto> UpdateCustomerContact(UpdateCustomerContactRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/customers/{customerId}/contacts/{contactId}"),
            [new TemplateParam("customerId", request.CustomerId), new TemplateParam("contactId", request.ContactId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomerContactResponseDto>(),
            UpdateCustomerContactError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
