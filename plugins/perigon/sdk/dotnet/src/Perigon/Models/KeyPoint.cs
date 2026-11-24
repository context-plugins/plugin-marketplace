using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Key facts and developments identified in the story.
/// </summary>
public record KeyPoint
{
    /// <summary>
    /// A key fact or development identified in the content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("point")]
    public string? Point { get; init; }

    /// <summary>
    /// Article IDs supporting the key point.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("references")]
    public IReadOnlyList<string>? References { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
