using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

/// <summary>
/// The trigger that started this pipeline
/// </summary>
public record Trigger
{
    /// <summary>
    /// The type of trigger
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// When the trigger was received
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("received_at")]
    public DateTimeOffset? ReceivedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actor")]
    public Actor? Actor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
