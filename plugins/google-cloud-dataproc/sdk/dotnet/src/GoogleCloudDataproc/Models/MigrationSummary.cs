using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Summary of the migration results.
/// </summary>
public record MigrationSummary
{
    /// <summary>
    /// Output only. The Dataproc Metastore service name (format: projects/*/locations/*/services/*) on which the migration was executed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("service")]
    public string? Service { get; init; }

    /// <summary>
    /// Output only. Summary of results for each catalog involved in the migration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("catalogSummaries")]
    public IReadOnlyList<CatalogSummary>? CatalogSummaries { get; init; }

    /// <summary>
    /// Output only. The UTC time when the report was written.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public string? EndTime { get; init; }

    /// <summary>
    /// Output only. Whether the migration was a dry run.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dryRun")]
    public bool? DryRun { get; init; }

    /// <summary>
    /// Output only. The UTC time when the source metadata read was initiated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
