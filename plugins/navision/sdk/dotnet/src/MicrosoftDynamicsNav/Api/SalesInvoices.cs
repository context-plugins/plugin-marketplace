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
using MicrosoftDynamicsNav.Requests.SalesInvoices;

namespace MicrosoftDynamicsNav.Api;

/// <summary>
/// Manage sales invoices and lines
/// </summary>
public sealed class SalesInvoices
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SalesInvoices(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Sales Invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SalesInvoice"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSalesInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new sales invoice in the specified company.
    /// </remarks>
    public Task<SalesInvoice> CreateSalesInvoice(CreateSalesInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/salesInvoices"),
            [new TemplateParam("company_id", request.CompanyId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SalesInvoice>(),
            CreateSalesInvoiceError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Sales Invoices
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesApiSalesInvoicesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSalesInvoicesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of sales invoice objects.
    /// </remarks>
    public Task<CompaniesApiSalesInvoicesResponse> ListSalesInvoices(ListSalesInvoicesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/salesInvoices"),
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
            JsonResponse.Create<CompaniesApiSalesInvoicesResponse>(),
            ListSalesInvoicesError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
