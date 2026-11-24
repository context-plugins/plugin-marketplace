using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// The input for updating a Destination
/// </summary>
public record DestinationUpdate
{
    /// <summary>
    /// The destination's name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The destination's configuration. This specifies general metadata about destination, like hostname and username.
    /// Hightouch will be using this configuration to connect to destination.
    /// <para>
    /// The schema depends on the destination type.
    /// </para>
    /// <para>
    /// Consumers should NOT make assumptions on the contents of the
    /// configuration. It may change as Hightouch updates its internal code.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("configuration")]
    public IReadOnlyDictionary<string, object>? Configuration { get; init; }
}
