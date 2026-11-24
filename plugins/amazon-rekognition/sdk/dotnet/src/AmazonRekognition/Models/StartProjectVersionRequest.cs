using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record StartProjectVersionRequest
{
    /// <summary>
    /// The Amazon Resource Name(ARN) of the model version that you want to start.
    /// </summary>
    [JsonPropertyName("ProjectVersionArn")]
    public required string ProjectVersionArn { get; init; }

    /// <summary>
    /// The minimum number of inference units to use. A single inference unit represents 1 hour of processing. Use a higher number to increase the TPS throughput of your model. You are charged for the number of inference units that you use.
    /// </summary>
    [JsonPropertyName("MinInferenceUnits")]
    public required int MinInferenceUnits { get; init; }

    /// <summary>
    /// The maximum number of inference units to use for auto-scaling the model. If you don't specify a value, Amazon Rekognition Custom Labels doesn't auto-scale the model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxInferenceUnits")]
    public int? MaxInferenceUnits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
