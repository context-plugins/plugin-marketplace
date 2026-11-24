using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse
{
    /// <summary>
    /// The Google Business location the keywords belong to, as <c>locations/{locationId}</c>.
    /// </summary>
    [JsonPropertyName("location")]
    public required string Location { get; init; }

    [JsonPropertyName("range")]
    public required RangeModel Range { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("searchKeywords")]
    public IReadOnlyList<SearchKeyword>? SearchKeywords { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
