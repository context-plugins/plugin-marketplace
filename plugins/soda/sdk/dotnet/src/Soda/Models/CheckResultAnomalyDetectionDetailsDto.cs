using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record CheckResultAnomalyDetectionDetailsDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("predictedValue")]
    public double? PredictedValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
