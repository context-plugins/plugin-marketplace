using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Link object containing a link to the resource, self reference.
/// </summary>
public record ResourceLink
{
    /// <summary>
    /// URL of the resource.
    /// </summary>
    [JsonPropertyName("self")]
    public required string Self { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
