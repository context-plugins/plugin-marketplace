using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;

namespace GoogleSearchConsole.Models;

/// <summary>
/// Describe image data.
/// </summary>
public record Image
{
    /// <summary>
    /// Image data in format determined by the mime type. Currently, the format will always be "image/png", but this might change in the future.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public string? Data { get; init; }

    /// <summary>
    /// The mime-type of the image data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mimeType")]
    public string? MimeType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
