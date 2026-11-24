using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record SubscriptionListResponse
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<SubscriptionWithoutSecret> Data { get; init; }

    [JsonPropertyName("pagination")]
    public required PaginationResponse Pagination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
