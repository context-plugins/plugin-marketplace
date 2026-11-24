using System;
using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record DataCommonelementsComBulkExportApi
{
    /// <summary>
    /// Stable id for this change event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// Date the change was observed in the source record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("observed_on")]
    public DateTimeOffset? ObservedOn { get; init; }

    /// <summary>
    /// The association the change was observed on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organization_id")]
    public Guid? OrganizationId { get; init; }

    /// <summary>
    /// The association the change was observed on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organization_name")]
    public Guid? OrganizationName { get; init; }

    /// <summary>
    /// Location and type of the association.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    /// <summary>
    /// Location and type of the association.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("county")]
    public string? County { get; init; }

    /// <summary>
    /// Location and type of the association.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subtype")]
    public string? Subtype { get; init; }

    /// <summary>
    /// One of the 13 change kinds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_type")]
    public string? EventType { get; init; }

    /// <summary>
    /// The part of the record that moved: board_roster, management_company, entity_status, entity_name, or license.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("field")]
    public string? Field { get; init; }

    /// <summary>
    /// Person-free before/after summaries: firm names for management changes, statuses for registration changes, seat counts and canonical titles for board changes. Never an individual's name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old_value")]
    public string? OldValue { get; init; }

    /// <summary>
    /// Person-free before/after summaries: firm names for management changes, statuses for registration changes, seat counts and canonical titles for board changes. Never an individual's name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_value")]
    public string? NewValue { get; init; }

    /// <summary>
    /// Relative size of the change, 0 to 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("magnitude")]
    public double? Magnitude { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
