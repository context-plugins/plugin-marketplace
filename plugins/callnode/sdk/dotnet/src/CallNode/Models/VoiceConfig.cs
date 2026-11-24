using System.Text.Json.Serialization;
using CallNode.Core.Models;
using CallNode.Core.Validation;
using CallNode.Core.Validation.Attributes;

namespace CallNode.Models;

/// <summary>
/// Voice configuration — how inbound calls to this number are answered. Three modes: a conversational WEBHOOK agent (webhookUrl set), SIP DELIVERY to a literal endpoint (sipUri set), or SIP DELIVERY to one of your saved trunks (trunkId set). sipUri and trunkId are mutually exclusive — setting one clears the other, and either takes precedence over the webhook. Wholesale numbers must always keep at least one mode — a change that would leave none is rejected with 400.
/// </summary>
public record VoiceConfig
{
    /// <summary>
    /// Invoked when a call connects and once per caller utterance. Empty/null disconnects the webhook.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookUrl")]
    [Format(FormatKind.Uri)]
    public string? WebhookUrl { get; init; }

    /// <summary>
    /// BYOC / wholesale SIP delivery: when set, inbound calls bridge straight to this sip: endpoint and the webhook never runs. Format sip:user@host[:port][;transport=udp|tcp|tls], public hosts only. Null switches the number back to webhook mode (for wholesale numbers, only allowed when a webhookUrl is present).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sipUri")]
    public string? SipUri { get; init; }

    /// <summary>
    /// Encrypt the audio on the sipUri delivery leg (SRTP with SDES key exchange, AES_CM_128_HMAC_SHA1_80 / AES_CM_128_HMAC_SHA1_32; no fallback to plain RTP). Accepted only when sipUri ends in ;transport=tls — otherwise 400. Cleared automatically when the address changes to UDP/TCP or the number switches to trunk delivery. See /docs/sip-trunking#byoc-srtp.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("srtp")]
    public bool? Srtp { get; init; } = false;

    /// <summary>
    /// Deliver inbound calls to one of your SIP trunks. A trunk with an egress host is dialed at that host; a REGISTRATION trunk is resolved to wherever your PBX is currently registered, at call time — the way to receive DID calls on equipment behind NAT. If the trunk is not registered when a call arrives, the call falls back to the number's webhook agent (if configured). Null clears trunk delivery. Mutually exclusive with sipUri.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trunkId")]
    public string? TrunkId { get; init; }

    /// <summary>
    /// Realtime WebSocket mode (see /docs/realtime): CallNode opens a WebSocket to <c>url</c> for every call to this number and streams transcripts (and, on request, caller audio); you stream audio back, transfer or hang up. The webhook stays the fallback when the socket cannot be reached. Null turns it off. The auth secret is write-only (reads return valueSet).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("realtime")]
    public RealtimeCallnodeIoPhoneNumbersApi? Realtime { get; init; }

    /// <summary>
    /// How CallNode authenticates to your webhook endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookAuth")]
    public WebhookAuthCallnodeIoPhoneNumbersApi? WebhookAuth { get; init; }

    /// <summary>
    /// Webhook response timeout in milliseconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookTimeout")]
    [Minimum(1000)]
    [Maximum(120000)]
    public int? WebhookTimeout { get; init; } = 30000;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
