using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Paid.Core;
using Paid.Core.Authentication;
using Paid.Core.ErrorResponse;
using Paid.Core.Exceptions;
using Paid.Core.Extensions;
using Paid.Core.Models;
using Paid.Core.Request;
using Paid.Core.Response;
using Paid.Errors;
using Paid.Models;
using Paid.Requests.Customers;

namespace Paid.Api;

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
    /// Check customer entitlement for an event
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomersCheckEntitlementResponse200"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CheckEntitlementError"/> when the server returns an error response.</exception>
    public Task<CustomersCheckEntitlementResponse200> CheckEntitlement(CheckEntitlementRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{customerId}/entitlement"),
            [new TemplateParam("customerId", request.CustomerId)],
            [new Param("event_name", request.EventName), new Param("view", request.View)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomersCheckEntitlementResponse200>(),
            CheckEntitlementError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a new customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Customer1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new customer for the organization
    /// </remarks>
    public Task<Customer1> CreateCustomer(CreateCustomerOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/"),
            [],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Customer1>(),
            CreateCustomerError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create customer alias
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerAlias"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomerAliasError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an alternate external identifier for a customer by Paid display ID.
    /// </remarks>
    public Task<CustomerAlias> CreateCustomerAlias(CreateCustomerAliasRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{id}/aliases"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomerAlias>(),
            CreateCustomerAliasError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create customer alias by external ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerAlias"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomerAliasByExternalIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an alternate external identifier for a customer by external ID.
    /// </remarks>
    public Task<CustomerAlias> CreateCustomerAliasByExternalId(CreateCustomerAliasByExternalIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/external/{externalId}/aliases"),
            [new TemplateParam("externalId", request.ExternalId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomerAlias>(),
            CreateCustomerAliasByExternalIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create customer payment method by external ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentMethod"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePaymentMethodError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new payment method for a customer using a Stripe confirmation token.
    /// </remarks>
    public Task<PaymentMethod> CreatePaymentMethod(CreatePaymentMethodRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/external/{externalId}/payment-methods"),
            [new TemplateParam("externalId", request.ExternalId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentMethod>(),
            CreatePaymentMethodError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a new customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Customer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Customer> Create3(Create3Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers"),
            [],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Customer>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete customer by external ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<object> DeleteByExternalId3(DeleteByExternalId3Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/external/{externalId}"),
            [new TemplateParam("externalId", request.ExternalId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete customer alias
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCustomerAliasError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove an alternate external identifier from a customer by Paid display ID.
    /// </remarks>
    public Task<object> DeleteCustomerAlias(DeleteCustomerAliasRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{id}/aliases/{alias}"),
            [new TemplateParam("id", request.Id), new TemplateParam("alias", request.Alias)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteCustomerAliasError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete customer alias by external ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCustomerAliasByExternalIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove an alternate external identifier from a customer by external ID.
    /// </remarks>
    public Task<object> DeleteCustomerAliasByExternalId(DeleteCustomerAliasByExternalIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/external/{externalId}/aliases/{alias}"),
            [new TemplateParam("externalId", request.ExternalId), new TemplateParam("alias", request.Alias)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteCustomerAliasByExternalIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCustomerByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a customer by Paid display ID. Use the value returned as <c>customer.id</c>, for example <c>cus_abc123</c>. If you have your own customer ID, use <c>DELETE /api/v2/customers/external/{externalId}</c>.
    /// </remarks>
    public Task<object> DeleteCustomerById(DeleteCustomerByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteCustomerByIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete customer payment method by external ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeletePaymentMethodError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a specific payment method from a customer's account.
    /// </remarks>
    public Task<object> DeletePaymentMethod(DeletePaymentMethodRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/external/{externalId}/payment-methods/{paymentMethodId}"),
            [
                new TemplateParam("externalId", request.ExternalId),
                new TemplateParam("paymentMethodId", request.PaymentMethodId),
            ],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeletePaymentMethodError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<object> Delete3(Delete3Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{customerId}"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get customer by external ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Customer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Customer> GetByExternalId3(GetByExternalId3Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/external/{externalId}"),
            [new TemplateParam("externalId", request.ExternalId)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Customer>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch cost traces for a customer by external ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CostTracesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCostsByExternalIdError"/> when the server returns an error response.</exception>
    public Task<CostTracesResponse> GetCostsByExternalId(GetCostsByExternalIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/external/{externalId}/costs"),
            [new TemplateParam("externalId", request.ExternalId)],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("startTime", request.StartTime?.ToIso8601()),
                new Param("endTime", request.EndTime?.ToIso8601()),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CostTracesResponse>(),
            GetCostsByExternalIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Customer1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomerByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a customer by Paid display ID. Use the value returned as <c>customer.id</c>, for example <c>cus_abc123</c>. If you have your own customer ID, use <c>GET /api/v2/customers/external/{externalId}</c>.
    /// </remarks>
    public Task<Customer1> GetCustomerById(GetCustomerByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Customer1>(),
            GetCustomerByIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get customer credit balances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreditBalanceListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomerCreditBalancesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get current customer credit balances grouped by currency for a Paid customer display ID. Use the value returned as <c>customer.id</c>, for example <c>cus_abc123</c>. If you have your own customer ID, use <c>/api/v2/customers/external/{externalId}/credits/balances</c>.
    /// </remarks>
    public Task<CreditBalanceListResponse> GetCustomerCreditBalances(GetCustomerCreditBalancesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{id}/credits/balances"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CreditBalanceListResponse>(),
            GetCustomerCreditBalancesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get customer credit balances by external ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreditBalanceListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomerCreditBalancesByExternalIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get current customer credit balances grouped by currency, looked up by external ID
    /// </remarks>
    public Task<CreditBalanceListResponse> GetCustomerCreditBalancesByExternalId(GetCustomerCreditBalancesByExternalIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/external/{externalId}/credits/balances"),
            [new TemplateParam("externalId", request.ExternalId)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CreditBalanceListResponse>(),
            GetCustomerCreditBalancesByExternalIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get customer state by external ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerState"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomerStateByExternalIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Primary integration endpoint for agents and programmatic clients using their own customer IDs. Use the value you stored on <c>customer.externalId</c>, for example <c>customer_123</c>.
    /// </remarks>
    public Task<CustomerState> GetCustomerStateByExternalId(GetCustomerStateByExternalIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/external/{externalId}/state"),
            [new TemplateParam("externalId", request.ExternalId)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerState>(),
            GetCustomerStateByExternalIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get customer state
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerState"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomerStateByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current customer state by Paid display ID
    /// </remarks>
    public Task<CustomerState> GetCustomerStateById(GetCustomerStateByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{id}/state"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerState>(),
            GetCustomerStateByIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get customer entitlements
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="EntitlementUsage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEntitlementsError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<EntitlementUsage>> GetEntitlements(GetEntitlementsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{customerId}/credit-bundles"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<EntitlementUsage>>(),
            GetEntitlementsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch usage summaries for a customer by external ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsageSummariesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsageByExternalIdError"/> when the server returns an error response.</exception>
    public Task<UsageSummariesResponse> GetUsageByExternalId(GetUsageByExternalIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/external/{externalId}/usage"),
            [new TemplateParam("externalId", request.ExternalId)],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("startTime", request.StartTime?.ToIso8601()),
                new Param("endTime", request.EndTime?.ToIso8601()),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsageSummariesResponse>(),
            GetUsageByExternalIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get customer by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Customer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Customer> Get3(Get3Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{customerId}"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Customer>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Grant customer credits
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GrantCustomerCreditsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GrantCustomerCreditsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Immediately grant credits to a customer using an active credit currency key.
    /// </remarks>
    public Task<GrantCustomerCreditsResponse> GrantCustomerCredits(GrantCustomerCreditsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{id}/credits/grants"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GrantCustomerCreditsResponse>(),
            GrantCustomerCreditsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Grant customer credits by external ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GrantCustomerCreditsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GrantCustomerCreditsByExternalIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Immediately grant credits to a customer looked up by external ID using an active credit currency key.
    /// </remarks>
    public Task<GrantCustomerCreditsResponse> GrantCustomerCreditsByExternalId(GrantCustomerCreditsByExternalIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/external/{externalId}/credits/grants"),
            [new TemplateParam("externalId", request.ExternalId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GrantCustomerCreditsResponse>(),
            GrantCustomerCreditsByExternalIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List customer aliases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerAliasListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomerAliasesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List alternate external identifiers that resolve to a customer by Paid display ID.
    /// </remarks>
    public Task<CustomerAliasListResponse> ListCustomerAliases(ListCustomerAliasesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{id}/aliases"),
            [new TemplateParam("id", request.Id)],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerAliasListResponse>(),
            ListCustomerAliasesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List customer aliases by external ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerAliasListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomerAliasesByExternalIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List alternate external identifiers that resolve to a customer by external ID.
    /// </remarks>
    public Task<CustomerAliasListResponse> ListCustomerAliasesByExternalId(ListCustomerAliasesByExternalIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/external/{externalId}/aliases"),
            [new TemplateParam("externalId", request.ExternalId)],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerAliasListResponse>(),
            ListCustomerAliasesByExternalIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List customers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of customers for the organization
    /// </remarks>
    public Task<CustomerListResponse> ListCustomers(ListCustomersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("name", request.Name),
                new Param("status", request.Status),
                new Param("creationState", request.CreationState),
                new Param("createdAtFrom", request.CreatedAtFrom),
                new Param("createdAtTo", request.CreatedAtTo),
                new Param("externalId", request.ExternalId),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerListResponse>(),
            ListCustomersError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List customer payment methods by external ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="PaymentMethod"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPaymentMethodsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all payment methods associated with a customer identified by their external ID.
    /// </remarks>
    public Task<IReadOnlyList<PaymentMethod>> ListPaymentMethods(ListPaymentMethodsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/external/{externalId}/payment-methods"),
            [new TemplateParam("externalId", request.ExternalId)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<PaymentMethod>>(),
            ListPaymentMethodsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List customers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Customer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<Customer>> List3(List3Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers"),
            [],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Customer>>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update customer by external ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Customer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Customer> UpdateByExternalId2(UpdateByExternalId2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/external/{externalId}"),
            [new TemplateParam("externalId", request.ExternalId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Customer>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Customer1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCustomerByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a customer by Paid display ID. Use the value returned as <c>customer.id</c>, for example <c>cus_abc123</c>. If you have your own customer ID, use <c>PUT /api/v2/customers/external/{externalId}</c>.
    /// </remarks>
    public Task<Customer1> UpdateCustomerById(UpdateCustomerByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Customer1>(),
            UpdateCustomerByIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Customer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Customer> Update2(Update2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{customerId}"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Customer>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upsert customer user by external IDs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerUser"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpsertCustomerUserByExternalIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create or update a customer user using customer and user external IDs
    /// </remarks>
    public Task<CustomerUser> UpsertCustomerUserByExternalId(UpsertCustomerUserByExternalIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{customerExternalId}/users/{userExternalId}"),
            [
                new TemplateParam("customerExternalId", request.CustomerExternalId),
                new TemplateParam("userExternalId", request.UserExternalId),
            ],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomerUser>(),
            UpsertCustomerUserByExternalIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
