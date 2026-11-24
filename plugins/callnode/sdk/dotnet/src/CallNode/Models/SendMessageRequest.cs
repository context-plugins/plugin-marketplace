using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CallNode.Core.Models;
using CallNode.Core.Validation;
using CallNode.Core.Validation.Attributes;

namespace CallNode.Models;

public record SendMessageRequest
{
    /// <summary>
    /// Plus sign followed by 7–15 digits.
    /// </summary>
    [JsonPropertyName("to")]
    [RegularExpression("^\\+[1-9]\\d{6,14}$")]
    public required string To { get; init; }

    /// <summary>
    /// A number you own. For SMS/MMS it must be carrier-registered: associated with
    /// your 10DLC campaign (local) or Toll-Free Verified (toll-free).
    /// </summary>
    [JsonPropertyName("from")]
    [RegularExpression("^\\+[1-9]\\d{6,14}$")]
    public required string From { get; init; }

    /// <summary>
    /// Message text. Required unless <c>media</c> is supplied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("body")]
    public string? Body { get; init; }

    /// <summary>
    /// Any entry makes this an MMS. Each entry is a public URL or the file
    /// itself as a base64 data URL (<c>data:image/png;base64,...</c>). JPG, PNG,
    /// GIF, WebP, MP4 and PDF; up to 5 MB each. CallNode stores a copy and
    /// delivers from its own URL. An inline file of an unsupported type or
    /// size is a 400 <c>invalid_media</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("media")]
    public IReadOnlyList<string>? Media { get; init; }

    /// <summary>
    /// URL we POST delivery status updates to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusWebhookUrl")]
    [Format(FormatKind.Uri)]
    public string? StatusWebhookUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tcpaOverride")]
    public bool? TcpaOverride { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
