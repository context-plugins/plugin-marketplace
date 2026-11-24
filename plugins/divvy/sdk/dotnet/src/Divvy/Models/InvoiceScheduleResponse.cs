using System;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Schedule properties for a recurring Invoices.
/// </summary>
public record InvoiceScheduleResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("period")]
    public PeriodResponse? Period { get; init; }

    /// <summary>
    /// Invoice frequency per time <c>period</c>.
    /// <para>
    /// For example, if the time <c>period</c> is <c>MONTHLY</c> and <c>frequency</c> is <c>3</c>, an invoice is generated once every 3 months.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("frequency")]
    public int? Frequency { get; init; }

    /// <summary>
    /// Due date for the next invoice. This value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextDueDate")]
    public DateTimeOffset? NextDueDate { get; init; }

    /// <summary>
    /// End date for the recurring invoices schedule. Recurring invoices stop on the <c>endDate</c>. This value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endDate")]
    public DateTimeOffset? EndDate { get; init; }

    /// <summary>
    /// Number of days before <c>nextDueDate</c> when the next invoice is generated. If the date has occurred in the past for one or more invoices, all those invoices are generated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daysInAdvance")]
    public int? DaysInAdvance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
