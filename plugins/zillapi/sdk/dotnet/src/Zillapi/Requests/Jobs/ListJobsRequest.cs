using System;
using Zillapi.Core.Validation.Attributes;
using Zillapi.Models.Enums;

namespace Zillapi.Requests.Jobs;

/// <summary>
/// The inputs of the ListJobs operation.
/// </summary>
public sealed record ListJobsRequest
{
    /// <summary>
    /// Filter by job status.
    /// </summary>
    public StatusZillapiZillowPropertyDataJobsApi? Status { get; init; }

    /// <summary>
    /// Filter by job type.
    /// </summary>
    public TypeEnum? Type { get; init; }

    /// <summary>
    /// Return jobs with created_at &gt;= this ISO timestamp.
    /// </summary>
    public DateTimeOffset? Since { get; init; }

    /// <summary>
    /// Page size (max 500).
    /// </summary>
    [Maximum(500)]
    public int Limit { get; init; } = 50;

    /// <summary>
    /// Pagination offset.
    /// </summary>
    public int Offset { get; init; } = 0;
}
