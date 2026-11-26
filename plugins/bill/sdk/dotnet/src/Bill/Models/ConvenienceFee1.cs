using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

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
