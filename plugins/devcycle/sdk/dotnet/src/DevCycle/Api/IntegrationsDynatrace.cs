using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DevCycle.Core;
using DevCycle.Core.Authentication;
using DevCycle.Core.Exceptions;
using DevCycle.Core.Models;
using DevCycle.Core.Request;
using DevCycle.Core.Response;
using DevCycle.Errors;
using DevCycle.Models;
using DevCycle.Requests.IntegrationsDynatrace;

namespace DevCycle.Api;

public sealed class IntegrationsDynatrace
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal IntegrationsDynatrace(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create or Update Organization Dynatrace Integration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DynatraceIntegrationControllerCreateIntegrationError"/> when the server returns an error response.</exception>
    public Task DynatraceIntegrationControllerCreateIntegration(DynatraceIntegrationControllerCreateIntegrationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/integrations/dynatrace"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            DynatraceIntegrationControllerCreateIntegrationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Dynatrace Environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DynatraceIntegrationControllerDeleteEnvironmentError"/> when the server returns an error response.</exception>
    public Task DynatraceIntegrationControllerDeleteEnvironment(DynatraceIntegrationControllerDeleteEnvironmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/integrations/dynatrace/{dynatraceEnvironmentId}"),
            [new TemplateParam("dynatraceEnvironmentId", request.DynatraceEnvironmentId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DynatraceIntegrationControllerDeleteEnvironmentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Dynatrace Integrations
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DynatraceIntegration"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DynatraceIntegrationControllerGetIntegrationsError"/> when the server returns an error response.</exception>
    public Task<DynatraceIntegration> DynatraceIntegrationControllerGetIntegrations(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/integrations/dynatrace"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DynatraceIntegration>(),
            DynatraceIntegrationControllerGetIntegrationsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
