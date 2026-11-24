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
using Contentstack.Requests.UserAttributes;

namespace Contentstack.Api;

/// <summary>
/// Endpoints for setting, updating, and merging user attribute data used to determine audience membership and personalized content targeting.
/// </summary>
public sealed class UserAttributes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal UserAttributes(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Merge user attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MergeUserAttributesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Merges the attributes of a source user identity into a target user identity. This is used in identity resolution scenarios where an anonymous user record needs to be combined with an authenticated user record upon login, preserving all accumulated behavioral and attribute data.
    /// </remarks>
    public Task MergeUserAttributes(MergeUserAttributesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEventsApi("/user-attributes/actions/merge"),
            [],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            MergeUserAttributesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set and update user attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetUserAttributesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Persists custom user attribute values at the Personalize Edge for use in audience rule evaluation. Attributes set via this endpoint are stored against the user's identifier and used in all subsequent manifest requests. Use this endpoint to update attributes based on user actions or profile data from external systems.
    /// </remarks>
    public Task SetUserAttributes(SetUserAttributesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEventsApi("/user-attributes"),
            [],
            [],
            [
                new HeaderParam("x-project-uid", request.XProjectUid),
                new HeaderParam("x-cs-personalize-user-uid", request.XCsPersonalizeUserUid),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            SetUserAttributesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
