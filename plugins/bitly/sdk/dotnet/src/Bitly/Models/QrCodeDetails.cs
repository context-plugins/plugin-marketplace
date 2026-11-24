using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitly.Core.Models;
using Bitly.Models.Enums;

namespace Bitly.Models;

public record QrCodeDetails
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("qrcode_id")]
    public string? QrcodeId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_guid")]
    public string? GroupGuid { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Contains GS1 related metadata
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gs1")]
    public Gs1Metadata? Gs1 { get; init; }

    /// <summary>
    /// Options for customizing a QR Code's appearance
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("render_customizations")]
    public QrCodeCustomizationsPublic? RenderCustomizations { get; init; }

    /// <summary>
    /// The type of dynamic/static content the QR serves, e.g. Link In Bio page, micro site, bitlink, email, text, Wifi, etc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("qr_code_type")]
    public QrCodeTypeEnum? QrCodeType { get; init; }

    /// <summary>
    /// The bitlink associated with the qr code. Not all qr codes are associated with one.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bitlink_id")]
    public string? BitlinkId { get; init; }

    /// <summary>
    /// A list of destination URLs that the qr code leads to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("long_urls")]
    public IReadOnlyList<string>? LongUrls { get; init; }

    /// <summary>
    /// The serialized string of the QR code's content
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serialized_content")]
    public string? SerializedContent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created")]
    public string? Created { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("modified")]
    public string? Modified { get; init; }

    /// <summary>
    /// Optional expiration timestamp for the QR code's bitlink (e.g., 2025-01-28T14:30:00+0000)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiration_at")]
    public string? ExpirationAt { get; init; }

    /// <summary>
    /// A list of tags associated with QR code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    /// <summary>
    /// Dynamic routing rules for this QR code. Only present when at least one rule is configured.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dynamic_routing")]
    public IReadOnlyList<DynamicRoutingRule>? DynamicRouting { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
