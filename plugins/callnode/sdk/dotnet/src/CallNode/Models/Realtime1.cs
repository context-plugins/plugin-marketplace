using System.Text.Json.Serialization;
using CallNode.Core.Models;
using CallNode.Core.Validation;
using CallNode.Core.Validation.Attributes;

namespace CallNode.Models;

/// <summary>
/// Realtime WebSocket mode (see /docs/realtime). Null when the number runs the per-turn webhook loop.
/// </summary>
public record Realtime1
{
    /// <summary>
    /// wss:// endpoint CallNode connects to per call
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public string? Url { get; init; }

    /// <summary>
    /// How CallNode authenticates to your webhook. The secret itself is write-only and never returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("auth")]
    public WebhookAuthStatus? Auth { get; init; }

    /// <summary>
    /// Voice id used for say frames; null = platform default
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("voice")]
    public string? Voice { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
