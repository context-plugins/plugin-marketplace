using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

public record Attachment
{
    [JsonPropertyName("filename")]
    [MaxLength(200)]
    public required string Filename { get; init; }

    /// <summary>
    /// Base64 (a data URL is accepted).
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_type")]
    public string? ContentType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
