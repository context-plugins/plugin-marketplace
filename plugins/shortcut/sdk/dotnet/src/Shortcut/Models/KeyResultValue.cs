using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// The starting value of the Key Result.
/// </summary>
public record KeyResultValue
{
    /// <summary>
    /// The numeric value, as a decimal string. No more than two decimal places are allowed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("numeric_value")]
    public string? NumericValue { get; init; }

    /// <summary>
    /// The boolean value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("boolean_value")]
    public bool? BooleanValue { get; init; }
}
