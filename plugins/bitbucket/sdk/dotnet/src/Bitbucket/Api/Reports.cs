using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bitbucket.Core;
using Bitbucket.Core.Authentication;
using Bitbucket.Core.ErrorResponse;
using Bitbucket.Core.Exceptions;
using Bitbucket.Core.Models;
using Bitbucket.Core.Request;
using Bitbucket.Core.Response;
using Bitbucket.Errors;
using Bitbucket.Models;
using Bitbucket.Models.AllOf;
using Bitbucket.Requests.Reports;

namespace Bitbucket.Api;

/// <summary>
/// Code insights provides reports, annotations, and metrics to help you
/// and your team improve code quality in pull requests throughout the code
/// review process. Some of the available code insights are static analysis
/// reports, security scan results, artifact links, unit tests, and build
/// status.
/// </summary>
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
    /// Bulk create or update annotations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ReportAnnotationBitbucketReportsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bulk upload of annotations.
    /// Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.
    /// <para>
    /// Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated UUID. You can upload up to 100 annotations per POST request.
    /// </para>
    /// <para>
    /// ### Sample cURL request:
    /// <code>
    /// curl --location 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001/annotations' \
    /// --header 'Content-Type: application/json' \
    /// --data-raw '[
    /// {
    /// "external_id": "mysystem-annotation001",
    /// "title": "Security scan report",
    /// "annotation_type": "VULNERABILITY",
    /// "summary": "This line represents a security threat.",
    /// "severity": "HIGH",
    /// "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
    /// "line": 42
    /// },
    /// {
    /// "external_id": "mySystem-annotation002",
    /// "title": "Bug report",
    /// "annotation_type": "BUG",
    /// "result": "FAILED",
    /// "summary": "This line might introduce a bug.",
    /// "severity": "MEDIUM",
    /// "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java",
    /// "line": 13
    /// }
    /// ]'
    /// </code>
    /// </para>
    /// <para>
    /// ### Possible field values:
    /// annotation_type: VULNERABILITY, CODE_SMELL, BUG
    /// result: PASSED, FAILED, IGNORED, SKIPPED
    /// severity: HIGH, MEDIUM, LOW, CRITICAL
    /// </para>
    /// <para>
    /// Please refer to the Code Insights documentation for more information.
    /// </para>
    /// </remarks>
    public Task<IReadOnlyList<ReportAnnotationBitbucketReportsApi>> BulkCreateOrUpdateAnnotations2(BulkCreateOrUpdateAnnotations2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("commit", request.Commit),
                new TemplateParam("reportId", request.ReportId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<ReportAnnotationBitbucketReportsApi>>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create or update an annotation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReportAnnotationBitbucketReportsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateOrUpdateAnnotation2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates or updates an individual annotation for the specified report.
    /// Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.
    /// <para>
    /// Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report as an alternative to the generated UUID. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.
    /// </para>
    /// <para>
    /// ### Sample cURL request:
    /// <code>
    /// curl --request PUT 'https://api.bitbucket.org/2.0/repositories///commit//reports/mySystem-001/annotations/mysystem-annotation001' \
    /// --header 'Content-Type: application/json' \
    /// --data-raw '{
    /// "title": "Security scan report",
    /// "annotation_type": "VULNERABILITY",
    /// "summary": "This line represents a security thread.",
    /// "severity": "HIGH",
    /// "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
    /// "line": 42
    /// }'
    /// </code>
    /// </para>
    /// <para>
    /// ### Possible field values:
    /// annotation_type: VULNERABILITY, CODE_SMELL, BUG
    /// result: PASSED, FAILED, IGNORED, SKIPPED
    /// severity: HIGH, MEDIUM, LOW, CRITICAL
    /// </para>
    /// <para>
    /// Please refer to the Code Insights documentation for more information.
    /// </para>
    /// </remarks>
    public Task<ReportAnnotationBitbucketReportsApi> CreateOrUpdateAnnotation2(CreateOrUpdateAnnotation2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("commit", request.Commit),
                new TemplateParam("reportId", request.ReportId),
                new TemplateParam("annotationId", request.AnnotationId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ReportAnnotationBitbucketReportsApi>(),
            CreateOrUpdateAnnotation2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create or update a report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReportBitbucketReportsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateOrUpdateReport2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates or updates a report for the specified commit.
    /// To upload a report, make sure to generate an ID that is unique across all reports for that commit. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.
    /// <para>
    /// ### Sample cURL request:
    /// <code>
    /// curl --request PUT 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001' \
    /// --header 'Content-Type: application/json' \
    /// --data-raw '{
    /// "title": "Security scan report",
    /// "details": "This pull request introduces 10 new dependency vulnerabilities.",
    /// "report_type": "SECURITY",
    /// "reporter": "mySystem",
    /// "link": "http://www.mysystem.com/reports/001",
    /// "result": "FAILED",
    /// "data": [
    /// {
    /// "title": "Duration (seconds)",
    /// "type": "DURATION",
    /// "value": 14
    /// },
    /// {
    /// "title": "Safe to merge?",
    /// "type": "BOOLEAN",
    /// "value": false
    /// }
    /// ]
    /// }'
    /// </code>
    /// </para>
    /// <para>
    /// ### Possible field values:
    /// report_type: SECURITY, COVERAGE, TEST, BUG
    /// result: PASSED, FAILED, PENDING
    /// data.type: BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT
    /// </para>
    /// <para>
    /// #### Data field formats
    /// | Type Field | Value Field Type | Value Field Display |
    /// |:--------------|:------------------|:--------------------|
    /// | None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
    /// | BOOLEAN | Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
    /// | DATE | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and will be displayed as a relative date if the date is less than one week ago, otherwise it will be displayed as an absolute date. |
    /// | DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human readable duration format. |
    /// | LINK | Object: <c>{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}</c> | The value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a clickable link on the report. |
    /// | NUMBER | Number | The value will be read as a JSON number and large numbers will be displayed in a human readable format (e.g. 14.3k). |
    /// | PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will be displayed with a percentage sign. |
    /// | TEXT | String | The value will be read as a JSON string and will be displayed as-is |
    /// </para>
    /// <para>
    /// Please refer to the Code Insights documentation for more information.
    /// </para>
    /// </remarks>
    public Task<ReportBitbucketReportsApi> CreateOrUpdateReport2(CreateOrUpdateReport2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("commit", request.Commit),
                new TemplateParam("reportId", request.ReportId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ReportBitbucketReportsApi>(),
            CreateOrUpdateReport2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an annotation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a single Annotation matching the provided ID.
    /// </remarks>
    public Task DeleteAnnotation2(DeleteAnnotation2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("commit", request.Commit),
                new TemplateParam("reportId", request.ReportId),
                new TemplateParam("annotationId", request.AnnotationId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a single Report matching the provided ID.
    /// </remarks>
    public Task DeleteReport2(DeleteReport2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("commit", request.Commit),
                new TemplateParam("reportId", request.ReportId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an annotation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReportAnnotationBitbucketReportsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAnnotation2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a single Annotation matching the provided ID.
    /// </remarks>
    public Task<ReportAnnotationBitbucketReportsApi> GetAnnotation2(GetAnnotation2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("commit", request.Commit),
                new TemplateParam("reportId", request.ReportId),
                new TemplateParam("annotationId", request.AnnotationId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ReportAnnotationBitbucketReportsApi>(),
            GetAnnotation2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List annotations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedAnnotations"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of Annotations for a specified report.
    /// </remarks>
    public Task<PaginatedAnnotations> GetAnnotationsForReport2(GetAnnotationsForReport2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("commit", request.Commit),
                new TemplateParam("reportId", request.ReportId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedAnnotations>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReportBitbucketReportsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetReport2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a single Report matching the provided ID.
    /// </remarks>
    public Task<ReportBitbucketReportsApi> GetReport2(GetReport2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("commit", request.Commit),
                new TemplateParam("reportId", request.ReportId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ReportBitbucketReportsApi>(),
            GetReport2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List reports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedReports"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of Reports linked to this commit.
    /// </remarks>
    public Task<PaginatedReports> GetReportsForCommit2(GetReportsForCommit2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}/reports"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("commit", request.Commit),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedReports>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
