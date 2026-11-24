using System;
using Basiq.Models;

namespace Basiq.Requests.Insights;

/// <summary>
/// The inputs of the GetAccountInsights operation.
/// </summary>
public sealed record GetAccountInsightsRequest
{
    /// <summary>
    /// The unique identifier for the user
    /// </summary>
    public required Guid UserId { get; init; }

    public required UsersInsightsAccountRequest Body { get; init; }
}
