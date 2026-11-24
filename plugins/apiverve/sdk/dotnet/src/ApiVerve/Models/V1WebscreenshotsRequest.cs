using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1WebscreenshotsRequest
{
    /// <summary>
    /// The URL of the web page to capture the screenshot (e.g., https://example.com)
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// The image format for the screenshot
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// The width of the screenshot in pixels (e.g., 1920). Must be between 100 and 3840
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("width")]
    public double? Width { get; init; }

    /// <summary>
    /// The height of the screenshot in pixels (e.g., 1080).  Must be between 100 and 3840
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("height")]
    public double? Height { get; init; }

    /// <summary>
    /// Whether to capture the full page screenshot (true or false)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fullpage")]
    public bool? Fullpage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
