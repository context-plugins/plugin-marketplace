using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record GoogleMonitorResponse
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    /// <summary>
    /// Google search results data
    /// </summary>
    [JsonPropertyName("result")]
    public required Result3 Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
