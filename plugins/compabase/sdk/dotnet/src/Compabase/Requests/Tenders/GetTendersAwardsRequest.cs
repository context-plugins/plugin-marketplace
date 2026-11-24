using Compabase.Models.Enums;

namespace Compabase.Requests.Tenders;

/// <summary>
/// The inputs of the GetTendersAwards operation.
/// </summary>
public sealed record GetTendersAwardsRequest
{
    /// <summary>
    /// Industry filter.
    /// </summary>
    public Industry? Industry { get; init; }

    /// <summary>
    /// Minimum contract value in PLN (default 1000000).
    /// </summary>
    public Min? Min { get; init; }
}
