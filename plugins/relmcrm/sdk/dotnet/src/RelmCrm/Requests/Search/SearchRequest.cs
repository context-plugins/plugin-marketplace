using RelmCrm.Core.Validation.Attributes;

namespace RelmCrm.Requests.Search;

/// <summary>
/// The inputs of the SearchInvoke operation.
/// </summary>
public sealed record SearchRequest
{
    /// <summary>
    /// Substring to match.
    /// </summary>
    public required string Q { get; init; }

    [Maximum(100)]
    public int Limit { get; init; } = 10;
}
