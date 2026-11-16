using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Validation.Attributes;

namespace FinixApiReference.Models;

/// <summary>
/// The control owner's date of birth.
/// </summary>
public record Dob
{
    /// <summary>
    /// Day of birth (between 1 and 31).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("day")]
    [Minimum(1)]
    public int? Day { get; init; }

    /// <summary>
    /// Month of birth (between 1 and 12).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("month")]
    [Minimum(1)]
    public int? Month { get; init; }

    /// <summary>
    /// Year of birth (4-digit). Year must be greater than 1900.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("year")]
    [Minimum(1900)]
    public int? Year { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
