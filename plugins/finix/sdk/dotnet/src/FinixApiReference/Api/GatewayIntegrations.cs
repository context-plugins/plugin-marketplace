using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FinixApiReference.Core;
using FinixApiReference.Core.Exceptions;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Request;
using FinixApiReference.Core.Response;
using FinixApiReference.Errors;
using FinixApiReference.Models;
using FinixApiReference.Requests.GatewayIntegrations;

namespace FinixApiReference.Api;

/// <summary>
/// A <c>Gateway Integration</c> represents a connection to a third-party payment gateway. At this time, the only supported gateway is Cybersource.
/// <para>
/// Cybersource is a Visa-owned payment gateway that integrates with Finix to provide secure payment processing and fraud management. Finix handles merchant onboarding and payouts through a unified API, while Cybersource manages gateway routing and fraud prevention for global card acceptance.
/// </para>
/// </summary>
public sealed class GatewayIntegrations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal GatewayIntegrations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Gateway Integration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GatewayIntegrationObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateGatewayIntegrationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a <see href="/api/gateway-integrations">Gateway Integration</see> that connects a <see href="/api/merchants">Merchant</see> to a third-party payment gateway. At this time, the only supported gateway is Cybersource.
    /// <para>
    /// If subscribed, a <see href="/additional-resources/developers/webhooks/webhook-events#gateway-integration-created">Gateway Integration - Created webhook</see> is sent when the integration is created with a <c>Gateway Integration</c> ›<c>state</c> of <c>PENDING</c>.
    /// </para>
    /// <para>
    /// When the <c>state</c> changes to <c>SUCCEEDED</c> or <c>FAILED</c>, a <see href="/additional-resources/developers/webhooks/webhook-events#gateway-integration-updated">Gateway Integration - Updated webhook</see> is sent.
    /// </para>
    /// </remarks>
    public Task<GatewayIntegrationObject> CreateGatewayIntegration(CreateGatewayIntegrationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/gateway_integrations"),
            [],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GatewayIntegrationObject>(),
            CreateGatewayIntegrationError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a Gateway Integration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GatewayIntegrationObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGatewayIntegrationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of an existing <c>Gateway Integration</c>.
    /// </remarks>
    public Task<GatewayIntegrationObject> GetGatewayIntegration(GetGatewayIntegrationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/gateway_integrations/{gateway_integration_id}"),
            [new TemplateParam("gateway_integration_id", request.GatewayIntegrationId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GatewayIntegrationObject>(),
            GetGatewayIntegrationError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Gateway Integrations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListGatewayIntegrations"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListGatewayIntegrationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Gateway Integration</c> resources.
    /// </remarks>
    public Task<ListGatewayIntegrations> ListGatewayIntegrations(ListGatewayIntegrationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/gateway_integrations"),
            [],
            [
                new Param("linked_to", request.LinkedTo),
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("limit", request.Limit),
                new Param("tags.key", request.TagsKey),
                new Param("tags.value", request.TagsValue),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListGatewayIntegrations>(),
            ListGatewayIntegrationsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
