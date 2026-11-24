using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record PaginationResponse2
{
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    [JsonPropertyName("limit")]
    public required int Limit { get; init; }

    [JsonPropertyName("offset")]
    public required int Offset { get; init; }

    [JsonPropertyName("hasMore")]
    public required bool HasMore { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
