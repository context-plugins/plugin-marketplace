using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record UploadFile
{
    /// <summary>
    /// Path to the file to upload.
    /// </summary>
    [JsonPropertyName("file")]
    public required string File { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
