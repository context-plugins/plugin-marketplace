using System;
using Basiq.Models;

namespace Basiq.Requests.Insights;

/// <summary>
/// The inputs of the VerifyIncomeInsight operation.
/// </summary>
public sealed record VerifyIncomeInsightRequest
{
    /// <summary>
    /// The unique identifier of the user
    /// </summary>
    public required Guid UserId { get; init; }

    /// <summary>
    /// Income range to verify against user's financial data
    /// </summary>
    public required IncomeInsightRequest Body { get; init; }
}
