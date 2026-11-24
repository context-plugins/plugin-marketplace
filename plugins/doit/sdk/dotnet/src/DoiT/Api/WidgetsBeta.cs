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
using DoiT.Requests.WidgetsBeta;

namespace DoiT.Api;

/// <summary>
/// Beta. Read precomputed current-month cloud spend and forecast metrics. Widget results are
/// refreshed in the background; reading a widget returns the latest cached result and never
/// starts a synchronous refresh. Use the list operation to discover the complete catalogue.
/// </summary>
public sealed class WidgetsBeta
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal WidgetsBeta(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a widget
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Widget"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWidgetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the latest precomputed cached result for one widget. This read does not refresh or
    /// recompute the widget synchronously.
    /// <para>
    /// Use either the customer-specific <c>id</c> returned by the list-widgets operation or one of these
    /// stable aliases:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>current-month-cloud-spend</c> — total cloud spend accumulated during the current calendar month.</description></item>
    ///   <item><description><c>current-month-cloud-forecast</c> — forecast of total cloud spend for the current calendar month.</description></item>
    /// </list>
    /// <para>
    /// The two concrete alias requests are:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>GET https://api.doit.com/analytics/v1/widgets/current-month-cloud-spend</c></description></item>
    ///   <item><description><c>GET https://api.doit.com/analytics/v1/widgets/current-month-cloud-forecast</c></description></item>
    /// </list>
    /// <para>
    /// Authenticate with <c>Authorization: Bearer </c>. Omit <c>X-Tenant-Id</c> when the credential
    /// resolves to one customer. When the credential can act on multiple customers, send
    /// <c>X-Tenant-Id: </c> to select the customer. A <c>403</c> response means the caller or
    /// selected customer is not authorized or entitled to use this API.
    /// </para>
    /// <para>
    /// The result's <c>period.endTime</c> is exclusive. Monetary <c>amount</c> values are decimal strings and
    /// <c>currency</c> values are ISO 4217 currency codes. <c>monthToMonthGrowthPercentage</c> and
    /// <c>monthToMonthGrowthAmount</c> are both <c>null</c> when no comparable prior-period value exists.
    /// </para>
    /// </remarks>
    public Task<Widget> GetWidget(GetWidgetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/widgets/{widgetId}"),
            [new TemplateParam("widgetId", request.WidgetId)],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Widget>(),
            GetWidgetError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List widgets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WidgetList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWidgetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the complete catalogue of preset widgets supported by the Analytics Widgets API.
    /// Each entry contains a customer-specific <c>id</c> and a stable customer-facing <c>alias</c>; either
    /// value can be passed to the get-widget operation. An <c>id</c> can vary by customer or service
    /// tier, while an <c>alias</c> remains stable.
    /// <para>
    /// Authenticate with <c>Authorization: Bearer </c>. Omit <c>X-Tenant-Id</c> when the credential
    /// resolves to one customer. When the credential can act on multiple customers, send
    /// <c>X-Tenant-Id: </c> to select the customer. A <c>403</c> response means the caller or
    /// selected customer is not authorized or entitled to use this API.
    /// </para>
    /// </remarks>
    public Task<WidgetList> ListWidgets(ListWidgetsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/widgets"),
            [],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WidgetList>(),
            ListWidgetsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
