using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record CreateDatasetRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetSource")]
    public DatasetSource? DatasetSource { get; init; }

    /// <summary>
    /// The type of the dataset. Specify TRAIN to create a training dataset. Specify TEST to create a test dataset.
    /// </summary>
    [JsonPropertyName("DatasetType")]
    public required DatasetType DatasetType { get; init; }

    /// <summary>
    /// The ARN of the Amazon Rekognition Custom Labels project to which you want to asssign the dataset.
    /// </summary>
    [JsonPropertyName("ProjectArn")]
    public required string ProjectArn { get; init; }

    /// <summary>
    /// A set of tags (key-value pairs) that you want to attach to the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyDictionary<string, string>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
