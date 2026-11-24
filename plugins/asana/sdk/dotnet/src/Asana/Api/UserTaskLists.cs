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
using Asana.Requests.UserTaskLists;

namespace Asana.Api;

/// <summary>
/// A user task list represents the tasks assigned to a particular user. This list is the user's My Tasks list.
/// </summary>
public sealed class UserTaskLists
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal UserTaskLists(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a user task list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UserTaskListsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserTaskListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the full record for a user task list.
    /// </remarks>
    public Task<UserTaskListsResponse> GetUserTaskList(GetUserTaskListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/user_task_lists/{user_task_list_gid}"),
            [new TemplateParam("user_task_list_gid", request.UserTaskListGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UserTaskListsResponse>(),
            GetUserTaskListError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a user's task list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsersUserTaskListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserTaskListForUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the full record for a user's task list.
    /// </remarks>
    public Task<UsersUserTaskListResponse> GetUserTaskListForUser(GetUserTaskListForUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{user_gid}/user_task_list"),
            [new TemplateParam("user_gid", request.UserGid)],
            [
                new Param("workspace", request.Workspace),
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsersUserTaskListResponse>(),
            GetUserTaskListForUserError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
