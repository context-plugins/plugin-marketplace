using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record BingAiModeMonitorResponse
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    /// <summary>
    /// Bing AI Mode response data
    /// </summary>
    [JsonPropertyName("result")]
    public required Result14 Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
