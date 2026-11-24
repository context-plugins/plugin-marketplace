using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record ChildBlock
{
    /// <summary>
    /// Unique identifier for the child block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ChildBlockId")]
    public string? ChildBlockId { get; init; }

    /// <summary>
    /// Offset of the start of the child block within its parent block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BeginOffset")]
    public int? BeginOffset { get; init; }

    /// <summary>
    /// Offset of the end of the child block within its parent block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndOffset")]
    public int? EndOffset { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
