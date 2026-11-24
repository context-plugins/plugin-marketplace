using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Fillo.Core;
using Fillo.Core.Exceptions;
using Fillo.Core.Models;
using Fillo.Core.Request;
using Fillo.Core.Response;
using Fillo.Errors;
using Fillo.Models;
using Fillo.Requests.Settings;

namespace Fillo.Api;

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
    /// Get a form's settings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FormSettingsEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFormSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The form's current operational settings (notifications, receipts, save-and-resume, response limits, and the like). Scope: settings:manage.
    /// </remarks>
    public Task<FormSettingsEnvelope> GetFormSettings(GetFormSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/settings"),
            [new TemplateParam("form", request.Form)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FormSettingsEnvelope>(),
            GetFormSettingsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch a form's settings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FormSettingsEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateFormSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update one or more operational settings. The request body IS the settings patch object, validated and saved by the same writer as the dashboard; any key set to null is cleared. Scope: settings:manage — plus forms:write whenever the patch names one of the six presentation keys (submitMode, submitLabel, successTitle, successMessage, redirectUrl, showProgress), which live inside the form schema rather than beside it. The 403 names the missing scope.
    /// </remarks>
    public Task<FormSettingsEnvelope> UpdateFormSettings(UpdateFormSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/settings"),
            [new TemplateParam("form", request.Form)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FormSettingsEnvelope>(),
            UpdateFormSettingsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
