using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record StartTestSetGenerationRequest
{
    /// <summary>
    /// The test set name for the test set generation request.
    /// </summary>
    [JsonPropertyName("testSetName")]
    public required string TestSetName { get; init; }

    /// <summary>
    /// The test set description for the test set generation request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonPropertyName("storageLocation")]
    public required TestSetStorageLocation StorageLocation { get; init; }

    [JsonPropertyName("generationDataSource")]
    public required TestSetGenerationDataSource GenerationDataSource { get; init; }

    /// <summary>
    /// The roleARN used for any operation in the test set to access resources in the Amazon Web Services account.
    /// </summary>
    [JsonPropertyName("roleArn")]
    public required string RoleArn { get; init; }

    /// <summary>
    /// A list of tags to add to the test set. You can only add tags when you import/generate a new test set. You can't use the UpdateTestSet operation to update tags. To update tags, use the TagResource operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetTags")]
    public IReadOnlyDictionary<string, string>? TestSetTags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
