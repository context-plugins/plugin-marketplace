using System;
using Zillapi.Core.Validation.Attributes;

namespace Zillapi.Requests.Account;

/// <summary>
/// The inputs of the GetUsage operation.
/// </summary>
public sealed record GetUsageRequest
{
    /// <summary>
    /// Return rows with created_at &gt;= this ISO timestamp.
    /// </summary>
    public DateTimeOffset? Since { get; init; }

    /// <summary>
    /// Page size (max 1000).
    /// </summary>
    [Maximum(1000)]
    public int Limit { get; init; } = 100;
}
