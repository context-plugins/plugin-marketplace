using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Soda.Core;
using Soda.Core.Authentication;
using Soda.Core.Exceptions;
using Soda.Core.Extensions;
using Soda.Core.Models;
using Soda.Core.Request;
using Soda.Core.Response;
using Soda.Errors;
using Soda.Models;
using Soda.Requests.Incidents;

namespace Soda.Api;

/// <summary>
/// Soda Cloud API Incidents Endpoints
/// </summary>
public sealed class Incidents
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Incidents(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List incidents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiIncidentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1IncidentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to gather information about the incidents that exist in your organization's Soda Cloud account.
    /// <para>
    /// Each incident carries a <c>hasRcaReport</c> flag indicating whether a structured root cause analysis report has been published for it; retrieve the report itself from <c>GET /api/v1/incidents/{incidentId}/rcaReport</c>. <b><c>hasRcaReport</c> is in private preview</b>: it is <c>true</c> or <c>false</c> only when the root cause analysis report preview is enabled for your organization, and <c>null</c> otherwise.
    /// </para>
    /// <para>
    /// This GET is a paginated API that uses the following parameters to request specific details:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>size</c>: Supply an integer value between 1 and 1000, inclusive. The default value is 10.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>page</c>: Supply an integer value. The default value is 0.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>status</c>: Optionally, use this parameter to collect only the incidents with a specific status. One of <c>reported</c>, <c>investigating</c>, <c>fixing</c>, <c>resolved</c>.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>severity</c>: Optionally, use this parameter to collect only the incidents with a specific severity. One of <c>minor</c>, <c>major</c>, <c>critical</c>.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>datasetId</c>: Optionally, use this parameter to collect only the incidents associated with a specific dataset. Find the <c>datasetId</c> in the URL of the dataset page in Soda Cloud.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>incidentIds</c>: Optionally, use this parameter to collect only a specific batch of incidents. Provide multiple values as a comma-separated list of incident IDs, which you can find on the individual incident pages in Soda Cloud. This query parameter is limited to 1000 incident IDs and can be combined with the other query parameters (<c>status</c>, <c>severity</c>, <c>datasetId</c>, <c>page</c>, <c>size</c>), which are all applied together.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>leadId</c>: Optionally, use this parameter to collect only the incidents assigned to a specific lead user. Provide the user id of the incident lead.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>from</c>: Optionally, use this parameter to collect only the incidents created on or after this moment, compared against each incident's created timestamp. Supply an ISO8601 timestamp value. Example: <c>2026-08-01T00:00:00+01:00</c></description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>to</c>: Optionally, use this parameter to collect only the incidents created on or before this moment, compared against each incident's created timestamp. Supply an ISO8601 timestamp value. Example: <c>2026-08-01T23:59:59+01:00</c></description></item>
    /// </list>
    /// <para>
    /// The <c>leadId</c>, <c>from</c>, and <c>to</c> parameters can be combined with the other query parameters, which are all applied together (AND).
    /// </para>
    /// <para>
    /// If not specified, the query gathers information for all incidents in the account and sorts the results by incident number in ascending order.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Soda only returns the incidents linked to datasets to which the user has <b>View dataset</b> permissions. Soda Cloud Admins have access to all incidents.<b>See Manage dataset roles for more information.</b>
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
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Incidents</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiIncidentsResponse> GetApiV1Incidents(GetApiV1IncidentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/incidents"),
            [],
            [
                new Param("datasetId", request.DatasetId),
                new Param("from", request.From?.ToIso8601()),
                new Param("incidentIds", request.IncidentIds),
                new Param("leadId", request.LeadId),
                new Param("page", request.Page),
                new Param("severity", request.Severity),
                new Param("size", request.Size),
                new Param("status", request.Status),
                new Param("to", request.To?.ToIso8601()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiIncidentsResponse>(),
            GetApiV1IncidentsError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get incident RCA report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiRcaReportContentDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1IncidentsIncidentIdRcaReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint returns the structured root cause analysis and impact assessment published on an incident in your organization's Soda Cloud account.
    /// <para>
    /// Returns 404 if the incident does not exist or has no RCA report published yet.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Unlike the incident list, this endpoint requires <b>View dataset</b> permission on every dataset the incident touches. Soda Cloud Admins have access to all incidents. <b>See Manage dataset roles for more information.</b>
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
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Incidents</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiRcaReportContentDto> GetApiV1IncidentsIncidentIdRcaReport(GetApiV1IncidentsIncidentIdRcaReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/incidents/{incidentId}/rcaReport"),
            [new TemplateParam("incidentId", request.IncidentId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiRcaReportContentDto>(),
            GetApiV1IncidentsIncidentIdRcaReportError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create incident
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IncidentContentDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1IncidentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to create a new incident linked to one or more monitor results in your organization's Soda Cloud account. The authenticated user becomes the incident reporter.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage incident</b> permission can create incidents. Soda Cloud Admins have permission to create incidents on all datasets.<b>See Manage dataset roles for more information.</b>
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
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Incidents</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<IncidentContentDto> PostApiV1Incidents(PostApiV1IncidentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/incidents"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IncidentContentDto>(),
            PostApiV1IncidentsError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update incident
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IncidentContentDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1IncidentsIncidentIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to update an existing incident title, severity, status, or description in your organization's Soda Cloud account.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage incident</b> permission can update incidents. Soda Cloud Admins have permission to update all incidents.<b>See Manage dataset roles for more information.</b>
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
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Incidents</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<IncidentContentDto> PostApiV1IncidentsIncidentId(PostApiV1IncidentsIncidentIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/incidents/{incidentId}"),
            [new TemplateParam("incidentId", request.IncidentId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IncidentContentDto>(),
            PostApiV1IncidentsIncidentIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Publish incident RCA report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiRcaReportContentDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1IncidentsIncidentIdRcaReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint publishes a structured root cause analysis and impact assessment onto an existing incident in your organization's Soda Cloud account. The report is additive and does not mutate the incident's own fields (title, severity, status, description).
    /// <para>
    /// There is one report per incident: publishing replaces any previous report. Publishing to a resolved incident is rejected.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage incident</b> permission can publish incident RCA reports. Soda Cloud Admins have permission to publish reports on all incidents.<b>See Manage dataset roles for more information.</b>
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
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Incidents</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiRcaReportContentDto> PostApiV1IncidentsIncidentIdRcaReport(PostApiV1IncidentsIncidentIdRcaReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/incidents/{incidentId}/rcaReport"),
            [new TemplateParam("incidentId", request.IncidentId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiRcaReportContentDto>(),
            PostApiV1IncidentsIncidentIdRcaReportError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);
}
