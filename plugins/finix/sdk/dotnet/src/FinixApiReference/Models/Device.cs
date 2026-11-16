using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record Device
{
    /// <summary>
    /// The ID of the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    [MinLength(1)]
    public string? Id { get; init; }

    /// <summary>
    /// Timestamp of when the object was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Timestamp of when the object was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// The Android version installed on the <c>Device</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("android_version")]
    public string? AndroidVersion { get; init; }

    /// <summary>
    /// The connection status of the <c>Device</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connection")]
    public string? Connection { get; init; }

    /// <summary>
    /// Information used to configure how the <c>Device</c> handles transaction flows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("configuration")]
    public DeviceConfiguration? Configuration { get; init; }

    /// <summary>
    /// Response-only field. Information used to configure how the <c>Device</c> handles transaction flows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("configuration_details")]
    public DeviceConfiguration? ConfigurationDetails { get; init; }

    /// <summary>
    /// Additional information about device (e.g. self serving terminal).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Whether the <c>Device</c> is enabled. <c>false</c> indicates disabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// The current version of the device's firmware.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firmware_version")]
    public string? FirmwareVersion { get; init; }

    /// <summary>
    /// Sets the idle message text on the terminal. This is what will be presented on the welcome screen. <c>FINIX_V1</c> and <c>DUMMY_V1</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idle_message")]
    public string? IdleMessage { get; init; }

    /// <summary>
    /// The ID of the file to be displayed on the device when it is idle. Passing a value of <c>null</c> resets the device's idle image to the default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idle_image_file_id")]
    public string? IdleImageFileId { get; init; }

    /// <summary>
    /// Defines the operating mode of the <c>Device</c>. <c>PAYMENT_APP</c> devices operate within the standard Finix ecosystem. <c>SDK</c> devices are for customers who are building their own PAX app.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("integration_mode")]
    public IntegrationMode? IntegrationMode { get; init; } = IntegrationMode.PaymentApp;

    /// <summary>
    /// ID of the <c>Merchant</c> resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant")]
    public string? Merchant { get; init; }

    /// <summary>
    /// The model type of the <c>Device</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public Model2? Model { get; init; }

    /// <summary>
    /// The display name of the <c>Device</c> used for filtering purposes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The device’s current app version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_app_version")]
    public string? PaymentAppVersion { get; init; }

    /// <summary>
    /// When to prompt for a signature.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prompt_signature")]
    public PromptSignature? PromptSignature { get; init; }

    /// <summary>
    /// The serial_number is a unique identifier for the <c>Device</c>, located on the back and typically composed of ~16 digits. Ensure the serial number is set before activating the <c>Device</c>, though it can also be added later using a PUT request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serial_number")]
    public string? SerialNumber { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    /// <summary>
    /// For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these <c>_links</c> to make your follow-up requests and quickly access relevant IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links5? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
