using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Beehiiv.Core;
using Beehiiv.Core.Authentication;
using Beehiiv.Core.Exceptions;
using Beehiiv.Core.Models;
using Beehiiv.Core.Request;
using Beehiiv.Core.Response;
using Beehiiv.Errors;
using Beehiiv.Models;
using Beehiiv.Requests.DataDeletion;

namespace Beehiiv.Api;

public sealed class DataDeletion
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal DataDeletion(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create data deletion request OAuth Scope: data_deletion:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DataDeletionRequestResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Create5Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your organization.
    /// <para>
    /// Creates a data deletion request for a subscriber within your organization. The subscriber's data will be redacted from all publications in the organization after a 14-day safety delay. This action cannot be undone once processing begins.
    /// </para>
    /// <para>
    /// API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since deletion requests apply to the entire workspace.
    /// </para>
    /// </remarks>
    public Task<DataDeletionRequestResponse> Create5(Create5Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/data_privacy/deletion_requests"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DataDeletionRequestResponse>(),
            Create5Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List data deletion requests OAuth Scope: data_deletion:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DataDeletionRequestIndexResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index11Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your organization.
    /// <para>
    /// List all data deletion requests for your organization.
    /// </para>
    /// <para>
    /// API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since deletion requests apply to the entire workspace.
    /// </para>
    /// </remarks>
    public Task<DataDeletionRequestIndexResponse> Index11(Index11Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/data_privacy/deletion_requests"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DataDeletionRequestIndexResponse>(),
            Index11Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get data deletion request OAuth Scope: data_deletion:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DataDeletionRequestResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Show8Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your organization.
    /// <para>
    /// Retrieve the details and current status of a specific data deletion request.
    /// </para>
    /// <para>
    /// API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since deletion requests apply to the entire workspace.
    /// </para>
    /// </remarks>
    public Task<DataDeletionRequestResponse> Show8(Show8Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/data_privacy/deletion_requests/{id}"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DataDeletionRequestResponse>(),
            Show8Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
