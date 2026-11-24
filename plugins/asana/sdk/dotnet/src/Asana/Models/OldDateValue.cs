using System;
using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record OldDateValue
{
    /// <summary>
    /// The day on which work for this goal begins, or null if the goal has no start date. This takes a date with <c>YYYY-MM-DD</c> format, and cannot be set unless there is an accompanying due date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_on")]
    public DateTimeOffset? StartOn { get; init; }

    /// <summary>
    /// The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with <c>due_on</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("due_at")]
    public DateTimeOffset? DueAt { get; init; }

    /// <summary>
    /// The localized day on which this goal is due. This takes a date with format <c>YYYY-MM-DD</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("due_on")]
    public DateTimeOffset? DueOn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
