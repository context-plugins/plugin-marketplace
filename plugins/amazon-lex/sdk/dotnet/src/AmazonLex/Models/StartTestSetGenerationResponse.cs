using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record StartTestSetGenerationResponse
{
    /// <summary>
    /// The unique identifier of the test set generation to describe.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetGenerationId")]
    public string? TestSetGenerationId { get; init; }

    /// <summary>
    /// The creation date and time for the test set generation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDateTime")]
    public DateTimeOffset? CreationDateTime { get; init; }

    /// <summary>
    /// The status for the test set generation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetGenerationStatus")]
    public TestSetGenerationStatus? TestSetGenerationStatus { get; init; }

    /// <summary>
    /// The test set name used for the test set generation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetName")]
    public string? TestSetName { get; init; }

    /// <summary>
    /// The description used for the test set generation.
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
    /// The roleARN used for any operation in the test set to access resources in the Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("roleArn")]
    public string? RoleArn { get; init; }

    /// <summary>
    /// A list of tags that was used for the test set that is being generated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetTags")]
    public IReadOnlyDictionary<string, string>? TestSetTags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
