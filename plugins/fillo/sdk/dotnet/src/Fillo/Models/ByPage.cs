using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ByPage
{
    [JsonPropertyName("page")]
    public required int Page { get; init; }

    [JsonPropertyName("count")]
    public required int Count { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
