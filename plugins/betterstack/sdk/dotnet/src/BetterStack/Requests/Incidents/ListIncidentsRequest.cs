using BetterStack.Core.Validation.Attributes;

namespace BetterStack.Requests.Incidents;

/// <summary>
/// The inputs of the ListIncidents operation.
/// </summary>
public sealed record ListIncidentsRequest
{
    [Minimum(1)]
    [Maximum(50)]
    public int? PerPage { get; init; }

    [Minimum(1)]
    public int? Page { get; init; }
}
