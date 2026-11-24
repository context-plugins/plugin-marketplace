using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Asana.Core;
using Asana.Core.Authentication;
using Asana.Core.Exceptions;
using Asana.Core.Models;
using Asana.Core.Request;
using Asana.Core.Response;
using Asana.Errors;
using Asana.Models;
using Asana.Requests.GoalRelationships;

namespace Asana.Api;

/// <summary>
/// A goal relationship is an object representing the relationship between a goal and another goal, a project, or a portfolio.
/// </summary>
public sealed class GoalRelationships
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal GoalRelationships(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add a supporting goal relationship
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoalsAddSupportingRelationshipResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddSupportingRelationshipError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a goal relationship by adding a supporting resource to a given goal.
    /// <para>
    /// Returns the newly created goal relationship record.
    /// </para>
    /// </remarks>
    public Task<GoalsAddSupportingRelationshipResponse> AddSupportingRelationship(AddSupportingRelationshipRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/goals/{goal_gid}/addSupportingRelationship"),
            [new TemplateParam("goal_gid", request.GoalGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoalsAddSupportingRelationshipResponse>(),
            AddSupportingRelationshipError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a goal relationship
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoalRelationshipsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGoalRelationshipError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the complete updated goal relationship record for a single goal relationship.
    /// </remarks>
    public Task<GoalRelationshipsResponse> GetGoalRelationship(GetGoalRelationshipRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/goal_relationships/{goal_relationship_gid}"),
            [new TemplateParam("goal_relationship_gid", request.GoalRelationshipGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoalRelationshipsResponse>(),
            GetGoalRelationshipError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get goal relationships
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoalRelationshipsResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGoalRelationshipsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns compact goal relationship records.
    /// </remarks>
    public Task<GoalRelationshipsResponse2> GetGoalRelationships(GetGoalRelationshipsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/goal_relationships"),
            [],
            [
                new Param("supported_goal", request.SupportedGoal),
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("resource_subtype", request.ResourceSubtype),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoalRelationshipsResponse2>(),
            GetGoalRelationshipsError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Removes a supporting goal relationship
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoalsRemoveSupportingRelationshipResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveSupportingRelationshipError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes a goal relationship for a given parent goal.
    /// </remarks>
    public Task<GoalsRemoveSupportingRelationshipResponse> RemoveSupportingRelationship(RemoveSupportingRelationshipRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/goals/{goal_gid}/removeSupportingRelationship"),
            [new TemplateParam("goal_gid", request.GoalGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoalsRemoveSupportingRelationshipResponse>(),
            RemoveSupportingRelationshipError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a goal relationship
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoalRelationshipsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateGoalRelationshipError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// An existing goal relationship can be updated by making a PUT request on the URL for
    /// that goal relationship. Only the fields provided in the <c>data</c> block will be updated;
    /// any unspecified fields will remain unchanged.
    /// <para>
    /// Returns the complete updated goal relationship record.
    /// </para>
    /// </remarks>
    public Task<GoalRelationshipsResponse> UpdateGoalRelationship(UpdateGoalRelationshipRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/goal_relationships/{goal_relationship_gid}"),
            [new TemplateParam("goal_relationship_gid", request.GoalRelationshipGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoalRelationshipsResponse>(),
            UpdateGoalRelationshipError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
