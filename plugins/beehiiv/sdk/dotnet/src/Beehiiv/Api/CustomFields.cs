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
using Beehiiv.Requests.CustomFields;

namespace Beehiiv.Api;

public sealed class CustomFields
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal CustomFields(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create custom field OAuth Scope: custom_fields:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomFieldResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Create4Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a custom field on a publication, for use in subscriptions.
    /// </remarks>
    public Task<CustomFieldResponse> Create4(Create4Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/custom_fields"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomFieldResponse>(),
            Create4Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete custom field OAuth Scope: custom_fields:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomFieldsDeleteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a custom field from a publication.
    /// </remarks>
    public Task<CustomFieldsDeleteResponse> Delete(DeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/custom_fields/{id}"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<CustomFieldsDeleteResponse>(),
            DeleteError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List custom fields OAuth Scope: custom_fields:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomFieldIndexResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index10Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all custom fields on a publication.
    /// </remarks>
    public Task<CustomFieldIndexResponse> Index10(Index10Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/custom_fields"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomFieldIndexResponse>(),
            Index10Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update custom field OAuth Scope: custom_fields:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomFieldsPatchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Patch2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a custom field on a publication.
    /// </remarks>
    public Task<CustomFieldsPatchResponse> Patch2(Patch2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/custom_fields/{id}"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomFieldsPatchResponse>(),
            Patch2Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update custom field OAuth Scope: custom_fields:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomFieldResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Put2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a custom field on a publication.
    /// </remarks>
    public Task<CustomFieldResponse> Put2(Put2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/custom_fields/{id}"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomFieldResponse>(),
            Put2Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get custom field OAuth Scope: custom_fields:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomFieldResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Show7Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// View a specific custom field on a publication.
    /// </remarks>
    public Task<CustomFieldResponse> Show7(Show7Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/custom_fields/{id}"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomFieldResponse>(),
            Show7Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
