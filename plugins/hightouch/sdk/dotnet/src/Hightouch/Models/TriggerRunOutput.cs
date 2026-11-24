using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// The output of a trigger action to run syncs
/// </summary>
public record TriggerRunOutput
{
    /// <summary>
    /// The id of the triggered sync run. This can be passed to <c>/sync/runs</c> to
    /// get the run's status.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }
}
