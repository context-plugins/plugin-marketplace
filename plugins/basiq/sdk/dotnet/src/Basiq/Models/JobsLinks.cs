using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Links to the resources.
/// </summary>
public record JobsLinks
{
    /// <summary>
    /// URL of the resource
    /// </summary>
    [JsonPropertyName("self")]
    public required string Self { get; init; }

    /// <summary>
    /// Resource that initiated creation of this Job. For example, for operations on Connection, this is a Connection URL. This is only returned for Connection jobs and not for Statement jobs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public string? Source { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
