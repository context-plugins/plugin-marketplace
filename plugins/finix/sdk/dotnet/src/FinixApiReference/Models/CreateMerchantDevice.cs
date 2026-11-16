using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Schema for request to create a <c>Device</c> under a <c>Merchant</c>.
/// </summary>
public record CreateMerchantDevice
{
    /// <summary>
    /// The Apple app bundle identifier for the iOS app that will use the <c>Device</c>. Required when <c>model</c> is <c>IOS_TAP_TO_PAY</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("app_bundle_id")]
    public string? AppBundleId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("configuration")]
    public DeviceConfiguration? Configuration { get; init; }

    /// <summary>
    /// Additional information about device (e.g. self serving terminal).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Defines the operating mode of the <c>Device</c>. <c>PAYMENT_APP</c> devices operate within the standard Finix ecosystem. <c>SDK</c> devices are for customers who are building their own PAX app.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("integration_mode")]
    public IntegrationMode? IntegrationMode { get; init; }

    /// <summary>
    /// The model type of the <c>Device</c>.
    /// </summary>
    [JsonPropertyName("model")]
    public required Model Model { get; init; }

    /// <summary>
    /// Name of the <c>Device</c>.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The serial number of the <c>Device</c>.
    /// </summary>
    [JsonPropertyName("serial_number")]
    public required string SerialNumber { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
