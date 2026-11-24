using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Runtime configuration for the API Security add-on.
/// </summary>
public record GoogleCloudApigeeV1RuntimeApiSecurityConfig
{
    /// <summary>
    /// If the API Security is enabled or not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
