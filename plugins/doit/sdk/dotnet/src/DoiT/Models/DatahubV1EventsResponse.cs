using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record DatahubV1EventsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
