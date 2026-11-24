using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record VideoMetadata
{
    /// <summary>
    /// Type of compression used in the analyzed video.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Codec")]
    public string? Codec { get; init; }

    /// <summary>
    /// Length of the video in milliseconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DurationMillis")]
    public int? DurationMillis { get; init; }

    /// <summary>
    /// Format of the analyzed video. Possible values are MP4, MOV and AVI.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Format")]
    public string? Format { get; init; }

    /// <summary>
    /// Number of frames per second in the video.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FrameRate")]
    public double? FrameRate { get; init; }

    /// <summary>
    /// Vertical pixel dimension of the video.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FrameHeight")]
    public int? FrameHeight { get; init; }

    /// <summary>
    /// Horizontal pixel dimension of the video.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FrameWidth")]
    public int? FrameWidth { get; init; }

    /// <summary>
    /// A description of the range of luminance values in a video, either LIMITED (16 to 235) or FULL (0 to 255).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ColorRange")]
    public ColorRange? ColorRange { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
