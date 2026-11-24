using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// The input for creating a Destination
/// </summary>
public record DestinationCreate
{
    /// <summary>
    /// The destination's name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The destination's slug
    /// </summary>
    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// The destination's type (e.g. salesforce or hubspot).
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

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
    [JsonPropertyName("configuration")]
    public required IReadOnlyDictionary<string, object> Configuration { get; init; }
}
