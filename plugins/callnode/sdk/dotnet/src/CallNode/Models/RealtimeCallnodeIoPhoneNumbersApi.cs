using System.Text.Json.Serialization;
using CallNode.Core.Models;
using CallNode.Core.Validation;
using CallNode.Core.Validation.Attributes;

namespace CallNode.Models;

/// <summary>
/// Realtime WebSocket mode (see /docs/realtime): CallNode opens a WebSocket to <c>url</c> for every call to this number and streams transcripts (and, on request, caller audio); you stream audio back, transfer or hang up. The webhook stays the fallback when the socket cannot be reached. Null turns it off. The auth secret is write-only (reads return valueSet).
/// </summary>
public record RealtimeCallnodeIoPhoneNumbersApi
{
    /// <summary>
    /// wss:// URL on a public host
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// How CallNode authenticates to your webhook endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("auth")]
    public WebhookAuthCallnodeIoPhoneNumbersApi? Auth { get; init; }

    /// <summary>
    /// Voice for <c>say</c> frames (text mode): an id from GET /api/v1/numbers/voices. Null = the platform default voice.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("voice")]
    public string? Voice { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
