using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record StartImportResponse
{
    /// <summary>
    /// A unique identifier for the import.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("importId")]
    public string? ImportId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceSpecification")]
    public ImportResourceSpecification? ResourceSpecification { get; init; }

    /// <summary>
    /// The strategy used when there was a name conflict between the imported resource and an existing resource. When the merge strategy is FailOnConflict existing resources are not overwritten and the import fails.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mergeStrategy")]
    public MergeStrategy? MergeStrategy { get; init; }

    /// <summary>
    /// The current status of the import. When the status is Complete the bot, bot alias, or custom vocabulary is ready to use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("importStatus")]
    public ImportStatus3? ImportStatus { get; init; }

    /// <summary>
    /// The date and time that the import request was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDateTime")]
    public DateTimeOffset? CreationDateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
