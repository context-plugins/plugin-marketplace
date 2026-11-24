using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CustomViewListResponse
{
    [JsonPropertyName("views")]
    public required IReadOnlyList<CustomViewSummary> Views { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
