using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record TestSetImportResourceSpecification
{
    /// <summary>
    /// The name of the test set.
    /// </summary>
    [JsonPropertyName("testSetName")]
    public required string TestSetName { get; init; }

    /// <summary>
    /// The description of the test set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of an IAM role that has permission to access the test set.
    /// </summary>
    [JsonPropertyName("roleArn")]
    public required string RoleArn { get; init; }

    [JsonPropertyName("storageLocation")]
    public required TestSetStorageLocation StorageLocation { get; init; }

    [JsonPropertyName("importInputLocation")]
    public required TestSetImportInputLocation ImportInputLocation { get; init; }

    /// <summary>
    /// Specifies whether the test-set being imported contains written or spoken data.
    /// </summary>
    [JsonPropertyName("modality")]
    public required Modality Modality { get; init; }

    /// <summary>
    /// A list of tags to add to the test set. You can only add tags when you import/generate a new test set. You can't use the UpdateTestSet operation to update tags. To update tags, use the TagResource operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetTags")]
    public IReadOnlyDictionary<string, string>? TestSetTags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
