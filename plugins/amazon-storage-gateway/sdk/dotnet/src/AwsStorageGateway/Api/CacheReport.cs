using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AwsStorageGateway.Core;
using AwsStorageGateway.Core.Exceptions;
using AwsStorageGateway.Core.Models;
using AwsStorageGateway.Core.Request;
using AwsStorageGateway.Core.Response;
using AwsStorageGateway.Errors;
using AwsStorageGateway.Requests.CacheReport;

namespace AwsStorageGateway.Api;

public sealed class CacheReport
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CacheReport(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel Cache Report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelCacheReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancels generation of a specified cache report. You can use this operation to manually cancel an IN-PROGRESS report for any reason. This action changes the report status from IN-PROGRESS to CANCELLED. You can only cancel in-progress reports. If the the report you attempt to cancel is in FAILED, ERROR, or COMPLETED state, the cancel operation returns an error.
    /// </remarks>
    public Task CancelCacheReport(CancelCacheReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CancelCacheReport"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CancelCacheReportError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Cache Report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCacheReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified cache report and any associated tags from the Storage Gateway database. You can only delete completed reports. If the status of the report you attempt to delete still IN-PROGRESS, the delete operation returns an error. You can use CancelCacheReport to cancel an IN-PROGRESS report. DeleteCacheReport does not delete the report object from your Amazon S3 bucket.
    /// </remarks>
    public Task DeleteCacheReport(DeleteCacheReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteCacheReport"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteCacheReportError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Cache Report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeCacheReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about the specified cache report, including completion status and generation progress.
    /// </remarks>
    public Task DescribeCacheReport(DescribeCacheReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeCacheReport"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeCacheReportError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Cache Reports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCacheReportsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of existing cache reports for all file shares associated with your Amazon Web Services account. This list includes all information provided by the DescribeCacheReport action, such as report name, status, completion progress, start time, end time, filters, and tags.
    /// </remarks>
    public Task ListCacheReports(ListCacheReportsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListCacheReports"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListCacheReportsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Cache Report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartCacheReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts generating a report of the file metadata currently cached by an S3 File Gateway for a specific file share. You can use this report to identify and resolve issues if you have files failing upload from your gateway to Amazon S3. The report is a CSV file containing a list of files which match the set of filter parameters you specify in the request. The Files Failing Upload flag is reset every 24 hours and during gateway reboot. If this report captures the files after the reset, but before they become flagged again, they will not be reported as Files Failing Upload. The following requirements must be met to successfully generate a cache report: You must have s3:PutObject and s3:AbortMultipartUpload permissions for the Amazon S3 bucket where you want to store the cache report. No other cache reports can currently be in-progress for the specified file share. There must be fewer than 10 existing cache reports for the specified file share. The gateway must be online and connected to Amazon Web Services. The root disk must have at least 20GB of free space when report generation starts. You must specify at least one value for InclusionFilters or ExclusionFilters in the request.
    /// </remarks>
    public Task StartCacheReport(StartCacheReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartCacheReport"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartCacheReportError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
