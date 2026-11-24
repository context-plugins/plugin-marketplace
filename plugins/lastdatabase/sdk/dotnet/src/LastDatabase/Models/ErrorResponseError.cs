using System.Text.Json.Serialization;
using LastDatabase.Core.Models;

namespace LastDatabase.Models;

public record ErrorResponseError
{
    [JsonPropertyName("status")]
    public string Status { get; } = "False";

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
