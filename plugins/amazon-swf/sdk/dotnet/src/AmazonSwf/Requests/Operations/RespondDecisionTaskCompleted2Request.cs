using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the RespondDecisionTaskCompleted2 operation.
/// </summary>
public sealed record RespondDecisionTaskCompleted2Request
{
    public required XAmzTarget14 XAmzTarget { get; init; }
}
