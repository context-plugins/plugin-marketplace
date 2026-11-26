using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Dynamics365BusinessCentral.Core;
using Dynamics365BusinessCentral.Core.Authentication;
using Dynamics365BusinessCentral.Core.Exceptions;
using Dynamics365BusinessCentral.Core.Models;
using Dynamics365BusinessCentral.Core.Request;
using Dynamics365BusinessCentral.Core.Response;
using Dynamics365BusinessCentral.Errors;
using Dynamics365BusinessCentral.Models;
using Dynamics365BusinessCentral.Requests.PurchaseInvoices;

namespace Dynamics365BusinessCentral.Api;

/// <summary>
/// Manage purchase invoices and lines
/// </summary>
public sealed class PurchaseInvoices
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PurchaseInvoices(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Purchase Invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PurchaseInvoice"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePurchaseInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new purchase invoice in the specified company.
    /// </remarks>
    public Task<PurchaseInvoice> CreatePurchaseInvoice(CreatePurchaseInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/purchaseInvoices"),
            [new TemplateParam("company_id", request.CompanyId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PurchaseInvoice>(),
            CreatePurchaseInvoiceError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Purchase Invoices
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesApiPurchaseInvoicesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPurchaseInvoicesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of purchase invoice objects.
    /// </remarks>
    public Task<CompaniesApiPurchaseInvoicesResponse> ListPurchaseInvoices(ListPurchaseInvoicesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/purchaseInvoices"),
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
            JsonResponse.Create<CompaniesApiPurchaseInvoicesResponse>(),
            ListPurchaseInvoicesError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
