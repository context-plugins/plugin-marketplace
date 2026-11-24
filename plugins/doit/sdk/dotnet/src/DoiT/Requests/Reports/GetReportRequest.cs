using System;
using System.ComponentModel.DataAnnotations;

namespace DoiT.Requests.Reports;

/// <summary>
/// The inputs of the GetReport operation.
/// </summary>
public sealed record GetReportRequest
{
    /// <summary>
    /// Report ID. See <see href="https://developer.doit.com/docs/resource-ids">Resource IDs</see>.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// An optional parameter to override the report time settings. Value should be represented in the format P[n]Y[n]M[n]D[n]. In the representations, the [n] is replaced by the value for each of the date and time elements that follow the [n].
    /// </summary>
    [RegularExpression("^P(\\d+Y)?(\\d+M)?(\\d+D)?$")]
    public string? TimeRange { get; init; }

    /// <summary>
    /// An optional parameter to override the report time settings. Must be provided together with endDate. Format: yyyy-mm-dd
    /// </summary>
    public DateTimeOffset? StartDate { get; init; }

    /// <summary>
    /// An optional parameter to override the report time settings. Must be provided together with startDate. Format: yyyy-mm-dd
    /// </summary>
    public DateTimeOffset? EndDate { get; init; }
}
