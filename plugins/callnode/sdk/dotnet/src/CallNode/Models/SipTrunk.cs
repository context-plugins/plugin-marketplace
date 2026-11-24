using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using CallNode.Core.Models;
using CallNode.Models.Enums;

namespace CallNode.Models;

/// <summary>
/// A saved SIP trunk — egress (outbound BYOC), ingress (inbound from your PBX/SBC), or both.
/// </summary>
public record SipTrunk
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// 1–64 characters. Unique across your active trunks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusCallnodeIoSipTrunksApi? Status { get; init; }

    /// <summary>
    /// Whether outbound (BYOC) delivery to <c>egressHost</c> is enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("egressEnabled")]
    public bool? EgressEnabled { get; init; }

    /// <summary>
    /// Hostname or IP of your SIP endpoint for outbound delivery. Null for an ingress-only trunk.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("egressHost")]
    public string? EgressHost { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("egressPort")]
    public int? EgressPort { get; init; } = 5060;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("egressTransport")]
    public EgressTransport? EgressTransport { get; init; }

    /// <summary>
    /// Whether inbound calls from <c>allowedIps</c> are accepted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ingressEnabled")]
    public bool? IngressEnabled { get; init; }

    /// <summary>
    /// Public IPv4 addresses your PBX/SBC sends from — the accepted ingress source IPs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowedIps")]
    public IReadOnlyList<string>? AllowedIps { get; init; }

    /// <summary>
    /// The id of one of your numbers — the default agent for ingress calls that do not match one of your own DIDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultPhoneNumberId")]
    public string? DefaultPhoneNumberId { get; init; }

    /// <summary>
    /// The id of one of your numbers, presented as caller ID on outbound (termination) calls when the INVITE's From is not itself one of your numbers — the normal case for a registration trunk, whose From carries its auth username. A From that IS one of your live numbers always wins, so a multi-number PBX can still present per-call caller ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outboundCliNumberId")]
    public string? OutboundCliNumberId { get; init; }

    /// <summary>
    /// True when this trunk is beyond your plan's included count and is billed the additional-trunk fee.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("monthlyFeeApplies")]
    public bool? MonthlyFeeApplies { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextBillingDate")]
    public DateTimeOffset? NextBillingDate { get; init; }

    /// <summary>
    /// Registration-trunk settings, for a PBX with no static public IP. Never
    /// contains the password or its digest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registration")]
    public Registration? Registration { get; init; }

    /// <summary>
    /// Present ONLY on the response that mints it — creating a registration
    /// trunk, enabling registration, or rotating credentials. It cannot be
    /// retrieved afterwards; store it immediately.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sipPassword")]
    public string? SipPassword { get; init; }

    /// <summary>
    /// Human-readable reminder that accompanies <c>sipPassword</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sipPasswordNotice")]
    public string? SipPasswordNotice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public DateTimeOffset? CreatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedAt")]
    public DateTimeOffset? UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
