using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record PaginationBundleSocialOrganizationApi
{
    [JsonPropertyName("page")]
    public required double Page { get; init; }

    [JsonPropertyName("pageSize")]
    public required double PageSize { get; init; }

    [JsonPropertyName("total")]
    public required double Total { get; init; }

    [JsonPropertyName("totalPages")]
    public required double TotalPages { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
