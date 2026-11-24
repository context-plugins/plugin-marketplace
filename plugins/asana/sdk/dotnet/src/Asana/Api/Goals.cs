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
using Asana.Requests.Goals;

namespace Asana.Api;

/// <summary>
/// A goal is an object in the goal-tracking system that helps your organization drive measurable results.
/// </summary>
public sealed class Goals
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Goals(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add a collaborator to a goal
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoalsAddFollowersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddFollowersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds followers to a goal. Returns the goal the followers were added to.
    /// Each goal can be associated with zero or more followers in the system.
    /// Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
    /// </remarks>
    public Task<GoalsAddFollowersResponse> AddFollowers(AddFollowersOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/goals/{goal_gid}/addFollowers"),
            [new TemplateParam("goal_gid", request.GoalGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoalsAddFollowersResponse>(),
            AddFollowersError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a goal
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoalsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateGoalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new goal in a workspace or team.
    /// <para>
    /// Returns the full record of the newly created goal.
    /// </para>
    /// </remarks>
    public Task<GoalsResponse> CreateGoal(CreateGoalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/goals"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoalsResponse>(),
            CreateGoalError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a goal metric
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoalsSetMetricResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateGoalMetricError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.
    /// </remarks>
    public Task<GoalsSetMetricResponse> CreateGoalMetric(CreateGoalMetricRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/goals/{goal_gid}/setMetric"),
            [new TemplateParam("goal_gid", request.GoalGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoalsSetMetricResponse>(),
            CreateGoalMetricError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a goal
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoalsResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteGoalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.
    /// <para>
    /// Returns an empty data record.
    /// </para>
    /// </remarks>
    public Task<GoalsResponse2> DeleteGoal(DeleteGoalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/goals/{goal_gid}"),
            [new TemplateParam("goal_gid", request.GoalGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoalsResponse2>(),
            DeleteGoalError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a goal
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoalsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGoalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the complete goal record for a single goal.
    /// </remarks>
    public Task<GoalsResponse> GetGoal(GetGoalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/goals/{goal_gid}"),
            [new TemplateParam("goal_gid", request.GoalGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoalsResponse>(),
            GetGoalError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get goals
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoalsResponse3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGoalsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns compact goal records.
    /// </remarks>
    public Task<GoalsResponse3> GetGoals(GetGoalsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/goals"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("portfolio", request.Portfolio),
                new Param("project", request.Project),
                new Param("is_workspace_level", request.IsWorkspaceLevel),
                new Param("team", request.Team),
                new Param("workspace", request.Workspace),
                new Param("time_periods", request.TimePeriods),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoalsResponse3>(),
            GetGoalsError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get parent goals from a goal
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoalsParentGoalsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetParentGoalsForGoalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a compact representation of all of the parent goals of a goal.
    /// </remarks>
    public Task<GoalsParentGoalsResponse> GetParentGoalsForGoal(GetParentGoalsForGoalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/goals/{goal_gid}/parentGoals"),
            [new TemplateParam("goal_gid", request.GoalGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoalsParentGoalsResponse>(),
            GetParentGoalsForGoalError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove a collaborator from a goal
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoalsRemoveFollowersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveFollowersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes followers from a goal. Returns the goal the followers were removed from.
    /// Each goal can be associated with zero or more followers in the system.
    /// Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
    /// </remarks>
    public Task<GoalsRemoveFollowersResponse> RemoveFollowers(RemoveFollowersOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/goals/{goal_gid}/removeFollowers"),
            [new TemplateParam("goal_gid", request.GoalGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoalsRemoveFollowersResponse>(),
            RemoveFollowersError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a goal
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoalsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateGoalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// An existing goal can be updated by making a PUT request on the URL for
    /// that goal. Only the fields provided in the <c>data</c> block will be updated;
    /// any unspecified fields will remain unchanged.
    /// <para>
    /// Returns the complete updated goal record.
    /// </para>
    /// </remarks>
    public Task<GoalsResponse> UpdateGoal(UpdateGoalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/goals/{goal_gid}"),
            [new TemplateParam("goal_gid", request.GoalGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoalsResponse>(),
            UpdateGoalError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a goal metric
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoalsSetMetricCurrentValueResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateGoalMetricError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a goal's existing metric's <c>current_number_value</c> if one exists,
    /// otherwise responds with a 400 status code.
    /// <para>
    /// Returns the complete updated goal metric record.
    /// </para>
    /// </remarks>
    public Task<GoalsSetMetricCurrentValueResponse> UpdateGoalMetric(UpdateGoalMetricRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/goals/{goal_gid}/setMetricCurrentValue"),
            [new TemplateParam("goal_gid", request.GoalGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoalsSetMetricCurrentValueResponse>(),
            UpdateGoalMetricError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
