using System.Text.Json.Serialization;
using CircleCi.Core.Models;
using CircleCi.Models.Enums;

namespace CircleCi.Models;

public record CreateScheduleRequest
{
    /// <summary>
    /// The name of the schedule
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The description of the schedule
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonPropertyName("timetable")]
    public required Timetable Timetable { get; init; }

    /// <summary>
    /// Who to attribute pipeline triggers to
    /// </summary>
    [JsonPropertyName("attribution-actor")]
    public required AttributionActor AttributionActor { get; init; }

    /// <summary>
    /// Pipeline parameters for the schedule
    /// </summary>
    [JsonPropertyName("parameters")]
    public required object Parameters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
