using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1ReferenceConfig
{
    /// <summary>
    /// Name of the referenced resource in the following format: <c>organizations/{org}/environments/{env}/keystores/{keystore}</c> Only references to keystore resources are supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceName")]
    public string? ResourceName { get; init; }

    /// <summary>
    /// Name of the reference in the following format: <c>organizations/{org}/environments/{env}/references/{reference}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
