using System;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Schedule properties for a recurring bill.
/// </summary>
public record ScheduleResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("period")]
    public PeriodResponse? Period { get; init; }

    /// <summary>
    /// Bill frequency per time <c>period</c>.
    /// <para>
    /// For example, if the time <c>period</c> is <c>MONTHLY</c> and <c>frequency</c> is <c>3</c>, a bill is generated once every 3 months.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("frequency")]
    public int? Frequency { get; init; }

    /// <summary>
    /// Due date for the next bill. This value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextDueDate")]
    public DateTimeOffset? NextDueDate { get; init; }

    /// <summary>
    /// End date for the recurring bills schedule. Recurring bills stop on the <c>endDate</c>. This value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endDate")]
    public DateTimeOffset? EndDate { get; init; }

    /// <summary>
    /// Number of days before <c>nextDueDate</c> when the next bill is generated. If the date has occurred in the past for one or more bills, all those bills are generated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daysInAdvance")]
    public int? DaysInAdvance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
