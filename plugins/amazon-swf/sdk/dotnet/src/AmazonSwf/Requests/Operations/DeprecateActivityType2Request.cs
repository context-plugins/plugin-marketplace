using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the DeprecateActivityType2 operation.
/// </summary>
public sealed record DeprecateActivityType2Request
{
    public required XAmzTarget4 XAmzTarget { get; init; }
}
