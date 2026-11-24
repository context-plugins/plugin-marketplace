using System.Text.Json.Serialization;

namespace Hightouch.Models;

public record TriggerRunIdrOutput
{
    /// <summary>
    /// The id of the triggered run.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }
}
