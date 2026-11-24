using System.Collections.Generic;
using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// Priority ordering of experiences for conflict resolution.
/// </summary>
public record ExperiencePriority
{
    /// <summary>
    /// Ordered list of experience UIDs from highest to lowest priority.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("priority")]
    public IReadOnlyList<string>? Priority { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
