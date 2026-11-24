using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

public record ConvenienceFee1
{
    /// <summary>
    /// Convenience fee percentage
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("percentage")]
    public double? Percentage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
