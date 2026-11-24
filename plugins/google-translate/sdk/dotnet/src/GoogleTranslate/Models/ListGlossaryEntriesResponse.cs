using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Response message for ListGlossaryEntries
/// </summary>
public record ListGlossaryEntriesResponse
{
    /// <summary>
    /// Optional. A token to retrieve a page of results. Pass this value in the [ListGLossaryEntriesRequest.page_token] field in the subsequent calls.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// Optional. The Glossary Entries
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("glossaryEntries")]
    public IReadOnlyList<GlossaryEntry>? GlossaryEntries { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
