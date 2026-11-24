using System.Text.Json.Serialization;
using Surfe.Core.Models;

namespace Surfe.Models;

public record PhoneRecord
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mobilePhone")]
    public string? MobilePhone { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("confidenceScore")]
    public double? ConfidenceScore { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
