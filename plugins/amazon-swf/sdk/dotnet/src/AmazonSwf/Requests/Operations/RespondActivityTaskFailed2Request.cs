using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the RespondActivityTaskFailed2 operation.
/// </summary>
public sealed record RespondActivityTaskFailed2Request
{
    public required XAmzTarget13 XAmzTarget { get; init; }
}
