using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

/// <summary>
/// Request body for generating a static QR code image. Customizations such as gradient, background_gradient, frame, text and logo are not supported.
/// </summary>
public record PublicCreateStaticQrCodeRequest
{
    /// <summary>
    /// The raw content to encode in the QR code (e.g. a URL).
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    /// <summary>
    /// The group (brand) GUID used for access control and analytics.
    /// </summary>
    [JsonPropertyName("group_guid")]
    public required string GroupGuid { get; init; }

    /// <summary>
    /// Appearance options for a static QR code. gradient, background_gradient, frame, text, and logo are not supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("render_customizations")]
    public QrCodeCustomizationsStaticPublic? RenderCustomizations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
