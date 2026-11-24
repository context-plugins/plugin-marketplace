using System.Text.Json.Serialization;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

/// <summary>
/// An event, associated with a resource or subject type.
/// </summary>
public record HookEvent
{
    /// <summary>
    /// The event identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event")]
    public Event1? Event { get; init; }

    /// <summary>
    /// The category this event belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public string? Category { get; init; }

    /// <summary>
    /// Summary of the webhook event type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    public string? Label { get; init; }

    /// <summary>
    /// More detailed description of the webhook event type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }
}
