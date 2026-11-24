using System.Text.Json.Serialization;
using Archbee.Core.Models;

namespace Archbee.Models;

/// <summary>
/// Array of individual rules that define the conditions
/// </summary>
public record Rules
{
    /// <summary>
    /// The field to evaluate the condition against
    /// </summary>
    [JsonPropertyName("field")]
    public required string Field { get; init; }

    /// <summary>
    /// The comparison operator
    /// </summary>
    [JsonPropertyName("operator")]
    public required string Operator { get; init; }

    /// <summary>
    /// The value to compare against
    /// </summary>
    [JsonPropertyName("value")]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
