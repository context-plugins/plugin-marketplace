using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the RespondActivityTaskCompleted2 operation.
/// </summary>
public sealed record RespondActivityTaskCompleted2Request
{
    public required XAmzTarget12 XAmzTarget { get; init; }
}
