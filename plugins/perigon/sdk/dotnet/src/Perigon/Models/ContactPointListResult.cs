using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Paginated list of contact points.
/// </summary>
public record ContactPointListResult
{
    /// <summary>
    /// Total number of matching contact points across all pages.
    /// </summary>
    [JsonPropertyName("total")]
    public required long Total { get; init; }

    /// <summary>
    /// Contact points returned for the requested page.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<ContactPointApiDto> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
