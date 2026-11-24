using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Summary of results for a specific database in a catalog.
/// </summary>
public record DatabaseSummary
{
    /// <summary>
    /// Output only. The name of the database.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("database")]
    public string? Database { get; init; }

    /// <summary>
    /// Output only. The migration result status for the database. This is only set if the migration is not a dry run.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resultStatus")]
    public ResultStatus? ResultStatus { get; init; }

    /// <summary>
    /// Output only. Aggregated summary of results for all tables in the database.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tableSummary")]
    public TableSummary2? TableSummary { get; init; }

    /// <summary>
    /// Output only. The migration plan action for the database.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("planAction")]
    public PlanAction? PlanAction { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
