using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the UndeprecateDomain2 operation.
/// </summary>
public sealed record UndeprecateDomain2Request
{
    public required XAmzTarget18 XAmzTarget { get; init; }
}
