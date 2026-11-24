using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record GoogleNewsMonitorResponse
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    /// <summary>
    /// Google News results data
    /// </summary>
    [JsonPropertyName("result")]
    public required Result7 Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
