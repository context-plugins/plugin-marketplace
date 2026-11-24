using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// The input for updating a Source
/// </summary>
public record SourceUpdate
{
    /// <summary>
    /// The source's name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The source's configuration. This specifies general metadata about sources, like connection details
    /// Hightouch will use this configuration to connect to underlying source.
    /// <para>
    /// The schema depends on the source type.
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
