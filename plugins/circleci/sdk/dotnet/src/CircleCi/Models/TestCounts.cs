using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

/// <summary>
/// Test counts by result
/// </summary>
public record TestCounts
{
    /// <summary>
    /// Number of errored tests
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public int? Error { get; init; }

    /// <summary>
    /// Number of failed tests
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failure")]
    public int? Failure { get; init; }

    /// <summary>
    /// Number of successful tests
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("success")]
    public int? Success { get; init; }

    /// <summary>
    /// Number of skipped tests
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("skipped")]
    public int? Skipped { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
