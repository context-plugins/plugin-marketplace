using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the UndeprecateActivityType2 operation.
/// </summary>
public sealed record UndeprecateActivityType2Request
{
    public required XAmzTarget17 XAmzTarget { get; init; }
}
