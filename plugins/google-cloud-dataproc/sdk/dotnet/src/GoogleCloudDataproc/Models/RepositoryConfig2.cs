using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Dependency repository configuration.
/// </summary>
public record RepositoryConfig2
{
    /// <summary>
    /// Optional. Configuration for PyPi repository.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pypiRepositoryConfig")]
    public PyPiRepositoryConfig2? PypiRepositoryConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
