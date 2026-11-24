using System.Collections.Generic;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;
using Givebutter.Core.Validation.Attributes;

namespace Givebutter.Models;

public record MetaGivebutterApiDocumentationCampaignsApi
{
    [JsonPropertyName("current_page")]
    [Minimum(1)]
    public required int CurrentPage { get; init; }

    [JsonPropertyName("from")]
    [Minimum(1)]
    public required int? From { get; init; }

    [JsonPropertyName("last_page")]
    [Minimum(1)]
    public required int LastPage { get; init; }

    /// <summary>
    /// Generated paginator links.
    /// </summary>
    [JsonPropertyName("links")]
    public required IReadOnlyList<Links1> Links { get; init; }

    /// <summary>
    /// Base path for paginator generated URLs.
    /// </summary>
    [JsonPropertyName("path")]
    public required string? Path { get; init; }

    /// <summary>
    /// Number of items shown per page.
    /// </summary>
    [JsonPropertyName("per_page")]
    [Minimum(0)]
    public required int PerPage { get; init; }

    /// <summary>
    /// Number of the last item in the slice.
    /// </summary>
    [JsonPropertyName("to")]
    [Minimum(1)]
    public required int? To { get; init; }

    /// <summary>
    /// Total number of items being paginated.
    /// </summary>
    [JsonPropertyName("total")]
    [Minimum(0)]
    public required int Total { get; init; }

    [JsonPropertyName("unfiltered_total")]
    public required string UnfilteredTotal { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
