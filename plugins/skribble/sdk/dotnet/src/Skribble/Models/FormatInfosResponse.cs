using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record FormatInfosResponse
{
    /// <summary>
    /// File Type
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fileType")]
    public string? FileType { get; init; }

    /// <summary>
    /// (Optional) File Type Quality
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quality")]
    public string? Quality { get; init; }

    /// <summary>
    /// (Optional) File producer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("producer")]
    public string? Producer { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
