using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

public record Value
{
    /// <summary>
    /// Previous value
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous")]
    public string? Previous { get; init; }

    /// <summary>
    /// Current value
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current")]
    public string? Current { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
