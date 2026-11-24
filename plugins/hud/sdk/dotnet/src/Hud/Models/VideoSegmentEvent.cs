using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// One CMAF fragment of a camera's H.264 stream.
/// <para>
/// Projected from ``step.video_segment`` under ``hud.robot.step.v1``: camera
/// frames stream as video instead of a JPEG per tick.
/// </para>
/// <para>
/// ``index`` orders the fragments per ``camera`` (``index`` 0 is the init segment);
/// the viewer feeds the ordered ``url``s to one ``&lt;video&gt;`` via MSE. ``fps`` maps
/// a control tick onto video time. ``url`` is the presigned S3 segment (``None`` only
/// if offload/presign hasn't completed).
/// </para>
/// </summary>
public record VideoSegmentEvent
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_id")]
    public ParentId? ParentId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("started_at")]
    public StartedAt? StartedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ended_at")]
    public EndedAt? EndedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seq")]
    public int? Seq { get; init; } = 0;

    [JsonPropertyName("kind")]
    public string Kind { get; } = "robot_video_segment";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("camera")]
    public string? Camera { get; init; } = "";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("index")]
    public int? Index { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fps")]
    public int? Fps { get; init; } = 10;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public Url? Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
