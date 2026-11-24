using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Balance criteria for filtering accounts. Only 'min' is required, 'max' is optional.
/// </summary>
public record Balance2
{
    /// <summary>
    /// Minimum balance threshold (as string)
    /// </summary>
    [JsonPropertyName("min")]
    public required string Min { get; init; }

    /// <summary>
    /// Maximum balance threshold (as string, optional)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max")]
    public string? Max { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
