using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;
using AmazonForecast.Models.Enums;

namespace AmazonForecast.Models;

public record DescribeDatasetGroupResponse
{
    /// <summary>
    /// The name of the dataset group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetGroupName")]
    public string? DatasetGroupName { get; init; }

    /// <summary>
    /// The ARN of the dataset group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetGroupArn")]
    public string? DatasetGroupArn { get; init; }

    /// <summary>
    /// An array of Amazon Resource Names (ARNs) of the datasets contained in the dataset group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetArns")]
    public IReadOnlyList<string>? DatasetArns { get; init; }

    /// <summary>
    /// The domain associated with the dataset group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Domain")]
    public Domain1? Domain { get; init; }

    /// <summary>
    /// The status of the dataset group. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED UPDATE_PENDING, UPDATE_IN_PROGRESS, UPDATE_FAILED The UPDATE states apply when you call the UpdateDatasetGroup operation. The Status of the dataset group must be ACTIVE before you can use the dataset group to create a predictor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public string? Status { get; init; }

    /// <summary>
    /// When the dataset group was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }

    /// <summary>
    /// When the dataset group was created or last updated from a call to the UpdateDatasetGroup operation. While the dataset group is being updated, LastModificationTime is the current time of the DescribeDatasetGroup call.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastModificationTime")]
    public DateTimeOffset? LastModificationTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
