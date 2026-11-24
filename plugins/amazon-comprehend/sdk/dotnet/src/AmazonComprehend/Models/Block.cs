using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record Block
{
    /// <summary>
    /// Unique identifier for the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public string? Id { get; init; }

    /// <summary>
    /// The block represents a line of text or one word of text. WORD - A word that's detected on a document page. A word is one or more ISO basic Latin script characters that aren't separated by spaces. LINE - A string of tab-delimited, contiguous words that are detected on a document page
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BlockType")]
    public BlockType? BlockType { get; init; }

    /// <summary>
    /// The word or line of text extracted from the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Text")]
    public string? Text { get; init; }

    /// <summary>
    /// Page number where the block appears.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Page")]
    public int? Page { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Geometry")]
    public Geometry? Geometry { get; init; }

    /// <summary>
    /// A list of child blocks of the current block. For example, a LINE object has child blocks for each WORD block that's part of the line of text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Relationships")]
    public IReadOnlyList<RelationshipsListItem>? Relationships { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
