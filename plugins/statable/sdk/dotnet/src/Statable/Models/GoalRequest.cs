using System.Text.Json.Serialization;
using Statable.Core.Models;
using Statable.Models.Enums;

namespace Statable.Models;

public record GoalRequest
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// URL path to match.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public string? Path { get; init; }

    /// <summary>
    /// e = equals, b = begins with, c = contains.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operator")]
    public Operator? Operator { get; init; } = Operator.E;

    /// <summary>
    /// Match a custom event instead of a path.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_name")]
    public string? EventName { get; init; }

    /// <summary>
    /// Percent scrolled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scroll_depth")]
    public int? ScrollDepth { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
