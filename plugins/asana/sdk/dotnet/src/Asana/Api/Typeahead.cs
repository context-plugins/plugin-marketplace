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
using Asana.Requests.Typeahead;

namespace Asana.Api;

/// <summary>
/// The typeahead search API provides search for objects from a single workspace.
/// </summary>
public sealed class Typeahead
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Typeahead(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get objects via typeahead
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspacesTypeaheadResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TypeaheadForWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves objects in the workspace based via an auto-completion/typeahead
    /// search algorithm. This feature is meant to provide results quickly, so do
    /// not rely on this API to provide extremely accurate search results. The
    /// result set is limited to a single page of results with a maximum size, so
    /// you won’t be able to fetch large numbers of results.
    /// <para>
    /// The typeahead search API provides search for objects from a single
    /// workspace. This endpoint should be used to query for objects when
    /// creating an auto-completion/typeahead search feature. This API is meant
    /// to provide results quickly and should not be relied upon for accurate or
    /// exhaustive search results. The results sets are limited in size and
    /// cannot be paginated.
    /// </para>
    /// <para>
    /// Queries return a compact representation of each object which is typically
    /// the gid and name fields. Interested in a specific set of fields or all of
    /// the fields?! Of course you are. Use field selectors to manipulate what
    /// data is included in a response.
    /// </para>
    /// <para>
    /// Resources with type <c>user</c> are returned in order of most contacted to
    /// least contacted. This is determined by task assignments, adding the user
    /// to projects, and adding the user as a follower to tasks, messages,
    /// etc.
    /// </para>
    /// <para>
    /// Resources with type <c>project</c> are returned in order of recency. This is
    /// determined when the user visits the project, is added to the project, and
    /// completes tasks in the project.
    /// </para>
    /// <para>
    /// Resources with type <c>task</c> are returned with priority placed on tasks
    /// the user is following, but no guarantee on the order of those tasks.
    /// </para>
    /// <para>
    /// Resources with type <c>project_template</c> are returned with priority
    /// placed on favorited project templates.
    /// </para>
    /// <para>
    /// Leaving the <c>query</c> string empty or omitted will give you results, still
    /// following the resource ordering above. This could be used to list users or
    /// projects that are relevant for the requesting user's api token.
    /// </para>
    /// </remarks>
    public Task<WorkspacesTypeaheadResponse> TypeaheadForWorkspace(TypeaheadForWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace_gid}/typeahead"),
            [new TemplateParam("workspace_gid", request.WorkspaceGid)],
            [
                new Param("resource_type", request.ResourceType),
                new Param("type", request.Type),
                new Param("query", request.Query),
                new Param("count", request.Count),
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspacesTypeaheadResponse>(),
            TypeaheadForWorkspaceError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
