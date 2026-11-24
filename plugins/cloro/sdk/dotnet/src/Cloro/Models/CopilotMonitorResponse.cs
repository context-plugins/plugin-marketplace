using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record CopilotMonitorResponse
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    /// <summary>
    /// Copilot response data
    /// </summary>
    [JsonPropertyName("result")]
    public required Result Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
