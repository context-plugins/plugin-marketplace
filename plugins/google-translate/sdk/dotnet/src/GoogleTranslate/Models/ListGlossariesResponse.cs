using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Response message for ListGlossaries.
/// </summary>
public record ListGlossariesResponse
{
    /// <summary>
    /// A token to retrieve a page of results. Pass this value in the [ListGlossariesRequest.page_token] field in the subsequent call to <c>ListGlossaries</c> method to retrieve the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// The list of glossaries for a project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("glossaries")]
    public IReadOnlyList<Glossary>? Glossaries { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
