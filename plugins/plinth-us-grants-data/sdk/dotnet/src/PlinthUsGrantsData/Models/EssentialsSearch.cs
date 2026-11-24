using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

/// <summary>
/// Candid Essentials v4 speaks POST-with-a-body, and that is the shape a migrating client
/// already builds. <c>search_terms</c>, <c>from</c>, <c>size</c>, <c>filters</c> and <c>sort</c> therefore keep their Candid
/// names and meanings; the FILTER VOCABULARY inside <c>filters</c> is ours, because Candid's is built on
/// PCS and on profile data we do not hold (see config/candid-compat.json → essentialsFilters).
/// <para>
/// <c>filters</c> is a free-form object rather than a nested model on purpose: an unknown filter key is
/// REPORTED in x_plinth.warnings, and a strict schema would instead 422 the whole request and tell
/// the caller nothing about which of their filters we understood.
/// </para>
/// </summary>
public record EssentialsSearch
{
    /// <summary>
    /// Organization name or keyword.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("search_terms")]
    public SearchTerms? SearchTerms { get; init; }

    /// <summary>
    /// 0-based offset, as Candid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("from")]
    public From? From { get; init; }

    /// <summary>
    /// Page size. Default 25, capped at 1000 (Candid's ceiling is 25).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    public Size? Size { get; init; }

    /// <summary>
    /// text (default) | semantic. <c>semantic</c> matches on mission meaning rather than name, where the embedding store is staged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public Mode1? Mode { get; init; }

    /// <summary>
    /// See the Essentials filter matrix. Unknown keys are reported, not ignored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public Filters? Filters { get; init; }

    /// <summary>
    /// {"field": "total_revenue", "order": "desc"} — or the field name alone. Sortable: total_revenue, total_expenses, net_assets, grants_paid, name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sort")]
    public Sort? Sort { get; init; }

    /// <summary>
    /// Reject the request if any filter could not be honored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("strict")]
    public StrictPlinthUsGrantsDataOrganizationsApi? Strict { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
