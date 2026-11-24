using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Output only.
/// </summary>
public record BackfillStatus2
{
    /// <summary>
    /// Output only. The Cloud Storage path where the backfill or dry run report is written. Format: "gs://path-to-report".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportPath")]
    public string? ReportPath { get; init; }

    /// <summary>
    /// Output only. Summary of the migration results. This is populated after the backfill or dry run is finished.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("migrationSummary")]
    public MigrationSummary1? MigrationSummary { get; init; }

    /// <summary>
    /// Output only. The current state of the backfill (or dry run).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State15? State { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
