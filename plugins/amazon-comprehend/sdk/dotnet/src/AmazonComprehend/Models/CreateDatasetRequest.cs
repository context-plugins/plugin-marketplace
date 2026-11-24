using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record CreateDatasetRequest
{
    /// <summary>
    /// The Amazon Resource Number (ARN) of the flywheel of the flywheel to receive the data.
    /// </summary>
    [JsonPropertyName("FlywheelArn")]
    public required string FlywheelArn { get; init; }

    /// <summary>
    /// Name of the dataset.
    /// </summary>
    [JsonPropertyName("DatasetName")]
    public required string DatasetName { get; init; }

    /// <summary>
    /// The dataset type. You can specify that the data in a dataset is for training the model or for testing the model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetType")]
    public DatasetType? DatasetType { get; init; }

    /// <summary>
    /// Description of the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Description")]
    public string? Description { get; init; }

    [JsonPropertyName("InputDataConfig")]
    public required DatasetInputDataConfig InputDataConfig { get; init; }

    /// <summary>
    /// A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientRequestToken")]
    public string? ClientRequestToken { get; init; }

    /// <summary>
    /// Tags for the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
