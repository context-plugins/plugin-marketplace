using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record Include1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("departments")]
    public IReadOnlyList<string>? Departments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seniority")]
    public IReadOnlyList<int>? Seniority { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("existing_data_points")]
    public IReadOnlyList<string>? ExistingDataPoints { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locations")]
    public IReadOnlyList<LocationFilter>? Locations { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobTitles")]
    public IReadOnlyList<string>? JobTitles { get; init; }

    /// <summary>
    /// Filter contacts by LinkedIn profile URLs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedinUrls")]
    public IReadOnlyList<string>? LinkedinUrls { get; init; }

    /// <summary>
    /// Free-text search across contact fields
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("searchText")]
    public string? SearchText { get; init; }

    /// <summary>
    /// Filter contacts by signal types (premium filter - charges apply per signal type)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signal")]
    public Signal1LushaApiDocumentationProspectingSearchEnrichApi? Signal { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
