using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

/// <summary>
/// Customization and content values for a QR code created through the public API
/// </summary>
public record PublicCreateQrCodeRequest
{
    /// <summary>
    /// The title of the QR Code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Identify which group to place the QR Code.
    /// </summary>
    [JsonPropertyName("group_guid")]
    public required string GroupGuid { get; init; }

    /// <summary>
    /// Options for customizing a QR Code's appearance
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("render_customizations")]
    public QrCodeCustomizationsPublic? RenderCustomizations { get; init; }

    /// <summary>
    /// A boolean representing if the QR code should be archived (hidden from the UI) upon creation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; }

    [JsonPropertyName("destination")]
    public required QrCodeDestination Destination { get; init; }

    /// <summary>
    /// Contains GS1 related metadata
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gs1")]
    public Gs1Metadata? Gs1 { get; init; }

    /// <summary>
    /// Optional expiration timestamp for the QR code's bitlink (e.g., 2025-01-28T14:30:00+0000). Minimum expiration time is 5 minutes from now and maximum is 1 year.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiration_at")]
    public string? ExpirationAt { get; init; }

    /// <summary>
    /// A list of tags to add to the QR code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    /// <summary>
    /// Optional dynamic routing rules for this decoupled QR code. Only supported for long_url destinations. Providing this field replaces all existing rules. Send an empty array to clear all rules.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dynamic_routing")]
    public IReadOnlyList<DynamicRoutingRule>? DynamicRouting { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; } = "bit.ly";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
