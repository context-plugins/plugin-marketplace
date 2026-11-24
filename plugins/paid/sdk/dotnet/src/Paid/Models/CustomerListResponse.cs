using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CustomerListResponse
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<Customer1> Data { get; init; }

    [JsonPropertyName("pagination")]
    public required PaginationModel Pagination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
