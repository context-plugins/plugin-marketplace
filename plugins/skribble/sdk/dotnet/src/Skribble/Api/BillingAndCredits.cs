using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Skribble.Core;
using Skribble.Core.Authentication;
using Skribble.Core.Exceptions;
using Skribble.Core.Models;
using Skribble.Core.Request;
using Skribble.Core.Response;
using Skribble.Errors;
using Skribble.Models;
using Skribble.Requests.BillingAndCredits;

namespace Skribble.Api;

/// <summary>
/// Endpoints for managing account credits, billing information, and payment operations.
/// </summary>
public sealed class BillingAndCredits
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BillingAndCredits(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Credits information
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BillingCreditInfos"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBillingCreditsInfosError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the list of credit usage information associated with specific endpoints
    /// </remarks>
    public Task<BillingCreditInfos> GetBillingCreditsInfos(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleAdditionalInformationApi("/billing/credits/infos"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BillingCreditInfos>(),
            GetBillingCreditsInfosError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Invoiced credit details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BillingCreditUsage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBillingCreditsInvoicedError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get invoiced credit details for the most recent billing period or a
    /// specified time period
    /// </remarks>
    public Task<BillingCreditUsage> GetBillingCreditsInvoiced(GetBillingCreditsInvoicedRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleAdditionalInformationApi("/billing/credits/invoiced"),
            [],
            [new Param("period", request.Period)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BillingCreditUsage>(),
            GetBillingCreditsInvoicedError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Current credit usage
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BillingCreditUsage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBillingCreditsUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get credit usage list and details for current billing period
    /// </remarks>
    public Task<BillingCreditUsage> GetBillingCreditsUsage(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleAdditionalInformationApi("/billing/credits/usage"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BillingCreditUsage>(),
            GetBillingCreditsUsageError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
