using System;
using DidLogic.Core.Validation.Attributes;
using DidLogic.Models.Enums;

namespace DidLogic.Requests.RiskChecks;

/// <summary>
/// The inputs of the NumbersRiskChecksLogs operation.
/// </summary>
public sealed record NumbersRiskChecksLogsRequest
{
    /// <summary>
    /// Filter logs by log IDs (comma-separated)
    /// </summary>
    public string? Ids { get; init; }

    /// <summary>
    /// Task IDs (comma-separated) from numbers_risk_checks_create, numbers_risk_checks_index
    /// </summary>
    public int? TaskIds { get; init; }

    /// <summary>
    /// Filter logs by specific phone numbers (comma-separated)
    /// </summary>
    public string? Number { get; init; }

    /// <summary>
    /// Filter by status
    /// </summary>
    public StatusDidlogicComRiskChecksApi? Status { get; init; }

    /// <summary>
    /// Filter logs by risk level
    /// </summary>
    public RiskLevel? RiskLevel { get; init; }

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
