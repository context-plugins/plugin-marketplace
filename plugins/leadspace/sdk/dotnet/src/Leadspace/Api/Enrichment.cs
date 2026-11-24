using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Leadspace.Core;
using Leadspace.Core.Exceptions;
using Leadspace.Core.Models;
using Leadspace.Core.Request;
using Leadspace.Core.Response;
using Leadspace.Errors;
using Leadspace.Models;
using Leadspace.Requests.Enrichment;

namespace Leadspace.Api;

/// <summary>
/// Single and bulk person and company enrichment
/// </summary>
public sealed class Enrichment
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Enrichment(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Submit a bulk enrichment job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkAccepted"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EnrichBulkRecordsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Accepts up to 500 records per request and returns a polling URI. An optional callbackUrl receives a notification when processing completes.
    /// </remarks>
    public Task<BulkAccepted> EnrichBulkRecords(EnrichBulkRecordsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/enrichment/enrich/bulk"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BulkAccepted>(),
            EnrichBulkRecordsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Enrich a single person and/or company record
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnrichmentResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EnrichSingleRecordError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Synchronously enriches one record. Account enrichment requires a company name. Person enrichment requires first name, last name, and one of company name, email address, or website.
    /// </remarks>
    public Task<EnrichmentResult> EnrichSingleRecord(EnrichSingleRecordRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/enrichment/enrich/single"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EnrichmentResult>(),
            EnrichSingleRecordError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
