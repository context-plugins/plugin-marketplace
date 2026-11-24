using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record AiModeMonitorResponse2
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    /// <summary>
    /// AI Mode response data
    /// </summary>
    [JsonPropertyName("result")]
    public required Result10 Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
