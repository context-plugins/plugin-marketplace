using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record PaginationModel
{
    [JsonPropertyName("page")]
    public required double Page { get; init; }

    [JsonPropertyName("limit")]
    public required double Limit { get; init; }

    [JsonPropertyName("total")]
    public required double Total { get; init; }

    [JsonPropertyName("totalPages")]
    public required double TotalPages { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
