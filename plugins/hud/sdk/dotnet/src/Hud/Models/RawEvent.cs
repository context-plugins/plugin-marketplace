using System.Text.Json.Serialization;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// Fallback for spans we don't know how to project.
/// <para>
/// Covers new SDK categories and custom user @instrument calls. Kept so the
/// viewer can still display *something* without dropping data.
/// </para>
/// </summary>
public record RawEvent
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
    public string Kind { get; } = "raw";

    [JsonPropertyName("category")]
    public required string Category { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public object? Attributes { get; init; }
}
