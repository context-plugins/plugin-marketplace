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
using Contentstack.Requests.Experiences;

namespace Contentstack.Api;

/// <summary>
/// Experiences define personalized content variations delivered to specific audience segments, supporting both segmented and A/B test configurations.
/// </summary>
public sealed class Experiences
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Experiences(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create an experience
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Experience"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateExperienceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new experience in the Personalize project. Experiences can be of type SEGMENTED (rule-based audience targeting) or AB_TEST (split testing with traffic distribution).
    /// </remarks>
    public Task<Experience> CreateExperience(CreateExperienceOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackPersonalizeManagementAttributesApi("/experiences"),
            [],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Experience>(),
            CreateExperienceError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an experience
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteExperienceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes an experience from the Personalize project. Only experiences in draft or inactive status can be deleted.
    /// </remarks>
    public Task DeleteExperience(DeleteExperienceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackPersonalizeManagementAttributesApi("/experiences/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteExperienceError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all experiences
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExperienceList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllExperiencesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all experience configurations in the Personalize project, including their variant definitions and audience assignments.
    /// </remarks>
    public Task<ExperienceList> GetAllExperiences(GetAllExperiencesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackPersonalizeManagementAttributesApi("/experiences"),
            [],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ExperienceList>(),
            GetAllExperiencesError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an experience
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Experience"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetExperienceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves details for a specific experience including its variants, audience assignments, status, and configuration.
    /// </remarks>
    public Task<Experience> GetExperience(GetExperienceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackPersonalizeManagementAttributesApi("/experiences/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Experience>(),
            GetExperienceError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get experience priority order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExperiencePriority"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetExperiencePriorityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the priority ordering of all active experiences, which determines which experience takes precedence when a user qualifies for multiple experiences.
    /// </remarks>
    public Task<ExperiencePriority> GetExperiencePriority(GetExperiencePriorityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackPersonalizeManagementAttributesApi("/experiences/priority"),
            [],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ExperiencePriority>(),
            GetExperiencePriorityError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an experience
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Experience"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateExperienceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the configuration of an existing experience including its name, variants, and audience targeting rules.
    /// </remarks>
    public Task<Experience> UpdateExperience(UpdateExperienceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackPersonalizeManagementAttributesApi("/experiences/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Experience>(),
            UpdateExperienceError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update experience priority order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExperiencePriority"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateExperiencePriorityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the priority ordering of experiences to control which experience is applied first when a user qualifies for multiple active experiences.
    /// </remarks>
    public Task<ExperiencePriority> UpdateExperiencePriority(UpdateExperiencePriorityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackPersonalizeManagementAttributesApi("/experiences/priority"),
            [],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ExperiencePriority>(),
            UpdateExperiencePriorityError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);
}
