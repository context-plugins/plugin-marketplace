using BetterStack.Core.Validation.Attributes;

namespace BetterStack.Requests.Monitors;

/// <summary>
/// The inputs of the ListMonitors operation.
/// </summary>
public sealed record ListMonitorsRequest
{
    [Minimum(1)]
    [Maximum(50)]
    public int? PerPage { get; init; }

    [Minimum(1)]
    public int? Page { get; init; }

    public string? Url { get; init; }

    public string? PronounceableName { get; init; }
}
