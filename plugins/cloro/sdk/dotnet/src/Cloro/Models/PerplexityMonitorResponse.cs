using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record PerplexityMonitorResponse
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    /// <summary>
    /// Perplexity response data
    /// </summary>
    [JsonPropertyName("result")]
    public required Result2 Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
