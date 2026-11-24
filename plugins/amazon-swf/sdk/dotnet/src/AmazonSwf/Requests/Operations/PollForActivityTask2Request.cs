using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the PollForActivityTask2 operation.
/// </summary>
public sealed record PollForActivityTask2Request
{
    public required XAmzTarget7 XAmzTarget { get; init; }
}
