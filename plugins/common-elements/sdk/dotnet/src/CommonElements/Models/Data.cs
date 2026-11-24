using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record Data
{
    /// <summary>
    /// Structural Integrity Reserve Study filings: on_file, project_count, and the projects array.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sirs")]
    public object? Sirs { get; init; }

    /// <summary>
    /// County recertification roll: status and due of the record with the latest due date, record_count, and every records row so you can apply your own rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("milestone")]
    public object? Milestone { get; init; }

    /// <summary>
    /// count, delinquent, delinquent_count, earliest_expiry, max_landings, and the certificates array from the FL DBPR elevator safety roll.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("elevators")]
    public object? Elevators { get; init; }

    /// <summary>
    /// inspection_count, last_inspection_date, last_result, last_violations, and the inspections array from FL DOH.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pools")]
    public object? Pools { get; init; }

    /// <summary>
    /// max_stories, max_building_height_ft, earliest_year_built, three_plus_story_building (null when no characteristics row exists, not false), and the buildings array.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("structure")]
    public object? Structure { get; init; }

    /// <summary>
    /// project_count, status, status_date, expiration_date, approval_method, and the projects array.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fha")]
    public object? Fha { get; init; }

    /// <summary>
    /// Row count per layer: sirs, recertifications, elevators, pool_inspections, characteristics, fha_projects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("layer_counts")]
    public object? LayerCounts { get; init; }

    /// <summary>
    /// False when every layer is empty for this association.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has_data")]
    public bool? HasData { get; init; }

    /// <summary>
    /// The public-record sources behind this response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public string? Source { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
