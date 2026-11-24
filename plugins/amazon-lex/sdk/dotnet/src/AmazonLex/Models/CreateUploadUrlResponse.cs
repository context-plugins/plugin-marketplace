using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record CreateUploadUrlResponse
{
    /// <summary>
    /// An identifier for a unique import job. Use it when you call the StartImport operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("importId")]
    public string? ImportId { get; init; }

    /// <summary>
    /// A pre-signed S3 write URL. Upload the zip archive file that contains the definition of your bot or bot locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uploadUrl")]
    public string? UploadUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
