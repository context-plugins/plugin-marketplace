using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

public record AmountRange
{
    /// <summary>
    /// Amount range start
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("from")]
    public double? From { get; init; }

    /// <summary>
    /// Amount range end
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("to")]
    public double? To { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
