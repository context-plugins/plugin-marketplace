using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record GrokMonitorResponse
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    /// <summary>
    /// Grok response data
    /// </summary>
    [JsonPropertyName("result")]
    public required Result4 Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
