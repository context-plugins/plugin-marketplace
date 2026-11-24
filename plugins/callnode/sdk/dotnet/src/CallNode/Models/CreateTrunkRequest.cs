using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CallNode.Core.Models;
using CallNode.Models.Enums;

namespace CallNode.Models;

/// <summary>
/// Provide <c>name</c> plus at least one direction's config — an <c>egressHost</c>
/// (egress), one or more <c>allowedIps</c> (IP-authenticated ingress), or
/// <c>registrationEnabled: true</c> (registration ingress). A request with none
/// of them is rejected with <c>no_config</c>.
/// </summary>
public record CreateTrunkRequest
{
    [JsonPropertyName("name")]
    [StringLength(64, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// Hostname or IP of your SIP endpoint. Setting it enables egress delivery. Must be a public host.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("egressHost")]
    public string? EgressHost { get; init; }

    /// <summary>
    /// Defaults to 5060, or 5061 when <c>egressTransport</c> is <c>tls</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("egressPort")]
    public int? EgressPort { get; init; } = 5060;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("egressTransport")]
    public EgressTransport? EgressTransport { get; init; }

    /// <summary>
    /// Public IPv4 source IPs for ingress.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowedIps")]
    public IReadOnlyList<string>? AllowedIps { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ingressEnabled")]
    public bool? IngressEnabled { get; init; }

    /// <summary>
    /// Create a registration trunk for a PBX with no static public IP: your
    /// PBX registers to CallNode over TLS instead of being allow-listed by
    /// address, and calls we place to you go to whatever contact it last
    /// registered from. The response carries <c>sipPassword</c> once.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registrationEnabled")]
    public bool? RegistrationEnabled { get; init; }

    /// <summary>
    /// One of your numbers' ids — the default ingress agent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultPhoneNumberId")]
    public string? DefaultPhoneNumberId { get; init; }

    /// <summary>
    /// One of your numbers' ids — caller ID presented on termination calls when the From is not an owned number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outboundCliNumberId")]
    public string? OutboundCliNumberId { get; init; }

    /// <summary>
    /// Set true to acknowledge your plan's additional-trunk fee when you are beyond the included count.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("confirmMonthlyFee")]
    public bool? ConfirmMonthlyFee { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
