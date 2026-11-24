using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record V1ApisTypesRequest1
{
    /// <summary>
    /// The new definition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("definition")]
    public string? Definition { get; init; }

    /// <summary>
    /// The new type format: SDL or JSON.
    /// </summary>
    [JsonPropertyName("format")]
    public required Format4 Format { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
