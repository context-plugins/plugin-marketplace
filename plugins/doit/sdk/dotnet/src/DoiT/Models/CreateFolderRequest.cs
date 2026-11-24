using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Request body for creating a folder.
/// </summary>
public record CreateFolderRequest
{
    /// <summary>
    /// Folder name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Folder description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Identifier of the parent folder. Use "root" or omit to place the folder at the top level.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentFolderId")]
    public string? ParentFolderId { get; init; } = "root";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
