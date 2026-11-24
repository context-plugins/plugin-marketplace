using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record TypeAwsAppSyncTypesApi
{
    /// <summary>
    /// The type name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The type description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The type Amazon Resource Name (ARN).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arn")]
    public string? Arn { get; init; }

    /// <summary>
    /// The type definition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("definition")]
    public string? Definition { get; init; }

    /// <summary>
    /// The type format: SDL or JSON.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public FormatAwsAppSyncTypesApi? Format { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
