using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FinixApiReference.Core;
using FinixApiReference.Core.Exceptions;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Request;
using FinixApiReference.Core.Response;
using FinixApiReference.Errors;
using FinixApiReference.Models;
using FinixApiReference.Requests.Microdeposits;

namespace FinixApiReference.Api;

/// <summary>
/// A Microdeposit represents the $0.01 verification deposit Finix sends to a bank account when microdeposit verification is required. The deposit's statement descriptor carries the code the account owner submits to verify the bank account.
/// <para>
/// You may check a verification's status, remaining submission tries, and expiration. The verification code is never returned by the API. The account owner must read it from their bank statement.
/// </para>
/// <para>
/// For more information, see <see href="/guides/online-payments/bank-payments/microdeposit-verification">Microdeposit verification</see>.
/// </para>
/// </summary>
public sealed class Microdeposits
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Microdeposits(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Fetch a Microdeposit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Microdeposit"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMicroDepositError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of a Microdeposit to check the verification's status, remaining submission tries, and expiration.
    /// </remarks>
    public Task<Microdeposit> GetMicroDeposit(GetMicroDepositRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/microdeposits/{microdeposit_id}"),
            [new TemplateParam("microdeposit_id", request.MicrodepositId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Microdeposit>(),
            GetMicroDepositError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Microdeposits
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListMicroDeposits"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMicroDepositsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of Microdeposit resources. Filter by <c>payment_instrument_id</c> to find microdeposits for a specific <c>Payment Instrument</c>.
    /// </remarks>
    public Task<ListMicroDeposits> ListMicroDeposits(ListMicroDepositsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/microdeposits"),
            [],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("limit", request.Limit),
                new Param("payment_instrument_id", request.PaymentInstrumentId),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListMicroDeposits>(),
            ListMicroDepositsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
