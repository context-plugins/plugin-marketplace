using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Configuration for the Advanced API Ops add-on.
/// </summary>
public record GoogleCloudApigeeV1AdvancedApiOpsConfig
{
    /// <summary>
    /// Flag that specifies whether the Advanced API Ops add-on is enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
