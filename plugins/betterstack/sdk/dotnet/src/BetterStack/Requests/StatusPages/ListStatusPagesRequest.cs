using BetterStack.Core.Validation.Attributes;

namespace BetterStack.Requests.StatusPages;

/// <summary>
/// The inputs of the ListStatusPages operation.
/// </summary>
public sealed record ListStatusPagesRequest
{
    [Minimum(1)]
    [Maximum(50)]
    public int? PerPage { get; init; }

    [Minimum(1)]
    public int? Page { get; init; }
}
