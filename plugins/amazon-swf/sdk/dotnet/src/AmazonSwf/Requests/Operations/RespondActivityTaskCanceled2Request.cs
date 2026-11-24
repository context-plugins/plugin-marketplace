using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the RespondActivityTaskCanceled2 operation.
/// </summary>
public sealed record RespondActivityTaskCanceled2Request
{
    public required XAmzTarget11 XAmzTarget { get; init; }
}
