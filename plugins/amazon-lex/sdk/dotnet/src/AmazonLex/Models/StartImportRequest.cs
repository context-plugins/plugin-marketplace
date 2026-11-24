using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record StartImportRequest
{
    /// <summary>
    /// The unique identifier for the import. It is included in the response from the CreateUploadUrl operation.
    /// </summary>
    [JsonPropertyName("importId")]
    public required string ImportId { get; init; }

    [JsonPropertyName("resourceSpecification")]
    public required ImportResourceSpecification ResourceSpecification { get; init; }

    /// <summary>
    /// The strategy to use when there is a name conflict between the imported resource and an existing resource. When the merge strategy is FailOnConflict existing resources are not overwritten and the import fails.
    /// </summary>
    [JsonPropertyName("mergeStrategy")]
    public required MergeStrategy2 MergeStrategy { get; init; }

    /// <summary>
    /// The password used to encrypt the zip archive that contains the resource definition. You should always encrypt the zip archive to protect it during transit between your site and Amazon Lex.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filePassword")]
    public string? FilePassword { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
