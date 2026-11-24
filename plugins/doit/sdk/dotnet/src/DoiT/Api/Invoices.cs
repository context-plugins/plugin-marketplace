using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.Invoices;

namespace DoiT.Api;

/// <summary>
/// Access your current and historical billing documents.
/// </summary>
public sealed class Invoices
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Invoices(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve an invoice
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BillingV1InvoicesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInvoiceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the full details of an invoice specified by the invoice number.
    /// </remarks>
    public Task<BillingV1InvoicesResponse1> GetInvoice(GetInvoiceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billing/v1/invoices/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BillingV1InvoicesResponse1>(),
            GetInvoiceError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List invoices
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BillingV1InvoicesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListInvoicesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all the current and historical invoices for your organization.
    /// Invoices are returned in reverse chronological order by default.
    /// </remarks>
    public Task<BillingV1InvoicesResponse> ListInvoices(ListInvoicesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billing/v1/invoices"),
            [],
            [
                new Param("maxResults", request.MaxResults),
                new Param("pageToken", request.PageToken),
                new Param("filter", request.Filter),
                new Param("minCreationTime", request.MinCreationTime),
                new Param("maxCreationTime", request.MaxCreationTime),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BillingV1InvoicesResponse>(),
            ListInvoicesError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
