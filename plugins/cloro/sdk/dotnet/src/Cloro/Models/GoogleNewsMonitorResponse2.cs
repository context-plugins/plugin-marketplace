using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record GoogleNewsMonitorResponse2
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    /// <summary>
    /// Google News results data
    /// </summary>
    [JsonPropertyName("result")]
    public required Result11 Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
