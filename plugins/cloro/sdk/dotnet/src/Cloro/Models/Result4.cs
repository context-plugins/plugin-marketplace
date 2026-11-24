using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Core.Validation;
using Cloro.Core.Validation.Attributes;

namespace Cloro.Models;

/// <summary>
/// Grok response data
/// </summary>
public record Result4
{
    /// <summary>
    /// Grok's response text
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    /// <summary>
    /// A URL to the full HTML of the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html")]
    [Format(FormatKind.Uri)]
    public string? Html { get; init; }

    /// <summary>
    /// Array of sources referenced in the response with enhanced metadata
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sources")]
    public IReadOnlyList<Source6>? Sources { get; init; }

    /// <summary>
    /// Array of search queries Grok used to gather information for the response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("searchQueries")]
    public IReadOnlyList<string>? SearchQueries { get; init; }

    /// <summary>
    /// The model identifier used to generate the response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public string? Model { get; init; }

    /// <summary>
    /// Grok's response formatted in Markdown (included when include.markdown is true)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markdown")]
    public string? Markdown { get; init; }

    /// <summary>
    /// Raw upstream provider stream captured during the request. Each item is one chunk from the provider's wire protocol (SSE event, batchexecute frame, etc.). Format is provider-specific, undocumented, and may change without notice — use it for debugging or to access data not yet surfaced in the structured fields above.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rawResponse")]
    public IReadOnlyList<object>? RawResponse { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
