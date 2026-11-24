using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Deliverd.Core;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Exceptions;
using Deliverd.Core.Extensions;
using Deliverd.Core.Models;
using Deliverd.Core.Request;
using Deliverd.Core.Response;
using Deliverd.Errors;
using Deliverd.Models;
using Deliverd.Requests.GovernanceApi;

namespace Deliverd.Api;

public sealed class GovernanceApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal GovernanceApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// The frameworks this organisation can see
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The built-in packs (NIST AI RMF, ISO/IEC 42001, EU AI Act, UK AI principles, DORA, SR 26-2, PRA SS1/23 and FCA AI good practice) with their requirements and versions, the organisation's own frameworks, and which are applied at which version. A pack maps requirements onto controls for review; it is not legal advice.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1GovernanceFrameworks(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/governance/frameworks"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// How framework requirements map onto controls
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// With <c>taskId</c>, how far that governed task's completed controls cover each requirement. A mapping, never a compliance verdict.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1GovernanceFrameworksMapping(GetApiV1GovernanceFrameworksMappingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/governance/frameworks/mapping"),
            [],
            [new Param("taskId", request.TaskId), new Param("framework", request.Framework)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The ICT third-party register
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// DORA's register of information, for the providers behind the organisation's AI systems: who keeps it (<c>entity</c>), the <c>providers</c>, the <c>arrangements</c> (contracts) with the AI systems that run under each, what each entry still lacks (<c>gaps</c>), the <c>concentration</c> on each provider, and the AI systems not yet in the register.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1GovernanceIctRegister(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/governance/ict-register"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The register in the shape of the register-of-information templates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1GovernanceIctRegisterExportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// B_01.01, B_02.01, B_02.02, B_05.01, B_06.01 and B_07.01 of Implementing Regulation (EU) 2024/2956, with the regulation's column codes. JSON is every template (or <c>template</c>) with its columns and rows; <c>format=csv</c> is one template, headed by its column codes. Values nobody recorded are empty. For the organisation's own register to take in, not the submission itself.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1GovernanceIctRegisterExport(GetApiV1GovernanceIctRegisterExportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/governance/ict-register/export"),
            [],
            [
                new Param("format", request.Format),
                new Param("template", request.Template),
                new Param("asOf", request.AsOf?.ToDate()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            GetApiV1GovernanceIctRegisterExportError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// AI incidents, newest first
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1GovernanceIncidentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Paged with <c>limit</c> and <c>cursor</c>; <c>nextCursor</c> is null at the end. Incidents against a task you cannot read are left out.
    /// </remarks>
    public Task<ApiV1GovernanceIncidentsResponse> GetApiV1GovernanceIncidents(GetApiV1GovernanceIncidentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/governance/incidents"),
            [],
            [
                new Param("status", request.Status),
                new Param("aiSystemId", request.AiSystemId),
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1GovernanceIncidentsResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// One AI incident, with its DORA reporting
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1GovernanceIncidentsByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The incident, its DORA classification (<c>dora</c>: the facts, <c>major</c>, each criterion and the reason), its reports with their sign-off status, and <c>schedule</c>: which report is due next and by when. Nothing is due unless it is classified major.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1GovernanceIncidentsById(GetApiV1GovernanceIncidentsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/governance/incidents/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            GetApiV1GovernanceIncidentsByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The organisation's internal AI policies, every version
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Governed tasks record the version they were evaluated against. Publishing a version is done by a person in Deliverd.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1GovernancePolicies(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/governance/policies"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The organisation's AI governance in counts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1GovernanceSummaryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Systems, governed tasks, outstanding controls, pending approvals, expired exceptions, open incidents and what needs review. <c>jurisdiction</c> and <c>framework</c> filters are Enterprise. Never a compliance percentage.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1GovernanceSummary(GetApiV1GovernanceSummaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/governance/summary"),
            [],
            [
                new Param("aiSystemId", request.AiSystemId),
                new Param("risk", request.Risk),
                new Param("owner", request.Owner),
                new Param("provider", request.Provider),
                new Param("dataClassification", request.DataClassification),
                new Param("jurisdiction", request.Jurisdiction),
                new Param("framework", request.Framework),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            GetApiV1GovernanceSummaryError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// May this agent take this kind of action?
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1GovernanceAuthorityEvaluateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enterprise. By the organisation's authority policy and the agent's own, which can only be stricter. <c>mode</c> is allowed, approval or denied. Records nothing.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1GovernanceAuthorityEvaluate(PostApiV1GovernanceAuthorityEvaluateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/governance/authority/evaluate"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1GovernanceAuthorityEvaluateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Draft the organisation's own framework
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1GovernanceFrameworksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enterprise. Saved as a draft; it applies only once a person publishes and adopts it. A published version is never edited — a change is a new version.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1GovernanceFrameworks(PostApiV1GovernanceFrameworksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/governance/frameworks"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1GovernanceFrameworksError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Report an AI incident
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1GovernanceIncidentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Against a governed task, an AI system, or both. High or critical closes the task's governance gate until a person resolves it. Permanent: it cannot be edited or withdrawn.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1GovernanceIncidents(PostApiV1GovernanceIncidentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/governance/incidents"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1GovernanceIncidentsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Draft a DORA report and put it to sign-off
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1GovernanceIncidentsByIdReportsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// initial, intermediate or final on a major incident, in that order; or reclassification, for one notified as major and now not. Creates an approval for a person to sign it off. Needs approvals:write as well as tasks:write.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1GovernanceIncidentsByIdReports(PostApiV1GovernanceIncidentsByIdReportsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/governance/incidents/{id}/reports"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1GovernanceIncidentsByIdReportsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
