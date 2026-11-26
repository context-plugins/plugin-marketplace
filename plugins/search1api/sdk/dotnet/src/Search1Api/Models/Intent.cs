using System.Collections.Generic;
using System.Text.Json.Serialization;
using Search1Api.Core.Models;
using Search1Api.Models.Enums;

namespace Search1Api.Models;

/// <summary>
/// How the request was interpreted and searched.
/// </summary>
public record Intent
{
    /// <summary>
    /// Keywords sent to the engines, with platform and time phrases removed.
    /// </summary>
    [JsonPropertyName("search_query")]
    public required string SearchQuery { get; init; }

    /// <summary>
    /// Engines searched.
    /// </summary>
    [JsonPropertyName("sources")]
    public required IReadOnlyList<string> Sources { get; init; }

    /// <summary>
    /// Publication window applied, or null for none.
    /// </summary>
    [JsonPropertyName("time_range")]
    public required TimeRange1? TimeRange { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
