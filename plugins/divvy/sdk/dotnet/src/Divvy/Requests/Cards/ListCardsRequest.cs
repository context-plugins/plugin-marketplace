using Divvy.Core.Validation.Attributes;

namespace Divvy.Requests.Cards;

/// <summary>
/// The inputs of the ListCards operation.
/// </summary>
public sealed record ListCardsRequest
{
    public string? NextPage { get; init; }

    public string? PrevPage { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public long? Max { get; init; }

    public string? Sort { get; init; }

    public string? Filters { get; init; }

    public string? ApiToken { get; init; }
}
