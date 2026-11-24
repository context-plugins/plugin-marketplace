using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bitbucket.Core;
using Bitbucket.Core.Authentication;
using Bitbucket.Core.Exceptions;
using Bitbucket.Core.Models;
using Bitbucket.Core.Request;
using Bitbucket.Core.Response;
using Bitbucket.Errors;
using Bitbucket.Requests.Addon;

namespace Bitbucket.Api;

/// <summary>
/// The addon resource is intended to use used by Bitbucket Cloud Connect
/// Apps, and only supports JWT authentication.
/// </summary>
public sealed class Addon
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Addon(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete an app
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAddonError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the application for the user.
    /// <para>
    /// This endpoint is intended to be used by Bitbucket Connect apps
    /// and only supports JWT authentication -- that is how Bitbucket
    /// identifies the particular installation of the app. Developers
    /// with applications registered in the "Develop Apps" section
    /// of Bitbucket Marketplace need not use this endpoint as
    /// updates for those applications can be sent out via the
    /// UI of that section.
    /// </para>
    /// <code>
    /// $ curl -X DELETE https://api.bitbucket.org/2.0/addon \
    /// -H "Authorization: JWT "
    /// </code>
    /// </remarks>
    public Task DeleteAddon(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/addon"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteAddonError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete all linker values
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAddonLinkersByLinkerKeyValuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete all linker values for the
    /// specified linker of the authenticated application.
    /// <para>
    /// This endpoint is deprecated and will be removed by May 2026.
    /// </para>
    /// </remarks>
    public Task DeleteAddonLinkersByLinkerKeyValues(DeleteAddonLinkersByLinkerKeyValuesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/addon/linkers/{linker_key}/values"),
            [new TemplateParam("linker_key", request.LinkerKey)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteAddonLinkersByLinkerKeyValuesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a linker value
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAddonLinkersByLinkerKeyValuesByValueIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a single linker value
    /// of the authenticated application.
    /// <para>
    /// This endpoint is deprecated and will be removed by May 2026.
    /// </para>
    /// </remarks>
    public Task DeleteAddonLinkersByLinkerKeyValuesByValueId(DeleteAddonLinkersByLinkerKeyValuesByValueIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/addon/linkers/{linker_key}/values/{value_id}"),
            [new TemplateParam("linker_key", request.LinkerKey), new TemplateParam("value_id", request.ValueId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteAddonLinkersByLinkerKeyValuesByValueIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List linkers for an app
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAddonLinkersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of all linkers
    /// for the authenticated application.
    /// <para>
    /// This endpoint is deprecated and will be removed by May 2026.
    /// </para>
    /// </remarks>
    public Task GetAddonLinkers(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/addon/linkers"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetAddonLinkersError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a linker for an app
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAddonLinkersByLinkerKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a linker specified by <c>linker_key</c>
    /// for the authenticated application.
    /// <para>
    /// This endpoint is deprecated and will be removed by May 2026.
    /// </para>
    /// </remarks>
    public Task GetAddonLinkersByLinkerKey(GetAddonLinkersByLinkerKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/addon/linkers/{linker_key}"),
            [new TemplateParam("linker_key", request.LinkerKey)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetAddonLinkersByLinkerKeyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List linker values for a linker
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAddonLinkersByLinkerKeyValuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of all linker values for the
    /// specified linker of the authenticated application.
    /// <para>
    /// A linker value lets applications supply values to modify its regular expression.
    /// </para>
    /// <para>
    /// The base regular expression must use a Bitbucket-specific match group <c>(?K)</c>
    /// which will be translated to <c>([\w\-]+)</c>. A value must match this pattern.
    /// </para>
    /// <para>
    /// Read more about linker values
    /// </para>
    /// <para>
    /// This endpoint is deprecated and will be removed by May 2026.
    /// </para>
    /// </remarks>
    public Task GetAddonLinkersByLinkerKeyValues(GetAddonLinkersByLinkerKeyValuesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/addon/linkers/{linker_key}/values"),
            [new TemplateParam("linker_key", request.LinkerKey)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetAddonLinkersByLinkerKeyValuesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a linker value
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAddonLinkersByLinkerKeyValuesByValueIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a single linker value
    /// of the authenticated application.
    /// <para>
    /// This endpoint is deprecated and will be removed by May 2026.
    /// </para>
    /// </remarks>
    public Task GetAddonLinkersByLinkerKeyValuesByValueId(GetAddonLinkersByLinkerKeyValuesByValueIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/addon/linkers/{linker_key}/values/{value_id}"),
            [new TemplateParam("linker_key", request.LinkerKey), new TemplateParam("value_id", request.ValueId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetAddonLinkersByLinkerKeyValuesByValueIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a linker value
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostAddonLinkersByLinkerKeyValuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a linker value for the specified
    /// linker of authenticated application.
    /// <para>
    /// A linker value lets applications supply values to modify its regular expression.
    /// </para>
    /// <para>
    /// The base regular expression must use a Bitbucket-specific match group <c>(?K)</c>
    /// which will be translated to <c>([\w\-]+)</c>. A value must match this pattern.
    /// </para>
    /// <para>
    /// Read more about linker values
    /// </para>
    /// <para>
    /// This endpoint is deprecated and will be removed by May 2026.
    /// </para>
    /// </remarks>
    public Task PostAddonLinkersByLinkerKeyValues(PostAddonLinkersByLinkerKeyValuesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/addon/linkers/{linker_key}/values"),
            [new TemplateParam("linker_key", request.LinkerKey)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PostAddonLinkersByLinkerKeyValuesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an installed app
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutAddonError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the application installation for the user.
    /// <para>
    /// This endpoint is intended to be used by Bitbucket Connect apps
    /// and only supports JWT authentication -- that is how Bitbucket
    /// identifies the particular installation of the app. Developers
    /// with applications registered in the "Develop Apps" section
    /// of Bitbucket need not use this endpoint as updates for those
    /// applications can be sent out via the UI of that section.
    /// </para>
    /// <para>
    /// Passing an empty body will update the installation using the
    /// existing descriptor URL.
    /// </para>
    /// <code>
    /// $ curl -X PUT https://api.bitbucket.org/2.0/addon \
    /// -H "Authorization: JWT " \
    /// --header "Content-Type: application/json" \
    /// --data '{}'
    /// </code>
    /// <para>
    /// The new <c>descriptor</c> for the installation can be also provided
    /// in the body directly.
    /// </para>
    /// <code>
    /// $ curl -X PUT https://api.bitbucket.org/2.0/addon \
    /// -H "Authorization: JWT " \
    /// --header "Content-Type: application/json" \
    /// --data '{"descriptor": $NEW_DESCRIPTOR}'
    /// </code>
    /// <para>
    /// In both these modes the URL of the descriptor cannot be changed. To
    /// change the descriptor location and upgrade an installation
    /// the request must be made exclusively with a <c>descriptor_url</c>.
    /// </para>
    /// <code>
    /// $ curl -X PUT https://api.bitbucket.org/2.0/addon \
    /// -H "Authorization: JWT " \
    /// --header "Content-Type: application/json" \
    /// --data '{"descriptor_url": $NEW_URL}'
    /// </code>
    /// <para>
    /// The <c>descriptor_url</c> must exactly match the marketplace registration
    /// that Atlassian has for the application. Contact your Atlassian
    /// developer advocate to update this registration. Once the registration
    /// has been updated you may call this resource for each installation.
    /// </para>
    /// <para>
    /// Note that the scopes of the application cannot be increased
    /// in the new descriptor nor reduced to none.
    /// </para>
    /// </remarks>
    public Task PutAddon(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/addon"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PutAddonError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a linker value
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutAddonLinkersByLinkerKeyValuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bulk update linker values for the specified
    /// linker of the authenticated application.
    /// <para>
    /// A linker value lets applications supply values to modify its regular expression.
    /// </para>
    /// <para>
    /// The base regular expression must use a Bitbucket-specific match group <c>(?K)</c>
    /// which will be translated to <c>([\w\-]+)</c>. A value must match this pattern.
    /// </para>
    /// <para>
    /// Read more about linker values
    /// </para>
    /// <para>
    /// This endpoint is deprecated and will be removed by May 2026.
    /// </para>
    /// </remarks>
    public Task PutAddonLinkersByLinkerKeyValues(PutAddonLinkersByLinkerKeyValuesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/addon/linkers/{linker_key}/values"),
            [new TemplateParam("linker_key", request.LinkerKey)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PutAddonLinkersByLinkerKeyValuesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
