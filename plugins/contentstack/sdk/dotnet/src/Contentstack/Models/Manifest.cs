using System.Collections.Generic;
using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// The personalization manifest containing active experiences and their variant assignments for the current user.
/// </summary>
public record Manifest
{
    /// <summary>
    /// List of active experience objects with assigned variants.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("experiences")]
    public IReadOnlyList<ManifestExperience>? Experiences { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
