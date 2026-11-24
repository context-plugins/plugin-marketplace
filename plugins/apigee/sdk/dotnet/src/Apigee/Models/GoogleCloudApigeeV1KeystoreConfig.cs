using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1KeystoreConfig
{
    /// <summary>
    /// Aliases in the keystore.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aliases")]
    public IReadOnlyList<GoogleCloudApigeeV1AliasRevisionConfig>? Aliases { get; init; }

    /// <summary>
    /// Resource name in the following format: <c>organizations/{org}/environments/{env}/keystores/{keystore}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
