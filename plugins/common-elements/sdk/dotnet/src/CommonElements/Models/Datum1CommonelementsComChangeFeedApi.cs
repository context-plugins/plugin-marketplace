using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record Datum1CommonelementsComChangeFeedApi
{
    /// <summary>
    /// One of the 13 change kinds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("change_kind")]
    public string? ChangeKind { get; init; }

    /// <summary>
    /// Events of this kind in the window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_count")]
    public double? EventCount { get; init; }

    /// <summary>
    /// Distinct associations with at least one such event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("org_count")]
    public double? OrgCount { get; init; }

    /// <summary>
    /// Distinct states represented.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("states_covered")]
    public double? StatesCovered { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
