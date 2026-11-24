using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Fillo.Core;
using Fillo.Core.Exceptions;
using Fillo.Core.Models;
using Fillo.Core.Request;
using Fillo.Core.Response;
using Fillo.Errors;
using Fillo.Models;
using Fillo.Requests.Respondents;

namespace Fillo.Api;

public sealed class Respondents
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Respondents(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Look up respondents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageRespondentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FindRespondentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find living respondent profiles by externalId (exact, project-unique) or email. At least one is required. Scope: respondents:read.
    /// </remarks>
    public Task<ApiV1ManageRespondentsResponse> FindRespondents(FindRespondentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/respondents"),
            [],
            [
                new Param("externalId", request.ExternalId),
                new Param("email", request.Email),
                new Param("cursor", request.Cursor),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ManageRespondentsResponse>(),
            FindRespondentsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Forget a respondent
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageRespondentsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ForgetRespondentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Erase a person inside the key's project (GDPR erasure), optionally with every response they submitted. The path accepts the profile id or the external id; a person named only by submit-time snapshots still resolves. Destructive (Tier C): <c>confirm</c> must equal the respondent's EXTERNAL id. Scope: respondents:delete — a danger-tier scope that is never part of a preset and must be named explicitly at mint.
    /// </remarks>
    public Task<ApiV1ManageRespondentsResponse1> ForgetRespondent(ForgetRespondentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/respondents/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageRespondentsResponse1>(),
            ForgetRespondentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List a respondent's responses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResponsePage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRespondentResponsesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One person's response history across every form and version, newest first. Scopes: respondents:read AND responses:read.
    /// </remarks>
    public Task<ResponsePage> ListRespondentResponses(ListRespondentResponsesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/respondents/{id}/responses"),
            [new TemplateParam("id", request.Id)],
            [new Param("cursor", request.Cursor), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ResponsePage>(),
            ListRespondentResponsesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
