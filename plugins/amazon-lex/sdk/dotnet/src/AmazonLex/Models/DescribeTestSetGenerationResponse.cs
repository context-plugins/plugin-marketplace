using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record DescribeTestSetGenerationResponse
{
    /// <summary>
    /// The unique identifier of the test set generation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetGenerationId")]
    public string? TestSetGenerationId { get; init; }

    /// <summary>
    /// The status for the test set generation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetGenerationStatus")]
    public TestSetGenerationStatus? TestSetGenerationStatus { get; init; }

    /// <summary>
    /// The reasons the test set generation failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failureReasons")]
    public IReadOnlyList<string>? FailureReasons { get; init; }

    /// <summary>
    /// The unique identifier for the test set created for the generated test set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetId")]
    public string? TestSetId { get; init; }

    /// <summary>
    /// The test set name for the generated test set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetName")]
    public string? TestSetName { get; init; }

    /// <summary>
    /// The test set description for the test set generation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("storageLocation")]
    public TestSetStorageLocation? StorageLocation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generationDataSource")]
    public TestSetGenerationDataSource? GenerationDataSource { get; init; }

    /// <summary>
    /// The roleARN of the test set used for the test set generation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("roleArn")]
    public string? RoleArn { get; init; }

    /// <summary>
    /// The creation date and time for the test set generation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDateTime")]
    public DateTimeOffset? CreationDateTime { get; init; }

    /// <summary>
    /// The date and time of the last update for the test set generation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdatedDateTime")]
    public DateTimeOffset? LastUpdatedDateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
