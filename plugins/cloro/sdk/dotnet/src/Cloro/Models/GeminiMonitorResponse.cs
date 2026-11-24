using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record GeminiMonitorResponse
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    /// <summary>
    /// Gemini response data
    /// </summary>
    [JsonPropertyName("result")]
    public required Result1 Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
