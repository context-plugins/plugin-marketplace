using System.Text.Json.Serialization;
using Archbee.Core.Models;

namespace Archbee.Models;

public record FileManagerFileRequest
{
    /// <summary>
    /// Id of the file or folder to delete.
    /// </summary>
    [JsonPropertyName("fileId")]
    public required string FileId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
