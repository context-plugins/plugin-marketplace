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
using Curlec.Requests.SettlementsApi;

namespace Curlec.Api;

/// <summary>
/// Settlements represent batch transfers of collected payment funds to your bank account. Use the recon endpoint for transaction-level reconciliation reports mapping each payment, refund, and adjustment to its settlement.
/// </summary>
public sealed class SettlementsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SettlementsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Fetch all settlements
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SettlementsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchAllSettlementsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a paginated list of settlements. Each settlement represents a batch transfer to your bank account. Maximum 100 per call.
    /// </remarks>
    public Task<SettlementsResponse> FetchAllSettlements(FetchAllSettlementsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlements"),
            [],
            [
                new Param("from", request.From),
                new Param("to", request.To),
                new Param("count", request.Count),
                new Param("skip", request.Skip),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SettlementsResponse>(),
            FetchAllSettlementsError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch settlement by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Settlement"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchSettlementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve details of a specific settlement transaction.
    /// </remarks>
    public Task<Settlement> FetchSettlement(FetchSettlementRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlements/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Settlement>(),
            FetchSettlementError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch settlement reconciliation report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SettlementsReconCombinedResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchSettlementReconError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a detailed transaction-level reconciliation report for a given month (or day). Each record maps a payment, refund, transfer, or adjustment to its settlement. Use for accounting reconciliation. Maximum 1000 records per call.
    /// </remarks>
    public Task<SettlementsReconCombinedResponse> FetchSettlementRecon(FetchSettlementReconRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlements/recon/combined"),
            [],
            [
                new Param("year", request.Year),
                new Param("month", request.Month),
                new Param("day", request.Day),
                new Param("count", request.Count),
                new Param("skip", request.Skip),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SettlementsReconCombinedResponse>(),
            FetchSettlementReconError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
