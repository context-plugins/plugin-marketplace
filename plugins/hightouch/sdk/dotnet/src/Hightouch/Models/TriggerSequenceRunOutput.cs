using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// The output of a trigger action to run sync sequences
/// </summary>
public record TriggerSequenceRunOutput
{
    /// <summary>
    /// The id of the triggered sync sequence run.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }
}
