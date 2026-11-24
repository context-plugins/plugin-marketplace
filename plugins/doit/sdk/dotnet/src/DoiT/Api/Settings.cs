using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.Settings;

namespace DoiT.Api;

public sealed class Settings
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Settings(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a custom theme
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomTheme"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomThemeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new custom color theme. Requires Cloud Analytics Admin permission.
    /// </remarks>
    public Task<CustomTheme> CreateCustomTheme(CreateCustomThemeOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/settings/themes"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomTheme>(),
            CreateCustomThemeError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a custom theme
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCustomThemeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the custom theme specified by the Id. Requires Cloud Analytics Admin permission.
    /// </remarks>
    public Task<object> DeleteCustomTheme(DeleteCustomThemeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/settings/themes/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteCustomThemeError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the active theme
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ActiveTheme"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetActiveThemeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the theme currently active for the authenticated user.
    /// <c>themeId</c> is the reserved sentinel <c>"default"</c> when no custom or
    /// preset theme is selected and the user is on the built-in default.
    /// </remarks>
    public Task<ActiveTheme> GetActiveTheme(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/settings/active-theme"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ActiveTheme>(),
            GetActiveThemeError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a custom theme
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomTheme"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomThemeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a custom theme by the specified Id.
    /// </remarks>
    public Task<CustomTheme> GetCustomTheme(GetCustomThemeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/settings/themes/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomTheme>(),
            GetCustomThemeError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List custom themes
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsV1SettingsThemesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomThemesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the list of custom color themes defined for your account.
    /// </remarks>
    public Task<AnalyticsV1SettingsThemesResponse> ListCustomThemes(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/settings/themes"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsV1SettingsThemesResponse>(),
            ListCustomThemesError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set the active theme
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ActiveTheme"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetActiveThemeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the theme active for the authenticated user. Send the reserved
    /// sentinel <c>themeId: "default"</c> to clear the active theme and fall back
    /// to the built-in default. Returns the updated active theme.
    /// </remarks>
    public Task<ActiveTheme> SetActiveTheme(SetActiveThemeOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/settings/active-theme"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ActiveTheme>(),
            SetActiveThemeError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a custom theme
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomTheme"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCustomThemeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the custom theme specified by the Id. Requires Cloud Analytics Admin permission.
    /// </remarks>
    public Task<CustomTheme> UpdateCustomTheme(UpdateCustomThemeOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/settings/themes/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomTheme>(),
            UpdateCustomThemeError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
