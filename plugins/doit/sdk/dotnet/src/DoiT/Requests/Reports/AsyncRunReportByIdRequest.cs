using System;
using System.ComponentModel.DataAnnotations;

namespace DoiT.Requests.Reports;

/// <summary>
/// The inputs of the AsyncRunReportById operation.
/// </summary>
public sealed record AsyncRunReportByIdRequest
{
    /// <summary>
    /// The saved report ID.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// If true, validates the request and returns 200 without creating an operation or submitting a job.
    /// </summary>
    public bool? DryRun { get; init; }

    /// <summary>
    /// An optional parameter to override the report time settings. Value should be represented in the format P[n]Y[n]M[n]D[n]. In the representations, the [n] is replaced by the value for each of the date and time elements that follow the [n]. Cannot be combined with startDate/endDate.
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

    /// <summary>
    /// Unique key for this submission. Required on every request.
    /// </summary>
    public required string IdempotencyKey { get; init; }
}
