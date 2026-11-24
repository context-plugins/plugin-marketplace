using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CallNode.Core.Models;
using CallNode.Core.Validation;
using CallNode.Core.Validation.Attributes;
using CallNode.Models.AnyOf;

namespace CallNode.Models;

/// <summary>
/// Three mutually exclusive destination forms: E.164 <c>to</c> (PSTN), a <c>sip:</c>
/// URI <c>to</c> (direct SIP delivery), or <c>sipTrunkId</c> + an E.164/extension
/// <c>to</c> (BYOC via your saved trunk). Passing <c>sipTrunkId</c> together with a
/// <c>sip:</c> <c>to</c> is rejected with <c>invalid_request</c>.
/// </summary>
public record OriginateRequest
{
    /// <summary>
    /// The destination. An E.164 number, a <c>sip:</c> URI, or — together with
    /// <c>sipTrunkId</c> — an E.164 number or a 1–64 character extension the
    /// trunk's host understands.
    /// </summary>
    [JsonPropertyName("to")]
    public required To To { get; init; }

    /// <summary>
    /// ID of a saved SIP trunk (Dashboard → SIP Trunks). Routes the call to
    /// the trunk's configured host (BYOC / PBX). Mutually exclusive with a
    /// <c>sip:</c> <c>to</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sipTrunkId")]
    public string? SipTrunkId { get; init; }

    /// <summary>
    /// Must be a DID owned by your account with status <c>active</c>. Required for
    /// every destination form — it becomes the caller ID presented to the
    /// called party or to your SIP endpoint.
    /// </summary>
    [JsonPropertyName("from")]
    [RegularExpression("^\\+[1-9]\\d{6,14}$")]
    public required string From { get; init; }

    /// <summary>
    /// Where your AI agent runs. Overrides the webhook stored on the <c>from</c> number.
    /// Invoked once when the call connects (<c>call_started</c>), then once per turn —
    /// for every caller utterance (<c>user_speech</c>) and every completed keypad entry
    /// (<c>user_dtmf</c>, with the digit string in a <c>dtmf</c> field) — see the
    /// Conversational Webhook guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookUrl")]
    [Format(FormatKind.Uri)]
    public string? WebhookUrl { get; init; }

    /// <summary>
    /// How CallNode authenticates to your webhook endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookAuth")]
    public WebhookAuth? WebhookAuth { get; init; }

    /// <summary>
    /// Realtime WebSocket mode for this call (see /docs/realtime): instead of the
    /// per-turn webhook, CallNode opens a WebSocket to <c>url</c> when the call connects and
    /// streams transcripts (and, on request, caller audio) to it; you stream audio back,
    /// transfer or hang up. Overrides the from-number's realtime setting. The webhook
    /// stays the fallback if the socket cannot be reached. Billed per started minute of
    /// socket time on top of the call minute (<c>realtimePerMinuteRate</c> on GET /api/plans).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("realtime")]
    public Realtime? Realtime { get; init; }

    /// <summary>
    /// Opaque JSON, echoed back on status webhooks. Max 4 KB.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    /// <summary>
    /// URL we POST call lifecycle events to (answered, completed, failed).
    /// For SIP destinations, <c>call.failed</c> events carry the mapped
    /// <c>failureCode</c> and may also include <c>sipCause</c> — the raw hangup cause
    /// string (diagnostic passthrough; not enumerated).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusWebhookUrl")]
    [Format(FormatKind.Uri)]
    public string? StatusWebhookUrl { get; init; }

    /// <summary>
    /// Hard cap on call duration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxDurationSecs")]
    [Minimum(5)]
    [Maximum(7200)]
    public int? MaxDurationSecs { get; init; } = 1800;

    /// <summary>
    /// Bypass the 8am–9pm called-party-local-time check. Audited.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tcpaOverride")]
    public bool? TcpaOverride { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
