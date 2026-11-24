using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record Include
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("names")]
    public IReadOnlyList<string>? Names { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domains")]
    public IReadOnlyList<string>? Domains { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locations")]
    public IReadOnlyList<LocationLushaApiDocumentationProspectingSearchEnrichApi>? Locations { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("technologies")]
    public IReadOnlyList<CompanyTechnology>? Technologies { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentTopics")]
    public IReadOnlyList<string>? IntentTopics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sizes")]
    public IReadOnlyList<CompanySizeRange>? Sizes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revenues")]
    public IReadOnlyList<RevenueRange>? Revenues { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sicCodes")]
    public IReadOnlyList<string>? SicCodes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("naicsCodes")]
    public IReadOnlyList<string>? NaicsCodes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mainIndustriesIds")]
    public IReadOnlyList<double>? MainIndustriesIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subIndustriesIds")]
    public IReadOnlyList<double>? SubIndustriesIds { get; init; }

    /// <summary>
    /// Free-text search across company fields
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("searchText")]
    public string? SearchText { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludePartialCompanies")]
    public bool? ExcludePartialCompanies { get; init; }

    /// <summary>
    /// Filter by company site-level office locations as reported by LinkedIn.
    /// This includes all physical office locations where the company has a presence.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyLocations")]
    public IReadOnlyList<CompanyLocationFilter2>? CompanyLocations { get; init; }

    /// <summary>
    /// Filter companies by LinkedIn-reported employee count.
    /// Both <c>min</c> and <c>max</c> are optional — provide either or both.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("employeesInLinkedIn")]
    public EmployeesInLinkedInFilter? EmployeesInLinkedIn { get; init; }

    /// <summary>
    /// Filter companies by signal types (premium filter - charges apply per signal type).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signal")]
    public SignalLushaApiDocumentationProspectingSearchEnrichApi? Signal { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
