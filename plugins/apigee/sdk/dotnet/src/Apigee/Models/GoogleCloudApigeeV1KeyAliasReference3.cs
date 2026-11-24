using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Reference name and alias pair to use for client-side authentication.
/// </summary>
public record GoogleCloudApigeeV1KeyAliasReference3
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
