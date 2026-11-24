using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Jid.Core;
using Jid.Core.Authentication;
using Jid.Core.ErrorResponse;
using Jid.Core.Exceptions;
using Jid.Core.Models;
using Jid.Core.Request;
using Jid.Core.Response;
using Jid.Errors;
using Jid.Models;
using Jid.Requests.Verify;

namespace Jid.Api;

/// <summary>
/// Decisions, files and receipts
/// </summary>
public sealed class Verify
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Verify(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// The full file: verify plus location, owner statements, possible matches and the…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBusinessFileError"/> when the server returns an error response.</exception>
    public Task<object> GetBusinessFile(GetBusinessFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/entities/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetBusinessFileError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a signed verification receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Receipt"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetReceiptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Free; not a check. Readable by anyone holding the receipt id, so it can be shown to an auditor or counterparty. Verify <c>signature.sig</c> over the canonical statement with the key at /.well-known/jid-keys.json.
    /// </remarks>
    public Task<Receipt> GetReceipt(GetReceiptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/receipts/{receipt_id}"),
            [new TemplateParam("receipt_id", request.ReceiptId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Receipt>(),
            GetReceiptError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The published decision rules: activities, requirements, legal basis
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<object> ListActivities(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/activities"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Verify a business before acting; with an activity, get a decision and a signed…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VerifyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VerifyBusinessError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One check. Without activity, jurisdiction or amount: status, flags and every current fact with its receipts (unchanged since 1.0). With any of them: also <c>decision</c> (proceed | review | stop | insufficient_data) with reasons, and <c>receipt</c> (stored 13 months, Ed25519-signed). Act only on proceed; requirements Jid cannot check are unknown and lead to review.
    /// </remarks>
    public Task<VerifyResponse> VerifyBusiness(VerifyBusinessRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/entities/{id}/verify"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("activity", request.Activity),
                new Param("jurisdiction", request.Jurisdiction),
                new Param("amount", request.Amount),
                new Param("currency", request.Currency),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VerifyResponse>(),
            VerifyBusinessError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
