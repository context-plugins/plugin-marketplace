using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1PostHistoryImportPostsResponse
{
    [JsonPropertyName("posts")]
    public required IReadOnlyList<PostBundleSocialPostImportApi> Posts { get; init; }

    [JsonPropertyName("total")]
    public required double Total { get; init; }

    [JsonPropertyName("limit")]
    public required double Limit { get; init; }

    [JsonPropertyName("remainingCapacity")]
    public required double RemainingCapacity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
