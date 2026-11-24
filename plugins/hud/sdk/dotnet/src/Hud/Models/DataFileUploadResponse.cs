using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// A reserved data file and the presigned PUT that fills it.
/// </summary>
public record DataFileUploadResponse
{
    /// <summary>
    /// Size is reserved up front and verified against the stored object on completion.
    /// </summary>
    [JsonPropertyName("file")]
    public required DataFileResponse File { get; init; }

    [JsonPropertyName("upload_url")]
    public required string UploadUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
