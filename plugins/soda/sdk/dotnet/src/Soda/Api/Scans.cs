using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Soda.Core;
using Soda.Core.Authentication;
using Soda.Core.Exceptions;
using Soda.Core.Models;
using Soda.Core.Request;
using Soda.Core.Response;
using Soda.Errors;
using Soda.Models;
using Soda.Requests.Scans;

namespace Soda.Api;

/// <summary>
/// Soda Cloud API Scan Endpoints
/// </summary>
public sealed class Scans
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Scans(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel a scan
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiV1ScansScanIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to cancel a scan.
    /// <para>
    /// Depending on the state of the scan when you call this endpoint, the response returns one of the following:
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Where the state is <c>pending</c>, Soda immediately changes the state to <c>canceled</c>.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description>Where the state is <c>submitted</c>, Soda immediately changes the state to <c>cancelationRequested</c>. - Where the scan is in any other state, the endpoint returns a <c>400</c> (Bad request) response.</description></item>
    /// </list>
    /// <para>
    /// This DELETE uses the following parameters to provide specific details:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>scanId</c>: Use the value of <c>X-Soda-Scan-Id</c> returned as part of the <c>201</c> response when you called the <b>Trigger a scan</b> endpoint.</description></item>
    /// </list>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Any Soda Cloud user in your organization may execute this query.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Scans</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task DeleteApiV1ScansScanId(DeleteApiV1ScansScanIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/scans/{scanId}"),
            [new TemplateParam("scanId", request.ScanId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteApiV1ScansScanIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get scan status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiScanStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1ScansScanIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to check on the state of a scan that you executed using the <b>Trigger a scan</b> endpoint. Call this endpoint to monitor the status of a scan during its execution.
    /// <para>
    /// If you wish to access the logs of a completed scan, use the <b>Get scan logs</b> endpoint.
    /// </para>
    /// <para>
    /// This POST uses the following parameter to provide specific details:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>scanId</c>: Use the value of <c>X-Soda-Scan-Id</c> returned as part of the <c>201</c> response when you called the <b>Trigger a scan</b> endpoint.</description></item>
    /// </list>
    /// <para>
    /// As a scan executes, you can call this endpoint to progressively collect values based on the state of the scan. Refer to the list below for the states that calls to this endpoint return.
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>queuing</c>: The scan is in the queue for execution, awaiting a pick-up from a Soda Runner.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>executing</c>: A Soda Runner has picked up the scan and is executing.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>cancelationRequested</c>: An entity requested cancelation of this scan and the request is awaiting pick-up from the Soda Runner responsible for the scan.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>timeOutRequested</c>: A time out has been detected, and an automatic request to stop the scan execution is awaiting pick-up from the Soda Runner responsible for the scan.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>canceled</c>: A Soda Runner confirmed that the scan has been cancelled. This is the final state of the scan.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>timedOut</c>: A Soda Runner confirmed that the scan has timed-out. This is the final state of the scan.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>failed</c>: The scan did not start, or it did not successfully complete because of an unexpected cause. This is the final state of the scan.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>completedWithErrors</c>: The scan completed successfully, but there were errors involving some of the checks in the scan. This is the final state of the scan.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>completedWithFailures</c>: The scan completed successfully and reveals failed results for some checks. This is the final state of the scan.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>completedWithWarnings</c>: The scan completed successfully and reveals warning results for some checks. This is the final state of the scan.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>completed</c>: The scan completed successfully and reveals passing results for all checks. This is a final state of a scan</description></item>
    /// </list>
    /// <para>
    /// To get the logs of the completed scan, please use API <c>/api/v1/scans/{scanId}/logs</c>.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Any Soda Cloud user in your organization may execute this query.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Scans</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiScanStatusResponse> GetApiV1ScansScanId(GetApiV1ScansScanIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/scans/{scanId}"),
            [new TemplateParam("scanId", request.ScanId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiScanStatusResponse>(),
            GetApiV1ScansScanIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get scan logs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiScanLogsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1ScansScanIdLogsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to gather log details about the final state of a scan you executed using the <b>Trigger a scan</b> endpoint. Use this endpoint to study scan logs to investigate issues with its execution.
    /// <para>
    /// If you wish to access the state of a scan in progress, use the <b>Get scan status</b> endpoint.
    /// </para>
    /// <para>
    /// This GET is a paginated API that uses the following parameters to request specific details:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>scanId</c>: Use the value of <c>X-Soda-Scan-Id</c> returned as part of the <c>201</c> response when you called the <b>Trigger a scan</b> endpoint.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>size</c>: Supply an integer value between 100 and 1000, inclusive. The default value is 1000.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>page</c>: Supply an integer value. The default value is 0.</description></item>
    /// </list>
    /// <para>
    /// The response sorts the the log information by creation timestamp in ascending order.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Any Soda Cloud user in your organization may execute this query.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Scans</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiScanLogsResponse> GetApiV1ScansScanIdLogs(GetApiV1ScansScanIdLogsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/scans/{scanId}/logs"),
            [new TemplateParam("scanId", request.ScanId)],
            [new Param("page", request.Page), new Param("size", request.Size)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiScanLogsResponse>(),
            GetApiV1ScansScanIdLogsError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);
}
