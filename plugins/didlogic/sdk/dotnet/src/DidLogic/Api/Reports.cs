using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DidLogic.Core;
using DidLogic.Core.Exceptions;
using DidLogic.Core.Extensions;
using DidLogic.Core.Models;
using DidLogic.Core.Request;
using DidLogic.Core.Response;
using DidLogic.Errors;
using DidLogic.Requests.Reports;

namespace DidLogic.Api;

public sealed class Reports
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Reports(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get ASR (Answer-Seizure Ratio) report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AsrReportShowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the Answer-Seizure Ratio (ASR) report in CSV format for specified date range.
    /// <para>
    /// <b>ASR Metrics:</b>
    /// - Number of calls
    /// - Talk time in minutes
    /// - ASR: Percentage of calls successfully connected
    /// - Average call duration (ACD)
    /// </para>
    /// <para>
    /// <b>Requirements:</b>
    /// - Date range is required (start_date and end_date)
    /// - Dates must be in YYYY-MM-DD format
    /// - On success returns CSV; 400 and 403 errors return JSON
    /// </para>
    /// </remarks>
    public Task<string> AsrReportShow(AsrReportShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/asr_report"),
            [],
            [new Param("start_date", request.StartDate), new Param("end_date", request.EndDate)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            PlainTextResponse.CreateString(),
            AsrReportShowError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Export transaction history
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TransactionsIndexError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Export account transaction history as a CSV file for a date range and
    /// transaction type(s).
    /// <para>
    /// <b>Requirements:</b>
    /// - start_date, end_date and type are all required
    /// - Dates must be in YYYY-MM-DD format
    /// - <c>type</c> accepts one or more comma-separated values from the list below
    /// </para>
    /// <para>
    /// <b>Transaction types:</b> adjustments, paypal_in, paypal_out, cc_in, stripe_in,
    /// google_pay_in, apple_pay_in, wire_transfer, call, call_fix_fee, connection,
    /// sip, webcall, sms, inbound_sms, activation, month, subscription, porting,
    /// surcharge, risk_check, call_recording, hlr_lookup, amd, paid_overstamping,
    /// service_charge, x_transfer, refund, channel
    /// </para>
    /// <para>
    /// <c>service_charge</c>, <c>x_transfer</c> and <c>refund</c> are manual withdrawals booked by
    /// our accounting team: a fee for a service we provided, a transfer of funds to
    /// another account, and a refund of funds to you.
    /// </para>
    /// <para>
    /// <b>Response:</b> The caller receives the generated CSV payload. The internal
    /// redirect used to fetch that file is an implementation detail and is not
    /// part of the public contract.
    /// </para>
    /// </remarks>
    public Task<string> TransactionsIndex(TransactionsIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/transactions"),
            [],
            [
                new Param("start_date", request.StartDate.ToDate()),
                new Param("end_date", request.EndDate.ToDate()),
                new Param("type", request.Type),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            PlainTextResponse.CreateString(),
            TransactionsIndexError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
