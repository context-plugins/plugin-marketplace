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
using FinixApiReference.Requests.Devices;

namespace FinixApiReference.Api;

/// <summary>
/// A <c>Device</c> resource represents a Point-of-Sale terminal. Devices are used for <see href="/guides/in-person-payments">In-Person transactions</see>.
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/guides/in-person-payments">In-Person Payments</see>
/// </para>
/// </summary>
public sealed class Devices
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Devices(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Merchant Device
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Device"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateMerchantDeviceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a <c>Device</c> under a <c>Merchant</c>.
    /// </remarks>
    public Task<Device> CreateMerchantDevice(CreateMerchantDeviceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/merchants/{merchant_id}/devices"),
            [new TemplateParam("merchant_id", request.MerchantId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Device>(),
            CreateMerchantDeviceError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a Device
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Device"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDeviceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of an existing <c>Device</c>.
    /// </remarks>
    public Task<Device> GetDevice(GetDeviceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/devices/{device_id}"),
            [new TemplateParam("device_id", request.DeviceId)],
            [new Param("include_connection", request.IncludeConnection)],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Device>(),
            GetDeviceError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check Device Connection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Device"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDeviceConnectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// To check the connection of the <c>Device</c>, include <c>?include_connection=true</c> at the end of the request endpoint.
    /// </remarks>
    public Task<Device> GetDeviceConnection(GetDeviceConnectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/devices/{device_id_connection}"),
            [new TemplateParam("device_id_connection", request.DeviceIdConnection)],
            [new Param("include_connection", request.IncludeConnection)],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Device>(),
            GetDeviceConnectionError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Device Metrics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListDevices"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDeviceMetricsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Finix collects and analyzes data from payment devices and terminals to generate logs, known as <c>Device Metric</c> objects. Each <c>Device Metric</c> log provides insights into device health, network connectivity, and payment processing performance.
    /// <para>
    /// Use this endpoint to retrieve a device's <c>Device Metric</c> logs.
    /// </para>
    /// <para>
    /// For details on how to query endpoints using the available parameters, see <see href="/api/section/query-parameters">Query Parameters</see>.
    /// </para>
    /// </remarks>
    public Task<ListDevices> ListDeviceMetrics(ListDeviceMetricsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/devices/{device_id}/device_metrics"),
            [new TemplateParam("device_id", request.DeviceId)],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("connection", request.Connection),
                new Param("connectivity_network_type", request.ConnectivityNetworkType),
                new Param("connectivity_signal_strength", request.ConnectivitySignalStrength),
                new Param("event_type", request.EventType),
                new Param("limit", request.Limit),
                new Param("payment_app_state", request.PaymentAppState),
                new Param("payment_app_version", request.PaymentAppVersion),
                new Param("payment_app_version.gte", request.PaymentAppVersionGte),
                new Param("payment_app_version.lte", request.PaymentAppVersionLte),
                new Param("power_battery_level_percent", request.PowerBatteryLevelPercent),
                new Param("power_battery_level_percent.gte", request.PowerBatteryLevelPercentGte),
                new Param("power_battery_level_percent.lte", request.PowerBatteryLevelPercentLte),
                new Param("power_battery_temperature_celsius", request.PowerBatteryTemperatureCelsius),
                new Param("power_battery_temperature_celsius.gte", request.PowerBatteryTemperatureCelsiusGte),
                new Param("power_battery_temperature_celsius.lte", request.PowerBatteryTemperatureCelsiusLte),
                new Param("power_battery_temperature_fahrenheit", request.PowerBatteryTemperatureFahrenheit),
                new Param("power_battery_temperature_fahrenheit.gte", request.PowerBatteryTemperatureFahrenheitGte),
                new Param("power_battery_temperature_fahrenheit.lte", request.PowerBatteryTemperatureFahrenheitLte),
                new Param("power_is_charging", request.PowerIsCharging),
                new Param("system_android_version", request.SystemAndroidVersion),
                new Param("system_android_version.gte", request.SystemAndroidVersionGte),
                new Param("system_android_version.lte", request.SystemAndroidVersionLte),
                new Param("system_firmware_version", request.SystemFirmwareVersion),
                new Param("system_firmware_version.gte", request.SystemFirmwareVersionGte),
                new Param("system_firmware_version.lte", request.SystemFirmwareVersionLte),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListDevices>(),
            ListDeviceMetricsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Devices
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListDevices"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDevicesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Devices</c>.
    /// <para>
    /// For details on how to query endpoints using the available parameters, see <see href="/api/section/query-parameters">Query Parameters.</see>
    /// </para>
    /// </remarks>
    public Task<ListDevices> ListDevices(ListDevicesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/devices"),
            [],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("application_id", request.ApplicationId),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("description", request.Description),
                new Param("enabled", request.Enabled),
                new Param("limit", request.Limit),
                new Param("merchant_id", request.MerchantId),
                new Param("merchant_identity_id", request.MerchantIdentityId),
                new Param("name", request.Name),
                new Param("model", request.Model),
                new Param("tags.key", request.TagsKey),
                new Param("tags.value", request.TagsValue),
                new Param("serial_number", request.SerialNumber),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListDevices>(),
            ListDevicesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Device
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Device"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateDeviceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// You can either update the configuration of a device or take an action on the device
    /// <para>
    /// Terminals must be online and connected to the network in order for the request to be successful.
    /// </para>
    /// <para>
    /// You can initiate an action on a <c>Device</c>. Actions supported vary by gateway.
    /// </para>
    /// <para>
    /// FINIX_V1 and DUMMY_V1 terminals support the following actions:
    /// - <c>ACTIVATE</c> - Activate the device to enable processing
    /// - <c>DEACTIVATE</c> - Deactivate the device to disable processing
    /// - <c>CANCEL</c> - Cancel any active transaction and return to the idle screen
    /// </para>
    /// <para>
    /// For processors other than <c>FINIX_V1</c> and <c>DUMMY_V1</c>, contact your Finix point of contact or email <see href="/guides/getting-started/support-at-finix/">Finix Support</see> for device update instructions.
    /// </para>
    /// <para>
    /// You can also use a PUT request to update the <c>configuration</c>, <c>description</c>, <c>name</c>, and <c>serial_number</c> of the <c>Device</c>.
    /// </para>
    /// </remarks>
    public Task<Device> UpdateDevice(UpdateDeviceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/devices/{device_id}"),
            [new TemplateParam("device_id", request.DeviceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Device>(),
            UpdateDeviceError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
