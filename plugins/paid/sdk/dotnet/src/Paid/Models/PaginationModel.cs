using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record PaginationModel
{
    [JsonPropertyName("limit")]
    public required int Limit { get; init; }

    [JsonPropertyName("offset")]
    public required int Offset { get; init; }

    [JsonPropertyName("total")]
    public required int Total { get; init; }

    [JsonPropertyName("hasMore")]
    public required bool HasMore { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
