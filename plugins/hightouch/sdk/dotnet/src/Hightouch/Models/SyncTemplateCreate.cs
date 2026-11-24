using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// The input for creating a Sync Template. A <c>slug</c> is generated automatically
/// from the name; it is a legacy column and is no longer accepted on input.
/// </summary>
public record SyncTemplateCreate
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonPropertyName("modelId")]
    public required double ModelId { get; init; }

    [JsonPropertyName("destinationId")]
    public required double DestinationId { get; init; }

    [JsonPropertyName("configuration")]
    public required IReadOnlyDictionary<string, object> Configuration { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedule")]
    public IReadOnlyDictionary<string, object>? Schedule { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedulePaused")]
    public bool? SchedulePaused { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("matchboosterRegion")]
    public string? MatchboosterRegion { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overrideConfig")]
    public IReadOnlyDictionary<string, SyncTemplateOverrideOption>? OverrideConfig { get; init; }
}
