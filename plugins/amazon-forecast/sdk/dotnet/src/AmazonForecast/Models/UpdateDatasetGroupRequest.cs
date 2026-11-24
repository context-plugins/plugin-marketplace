using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record UpdateDatasetGroupRequest
{
    /// <summary>
    /// The ARN of the dataset group.
    /// </summary>
    [JsonPropertyName("DatasetGroupArn")]
    public required string DatasetGroupArn { get; init; }

    /// <summary>
    /// An array of the Amazon Resource Names (ARNs) of the datasets to add to the dataset group.
    /// </summary>
    [JsonPropertyName("DatasetArns")]
    public required IReadOnlyList<string> DatasetArns { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
