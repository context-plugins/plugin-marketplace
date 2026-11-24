using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the DeprecateDomain2 operation.
/// </summary>
public sealed record DeprecateDomain2Request
{
    public required XAmzTarget5 XAmzTarget { get; init; }
}
