using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record GoogleMonitorResponse2
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    /// <summary>
    /// Google search results data
    /// </summary>
    [JsonPropertyName("result")]
    public required Result9 Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
