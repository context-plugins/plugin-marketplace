using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models.AnyOf;

namespace AppstoreSpy.Models;

public record DetailedError
{
    [JsonPropertyName("location")]
    public required string Location { get; init; }

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public Value? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
