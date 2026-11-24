using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1LeetspeakRequest
{
    /// <summary>
    /// The text to encode or decode in Leet Speak
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    /// <summary>
    /// The mode to use
    /// </summary>
    [JsonPropertyName("mode")]
    public required string Mode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
