using System.Text.Json.Serialization;
using Lili.Core.Models;
using Lili.Models.Enums;

namespace Lili.Models;

public record DocumentData
{
    /// <summary>
    /// File content, Base64 decoded
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    /// <summary>
    /// The file content type. All standard mime types are supported
    /// </summary>
    [JsonPropertyName("contentType")]
    public required string ContentType { get; init; }

    /// <summary>
    /// The name of the file
    /// </summary>
    [JsonPropertyName("fileName")]
    public required string FileName { get; init; }

    /// <summary>
    /// The type of the file
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("llcFileType")]
    public LlcFileType? LlcFileType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
