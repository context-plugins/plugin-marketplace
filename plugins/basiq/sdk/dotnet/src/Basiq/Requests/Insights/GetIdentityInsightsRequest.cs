using System;
using Basiq.Models;

namespace Basiq.Requests.Insights;

/// <summary>
/// The inputs of the GetIdentityInsights operation.
/// </summary>
public sealed record GetIdentityInsightsRequest
{
    /// <summary>
    /// Unique identifier for the user
    /// </summary>
    public required Guid UserId { get; init; }

    public required IdentityInsightRequest Body { get; init; }
}
