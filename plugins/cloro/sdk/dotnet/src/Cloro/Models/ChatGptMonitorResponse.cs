using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record ChatGptMonitorResponse
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    /// <summary>
    /// ChatGPT's response data
    /// </summary>
    [JsonPropertyName("result")]
    public required Result6 Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
