using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Configuration for PyPi repository
/// </summary>
public record PyPiRepositoryConfig
{
    /// <summary>
    /// Optional. The PyPi repository address. Note: This field is not available for batch workloads.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pypiRepository")]
    public string? PypiRepository { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
