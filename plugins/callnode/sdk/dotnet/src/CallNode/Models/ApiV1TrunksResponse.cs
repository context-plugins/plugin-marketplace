using System.Collections.Generic;
using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

public record ApiV1TrunksResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trunks")]
    public IReadOnlyList<SipTrunk>? Trunks { get; init; }

    /// <summary>
    /// Trunks included with your plan at no additional charge.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includedSipTrunks")]
    public int? IncludedSipTrunks { get; init; }

    /// <summary>
    /// Your plan's monthly fee for each trunk beyond the included count.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalTrunkMonthlyFee")]
    public double? AdditionalTrunkMonthlyFee { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activeTrunkCount")]
    public int? ActiveTrunkCount { get; init; }

    /// <summary>
    /// The first switch address CallNode originates SIP egress from (kept for older integrations). Allow every address in egressSourceIps.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("egressSourceIp")]
    public string? EgressSourceIp { get; init; }

    /// <summary>
    /// Every address CallNode may originate SIP egress from; a call can leave from any of them. Allow all of them on your endpoints.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("egressSourceIps")]
    public IReadOnlyList<string>? EgressSourceIps { get; init; }

    /// <summary>
    /// Where an IP-authenticated PBX/SBC sends inbound trunk calls (UDP/TCP).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ingressEndpoint")]
    public string? IngressEndpoint { get; init; }

    /// <summary>
    /// Where a registration trunk registers and sends calls (TLS only).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registrationEndpoint")]
    public string? RegistrationEndpoint { get; init; }

    /// <summary>
    /// SIP domain/realm used for registration trunk credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sipRealm")]
    public string? SipRealm { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
