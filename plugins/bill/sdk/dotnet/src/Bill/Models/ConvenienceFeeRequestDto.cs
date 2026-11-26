using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Core.Validation.Attributes;

namespace Bill.Models;

/// <summary>
/// DTO for convenience fee in invoice requests.
/// </summary>
public record ConvenienceFeeRequestDto
{
    /// <summary>
    /// Convenience fee percentage
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("percentage")]
    [Minimum(0.0)]
    [Maximum(3.0)]
    public double? Percentage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
