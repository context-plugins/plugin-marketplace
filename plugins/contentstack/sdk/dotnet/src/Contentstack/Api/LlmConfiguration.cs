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
using Contentstack.Models;
using Contentstack.Requests.LlmConfiguration;

namespace Contentstack.Api;

/// <summary>
/// LLM Configuration endpoints allow organizations to register custom API credentials for large language model providers, enabling content generation through their own LLM subscriptions.
/// </summary>
public sealed class LlmConfiguration
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal LlmConfiguration(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Configure custom LLM credentials
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LlmConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConfigureLlmError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Registers custom API credentials for an LLM provider to enable content generation through the organization's own LLM subscription rather than Contentstack's default AI infrastructure.
    /// </remarks>
    public Task<LlmConfig> ConfigureLlm(ConfigureLlmRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackBrandKitManagementBrandKitsApi("/v1/brand-kits/{brand_kit_uid}/llm-config"),
            [new TemplateParam("brand_kit_uid", request.BrandKitUid)],
            [],
            [
                new HeaderParam("organization_uid", request.OrganizationUid),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<LlmConfig>(),
            ConfigureLlmError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get LLM configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LlmConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetLlmConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the custom LLM provider credentials configured for a Brand Kit. This allows organizations to use their own LLM API subscriptions for content generation within the Brand Kit.
    /// </remarks>
    public Task<LlmConfig> GetLlmConfig(GetLlmConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackBrandKitManagementBrandKitsApi("/v1/brand-kits/{brand_kit_uid}/llm-config"),
            [new TemplateParam("brand_kit_uid", request.BrandKitUid)],
            [],
            [new HeaderParam("organization_uid", request.OrganizationUid)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<LlmConfig>(),
            GetLlmConfigError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);
}
