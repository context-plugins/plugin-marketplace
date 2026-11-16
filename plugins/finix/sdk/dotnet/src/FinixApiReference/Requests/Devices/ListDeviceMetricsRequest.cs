using System;
using FinixApiReference.Core.Validation.Attributes;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Requests.Devices;

/// <summary>
/// The inputs of the ListDeviceMetrics operation.
/// </summary>
public sealed record ListDeviceMetricsRequest
{
    /// <summary>
    /// The device whose logs you wish to view.
    /// </summary>
    public required string DeviceId { get; init; }

    /// <summary>
    /// Return every resource created after the cursor value.
    /// </summary>
    public string? AfterCursor { get; init; }

    /// <summary>
    /// Return every resource created before the cursor value.
    /// </summary>
    public string? BeforeCursor { get; init; }

    /// <summary>
    /// Filter where <c>created_at</c> is after the given date.
    /// </summary>
    public DateTimeOffset? CreatedAtGte { get; init; }

    /// <summary>
    /// Filter where <c>created_at</c> is before the given date.
    /// </summary>
    public DateTimeOffset? CreatedAtLte { get; init; }

    /// <summary>
    /// Query logs based on the device's connection status (i.e., whether the device has an open or closed connection).
    /// </summary>
    public Connection? Connection { get; init; }

    /// <summary>
    /// Query based on the type of network connection (e.g., Wi-Fi, cellular, ethernet).
    /// </summary>
    public ConnectivityNetworkType? ConnectivityNetworkType { get; init; }

    /// <summary>
    /// Query based on the network connection strength.
    /// </summary>
    public ConnectivitySignalStrength? ConnectivitySignalStrength { get; init; }

    /// <summary>
    /// Query based on the type of event that triggered the generation of the <c>Device Metric</c>.
    /// </summary>
    public EventType? EventType { get; init; }

    /// <summary>
    /// The numbers of items to return.
    /// </summary>
    [Maximum(100)]
    public int? Limit { get; init; }

    /// <summary>
    /// Query based on whether the payment application was running in the background or foreground on the device.
    /// </summary>
    public PaymentAppState? PaymentAppState { get; init; }

    /// <summary>
    /// Query based on the exact version of the payment application.
    /// </summary>
    public string? PaymentAppVersion { get; init; }

    /// <summary>
    /// Query *greater than* or *equal to* the specified payment app version.
    /// </summary>
    public string? PaymentAppVersionGte { get; init; }

    /// <summary>
    /// Query *less than* or *equal to* the specified payment app version.
    /// </summary>
    public string? PaymentAppVersionLte { get; init; }

    /// <summary>
    /// Query the device's battery level percentage.
    /// </summary>
    public int? PowerBatteryLevelPercent { get; init; }

    /// <summary>
    /// Query *greater than* or *equal to* the specified battery level percentage.
    /// </summary>
    public int? PowerBatteryLevelPercentGte { get; init; }

    /// <summary>
    /// Query *less than* or *equal to* the specified battery level percentage.
    /// </summary>
    public int? PowerBatteryLevelPercentLte { get; init; }

    /// <summary>
    /// Query based on the device's battery temperature in Celsius.
    /// </summary>
    public double? PowerBatteryTemperatureCelsius { get; init; }

    /// <summary>
    /// Query *greater than* or *equal to* the specified battery temperature in Celsius.
    /// </summary>
    public double? PowerBatteryTemperatureCelsiusGte { get; init; }

    /// <summary>
    /// Query *less than* or *equal to* the specified battery temperature in Celsius.
    /// </summary>
    public double? PowerBatteryTemperatureCelsiusLte { get; init; }

    /// <summary>
    /// Query based on the device's battery temperature in Fahrenheit.
    /// </summary>
    public double? PowerBatteryTemperatureFahrenheit { get; init; }

    /// <summary>
    /// Query *greater than* or *equal to* the specified battery temperature in Fahrenheit.
    /// </summary>
    public double? PowerBatteryTemperatureFahrenheitGte { get; init; }

    /// <summary>
    /// Query *less than* or *equal to* the specified battery temperature in Fahrenheit.
    /// </summary>
    public double? PowerBatteryTemperatureFahrenheitLte { get; init; }

    /// <summary>
    /// Query whether the device was charging or not charging.
    /// </summary>
    public bool? PowerIsCharging { get; init; }

    /// <summary>
    /// Query based on the Android operating system version installed on the device.
    /// </summary>
    public string? SystemAndroidVersion { get; init; }

    /// <summary>
    /// Query *greater than* or *equal to* the specified Android operating system version.
    /// </summary>
    public string? SystemAndroidVersionGte { get; init; }

    /// <summary>
    /// Query *less than* or *equal to* the specified Android operating system version.
    /// </summary>
    public string? SystemAndroidVersionLte { get; init; }

    /// <summary>
    /// Query based on the firmware version.
    /// </summary>
    public string? SystemFirmwareVersion { get; init; }

    /// <summary>
    /// Query *greater than* or *equal to* the specified firmware version.
    /// </summary>
    public string? SystemFirmwareVersionGte { get; init; }

    /// <summary>
    /// Query *less than* or *equal to* the specified firmware version.
    /// </summary>
    public string? SystemFirmwareVersionLte { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
