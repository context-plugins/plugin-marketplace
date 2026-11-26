using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Justtrack.Core;
using Justtrack.Core.Exceptions;
using Justtrack.Core.Models;
using Justtrack.Core.Request;
using Justtrack.Core.Response;
using Justtrack.Errors;
using Justtrack.Models;
using Justtrack.Requests.PartnerConfigurations;

namespace Justtrack.Api;

/// <summary>
/// In justtrack, you integrate your app with the advertising partners that run your campaigns.
/// </summary>
public sealed class PartnerConfigurations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PartnerConfigurations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List configured features
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListPartnerConfigurationFeaturesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostManagementV1PartnerConfigurationByFeatureError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a paginated list of configured features for a given app and partner.
    /// </remarks>
    public Task<ListPartnerConfigurationFeaturesResponse> PostManagementV1PartnerConfigurationByFeature(PostManagementV1PartnerConfigurationByFeatureRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultManagementAppPartnerConnectionApi("/management/v1/partner-configuration/{feature}"),
            [new TemplateParam("feature", request.Feature)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListPartnerConfigurationFeaturesResponse>(),
            PostManagementV1PartnerConfigurationByFeatureError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List configurations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListPartnerConfigurationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostManagementV1PartnerConfigurationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a paginated list of keys used to configure features for the partners that are available to your organization. You configure the values for each of these keys with the Update configurations API.
    /// <para>
    /// :::warning
    /// </para>
    /// <para>
    /// When you configure a partner feature, you must provide values for all keys associated with that feature from this API. Without them, justtrack wouldn't be able to successfully operate or integrate with the partner.
    /// </para>
    /// <para>
    /// :::
    /// </para>
    /// <para>
    /// A configuration key may appear for multiple features. <b>You must provide a value for each feature.</b>
    /// </para>
    /// </remarks>
    public Task<ListPartnerConfigurationsResponse> PostManagementV1PartnerConfigurations(PostManagementV1PartnerConfigurationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultManagementAppPartnerConnectionApi("/management/v1/partner-configurations"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListPartnerConfigurationsResponse>(),
            PostManagementV1PartnerConfigurationsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Configure partner
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="PartnerConfigurationFeatureOutput"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutManagementV1PartnerConfigurationByFeatureError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Configure a feature for a given app and partner.
    /// <para>
    /// :::warning
    /// </para>
    /// <para>
    /// You must provide values for all keys listed by List partner configurations.
    /// </para>
    /// <para>
    /// :::
    /// </para>
    /// <para>
    /// :::info
    /// </para>
    /// <para>
    /// For attribution viewEventTimeFrame and clickEventTimeFrame, use ISO8601 duration-only format, i.e. <c>P1DT0H0M</c>
    /// </para>
    /// <para>
    /// :::
    /// </para>
    /// </remarks>
    public Task<IReadOnlyList<PartnerConfigurationFeatureOutput>> PutManagementV1PartnerConfigurationByFeature(PutManagementV1PartnerConfigurationByFeatureRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultManagementAppPartnerConnectionApi("/management/v1/partner-configuration/{feature}"),
            [new TemplateParam("feature", request.Feature)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<PartnerConfigurationFeatureOutput>>(),
            PutManagementV1PartnerConfigurationByFeatureError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
