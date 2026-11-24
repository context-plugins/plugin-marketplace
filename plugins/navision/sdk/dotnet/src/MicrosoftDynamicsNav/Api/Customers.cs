using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using MicrosoftDynamicsNav.Core;
using MicrosoftDynamicsNav.Core.Authentication;
using MicrosoftDynamicsNav.Core.Exceptions;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Core.Request;
using MicrosoftDynamicsNav.Core.Response;
using MicrosoftDynamicsNav.Errors;
using MicrosoftDynamicsNav.Models;
using MicrosoftDynamicsNav.Requests.Customers;

namespace MicrosoftDynamicsNav.Api;

/// <summary>
/// Manage customer records
/// </summary>
public sealed class Customers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Customers(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Customer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new customer object in the specified company.
    /// </remarks>
    public Task<Customer> CreateCustomer(CreateCustomerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/customers"),
            [new TemplateParam("company_id", request.CompanyId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Customer>(),
            CreateCustomerError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCustomerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a customer by ID.
    /// </remarks>
    public Task DeleteCustomer(DeleteCustomerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/customers({customer_id})"),
            [new TemplateParam("company_id", request.CompanyId), new TemplateParam("customer_id", request.CustomerId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteCustomerError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Customer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a specific customer by ID.
    /// </remarks>
    public Task<Customer> GetCustomer(GetCustomerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/customers({customer_id})"),
            [new TemplateParam("company_id", request.CompanyId), new TemplateParam("customer_id", request.CustomerId)],
            [new Param("$select", request.Select), new Param("$expand", request.Expand)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Customer>(),
            GetCustomerError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Customers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesApiCustomersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of customer objects from the specified company.
    /// </remarks>
    public Task<CompaniesApiCustomersResponse> ListCustomers(ListCustomersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/customers"),
            [new TemplateParam("company_id", request.CompanyId)],
            [
                new Param("$top", request.Top),
                new Param("$skip", request.Skip),
                new Param("$filter", request.Filter),
                new Param("$orderby", request.Orderby),
                new Param("$select", request.Select),
                new Param("$expand", request.Expand),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesApiCustomersResponse>(),
            ListCustomersError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Customer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCustomerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing customer object.
    /// </remarks>
    public Task<Customer> UpdateCustomer(UpdateCustomerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/customers({customer_id})"),
            [new TemplateParam("company_id", request.CompanyId), new TemplateParam("customer_id", request.CustomerId)],
            [],
            [new HeaderParam("If-Match", request.IfMatch), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Customer>(),
            UpdateCustomerError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
