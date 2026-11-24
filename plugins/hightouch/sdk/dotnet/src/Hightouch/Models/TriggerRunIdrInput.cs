using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

/// <summary>
/// The input of a trigger action to run IDR.
/// </summary>
public record TriggerRunIdrInput
{
    /// <summary>
    /// Whether to resync the entire Identity Graph or process incrementally.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fullRerun")]
    public bool? FullRerun { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
