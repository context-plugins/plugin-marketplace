using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record GroupObserver
{
    [JsonPropertyName("type")]
    public string Type { get; } = "GROUP";

    /// <summary>
    /// Unique group identifier.
    /// </summary>
    [JsonPropertyName("group_id")]
    public required string GroupId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
