using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the PollForDecisionTask2 operation.
/// </summary>
public sealed record PollForDecisionTask2Request
{
    public required XAmzTarget8 XAmzTarget { get; init; }
}
