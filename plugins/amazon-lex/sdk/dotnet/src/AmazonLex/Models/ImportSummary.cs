using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record ImportSummary
{
    /// <summary>
    /// The unique identifier that Amazon Lex assigned to the import.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("importId")]
    public string? ImportId { get; init; }

    /// <summary>
    /// The unique identifier that Amazon Lex assigned to the imported resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("importedResourceId")]
    public string? ImportedResourceId { get; init; }

    /// <summary>
    /// The name that you gave the imported resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("importedResourceName")]
    public string? ImportedResourceName { get; init; }

    /// <summary>
    /// The status of the resource. When the status is Completed the resource is ready to build.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("importStatus")]
    public ImportStatus2? ImportStatus { get; init; }

    /// <summary>
    /// The strategy used to merge existing bot or bot locale definitions with the imported definition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mergeStrategy")]
    public MergeStrategy1? MergeStrategy { get; init; }

    /// <summary>
    /// The date and time that the import was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDateTime")]
    public DateTimeOffset? CreationDateTime { get; init; }

    /// <summary>
    /// The date and time that the import was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdatedDateTime")]
    public DateTimeOffset? LastUpdatedDateTime { get; init; }

    /// <summary>
    /// The type of resource that was imported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("importedResourceType")]
    public ImportedResourceType? ImportedResourceType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
