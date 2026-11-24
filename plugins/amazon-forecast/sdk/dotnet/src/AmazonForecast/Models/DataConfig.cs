using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DataConfig
{
    /// <summary>
    /// The ARN of the dataset group used to train the predictor.
    /// </summary>
    [JsonPropertyName("DatasetGroupArn")]
    public required string DatasetGroupArn { get; init; }

    /// <summary>
    /// Aggregation and filling options for attributes in your dataset group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AttributeConfigs")]
    public IReadOnlyList<AttributeConfig>? AttributeConfigs { get; init; }

    /// <summary>
    /// Additional built-in datasets like Holidays and the Weather Index.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AdditionalDatasets")]
    public IReadOnlyList<AdditionalDataset>? AdditionalDatasets { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
