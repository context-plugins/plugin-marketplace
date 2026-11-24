using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// Parameters for creating an event.
/// </summary>
public record CreateEventRequest
{
    /// <summary>
    /// Display name for the event.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Machine-readable key for SDK tracking calls.
    /// </summary>
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
