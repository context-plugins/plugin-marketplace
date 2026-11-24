using System;
using DidLogic.Core.Validation.Attributes;
using DidLogic.Models.Enums;

namespace DidLogic.Requests.RiskChecks;

/// <summary>
/// The inputs of the NumbersRiskChecksIndex operation.
/// </summary>
public sealed record NumbersRiskChecksIndexRequest
{
    /// <summary>
    /// Task IDs (comma-separated) from numbers_risk_checks_create, numbers_risk_checks_logs
    /// </summary>
    public string? TaskIds { get; init; }

    /// <summary>
    /// Filter by status
    /// </summary>
    public StatusDidlogicComRiskChecksApi? Status { get; init; }

    /// <summary>
    /// Filter created from this date (YYYY-MM-DD)
    /// </summary>
    public DateTimeOffset? CreatedAtFrom { get; init; }

    /// <summary>
    /// Filter created until this date (YYYY-MM-DD)
    /// </summary>
    public DateTimeOffset? CreatedAtTo { get; init; }

    /// <summary>
    /// Filter processed from this date (YYYY-MM-DD)
    /// </summary>
    public DateTimeOffset? ProcessedAtFrom { get; init; }

    /// <summary>
    /// Filter processed until this date (YYYY-MM-DD)
    /// </summary>
    public DateTimeOffset? ProcessedAtTo { get; init; }

    /// <summary>
    /// Field to sort by
    /// </summary>
    public string? OrderBy { get; init; }

    /// <summary>
    /// Sort order
    /// </summary>
    public Order Order { get; init; } = Order.Desc;

    /// <summary>
    /// Page number for pagination (starts from 1)
    /// </summary>
    [Minimum(1)]
    public int Page { get; init; } = 1;

    /// <summary>
    /// Number of items per page
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int PerPage { get; init; } = 20;
}
