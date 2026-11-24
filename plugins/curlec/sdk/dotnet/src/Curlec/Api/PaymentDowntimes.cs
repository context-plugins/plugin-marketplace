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
using Curlec.Requests.PaymentDowntimes;

namespace Curlec.Api;

/// <summary>
/// Scheduled and live downtime information for card, netbanking, and UPI. Poll or subscribe to payment.downtime webhooks to detect degraded methods and adjust your checkout UI.
/// </summary>
public sealed class PaymentDowntimes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PaymentDowntimes(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Fetch payment downtime by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentDowntime"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchPaymentDowntimeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve details of a specific payment downtime event.
    /// </remarks>
    public Task<PaymentDowntime> FetchPaymentDowntime(FetchPaymentDowntimeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payments/downtimes/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentDowntime>(),
            FetchPaymentDowntimeError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch all payment downtimes
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentsDowntimesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchPaymentDowntimesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve current and upcoming payment method downtimes for cards, netbanking, and UPI. Use to surface degraded methods in checkout UI.
    /// </remarks>
    public Task<PaymentsDowntimesResponse> FetchPaymentDowntimes(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payments/downtimes"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentsDowntimesResponse>(),
            FetchPaymentDowntimesError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
