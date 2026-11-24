using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Reference name and alias-id pair. Set when the customer supplied a <c>ref://{referenceID}</c> URI in <c>TraceConfig.OtelMtlsConfig.key_store</c>. Resolved via the References catalog the same way as <c>TlsInfoConfig.key_alias_reference</c> in target-server TLS. Reuses the top-level <c>KeyAliasReference</c> message defined for <c>TlsInfoConfig</c> above; no new message.
/// </summary>
public record GoogleCloudApigeeV1KeyAliasReference1
{
    /// <summary>
    /// Reference name in the following format: <c>organizations/{org}/environments/{env}/references/{reference}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reference")]
    public string? Reference { get; init; }

    /// <summary>
    /// Alias ID. Must exist in the keystore referred to by the reference.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aliasId")]
    public string? AliasId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
