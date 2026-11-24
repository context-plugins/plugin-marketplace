using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record DatumCommonelementsComDatasetCatalogApi
{
    /// <summary>
    /// Stable key. The <c>source</c> and path segment both derive from it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource_key")]
    public string? ResourceKey { get; init; }

    /// <summary>
    /// Resource name, for display.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("display_name")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// What this resource gives you, in one sentence.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buyer_summary")]
    public string? BuyerSummary { get; init; }

    /// <summary>
    /// Where the underlying records come from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provenance_label")]
    public string? ProvenanceLabel { get; init; }

    /// <summary>
    /// Plan required to read rows from this resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("min_tier")]
    public string? MinTier { get; init; }

    /// <summary>
    /// Whether the key on this request can read its rows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has_access")]
    public bool? HasAccess { get; init; }

    /// <summary>
    /// What kind of coverage number this resource may be described with.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("coverage_basis")]
    public string? CoverageBasis { get; init; }

    /// <summary>
    /// The caveat that says whether a zero means 'nothing happened' or 'not matched yet'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("coverage_note")]
    public string? CoverageNote { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
