using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Paginated list of monitor newsletters.
/// </summary>
public record MonitorNewsletterListResult
{
    /// <summary>
    /// Total number of matching newsletters across all pages.
    /// </summary>
    [JsonPropertyName("total")]
    public required long Total { get; init; }

    /// <summary>
    /// Newsletters returned for the requested page.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<SignalNewsletterDto> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
