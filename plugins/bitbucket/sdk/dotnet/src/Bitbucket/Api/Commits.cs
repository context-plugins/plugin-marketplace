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
using Bitbucket.Requests.Commits;

namespace Bitbucket.Api;

/// <summary>
/// These are the repository's commits. They are paginated and returned in
/// reverse chronological order, similar to the output of git log.
/// </summary>
public sealed class Commits
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Commits(RawClient rawClient, Server server, AuthSchemes auth)
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
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ReportAnnotation"/> instance.</returns>
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
    public Task<IReadOnlyList<ReportAnnotation>> BulkCreateOrUpdateAnnotations(BulkCreateOrUpdateAnnotationsRequest request,
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
            JsonResponse.Create<IReadOnlyList<ReportAnnotation>>(),
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
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReportAnnotation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateOrUpdateAnnotationError"/> when the server returns an error response.</exception>
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
    public Task<ReportAnnotation> CreateOrUpdateAnnotation(CreateOrUpdateAnnotationRequest request,
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
            JsonResponse.Create<ReportAnnotation>(),
            CreateOrUpdateAnnotationError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create or update a report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Report"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateOrUpdateReportError"/> when the server returns an error response.</exception>
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
    public Task<Report> CreateOrUpdateReport(CreateOrUpdateReportRequest request,
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
            JsonResponse.Create<Report>(),
            CreateOrUpdateReportError.Response,
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
    public Task DeleteAnnotation(DeleteAnnotationRequest request,
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
    public Task DeleteReport(DeleteReportRequest request,
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
    /// Unapprove a commit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Redact the authenticated user's approval of the specified commit.
    /// <para>
    /// This operation is only available to users that have explicit access to
    /// the repository. In contrast, just the fact that a repository is
    /// publicly accessible to users does not give them the ability to approve
    /// commits.
    /// </para>
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApprove(DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}/approve"),
            [
                new TemplateParam("commit", request.Commit),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a commit comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified commit comment.
    /// <para>
    /// Note that deleting comments that have visible replies that point to
    /// them will not really delete the resource. This is to retain the integrity
    /// of the original comment tree. Instead, the <c>deleted</c> element is set to
    /// <c>true</c> and the content is blanked out. The comment will continue to be
    /// returned by the collections and self endpoints.
    /// </para>
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentId(DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}"),
            [
                new TemplateParam("comment_id", request.CommentId),
                new TemplateParam("commit", request.Commit),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an annotation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReportAnnotation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAnnotationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a single Annotation matching the provided ID.
    /// </remarks>
    public Task<ReportAnnotation> GetAnnotation(GetAnnotationRequest request,
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
            JsonResponse.Create<ReportAnnotation>(),
            GetAnnotationError.Response,
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
    public Task<PaginatedAnnotations> GetAnnotationsForReport(GetAnnotationsForReportRequest request,
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
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Report"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a single Report matching the provided ID.
    /// </remarks>
    public Task<Report> GetReport(GetReportRequest request,
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
            JsonResponse.Create<Report>(),
            GetReportError.Response,
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
    public Task<PaginatedReports> GetReportsForCommit(GetReportsForCommitRequest request,
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

    /// <summary>
    /// Get a commit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Commit"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugCommitByCommitError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specified commit.
    /// </remarks>
    public Task<Commit> GetRepositoriesByWorkspaceByRepoSlugCommitByCommit(GetRepositoriesByWorkspaceByRepoSlugCommitByCommitRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}"),
            [
                new TemplateParam("commit", request.Commit),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Commit>(),
            GetRepositoriesByWorkspaceByRepoSlugCommitByCommitError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List a commit's comments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedCommitComments"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the commit's comments.
    /// <para>
    /// This includes both global and inline comments.
    /// </para>
    /// <para>
    /// The default sorting is oldest to newest and can be overridden with
    /// the <c>sort</c> query parameter.
    /// </para>
    /// </remarks>
    public Task<PaginatedCommitComments> GetRepositoriesByWorkspaceByRepoSlugCommitByCommitComments(GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}/comments"),
            [
                new TemplateParam("commit", request.Commit),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [new Param("q", request.Q), new Param("sort", request.Sort)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedCommitComments>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a commit comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CommitComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specified commit comment.
    /// </remarks>
    public Task<CommitComment> GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentId(GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}"),
            [
                new TemplateParam("comment_id", request.CommentId),
                new TemplateParam("commit", request.Commit),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CommitComment>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List commits
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Page"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugCommitsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// These are the repository's commits. They are paginated and returned
    /// in reverse chronological order, similar to the output of <c>git log</c>.
    /// Like these tools, the DAG can be filtered.
    /// <para>
    /// #### GET /repositories/{workspace}/{repo_slug}/commits/
    /// </para>
    /// <para>
    /// Returns all commits in the repo in topological order (newest commit
    /// first). All branches and tags are included (similar to
    /// <c>git log --all</c>).
    /// </para>
    /// <para>
    /// #### GET /repositories/{workspace}/{repo_slug}/commits/?exclude=master
    /// </para>
    /// <para>
    /// Returns all commits in the repo that are not on master
    /// (similar to <c>git log --all ^master</c>).
    /// </para>
    /// <para>
    /// #### GET /repositories/{workspace}/{repo_slug}/commits/?include=foo&amp;include=bar&amp;exclude=fu&amp;exclude=fubar
    /// </para>
    /// <para>
    /// Returns all commits that are on refs <c>foo</c> or <c>bar</c>, but not on <c>fu</c> or
    /// <c>fubar</c> (similar to <c>git log foo bar ^fu ^fubar</c>).
    /// </para>
    /// <para>
    /// An optional <c>path</c> parameter can be specified that will limit the
    /// results to commits that affect that path. <c>path</c> can either be a file
    /// or a directory. If a directory is specified, commits are returned that
    /// have modified any file in the directory tree rooted by <c>path</c>. It is
    /// important to note that if the <c>path</c> parameter is specified, the commits
    /// returned by this endpoint may no longer be a DAG, parent commits that
    /// do not modify the path will be omitted from the response.
    /// </para>
    /// <para>
    /// #### GET /repositories/{workspace}/{repo_slug}/commits/?path=README.md&amp;include=foo&amp;include=bar&amp;exclude=master
    /// </para>
    /// <para>
    /// Returns all commits that are on refs <c>foo</c> or <c>bar</c>, but not on <c>master</c>
    /// that changed the file README.md.
    /// </para>
    /// <para>
    /// #### GET /repositories/{workspace}/{repo_slug}/commits/?path=src/&amp;include=foo&amp;include=bar&amp;exclude=master
    /// </para>
    /// <para>
    /// Returns all commits that are on refs <c>foo</c> or <c>bar</c>, but not on <c>master</c>
    /// that changed to a file in any file in the directory src or its children.
    /// </para>
    /// <para>
    /// Because the response could include a very large number of commits, it
    /// is paginated. Follow the 'next' link in the response to navigate to the
    /// next page of commits. As with other paginated resources, do not
    /// construct your own links.
    /// </para>
    /// <para>
    /// When the include and exclude parameters are more than can fit in a
    /// query string, clients can use a <c>x-www-form-urlencoded</c> POST instead.
    /// </para>
    /// </remarks>
    public Task<Page> GetRepositoriesByWorkspaceByRepoSlugCommits(GetRepositoriesByWorkspaceByRepoSlugCommitsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commits"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Page>(),
            GetRepositoriesByWorkspaceByRepoSlugCommitsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List commits for revision
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Page"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// These are the repository's commits. They are paginated and returned
    /// in reverse chronological order, similar to the output of <c>git log</c>.
    /// Like these tools, the DAG can be filtered.
    /// <para>
    /// #### GET /repositories/{workspace}/{repo_slug}/commits/master
    /// </para>
    /// <para>
    /// Returns all commits on ref <c>master</c> (similar to <c>git log master</c>).
    /// </para>
    /// <para>
    /// #### GET /repositories/{workspace}/{repo_slug}/commits/dev?include=foo&amp;exclude=master
    /// </para>
    /// <para>
    /// Returns all commits on ref <c>dev</c> or <c>foo</c>, except those that are reachable on
    /// <c>master</c> (similar to <c>git log dev foo ^master</c>).
    /// </para>
    /// <para>
    /// An optional <c>path</c> parameter can be specified that will limit the
    /// results to commits that affect that path. <c>path</c> can either be a file
    /// or a directory. If a directory is specified, commits are returned that
    /// have modified any file in the directory tree rooted by <c>path</c>. It is
    /// important to note that if the <c>path</c> parameter is specified, the commits
    /// returned by this endpoint may no longer be a DAG, parent commits that
    /// do not modify the path will be omitted from the response.
    /// </para>
    /// <para>
    /// #### GET /repositories/{workspace}/{repo_slug}/commits/dev?path=README.md&amp;include=foo&amp;include=bar&amp;exclude=master
    /// </para>
    /// <para>
    /// Returns all commits that are on refs <c>dev</c> or <c>foo</c> or <c>bar</c>, but not on <c>master</c>
    /// that changed the file README.md.
    /// </para>
    /// <para>
    /// #### GET /repositories/{workspace}/{repo_slug}/commits/dev?path=src/&amp;include=foo&amp;exclude=master
    /// </para>
    /// <para>
    /// Returns all commits that are on refs <c>dev</c> or <c>foo</c>, but not on <c>master</c>
    /// that changed to a file in any file in the directory src or its children.
    /// </para>
    /// <para>
    /// Because the response could include a very large number of commits, it
    /// is paginated. Follow the 'next' link in the response to navigate to the
    /// next page of commits. As with other paginated resources, do not
    /// construct your own links.
    /// </para>
    /// <para>
    /// When the include and exclude parameters are more than can fit in a
    /// query string, clients can use a <c>x-www-form-urlencoded</c> POST instead.
    /// </para>
    /// </remarks>
    public Task<Page> GetRepositoriesByWorkspaceByRepoSlugCommitsByRevision(GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commits/{revision}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("revision", request.Revision),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Page>(),
            GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Compare two commits
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugDiffBySpecError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Produces a raw git-style diff.
    /// <para>
    /// #### Single commit spec
    /// </para>
    /// <para>
    /// If the <c>spec</c> argument to this API is a single commit, the diff is
    /// produced against the first parent of the specified commit.
    /// </para>
    /// <para>
    /// #### Two commit spec
    /// </para>
    /// <para>
    /// Two commits separated by <c>..</c> may be provided as the <c>spec</c>, e.g.,
    /// <c>3a8b42..9ff173</c>. When two commits are provided and the <c>topic</c> query
    /// parameter is true, this API produces a 2-way three dot diff.
    /// This is the diff between source commit and the merge base of the source
    /// commit and the destination commit. When the <c>topic</c> query param is false,
    /// a simple git-style diff is produced.
    /// </para>
    /// <para>
    /// The two commits are interpreted as follows:
    /// </para>
    /// <para>
    /// * First commit: the commit containing the changes we wish to preview
    /// * Second commit: the commit representing the state to which we want to
    /// compare the first commit
    /// * <b>Note</b>: This is the opposite of the order used in <c>git diff</c>.
    /// </para>
    /// <para>
    /// #### Comparison to patches
    /// </para>
    /// <para>
    /// While similar to patches, diffs:
    /// </para>
    /// <para>
    /// * Don't have a commit header (username, commit message, etc)
    /// * Support the optional <c>path=foo/bar.py</c> query param to filter
    /// the diff to just that one file diff
    /// </para>
    /// <para>
    /// #### Response
    /// </para>
    /// <para>
    /// The raw diff is returned as-is, in whatever encoding the files in the
    /// repository use. It is not decoded into unicode. As such, the
    /// content-type is <c>text/plain</c>.
    /// </para>
    /// </remarks>
    public Task GetRepositoriesByWorkspaceByRepoSlugDiffBySpec(GetRepositoriesByWorkspaceByRepoSlugDiffBySpecRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/diff/{spec}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("spec", request.Spec),
                new TemplateParam("workspace", request.Workspace),
            ],
            [
                new Param("context", request.Context),
                new Param("path", request.Path),
                new Param("ignore_whitespace", request.IgnoreWhitespace),
                new Param("binary", request.Binary),
                new Param("renames", request.Renames),
                new Param("merge", request.Merge),
                new Param("topic", request.Topic),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetRepositoriesByWorkspaceByRepoSlugDiffBySpecError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Compare two commit diff stats
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedDiffStat"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Produces a response in JSON format with a record for every path
    /// modified, including information on the type of the change and the
    /// number of lines added and removed.
    /// <para>
    /// #### Single commit spec
    /// </para>
    /// <para>
    /// If the <c>spec</c> argument to this API is a single commit, the diff is
    /// produced against the first parent of the specified commit.
    /// </para>
    /// <para>
    /// #### Two commit spec
    /// </para>
    /// <para>
    /// Two commits separated by <c>..</c> may be provided as the <c>spec</c>, e.g.,
    /// <c>3a8b42..9ff173</c>. When two commits are provided and the <c>topic</c> query
    /// parameter is true, this API produces a 2-way three dot diff.
    /// This is the diff between source commit and the merge base of the source
    /// commit and the destination commit. When the <c>topic</c> query param is false,
    /// a simple git-style diff is produced.
    /// </para>
    /// <para>
    /// The two commits are interpreted as follows:
    /// </para>
    /// <para>
    /// * First commit: the commit containing the changes we wish to preview
    /// * Second commit: the commit representing the state to which we want to
    /// compare the first commit
    /// * <b>Note</b>: This is the opposite of the order used in <c>git diff</c>.
    /// </para>
    /// </remarks>
    public Task<PaginatedDiffStat> GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpec(GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/diffstat/{spec}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("spec", request.Spec),
                new TemplateParam("workspace", request.Workspace),
            ],
            [
                new Param("ignore_whitespace", request.IgnoreWhitespace),
                new Param("merge", request.Merge),
                new Param("path", request.Path),
                new Param("renames", request.Renames),
                new Param("topic", request.Topic),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedDiffStat>(),
            GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the common ancestor between two commits
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Commit"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the best common ancestor between two commits, specified in a revspec
    /// of 2 commits (e.g. 3a8b42..9ff173).
    /// <para>
    /// If more than one best common ancestor exists, only one will be returned. It is
    /// unspecified which will be returned.
    /// </para>
    /// </remarks>
    public Task<Commit> GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspec(GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/merge-base/{revspec}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("revspec", request.Revspec),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Commit>(),
            GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a patch for two commits
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugPatchBySpecError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Produces a raw patch for a single commit (diffed against its first
    /// parent), or a patch-series for a revspec of 2 commits (e.g.
    /// <c>3a8b42..9ff173</c> where the first commit represents the source and the
    /// second commit the destination).
    /// <para>
    /// In case of the latter (diffing a revspec), a patch series is returned
    /// for the commits on the source branch (<c>3a8b42</c> and its ancestors in
    /// our example).
    /// </para>
    /// <para>
    /// While similar to diffs, patches:
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Have a commit header (username, commit message, etc)</description></item>
    ///   <item><description>Do not support the <c>path=foo/bar.py</c> query parameter</description></item>
    /// </list>
    /// <para>
    /// The raw patch is returned as-is, in whatever encoding the files in the
    /// repository use. It is not decoded into unicode. As such, the
    /// content-type is <c>text/plain</c>.
    /// </para>
    /// </remarks>
    public Task GetRepositoriesByWorkspaceByRepoSlugPatchBySpec(GetRepositoriesByWorkspaceByRepoSlugPatchBySpecRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/patch/{spec}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("spec", request.Spec),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetRepositoriesByWorkspaceByRepoSlugPatchBySpecError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Approve a commit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Participant"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Approve the specified commit as the authenticated user.
    /// <para>
    /// This operation is only available to users that have explicit access to
    /// the repository. In contrast, just the fact that a repository is
    /// publicly accessible to users does not give them the ability to approve
    /// commits.
    /// </para>
    /// </remarks>
    public Task<Participant> PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApprove(PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}/approve"),
            [
                new TemplateParam("commit", request.Commit),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<Participant>(),
            PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create comment for a commit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates new comment on the specified commit.
    /// <para>
    /// To post a reply to an existing comment, include the <c>parent.id</c> field:
    /// </para>
    /// <code>
    /// $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/db9ba1e031d07a02603eae0e559a7adc010257fc/comments/ \
    /// -X POST -u evzijst \
    /// -H 'Content-Type: application/json' \
    /// -d '{"content": {"raw": "One more thing!"},
    /// "parent": {"id": 5728901}}'
    /// </code>
    /// </remarks>
    public Task PostRepositoriesByWorkspaceByRepoSlugCommitByCommitComments(PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}/comments"),
            [
                new TemplateParam("commit", request.Commit),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List commits with include/exclude
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Page"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugCommitsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Identical to <c>GET /repositories/{workspace}/{repo_slug}/commits</c>,
    /// except that POST allows clients to place the include and exclude
    /// parameters in the request body to avoid URL length issues.
    /// <para>
    /// <b>Note that this resource does NOT support new commit creation.</b>
    /// </para>
    /// </remarks>
    public Task<Page> PostRepositoriesByWorkspaceByRepoSlugCommits(PostRepositoriesByWorkspaceByRepoSlugCommitsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commits"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<Page>(),
            PostRepositoriesByWorkspaceByRepoSlugCommitsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List commits for revision using include/exclude
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Page"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Identical to <c>GET /repositories/{workspace}/{repo_slug}/commits/{revision}</c>,
    /// except that POST allows clients to place the include and exclude
    /// parameters in the request body to avoid URL length issues.
    /// <para>
    /// <b>Note that this resource does NOT support new commit creation.</b>
    /// </para>
    /// </remarks>
    public Task<Page> PostRepositoriesByWorkspaceByRepoSlugCommitsByRevision(PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commits/{revision}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("revision", request.Revision),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<Page>(),
            PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a commit comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Used to update the contents of a comment. Only the content of the comment can be updated.
    /// <code>
    /// $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/7f71b5/comments/5728901 \
    /// -X PUT -u evzijst \
    /// -H 'Content-Type: application/json' \
    /// -d '{"content": {"raw": "One more thing!"}'
    /// </code>
    /// </remarks>
    public Task PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentId(PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}"),
            [
                new TemplateParam("comment_id", request.CommentId),
                new TemplateParam("commit", request.Commit),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
