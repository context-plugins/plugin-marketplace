using System.Text.Json.Serialization;
using CallNode.Core.Models;
using CallNode.Core.Validation;
using CallNode.Core.Validation.Attributes;

namespace CallNode.Models;

public record Voice
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookUrl")]
    [Format(FormatKind.Uri)]
    public string? WebhookUrl { get; init; }

    /// <summary>
    /// How CallNode authenticates to your webhook. The secret itself is write-only and never returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookAuth")]
    public WebhookAuthStatus? WebhookAuth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookTimeout")]
    public int? WebhookTimeout { get; init; }

    /// <summary>
    /// SIP delivery target (BYOC / wholesale). Null when the number runs in webhook mode.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sipUri")]
    public string? SipUri { get; init; }

    /// <summary>
    /// Whether the sipUri delivery leg offers SRTP (only ever true beside a ;transport=tls address).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("srtp")]
    public bool? Srtp { get; init; }

    /// <summary>
    /// SIP trunk this number delivers inbound calls to. Null unless trunk delivery is configured.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trunkId")]
    public string? TrunkId { get; init; }

    /// <summary>
    /// Realtime WebSocket mode (see /docs/realtime). Null when the number runs the per-turn webhook loop.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("realtime")]
    public Realtime1? Realtime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
