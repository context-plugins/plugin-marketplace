using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Contentstack.Core;
using Contentstack.Core.Authentication;
using Contentstack.Core.Exceptions;
using Contentstack.Core.Models;
using Contentstack.Core.Request;
using Contentstack.Core.Response;
using Contentstack.Errors;
using Contentstack.Models;
using Contentstack.Requests.Audiences;

namespace Contentstack.Api;

/// <summary>
/// Audiences are defined segments of users grouped by demographic, behavioral, or other attribute-based criteria for targeted content experiences.
/// </summary>
public sealed class Audiences
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Audiences(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create an audience
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Audience"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAudienceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new audience segment in the Personalize project based on attribute conditions and behavioral rules.
    /// </remarks>
    public Task<Audience> CreateAudience(CreateAudienceOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackPersonalizeManagementAttributesApi("/audiences"),
            [],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Audience>(),
            CreateAudienceError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an audience
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAudienceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes an audience from the Personalize project. Audiences referenced in active experiences cannot be deleted.
    /// </remarks>
    public Task DeleteAudience(DeleteAudienceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackPersonalizeManagementAttributesApi("/audiences/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteAudienceError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all audiences
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AudienceList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllAudiencesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all audience segment definitions in the Personalize project. Audiences define the user groups that experiences are targeted to.
    /// </remarks>
    public Task<AudienceList> GetAllAudiences(GetAllAudiencesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackPersonalizeManagementAttributesApi("/audiences"),
            [],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AudienceList>(),
            GetAllAudiencesError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an audience
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Audience"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateAudienceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the rules and configuration of an existing audience segment.
    /// </remarks>
    public Task<Audience> UpdateAudience(UpdateAudienceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackPersonalizeManagementAttributesApi("/audiences/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Audience>(),
            UpdateAudienceError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);
}
