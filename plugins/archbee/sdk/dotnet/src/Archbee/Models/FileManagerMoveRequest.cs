using System.Text.Json.Serialization;
using Archbee.Core.Models;

namespace Archbee.Models;

public record FileManagerMoveRequest
{
    /// <summary>
    /// Id of the file or folder to move.
    /// </summary>
    [JsonPropertyName("fileId")]
    public required string FileId { get; init; }

    /// <summary>
    /// Destination folder id, or null for the root.
    /// </summary>
    [JsonPropertyName("newParentId")]
    public required string NewParentId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
