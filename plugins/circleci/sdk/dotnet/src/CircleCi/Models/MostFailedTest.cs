using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

public record MostFailedTest
{
    /// <summary>
    /// Name of the test
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("test_name")]
    public string? TestName { get; init; }

    /// <summary>
    /// Class name of the test
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("classname")]
    public string? Classname { get; init; }

    /// <summary>
    /// Number of failed runs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failed_runs")]
    public int? FailedRuns { get; init; }

    /// <summary>
    /// Total runs of this test
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_runs")]
    public int? TotalRuns { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
