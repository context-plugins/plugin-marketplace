using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Configuration for dependency repositories
/// </summary>
public record RepositoryConfig
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
