using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record WebsiteVisitsPagination
{
    [JsonPropertyName("size")]
    public required int Size { get; init; }

    [JsonPropertyName("page")]
    public required int Page { get; init; }

    /// <summary>
    /// Total results across all pages.
    /// </summary>
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
