using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record DuplicateDiffDiagnosticsV4
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duplicateCountDiff")]
    public int? DuplicateCountDiff { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duplicateDiffPercent")]
    public double? DuplicateDiffPercent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceCheckRowsTested")]
    public int? SourceCheckRowsTested { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceDatasetRowsTested")]
    public int? SourceDatasetRowsTested { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceDuplicateCount")]
    public int? SourceDuplicateCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetCheckRowsTested")]
    public int? TargetCheckRowsTested { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetDatasetRowsTested")]
    public int? TargetDatasetRowsTested { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetDuplicateCount")]
    public int? TargetDuplicateCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
