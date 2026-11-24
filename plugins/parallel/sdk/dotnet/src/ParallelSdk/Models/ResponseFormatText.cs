using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// Default response format. Used to generate text responses.
/// </summary>
public record ResponseFormatText
{
    [JsonPropertyName("type")]
    public string Type { get; } = "text";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
