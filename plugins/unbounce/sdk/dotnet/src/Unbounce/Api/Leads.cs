using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Unbounce.Core;
using Unbounce.Core.Authentication;
using Unbounce.Core.ErrorResponse;
using Unbounce.Core.Exceptions;
using Unbounce.Core.Models;
using Unbounce.Core.Request;
using Unbounce.Core.Response;
using Unbounce.Models;
using Unbounce.Requests.Leads;

namespace Unbounce.Api;

/// <summary>
/// Lead submissions captured by pages
/// </summary>
public sealed class Leads
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Leads(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve a lead
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Lead"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Lead> GetLead(GetLeadRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/leads/{lead_id}"),
            [new TemplateParam("lead_id", request.LeadId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Lead>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a single lead deletion request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LeadDeletionRequest"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<LeadDeletionRequest> GetLeadDeletionRequest(GetLeadDeletionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/pages/{page_id}/lead_deletion_request/{lead_deletion_request_id}"),
            [
                new TemplateParam("page_id", request.PageId),
                new TemplateParam("lead_deletion_request_id", request.LeadDeletionRequestId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<LeadDeletionRequest>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a lead from a page
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Lead"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Lead> GetLeadForPage(GetLeadForPageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/pages/{page_id}/leads/{lead_id}"),
            [new TemplateParam("page_id", request.PageId), new TemplateParam("lead_id", request.LeadId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Lead>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List lead deletion requests for a page
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagesLeadDeletionRequestResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<PagesLeadDeletionRequestResponse> ListLeadDeletionRequests(ListLeadDeletionRequestsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/pages/{page_id}/lead_deletion_request"),
            [new TemplateParam("page_id", request.PageId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagesLeadDeletionRequestResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List leads for a page
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagesLeadsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<PagesLeadsResponse> ListLeadsForPage(ListLeadsForPageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/pages/{page_id}/leads"),
            [new TemplateParam("page_id", request.PageId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagesLeadsResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
