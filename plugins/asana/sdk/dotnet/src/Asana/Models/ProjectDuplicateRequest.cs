using System.Text.Json.Serialization;
using Asana.Core.Models;
using Asana.Models.Enums;

namespace Asana.Models;

public record ProjectDuplicateRequest
{
    /// <summary>
    /// The name of the new project.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Sets the team of the new project. If team is not defined, the new project will be in the same team as the the original project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("team")]
    public string? Team { get; init; }

    /// <summary>
    /// The elements that will be duplicated to the new project. Tasks are always included.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include")]
    public Include? Include { get; init; }

    /// <summary>
    /// A dictionary of options to auto-shift dates. <c>task_dates</c> must be included to use this option. Requires either <c>start_on</c> or <c>due_on</c>, but not both.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedule_dates")]
    public ScheduleDates? ScheduleDates { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
