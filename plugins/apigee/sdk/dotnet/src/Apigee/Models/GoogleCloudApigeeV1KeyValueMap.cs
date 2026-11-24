using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Collection of key/value string pairs.
/// </summary>
public record GoogleCloudApigeeV1KeyValueMap
{
    /// <summary>
    /// Required. Flag that specifies whether entry values will be encrypted. This field is retained for backward compatibility and the value of encrypted will always be <c>true</c>. Apigee X and hybrid do not support unencrypted key value maps.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encrypted")]
    public bool? Encrypted { get; init; }

    /// <summary>
    /// Optional. Flag that specifies whether entry values will be masked when returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maskedValues")]
    public bool? MaskedValues { get; init; }

    /// <summary>
    /// Required. ID of the key value map.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
