using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Models.Enums;

namespace CodeQr.Models;

public record FolderSchema
{
    /// <summary>
    /// The unique ID of the folder.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name of the folder.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("type")]
    public required TypeCodeqrIoFoldersApi Type { get; init; }

    /// <summary>
    /// The access level of the folder within the workspace.
    /// </summary>
    [JsonPropertyName("accessLevel")]
    public required AccessLevel? AccessLevel { get; init; }

    /// <summary>
    /// The date the folder was created.
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    /// <summary>
    /// The date the folder was updated.
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required string UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
