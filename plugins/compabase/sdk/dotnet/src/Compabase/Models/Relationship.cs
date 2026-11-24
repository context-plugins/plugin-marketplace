using System.Text.Json.Serialization;
using Compabase.Core.Models;

namespace Compabase.Models;

public record Relationship
{
    /// <summary>
    /// Relationship type (e.g. <c>management</c>, <c>ownership</c>).
    /// </summary>
    [JsonPropertyName("kind")]
    public required string Kind { get; init; }

    /// <summary>
    /// Role label (e.g. <c>PREZES ZARZĄDU</c>), if available.
    /// </summary>
    [JsonPropertyName("role")]
    public required string? Role { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
