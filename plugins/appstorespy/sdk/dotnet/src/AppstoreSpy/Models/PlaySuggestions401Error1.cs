using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Models;

public record PlaySuggestions401Error1
{
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonPropertyName("code")]
    public required int Code { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
