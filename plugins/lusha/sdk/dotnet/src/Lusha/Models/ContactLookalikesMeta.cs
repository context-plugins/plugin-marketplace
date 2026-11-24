using System.Text.Json.Serialization;

namespace Lusha.Models;

public record ContactLookalikesMeta
{
    [JsonPropertyName("returned")]
    public required int Returned { get; init; }

    [JsonPropertyName("hasMore")]
    public required bool HasMore { get; init; }
}
