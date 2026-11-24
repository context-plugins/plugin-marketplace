using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

public record SlowestTest
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
    /// 95th percentile duration
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("p95_duration")]
    public double? P95Duration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
