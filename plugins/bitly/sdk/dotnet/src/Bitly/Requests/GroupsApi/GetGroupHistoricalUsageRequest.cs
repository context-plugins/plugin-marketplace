using System.Collections.Generic;
using Bitly.Models.Enums;

namespace Bitly.Requests.GroupsApi;

/// <summary>
/// The inputs of the GetGroupHistoricalUsage operation.
/// </summary>
public sealed record GetGroupHistoricalUsageRequest
{
    /// <summary>
    /// A GUID for a Bitly group
    /// </summary>
    public required string GroupGuid { get; init; }

    /// <summary>
    /// The limit name you would like usage for
    /// </summary>
    public IReadOnlyList<string>? Name { get; init; }

    /// <summary>
    /// The start date for the date range
    /// </summary>
    public string? StartDate { get; init; }

    /// <summary>
    /// The end date for the date range
    /// </summary>
    public string? EndDate { get; init; }

    /// <summary>
    /// A unit of time (day, week, or month)
    /// </summary>
    public TimeUnitDwm Unit { get; init; } = TimeUnitDwm.Month;
}
