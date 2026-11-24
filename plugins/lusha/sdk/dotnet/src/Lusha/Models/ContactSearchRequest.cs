using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record ContactSearchRequest
{
    /// <summary>
    /// When set to true, includes contacts with partial information in the search results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includePartialContact")]
    public bool? IncludePartialContact { get; init; } = true;

    /// <summary>
    /// When <c>true</c>, excludes contacts whose phones are all marked Do Not Call (DNC).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeDnc")]
    public bool? ExcludeDnc { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pages")]
    public PaginationParams? Pages { get; init; }

    [JsonPropertyName("filters")]
    public required FiltersLushaApiDocumentationProspectingSearchEnrichApi Filters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
