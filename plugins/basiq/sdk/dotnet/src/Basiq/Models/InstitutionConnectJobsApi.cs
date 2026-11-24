using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Institution details.
/// </summary>
public record InstitutionConnectJobsApi
{
    /// <summary>
    /// A string that uniquely identifies institution.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Links to the resources.
    /// </summary>
    [JsonPropertyName("links")]
    public required JobsLinks Links { get; init; }

    /// <summary>
    /// Always "institution".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
