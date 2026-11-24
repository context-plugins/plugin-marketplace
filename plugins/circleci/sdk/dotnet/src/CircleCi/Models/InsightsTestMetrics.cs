using System.Collections.Generic;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

public record InsightsTestMetrics
{
    /// <summary>
    /// Average number of tests per run
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("average_test_count")]
    public int? AverageTestCount { get; init; }

    /// <summary>
    /// Most frequently failing tests
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("most_failed_tests")]
    public IReadOnlyList<MostFailedTest>? MostFailedTests { get; init; }

    /// <summary>
    /// Slowest tests by duration
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slowest_tests")]
    public IReadOnlyList<SlowestTest>? SlowestTests { get; init; }

    /// <summary>
    /// Recent test run summaries
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("test_runs")]
    public IReadOnlyList<TestRun>? TestRuns { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
