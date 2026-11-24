using System;
using Skribble.Core.Validation.Attributes;
using Skribble.Models.Enums;

namespace Skribble.Requests.Report;

/// <summary>
/// The inputs of the GetActivitiesSignaturesByBusiness operation.
/// </summary>
public sealed record GetActivitiesSignaturesByBusinessRequest
{
    /// <summary>
    /// Start Date to find
    /// </summary>
    public required DateTimeOffset StartDate { get; init; }

    /// <summary>
    /// End Date to find
    /// </summary>
    public required DateTimeOffset EndDate { get; init; }

    /// <summary>
    /// Page for pagination.
    /// </summary>
    public double Page { get; init; } = 1d;

    /// <summary>
    /// Page size for pagination.
    /// </summary>
    [Maximum(100.0)]
    public double Size { get; init; } = 25d;

    /// <summary>
    /// Sort order
    /// </summary>
    public Sort Sort { get; init; } = Sort.Desc;
}
