using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apibara.Core.Models;

namespace Apibara.Models;

public record LocationsResponse
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<AuctionLocation> Data { get; init; }

    /// <summary>
    /// Cursor pagination metadata.
    /// </summary>
    [JsonPropertyName("meta")]
    public required CursorMeta Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
