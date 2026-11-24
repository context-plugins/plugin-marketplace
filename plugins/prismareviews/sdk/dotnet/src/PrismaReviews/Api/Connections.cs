using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using PrismaReviews.Core;
using PrismaReviews.Core.Exceptions;
using PrismaReviews.Core.Models;
using PrismaReviews.Core.Request;
using PrismaReviews.Core.Response;
using PrismaReviews.Errors;
using PrismaReviews.Models;
using PrismaReviews.Requests.Connections;

namespace PrismaReviews.Api;

/// <summary>
/// Connect platform accounts by OAuth, credentials or listing URL, or with a connect link.
/// </summary>
public sealed class Connections
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Connections(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a connect link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ConnectLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateConnectLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A link the owner of a platform account opens to connect it in their browser, with no Prisma account or API key. Connections made through it belong to your workspace and to the mode of the key that created the link, and carry <c>metadata: {"via": "connect_link"}</c>. Valid for 7 days and reusable: treat it like a password-reset link. The body is optional.
    /// </remarks>
    public Task<ConnectLink> CreateConnectLink(CreateConnectLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/connect_links"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ConnectLink>(),
            CreateConnectLinkError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a connection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ConnectionCreated"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateConnectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Connects one platform account and imports its locations. How depends on the platform (see <c>GET /v1/platforms</c>): <c>oauth</c> platforms need <c>redirect_url</c> and return <c>status: "pending"</c> with an <c>authorization_url</c> for the owner; <c>credentials</c> platforms need <c>credentials</c>, which Prisma tries against the platform before storing anything; <c>listing_url</c> platforms need the public <c>listing_url</c> of the listing. With a test key any platform connects at once, without credentials, with sample locations and reviews. Locations over the plan limit are not created and are counted in <c>locations_over_plan_limit</c>. Not idempotent: retrying creates a second connection.
    /// </remarks>
    public Task<ConnectionCreated> CreateConnection(CreateConnectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/connections"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ConnectionCreated>(),
            CreateConnectionError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a connection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ConnectionDeleted"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteConnectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Disconnects the connection: its stored tokens and credentials are deleted at once and its locations become <c>disconnected</c> (no more checks, not counted toward the plan). Their reviews stay readable for 30 days and are then deleted. To reauthorize a connection, delete it and create a new one.
    /// </remarks>
    public Task<ConnectionDeleted> DeleteConnection(DeleteConnectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/connections/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ConnectionDeleted>(),
            DeleteConnectionError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List connections
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ConnectionList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListConnectionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Every connection of your workspace in the mode of your key, oldest first, including <c>pending</c>, <c>reauth_required</c> and <c>disconnected</c> ones. Not paginated: <c>next_cursor</c> is always <c>null</c>.
    /// </remarks>
    public Task<ConnectionList> ListConnections(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/connections"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ConnectionList>(),
            ListConnectionsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
