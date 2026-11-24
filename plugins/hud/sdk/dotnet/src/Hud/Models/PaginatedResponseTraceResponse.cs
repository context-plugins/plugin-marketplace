using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record PaginatedResponseTraceResponse
{
    [JsonPropertyName("items")]
    public required IReadOnlyList<TraceResponse> Items { get; init; }

    [JsonPropertyName("total")]
    public required int Total { get; init; }

    [JsonPropertyName("limit")]
    public required int Limit { get; init; }

    [JsonPropertyName("offset")]
    public required int Offset { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
