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
using DoiT.Requests.BillingExplainerApi;

namespace DoiT.Api;

/// <summary>
/// Explain month-over-month changes in invoiced cloud costs.
/// </summary>
public sealed class BillingExplainerApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BillingExplainerApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve a per-payer billing explainer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BillingExplainerCustomer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBillingExplainerPerPayerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the invoiced cost changes for each payer in the authenticated tenant.
    /// </remarks>
    public Task<BillingExplainerCustomer> GetBillingExplainerPerPayer(GetBillingExplainerPerPayerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billing/v1/billing-explainers/{invoiceMonth}"),
            [new TemplateParam("invoiceMonth", request.InvoiceMonth)],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BillingExplainerCustomer>(),
            GetBillingExplainerPerPayerError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve an entity invoice explainer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntityInvoiceExplainer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEntityInvoiceExplainerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns invoiced cost changes for an invoice owned by the specified billing profile in the authenticated tenant.
    /// </remarks>
    public Task<EntityInvoiceExplainer> GetEntityInvoiceExplainer(GetEntityInvoiceExplainerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billing/v1/billing-profiles/{billingProfileId}/billing-explainers/{invoiceNumber}"),
            [
                new TemplateParam("billingProfileId", request.BillingProfileId),
                new TemplateParam("invoiceNumber", request.InvoiceNumber),
            ],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EntityInvoiceExplainer>(),
            GetEntityInvoiceExplainerError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
