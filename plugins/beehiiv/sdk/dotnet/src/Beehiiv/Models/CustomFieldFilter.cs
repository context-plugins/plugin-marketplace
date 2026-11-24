using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// A single custom field filter condition.
/// </summary>
public record CustomFieldFilter
{
    /// <summary>
    /// The display name of the custom field (case-insensitive match). Must be an existing custom field on the publication.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The comparison operator for the filter (e.g., <c>equal</c>, <c>not_equal</c>, <c>contains</c>, <c>exists</c>, <c>does_not_exist</c>). Available operators depend on the custom field's type.
    /// </summary>
    [JsonPropertyName("operator")]
    public required string Operator { get; init; }

    /// <summary>
    /// The value to compare against. Required for all operators except <c>exists</c> and <c>does_not_exist</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
