using System.Text.Json.Serialization;
using CallNode.Core.Models;
using CallNode.Core.Validation;
using CallNode.Core.Validation.Attributes;

namespace CallNode.Models;

/// <summary>
/// Realtime WebSocket mode for this call (see /docs/realtime): instead of the
/// per-turn webhook, CallNode opens a WebSocket to <c>url</c> when the call connects and
/// streams transcripts (and, on request, caller audio) to it; you stream audio back,
/// transfer or hang up. Overrides the from-number's realtime setting. The webhook
/// stays the fallback if the socket cannot be reached. Billed per started minute of
/// socket time on top of the call minute (<c>realtimePerMinuteRate</c> on GET /api/plans).
/// </summary>
public record Realtime
{
    /// <summary>
    /// wss:// URL on a public host.
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// How CallNode authenticates to your webhook endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("auth")]
    public WebhookAuth? Auth { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
