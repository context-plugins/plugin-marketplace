using System;
using System.Text.Json.Serialization;
using Soda.Core.Models;
using Soda.Models.Enums;

namespace Soda.Models;

public record FreshnessDiffDiagnosticsV4
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("freshnessDiff")]
    public int? FreshnessDiff { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("freshnessDiffUnit")]
    public FreshnessDiffDiagnosticsV4UnitOfTimeDto? FreshnessDiffUnit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceCheckRowsTested")]
    public int? SourceCheckRowsTested { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceDatasetRowsTested")]
    public int? SourceDatasetRowsTested { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceMaxTimestamp")]
    public DateTimeOffset? SourceMaxTimestamp { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceMaxTimestampUtc")]
    public DateTimeOffset? SourceMaxTimestampUtc { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetCheckRowsTested")]
    public int? TargetCheckRowsTested { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetDatasetRowsTested")]
    public int? TargetDatasetRowsTested { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetMaxTimestamp")]
    public DateTimeOffset? TargetMaxTimestamp { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetMaxTimestampUtc")]
    public DateTimeOffset? TargetMaxTimestampUtc { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
