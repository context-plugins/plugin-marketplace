using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

/// <summary>
/// Contains keys <c>start_on</c> and <c>end_on</c> for the vacation dates for the user in this workspace. If <c>start_on</c> is null, the entire <c>vacation_dates</c> object will be null. If <c>end_on</c> is before today, the entire <c>vacation_dates</c> object will be null.
/// </summary>
public record VacationDates
{
    /// <summary>
    /// The day on which the user's vacation in this workspace starts. This is a date with <c>YYYY-MM-DD</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_on")]
    public string? StartOn { get; init; }

    /// <summary>
    /// The day on which the user's vacation in this workspace ends, or null if there is no end date. This is a date with <c>YYYY-MM-DD</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("end_on")]
    public string? EndOn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
