using Basiq.Models;

namespace Basiq.Requests.Insights;

/// <summary>
/// The inputs of the CreateInsight operation.
/// </summary>
public sealed record CreateInsightRequest
{
    public required PostInsightsRequest Body { get; init; }
}
