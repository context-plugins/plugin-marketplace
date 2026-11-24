using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record TestingData
{
    /// <summary>
    /// The assets used for testing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Assets")]
    public IReadOnlyList<Asset>? Assets { get; init; }

    /// <summary>
    /// If specified, Rekognition splits training dataset to create a test dataset for the training job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AutoCreate")]
    public bool? AutoCreate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
