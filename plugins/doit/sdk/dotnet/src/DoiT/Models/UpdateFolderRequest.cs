using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Request body for updating a folder. All fields are optional; only fields
/// the caller wants to change should be set.
/// </summary>
public record UpdateFolderRequest
{
    /// <summary>
    /// Folder name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Folder description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Identifier of the new parent folder. Use "root" to move the folder to the top level. If a sibling at the new parent has the same name, the folder is auto-renamed (e.g. "Foo" → "Foo (1)").
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentFolderId")]
    public string? ParentFolderId { get; init; } = "root";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
