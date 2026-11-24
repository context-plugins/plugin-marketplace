using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Institution details.
/// </summary>
public record ConnectionInstitution
{
    /// <summary>
    /// Institution id
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Link object containing a link to the resource, self reference.
    /// </summary>
    [JsonPropertyName("links")]
    public required ResourceLink Links { get; init; }

    /// <summary>
    /// Always "institution".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
