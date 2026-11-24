using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record InputDataConfig
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the dataset group.
    /// </summary>
    [JsonPropertyName("DatasetGroupArn")]
    public required string DatasetGroupArn { get; init; }

    /// <summary>
    /// An array of supplementary features. The only supported feature is a holiday calendar.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SupplementaryFeatures")]
    public IReadOnlyList<SupplementaryFeature>? SupplementaryFeatures { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
