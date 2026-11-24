using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record FuzzyDuplicateDiagnosticsV4
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("candidateRowsScored")]
    public int? CandidateRowsScored { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checkRowsTested")]
    public int? CheckRowsTested { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clusterCount")]
    public int? ClusterCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datasetRowsTested")]
    public int? DatasetRowsTested { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failedRowsCount")]
    public int? FailedRowsCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failedRowsDataQuery")]
    public string? FailedRowsDataQuery { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failedRowsKeysQuery")]
    public string? FailedRowsKeysQuery { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failedRowsSourceQuery")]
    public string? FailedRowsSourceQuery { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fuzzyDuplicateCount")]
    public int? FuzzyDuplicateCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fuzzyDuplicatePercent")]
    public double? FuzzyDuplicatePercent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("meanConfidence")]
    public double? MeanConfidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
