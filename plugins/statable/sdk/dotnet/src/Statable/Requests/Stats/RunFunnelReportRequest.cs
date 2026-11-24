using Statable.Models;

namespace Statable.Requests.Stats;

/// <summary>
/// The inputs of the RunFunnelReport operation.
/// </summary>
public sealed record RunFunnelReportRequest
{
    /// <summary>
    /// Funnel id (from GET /funnels).
    /// </summary>
    public required long Id { get; init; }

    public required FunnelReportRequest Body { get; init; }
}
