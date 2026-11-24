using System;
using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record Datum1
{
    /// <summary>
    /// Common Elements id for the matched association.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organization_id")]
    public Guid? OrganizationId { get; init; }

    /// <summary>
    /// Name of the matched association.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("association_name")]
    public string? AssociationName { get; init; }

    /// <summary>
    /// The indexed parcel address this query matched, for your own audit trail.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("matched_address")]
    public string? MatchedAddress { get; init; }

    /// <summary>
    /// Location on the matched record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("zip5")]
    public string? Zip5 { get; init; }

    /// <summary>
    /// Location on the matched record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    /// <summary>
    /// Which parcel source produced the link (internal provenance, not stable API surface).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source_table")]
    public string? SourceTable { get; init; }

    /// <summary>
    /// "exact" is a normalized address match. "building" means your address included a unit and the indexed parcel is the building it sits in — the common shape for a condo, where our source data is building-level.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("match_confidence")]
    public object? MatchConfidence { get; init; }

    /// <summary>
    /// Units in the association, where known and above our confidence floor. Null does not mean zero — it means we do not have a trustworthy count for this one yet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unit_count")]
    public double? UnitCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
