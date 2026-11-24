using System;
using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record DatumCommonelementsComAssociationsApi
{
    /// <summary>
    /// Common Elements id for the matched record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// Normalized association name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("canonical_name")]
    public string? CanonicalName { get; init; }

    /// <summary>
    /// Trigram similarity against your query, 0 to 1. Rows come back ranked. Parcel hits use 1 (exact) or 0.99 (building) so a client that thresholds on sim still keeps a real address match.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sim")]
    public double? Sim { get; init; }

    /// <summary>
    /// How this request was resolved. Address-shaped q never falls through to name matching.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolved_via")]
    public object? ResolvedVia { get; init; }

    /// <summary>
    /// Present when resolved_via is address: the indexed parcel and exact or building.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("matched_address")]
    public string? MatchedAddress { get; init; }

    /// <summary>
    /// Present when resolved_via is address: the indexed parcel and exact or building.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("match_confidence")]
    public string? MatchConfidence { get; init; }

    /// <summary>
    /// Present when resolved_via is address. Units in the association, where known and above our confidence floor; null does not mean zero.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unit_count")]
    public double? UnitCount { get; init; }

    /// <summary>
    /// Location on the matched record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("county")]
    public string? County { get; init; }

    /// <summary>
    /// Location on the matched record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    /// <summary>
    /// State corporate registry id, where known.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sunbiz_corp_id")]
    public string? SunbizCorpId { get; init; }

    /// <summary>
    /// Registry status on the record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registration_status")]
    public string? RegistrationStatus { get; init; }

    /// <summary>
    /// Registry formation and most recent filing timestamps.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registered_at")]
    public DateTimeOffset? RegisteredAt { get; init; }

    /// <summary>
    /// Registry formation and most recent filing timestamps.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_filing_at")]
    public DateTimeOffset? LastFilingAt { get; init; }

    /// <summary>
    /// Management firm of record, where known.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cam_firm_name")]
    public string? CamFirmName { get; init; }

    /// <summary>
    /// License of the management firm of record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cam_license_number")]
    public string? CamLicenseNumber { get; init; }

    /// <summary>
    /// License of the management firm of record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cam_license_status")]
    public string? CamLicenseStatus { get; init; }

    /// <summary>
    /// Association type on the record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("association_type")]
    public string? AssociationType { get; init; }

    /// <summary>
    /// Whether Florida SB 4-D structural requirements are recorded as applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sb_4d_applicable")]
    public bool? Sb4DApplicable { get; init; }

    /// <summary>
    /// Recorded SB 4-D inspection state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sb_4d_inspection_status")]
    public string? Sb4DInspectionStatus { get; init; }

    /// <summary>
    /// Recorded SB 4-D inspection state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sb_4d_last_inspection_at")]
    public string? Sb4DLastInspectionAt { get; init; }

    /// <summary>
    /// Per-field source attribution for the record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data_provenance")]
    public object? DataProvenance { get; init; }

    /// <summary>
    /// When the record was last refreshed from source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_refreshed_at")]
    public DateTimeOffset? LastRefreshedAt { get; init; }

    /// <summary>
    /// Generated plain-language summary, where one exists.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ai_summary")]
    public string? AiSummary { get; init; }

    /// <summary>
    /// Generated plain-language summary, where one exists.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ai_summary_generated_at")]
    public string? AiSummaryGeneratedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
