using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleAnalytics.Core;
using GoogleAnalytics.Core.Authentication;
using GoogleAnalytics.Core.Exceptions;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Core.Request;
using GoogleAnalytics.Core.Response;
using GoogleAnalytics.Errors;
using GoogleAnalytics.Models;
using GoogleAnalytics.Requests.Properties;

namespace GoogleAnalytics.Api;

public sealed class Properties
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Properties(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Acknowledge user data collection properties
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesAcknowledgeUserDataCollectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
    /// </remarks>
    public Task<object> AnalyticsadminPropertiesAcknowledgeUserDataCollection(AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}:acknowledgeUserDataCollection"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            AnalyticsadminPropertiesAcknowledgeUserDataCollectionError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create conversionEvents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaConversionEvent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesConversionEventsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deprecated: Use <c>CreateKeyEvent</c> instead. Creates a conversion event with the specified attributes.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaConversionEvent> AnalyticsadminPropertiesConversionEventsCreate(AnalyticsadminPropertiesConversionEventsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/conversionEvents"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaConversionEvent>(),
            AnalyticsadminPropertiesConversionEventsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete conversionEvents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesConversionEventsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deprecated: Use <c>DeleteKeyEvent</c> instead. Deletes a conversion event in a property.
    /// </remarks>
    public Task<object> AnalyticsadminPropertiesConversionEventsDelete(AnalyticsadminPropertiesConversionEventsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/conversionEvents/{conversionEventsId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("conversionEventsId", request.ConversionEventsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            AnalyticsadminPropertiesConversionEventsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get conversionEvents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaConversionEvent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesConversionEventsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deprecated: Use <c>GetKeyEvent</c> instead. Retrieve a single conversion event.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaConversionEvent> AnalyticsadminPropertiesConversionEventsGet(AnalyticsadminPropertiesConversionEventsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/conversionEvents/{conversionEventsId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("conversionEventsId", request.ConversionEventsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaConversionEvent>(),
            AnalyticsadminPropertiesConversionEventsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List conversionEvents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaListConversionEventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesConversionEventsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deprecated: Use <c>ListKeyEvents</c> instead. Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaListConversionEventsResponse> AnalyticsadminPropertiesConversionEventsList(AnalyticsadminPropertiesConversionEventsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/conversionEvents"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaListConversionEventsResponse>(),
            AnalyticsadminPropertiesConversionEventsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch conversionEvents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaConversionEvent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesConversionEventsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deprecated: Use <c>UpdateKeyEvent</c> instead. Updates a conversion event with the specified attributes.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaConversionEvent> AnalyticsadminPropertiesConversionEventsPatch(AnalyticsadminPropertiesConversionEventsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/conversionEvents/{conversionEventsId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("conversionEventsId", request.ConversionEventsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaConversionEvent>(),
            AnalyticsadminPropertiesConversionEventsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create properties
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaProperty"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a Google Analytics property with the specified location and attributes.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaProperty> AnalyticsadminPropertiesCreate(AnalyticsadminPropertiesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaProperty>(),
            AnalyticsadminPropertiesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive customDimensions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesCustomDimensionsArchiveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archives a CustomDimension on a property.
    /// </remarks>
    public Task<object> AnalyticsadminPropertiesCustomDimensionsArchive(AnalyticsadminPropertiesCustomDimensionsArchiveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/customDimensions/{customDimensionsId}:archive"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("customDimensionsId", request.CustomDimensionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            AnalyticsadminPropertiesCustomDimensionsArchiveError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create customDimensions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaCustomDimension"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesCustomDimensionsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a CustomDimension. Warning: It's not permissible to use this method to collect data on individual users. In particular, sending user IDs in custom dimensions violates the Google Analytics Terms of Service.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaCustomDimension> AnalyticsadminPropertiesCustomDimensionsCreate(AnalyticsadminPropertiesCustomDimensionsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/customDimensions"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaCustomDimension>(),
            AnalyticsadminPropertiesCustomDimensionsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get customDimensions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaCustomDimension"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesCustomDimensionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup for a single CustomDimension.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaCustomDimension> AnalyticsadminPropertiesCustomDimensionsGet(AnalyticsadminPropertiesCustomDimensionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/customDimensions/{customDimensionsId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("customDimensionsId", request.CustomDimensionsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaCustomDimension>(),
            AnalyticsadminPropertiesCustomDimensionsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List customDimensions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesCustomDimensionsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists CustomDimensions on a property.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse> AnalyticsadminPropertiesCustomDimensionsList(AnalyticsadminPropertiesCustomDimensionsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/customDimensions"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse>(),
            AnalyticsadminPropertiesCustomDimensionsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch customDimensions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaCustomDimension"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesCustomDimensionsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a CustomDimension on a property.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaCustomDimension> AnalyticsadminPropertiesCustomDimensionsPatch(AnalyticsadminPropertiesCustomDimensionsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/customDimensions/{customDimensionsId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("customDimensionsId", request.CustomDimensionsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaCustomDimension>(),
            AnalyticsadminPropertiesCustomDimensionsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive customMetrics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesCustomMetricsArchiveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archives a CustomMetric on a property.
    /// </remarks>
    public Task<object> AnalyticsadminPropertiesCustomMetricsArchive(AnalyticsadminPropertiesCustomMetricsArchiveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/customMetrics/{customMetricsId}:archive"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("customMetricsId", request.CustomMetricsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            AnalyticsadminPropertiesCustomMetricsArchiveError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create customMetrics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaCustomMetric"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesCustomMetricsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a CustomMetric.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaCustomMetric> AnalyticsadminPropertiesCustomMetricsCreate(AnalyticsadminPropertiesCustomMetricsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/customMetrics"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaCustomMetric>(),
            AnalyticsadminPropertiesCustomMetricsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get customMetrics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaCustomMetric"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesCustomMetricsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup for a single CustomMetric.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaCustomMetric> AnalyticsadminPropertiesCustomMetricsGet(AnalyticsadminPropertiesCustomMetricsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/customMetrics/{customMetricsId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("customMetricsId", request.CustomMetricsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaCustomMetric>(),
            AnalyticsadminPropertiesCustomMetricsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List customMetrics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaListCustomMetricsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesCustomMetricsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists CustomMetrics on a property.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaListCustomMetricsResponse> AnalyticsadminPropertiesCustomMetricsList(AnalyticsadminPropertiesCustomMetricsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/customMetrics"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaListCustomMetricsResponse>(),
            AnalyticsadminPropertiesCustomMetricsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch customMetrics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaCustomMetric"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesCustomMetricsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a CustomMetric on a property.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaCustomMetric> AnalyticsadminPropertiesCustomMetricsPatch(AnalyticsadminPropertiesCustomMetricsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/customMetrics/{customMetricsId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("customMetricsId", request.CustomMetricsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaCustomMetric>(),
            AnalyticsadminPropertiesCustomMetricsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create dataStreams
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaDataStream"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesDataStreamsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a DataStream.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaDataStream> AnalyticsadminPropertiesDataStreamsCreate(AnalyticsadminPropertiesDataStreamsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/dataStreams"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaDataStream>(),
            AnalyticsadminPropertiesDataStreamsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete dataStreams
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesDataStreamsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a DataStream on a property.
    /// </remarks>
    public Task<object> AnalyticsadminPropertiesDataStreamsDelete(AnalyticsadminPropertiesDataStreamsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("dataStreamsId", request.DataStreamsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            AnalyticsadminPropertiesDataStreamsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get dataStreams
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaDataStream"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesDataStreamsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup for a single DataStream.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaDataStream> AnalyticsadminPropertiesDataStreamsGet(AnalyticsadminPropertiesDataStreamsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("dataStreamsId", request.DataStreamsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaDataStream>(),
            AnalyticsadminPropertiesDataStreamsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List dataStreams
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaListDataStreamsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesDataStreamsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists DataStreams on a property.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaListDataStreamsResponse> AnalyticsadminPropertiesDataStreamsList(AnalyticsadminPropertiesDataStreamsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/dataStreams"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaListDataStreamsResponse>(),
            AnalyticsadminPropertiesDataStreamsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create measurementProtocolSecrets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a measurement protocol secret.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret> AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("dataStreamsId", request.DataStreamsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret>(),
            AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete measurementProtocolSecrets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes target MeasurementProtocolSecret.
    /// </remarks>
    public Task<object> AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDelete(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets/{measurementProtocolSecretsId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("dataStreamsId", request.DataStreamsId),
                new TemplateParam("measurementProtocolSecretsId", request.MeasurementProtocolSecretsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get measurementProtocolSecrets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup for a single MeasurementProtocolSecret.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret> AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets/{measurementProtocolSecretsId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("dataStreamsId", request.DataStreamsId),
                new TemplateParam("measurementProtocolSecretsId", request.MeasurementProtocolSecretsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret>(),
            AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List measurementProtocolSecrets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns child MeasurementProtocolSecrets under the specified parent Property.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse> AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("dataStreamsId", request.DataStreamsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse>(),
            AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch measurementProtocolSecrets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a measurement protocol secret.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret> AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatch(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}/measurementProtocolSecrets/{measurementProtocolSecretsId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("dataStreamsId", request.DataStreamsId),
                new TemplateParam("measurementProtocolSecretsId", request.MeasurementProtocolSecretsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret>(),
            AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch dataStreams
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaDataStream"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesDataStreamsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a DataStream on a property.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaDataStream> AnalyticsadminPropertiesDataStreamsPatch(AnalyticsadminPropertiesDataStreamsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/dataStreams/{dataStreamsId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("dataStreamsId", request.DataStreamsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaDataStream>(),
            AnalyticsadminPropertiesDataStreamsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete properties
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaProperty"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Marks target Property as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted properties. However, they can be restored using the Trash Can UI. If the properties are not restored before the expiration time, the Property and all child resources (eg: GoogleAdsLinks, Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaProperty> AnalyticsadminPropertiesDelete(AnalyticsadminPropertiesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaProperty>(),
            AnalyticsadminPropertiesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create firebaseLinks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaFirebaseLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesFirebaseLinksCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a FirebaseLink. Properties can have at most one FirebaseLink.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaFirebaseLink> AnalyticsadminPropertiesFirebaseLinksCreate(AnalyticsadminPropertiesFirebaseLinksCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/firebaseLinks"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaFirebaseLink>(),
            AnalyticsadminPropertiesFirebaseLinksCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete firebaseLinks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesFirebaseLinksDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a FirebaseLink on a property
    /// </remarks>
    public Task<object> AnalyticsadminPropertiesFirebaseLinksDelete(AnalyticsadminPropertiesFirebaseLinksDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/firebaseLinks/{firebaseLinksId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("firebaseLinksId", request.FirebaseLinksId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            AnalyticsadminPropertiesFirebaseLinksDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List firebaseLinks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesFirebaseLinksListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse> AnalyticsadminPropertiesFirebaseLinksList(AnalyticsadminPropertiesFirebaseLinksListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/firebaseLinks"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse>(),
            AnalyticsadminPropertiesFirebaseLinksListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get properties
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaProperty"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup for a single GA Property.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaProperty> AnalyticsadminPropertiesGet(AnalyticsadminPropertiesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaProperty>(),
            AnalyticsadminPropertiesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get data retention settings properties
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaDataRetentionSettings"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesGetDataRetentionSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the singleton data retention settings for this property.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaDataRetentionSettings> AnalyticsadminPropertiesGetDataRetentionSettings(AnalyticsadminPropertiesGetDataRetentionSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/dataRetentionSettings"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaDataRetentionSettings>(),
            AnalyticsadminPropertiesGetDataRetentionSettingsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create googleAdsLinks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaGoogleAdsLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesGoogleAdsLinksCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a GoogleAdsLink.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaGoogleAdsLink> AnalyticsadminPropertiesGoogleAdsLinksCreate(AnalyticsadminPropertiesGoogleAdsLinksCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/googleAdsLinks"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaGoogleAdsLink>(),
            AnalyticsadminPropertiesGoogleAdsLinksCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete googleAdsLinks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesGoogleAdsLinksDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a GoogleAdsLink on a property
    /// </remarks>
    public Task<object> AnalyticsadminPropertiesGoogleAdsLinksDelete(AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/googleAdsLinks/{googleAdsLinksId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("googleAdsLinksId", request.GoogleAdsLinksId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            AnalyticsadminPropertiesGoogleAdsLinksDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List googleAdsLinks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesGoogleAdsLinksListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists GoogleAdsLinks on a property.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse> AnalyticsadminPropertiesGoogleAdsLinksList(AnalyticsadminPropertiesGoogleAdsLinksListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/googleAdsLinks"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse>(),
            AnalyticsadminPropertiesGoogleAdsLinksListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch googleAdsLinks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaGoogleAdsLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesGoogleAdsLinksPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a GoogleAdsLink on a property
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaGoogleAdsLink> AnalyticsadminPropertiesGoogleAdsLinksPatch(AnalyticsadminPropertiesGoogleAdsLinksPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/googleAdsLinks/{googleAdsLinksId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("googleAdsLinksId", request.GoogleAdsLinksId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaGoogleAdsLink>(),
            AnalyticsadminPropertiesGoogleAdsLinksPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create keyEvents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaKeyEvent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesKeyEventsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a Key Event.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaKeyEvent> AnalyticsadminPropertiesKeyEventsCreate(AnalyticsadminPropertiesKeyEventsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/keyEvents"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaKeyEvent>(),
            AnalyticsadminPropertiesKeyEventsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete keyEvents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesKeyEventsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a Key Event.
    /// </remarks>
    public Task<object> AnalyticsadminPropertiesKeyEventsDelete(AnalyticsadminPropertiesKeyEventsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/keyEvents/{keyEventsId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("keyEventsId", request.KeyEventsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            AnalyticsadminPropertiesKeyEventsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get keyEvents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaKeyEvent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesKeyEventsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a single Key Event.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaKeyEvent> AnalyticsadminPropertiesKeyEventsGet(AnalyticsadminPropertiesKeyEventsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/keyEvents/{keyEventsId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("keyEventsId", request.KeyEventsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaKeyEvent>(),
            AnalyticsadminPropertiesKeyEventsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List keyEvents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaListKeyEventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesKeyEventsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of Key Events in the specified parent property. Returns an empty list if no Key Events are found.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaListKeyEventsResponse> AnalyticsadminPropertiesKeyEventsList(AnalyticsadminPropertiesKeyEventsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/keyEvents"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaListKeyEventsResponse>(),
            AnalyticsadminPropertiesKeyEventsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch keyEvents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaKeyEvent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesKeyEventsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a Key Event.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaKeyEvent> AnalyticsadminPropertiesKeyEventsPatch(AnalyticsadminPropertiesKeyEventsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/keyEvents/{keyEventsId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("keyEventsId", request.KeyEventsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaKeyEvent>(),
            AnalyticsadminPropertiesKeyEventsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List properties
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaListPropertiesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns child Properties under the specified parent Account. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaListPropertiesResponse> AnalyticsadminPropertiesList(AnalyticsadminPropertiesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties"),
            [],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("showDeleted", request.ShowDeleted),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaListPropertiesResponse>(),
            AnalyticsadminPropertiesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch properties
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaProperty"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a property.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaProperty> AnalyticsadminPropertiesPatch(AnalyticsadminPropertiesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaProperty>(),
            AnalyticsadminPropertiesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run access report properties
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaRunAccessReportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesRunAccessReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase &amp; Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see searchChangeHistoryEvents. To give your feedback on this API, complete the Google Analytics Access Reports feedback form.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaRunAccessReportResponse> AnalyticsadminPropertiesRunAccessReport(AnalyticsadminPropertiesRunAccessReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}:runAccessReport"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaRunAccessReportResponse>(),
            AnalyticsadminPropertiesRunAccessReportError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update data retention settings properties
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaDataRetentionSettings"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminPropertiesUpdateDataRetentionSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the singleton data retention settings for this property.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaDataRetentionSettings> AnalyticsadminPropertiesUpdateDataRetentionSettings(AnalyticsadminPropertiesUpdateDataRetentionSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/dataRetentionSettings"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaDataRetentionSettings>(),
            AnalyticsadminPropertiesUpdateDataRetentionSettingsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create audienceExports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OperationGoogleAnalyticsPropertiesApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsdataPropertiesAudienceExportsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an audience export for later retrieval. This method quickly returns the audience export's resource name and initiates a long running asynchronous request to form an audience export. To export the users in an audience export, first create the audience export through this method and then send the audience resource name to the <c>QueryAudienceExport</c> method. See Creating an Audience Export for an introduction to Audience Exports with examples. An audience export is a snapshot of the users currently in the audience at the time of audience export creation. Creating audience exports for one audience on different days will return different results as users enter and exit the audience. Audiences in Google Analytics 4 allow you to segment your users in the ways that are important to your business. To learn more, see https://support.google.com/analytics/answer/9267572. Audience exports contain the users in each audience. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.
    /// </remarks>
    public Task<OperationGoogleAnalyticsPropertiesApi> AnalyticsdataPropertiesAudienceExportsCreate(AnalyticsdataPropertiesAudienceExportsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/audienceExports"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OperationGoogleAnalyticsPropertiesApi>(),
            AnalyticsdataPropertiesAudienceExportsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get audienceExports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AudienceExport"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsdataPropertiesAudienceExportsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets configuration metadata about a specific audience export. This method can be used to understand an audience export after it has been created. See Creating an Audience Export for an introduction to Audience Exports with examples. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.
    /// </remarks>
    public Task<AudienceExport> AnalyticsdataPropertiesAudienceExportsGet(AnalyticsdataPropertiesAudienceExportsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/audienceExports/{audienceExportsId}"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("audienceExportsId", request.AudienceExportsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AudienceExport>(),
            AnalyticsdataPropertiesAudienceExportsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List audienceExports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListAudienceExportsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsdataPropertiesAudienceExportsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all audience exports for a property. This method can be used for you to find and reuse existing audience exports rather than creating unnecessary new audience exports. The same audience can have multiple audience exports that represent the export of users that were in an audience on different days. See Creating an Audience Export for an introduction to Audience Exports with examples. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.
    /// </remarks>
    public Task<ListAudienceExportsResponse> AnalyticsdataPropertiesAudienceExportsList(AnalyticsdataPropertiesAudienceExportsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/audienceExports"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListAudienceExportsResponse>(),
            AnalyticsdataPropertiesAudienceExportsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Query audienceExports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QueryAudienceExportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsdataPropertiesAudienceExportsQueryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves an audience export of users. After creating an audience, the users are not immediately available for exporting. First, a request to <c>CreateAudienceExport</c> is necessary to create an audience export of users, and then second, this method is used to retrieve the users in the audience export. See Creating an Audience Export for an introduction to Audience Exports with examples. Audiences in Google Analytics 4 allow you to segment your users in the ways that are important to your business. To learn more, see https://support.google.com/analytics/answer/9267572. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the Google Analytics Audience Export API Feedback form.
    /// </remarks>
    public Task<QueryAudienceExportResponse> AnalyticsdataPropertiesAudienceExportsQuery(AnalyticsdataPropertiesAudienceExportsQueryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/audienceExports/{audienceExportsId}:query"),
            [
                new TemplateParam("propertiesId", request.PropertiesId),
                new TemplateParam("audienceExportsId", request.AudienceExportsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QueryAudienceExportResponse>(),
            AnalyticsdataPropertiesAudienceExportsQueryError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch run pivot reports properties
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchRunPivotReportsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsdataPropertiesBatchRunPivotReportsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns multiple pivot reports in a batch. All reports must be for the same Google Analytics property.
    /// </remarks>
    public Task<BatchRunPivotReportsResponse> AnalyticsdataPropertiesBatchRunPivotReports(AnalyticsdataPropertiesBatchRunPivotReportsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}:batchRunPivotReports"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BatchRunPivotReportsResponse>(),
            AnalyticsdataPropertiesBatchRunPivotReportsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch run reports properties
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchRunReportsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsdataPropertiesBatchRunReportsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns multiple reports in a batch. All reports must be for the same Google Analytics property.
    /// </remarks>
    public Task<BatchRunReportsResponse> AnalyticsdataPropertiesBatchRunReports(AnalyticsdataPropertiesBatchRunReportsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}:batchRunReports"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BatchRunReportsResponse>(),
            AnalyticsdataPropertiesBatchRunReportsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check compatibility properties
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CheckCompatibilityResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsdataPropertiesCheckCompatibilityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.
    /// </remarks>
    public Task<CheckCompatibilityResponse> AnalyticsdataPropertiesCheckCompatibility(AnalyticsdataPropertiesCheckCompatibilityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}:checkCompatibility"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CheckCompatibilityResponse>(),
            AnalyticsdataPropertiesCheckCompatibilityError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get metadata properties
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Metadata"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsdataPropertiesGetMetadataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics property identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name <c>levels_unlocked</c> is registered to a property, the Metadata response will contain <c>customEvent:levels_unlocked</c>. Universal metadata are dimensions and metrics applicable to any property such as <c>country</c> and <c>totalUsers</c>.
    /// </remarks>
    public Task<Metadata> AnalyticsdataPropertiesGetMetadata(AnalyticsdataPropertiesGetMetadataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}/metadata"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Metadata>(),
            AnalyticsdataPropertiesGetMetadataError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run pivot report properties
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RunPivotReportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsdataPropertiesRunPivotReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.
    /// </remarks>
    public Task<RunPivotReportResponse> AnalyticsdataPropertiesRunPivotReport(AnalyticsdataPropertiesRunPivotReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}:runPivotReport"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RunPivotReportResponse>(),
            AnalyticsdataPropertiesRunPivotReportError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run realtime report properties
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RunRealtimeReportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsdataPropertiesRunRealtimeReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests &amp; understanding responses, see Creating a Realtime Report.
    /// </remarks>
    public Task<RunRealtimeReportResponse> AnalyticsdataPropertiesRunRealtimeReport(AnalyticsdataPropertiesRunRealtimeReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}:runRealtimeReport"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RunRealtimeReportResponse>(),
            AnalyticsdataPropertiesRunRealtimeReportError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run report properties
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RunReportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsdataPropertiesRunReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests &amp; understanding responses, see Creating a Report.
    /// </remarks>
    public Task<RunReportResponse> AnalyticsdataPropertiesRunReport(AnalyticsdataPropertiesRunReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/properties/{propertiesId}:runReport"),
            [new TemplateParam("propertiesId", request.PropertiesId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RunReportResponse>(),
            AnalyticsdataPropertiesRunReportError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
