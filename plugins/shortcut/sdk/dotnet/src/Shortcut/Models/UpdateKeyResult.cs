using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record UpdateKeyResult
{
    /// <summary>
    /// The name of the Key Result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MaxLength(1024)]
    public string? Name { get; init; }

    /// <summary>
    /// The starting value of the Key Result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("initial_observed_value")]
    public KeyResultValue? InitialObservedValue { get; init; }

    /// <summary>
    /// The starting value of the Key Result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("observed_value")]
    public KeyResultValue? ObservedValue { get; init; }

    /// <summary>
    /// The starting value of the Key Result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("target_value")]
    public KeyResultValue? TargetValue { get; init; }
}
