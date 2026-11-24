using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

/// <summary>
/// A dictionary of options to auto-shift dates. <c>task_dates</c> must be included to use this option. Requires either <c>start_on</c> or <c>due_on</c>, but not both.
/// </summary>
public record ScheduleDates
{
    /// <summary>
    /// Determines if the auto-shifted dates should skip weekends.
    /// </summary>
    [JsonPropertyName("should_skip_weekends")]
    public required bool ShouldSkipWeekends { get; init; }

    /// <summary>
    /// Sets the last due date in the duplicated project to the given date. The rest of the due dates will be offset by the same amount as the due dates in the original project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("due_on")]
    public string? DueOn { get; init; }

    /// <summary>
    /// Sets the first start date in the duplicated project to the given date. The rest of the start dates will be offset by the same amount as the start dates in the original project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_on")]
    public string? StartOn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
