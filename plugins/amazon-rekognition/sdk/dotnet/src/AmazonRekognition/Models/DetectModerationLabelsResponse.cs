using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DetectModerationLabelsResponse
{
    /// <summary>
    /// Array of detected Moderation labels. For video operations, this includes the time, in milliseconds from the start of the video, they were detected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModerationLabels")]
    public IReadOnlyList<ModerationLabel>? ModerationLabels { get; init; }

    /// <summary>
    /// Version number of the base moderation detection model that was used to detect unsafe content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModerationModelVersion")]
    public string? ModerationModelVersion { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HumanLoopActivationOutput")]
    public HumanLoopActivationOutput? HumanLoopActivationOutput { get; init; }

    /// <summary>
    /// Identifier of the custom adapter that was used during inference. If during inference the adapter was EXPIRED, then the parameter will not be returned, indicating that a base moderation detection project version was used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ProjectVersion")]
    public string? ProjectVersion { get; init; }

    /// <summary>
    /// A list of predicted results for the type of content an image contains. For example, the image content might be from animation, sports, or a video game.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ContentTypes")]
    public IReadOnlyList<ContentType>? ContentTypes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
