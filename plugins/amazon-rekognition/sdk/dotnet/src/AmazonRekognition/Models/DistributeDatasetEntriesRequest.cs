using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DistributeDatasetEntriesRequest
{
    /// <summary>
    /// The ARNS for the training dataset and test dataset that you want to use. The datasets must belong to the same project. The test dataset must be empty.
    /// </summary>
    [JsonPropertyName("Datasets")]
    public required IReadOnlyList<DistributeDataset> Datasets { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
