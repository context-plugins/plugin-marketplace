using System.Text.Json.Serialization;
using AmazonEbs.Core.Models;

namespace AmazonEbs.Models;

public record Block
{
    /// <summary>
    /// The block index.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BlockIndex")]
    public int? BlockIndex { get; init; }

    /// <summary>
    /// The block token for the block index.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BlockToken")]
    public string? BlockToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
