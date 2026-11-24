using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// Event indicating an error.
/// </summary>
public record ErrorEvent
{
    /// <summary>
    /// Event type; always 'error'.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "error";

    /// <summary>
    /// Error.
    /// </summary>
    [JsonPropertyName("error")]
    public required Error2 Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
