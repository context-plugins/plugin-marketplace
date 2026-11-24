using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hud.Core;
using Hud.Core.Authentication;
using Hud.Core.Exceptions;
using Hud.Core.Models;
using Hud.Core.Request;
using Hud.Core.Response;
using Hud.Errors;
using Hud.Models;
using Hud.Requests.Checks;

namespace Hud.Api;

public sealed class Checks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Checks(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create Team Qc Pipeline
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QcPipelineRegistrationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTeamQcPipelineV2ChecksPipelinesPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Register a team environment scenario as a private DataVendor QC pipeline.
    /// </remarks>
    public Task<QcPipelineRegistrationResponse> CreateTeamQcPipelineV2ChecksPipelinesPost(CreateTeamQcPipelineV2ChecksPipelinesPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/checks/pipelines"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QcPipelineRegistrationResponse>(),
            CreateTeamQcPipelineV2ChecksPipelinesPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Platform Check Runs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="CheckRunResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPlatformCheckRunsV2ChecksRunsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List recent check attempts for one authorized resource.
    /// </remarks>
    public Task<IReadOnlyList<CheckRunResponse>> ListPlatformCheckRunsV2ChecksRunsGet(ListPlatformCheckRunsV2ChecksRunsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/checks/runs"),
            [],
            [
                new Param("subject_type", request.SubjectType),
                new Param("subject_id", request.SubjectId),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<CheckRunResponse>>(),
            ListPlatformCheckRunsV2ChecksRunsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Platform Checks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="CheckDefinitionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPlatformChecksV2ChecksGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List available checks and their supported resource types.
    /// </remarks>
    public Task<IReadOnlyList<CheckDefinitionResponse>> ListPlatformChecksV2ChecksGet(ListPlatformChecksV2ChecksGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/checks"),
            [],
            [new Param("subject_type", request.SubjectType)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<CheckDefinitionResponse>>(),
            ListPlatformChecksV2ChecksGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Team Qc Pipelines
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="QcPipelineRegistrationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTeamQcPipelinesV2ChecksPipelinesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List QC pipelines registered by the caller's team.
    /// </remarks>
    public Task<IReadOnlyList<QcPipelineRegistrationResponse>> ListTeamQcPipelinesV2ChecksPipelinesGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/checks/pipelines"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<QcPipelineRegistrationResponse>>(),
            ListTeamQcPipelinesV2ChecksPipelinesGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run Platform Check
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CheckRunResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RunPlatformCheckV2ChecksCheckKeyRunsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Run one check against an authorized resource snapshot.
    /// </remarks>
    public Task<CheckRunResponse> RunPlatformCheckV2ChecksCheckKeyRunsPost(RunPlatformCheckV2ChecksCheckKeyRunsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/checks/{check_key}/runs"),
            [new TemplateParam("check_key", request.CheckKey)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CheckRunResponse>(),
            RunPlatformCheckV2ChecksCheckKeyRunsPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
